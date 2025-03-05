import concurrently from "concurrently"

const result = concurrently([
  {
    command: "vite",
    name: "vite",
    prefixColor: "yellow",
  },
  {
    command: "./pocketbase serve --dev",
    name: "pb",
    prefixColor: "white",
  },
])

await result.result
