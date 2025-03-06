import React from "react"

export const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl" href="/">
          Vite Starter
        </a>
      </div>
      <div className="flex-none">
        <button className="btn-ghost btn-sm btn rounded-btn">
          Get Started
        </button>
        <button className="btn-ghost btn-sm btn rounded-btn">Github</button>
      </div>
    </div>
  )
}
