import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { x } from "tinyexec"

async function hasBinary(name: string) {
  const { exitCode } = await x("which", [name])
  return exitCode === 0
}

const hasUnzip = await hasBinary("unzip")
if (!hasUnzip) {
  throw new Error("unzip not found")
}

const TMP_DIR = await fs.mkdtemp(path.join(os.tmpdir(), "pocketbase-"))
const DOWNLOAD_PATH = path.join(TMP_DIR, "pocketbase.zip")
const BINARY_PATH = path.join(process.cwd(), "pocketbase")

const BASE_URL_UNGH = "https://ungh.cc"
const URL_LATEST_RELEASE = `${BASE_URL_UNGH}/repos/pocketbase/pocketbase/releases/latest`

const ARCH = "linux_amd64"

const createReleaseUrl = (tag: string) =>
  `https://github.com/pocketbase/pocketbase/releases/tag/${tag}`

const formatter = Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "byte",
  notation: "compact",
})

const latestResponse = await fetch(URL_LATEST_RELEASE)
const latestData = (await latestResponse.json()) as ReleaseResponse

console.info(`Fetching from ${createReleaseUrl(latestData.release.tag)}`)

const linuxAsset = latestData.release.assets.find((r) =>
  r.downloadUrl.includes(ARCH),
)

if (!linuxAsset) {
  throw new Error(`No asset found for ${ARCH}`)
}

console.info(`Downloading ${linuxAsset.downloadUrl}`)

const downloadResponse = await fetch(linuxAsset.downloadUrl)

const contentSizeRaw = downloadResponse.headers.get("content-length")
const contentSizeInt = Number.parseInt(contentSizeRaw || "0", 10)
const contentSize = formatter.format(contentSizeInt)

console.info(`Download size: ${contentSize}`)

const reader = downloadResponse.body?.getReader()

if (!reader) {
  throw new Error("Cannot get response body reader!")
}

let downloaded = 0
const downloadedData: Array<Uint8Array> = []

// Log every n%
const logInterval = 10
// Sometimes multiple logs can be rounded to the same number
// Only log them once
let lastPercentage = -1

const logDownload = () => {
  const percent = Math.round((downloaded / contentSizeInt) * 100)

  if (percent % logInterval !== 0) {
    return
  }

  if (percent === lastPercentage) {
    return
  }

  lastPercentage = percent

  console.info(
    `Downloaded ${formatter.format(downloaded)} / ${contentSize} (${percent}%)`,
  )
}

while (true) {
  const stream = await reader.read()

  if (stream.done) {
    break
  }

  downloadedData.push(stream.value)

  downloaded += stream.value.byteLength
  logDownload()
}

const blob = new Blob(downloadedData)
const arrayBuffer = await blob.arrayBuffer()
const buffer = Buffer.from(arrayBuffer)

await fs.writeFile(DOWNLOAD_PATH, buffer)

console.info(`Downloaded to ${DOWNLOAD_PATH}`)
console.info("Unzipping...")

await x("unzip", [DOWNLOAD_PATH, "-d", TMP_DIR])

await fs.copyFile(path.join(TMP_DIR, "pocketbase"), BINARY_PATH)

console.info(`Pocketbase installed to ${BINARY_PATH}`)

await fs.rm(TMP_DIR, { recursive: true })
console.info("Temporary files removed")

// Types, stripped down to minimal properties needed

interface Asset {
  contentType: string
  downloadUrl: string
}

interface Release {
  id: number
  tag: string
  assets: Array<Asset>
}

interface ReleaseResponse {
  release: Release
}
