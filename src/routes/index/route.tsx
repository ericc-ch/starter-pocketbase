import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="bg-base-100 min-h-screen">
      <div></div>
      <img alt="" className="h-32 w-32" src="/popcat.gif" />
    </div>
  )
}
