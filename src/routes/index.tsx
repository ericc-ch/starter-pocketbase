import { createFileRoute } from "@tanstack/react-router"

import { Features } from "./-components/Features"
import { Hero } from "./-components/Hero"
import { Testimonials } from "./-components/Testimonials"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-base-200 min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  )
}
