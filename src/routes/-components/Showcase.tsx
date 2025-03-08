import React from "react"
import { ShowcaseItem } from "./ShowcaseItem"

export const Showcase: React.FC = () => {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          🖼️ Projects (Slightly More Impressive Than "Hello World")
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ShowcaseItem
            title="Example Project 1"
            description="A simple project showcasing basic features."
          />
          <ShowcaseItem
            title="To-Do List App: Still Relevant in 2023!"
            description="The quintessential demo app. We've got you covered with adding, deleting, and even (gasp!) marking tasks as complete."
          />
          <ShowcaseItem
            title="Example Project 2"
            description="A slightly more complex project demonstrating routing."
          />
          <ShowcaseItem
            title="Cat Photo Gallery: Because the Internet."
            description="Browse a curated collection of... cat photos. Powered by cutting-edge technology (and maybe an Unsplash API)."
          />
          <ShowcaseItem
            title="Example Project 3"
            description="An ambitious project showing state management."
          />
          <ShowcaseItem
            title="Slightly More Complex Blog: We Added Pagination!"
            description="Behold, a blog! With posts! And... pagination! We're pushing the boundaries of starter template technology here."
          />
        </div>
      </div>
    </section>
  )
}
