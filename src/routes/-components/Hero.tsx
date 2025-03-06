import React from "react"

import { cn } from "~/lib/cn"

export const Hero: React.FC = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{ backgroundImage: "url('/popcat.gif')" }}
    >
      <div className="hero-overlay"></div>
      <div className={cn("hero-content", "text-center")}>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">🚀 Next-Gen Platform</h1>
          <p className="py-6">
            Tired of landing pages that promise the moon but deliver a pebble?
            We're different. We promise you... well, we're still figuring that
            out. But look at this popcat!
          </p>
          <button className="btn btn-primary" type="button">
            🔥 Sign Up (Maybe)
          </button>
        </div>
      </div>
    </section>
  )
}
