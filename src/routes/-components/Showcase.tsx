import React from "react"

export const Showcase: React.FC = () => {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          🖼️ Projects (Slightly More Impressive Than "Hello World")
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Example Project 1</h3>
              <p>A simple project showcasing basic features.</p>
            </div>
            <div className="card-body">
              <h3 className="card-title">
                To-Do List App: Still Relevant in 2023!
              </h3>
              <p>
                The quintessential demo app. We've got you covered with adding,
                deleting, and even (gasp!) marking tasks as complete.
              </p>
            </div>

            <div className="card shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Example Project 2</h3>
                <p>A slightly more complex project demonstrating routing.</p>
              </div>
            </div>
            <div className="card shadow-lg">
              <div className="card-body">
                <h3 className="card-title">
                  Cat Photo Gallery: Because the Internet.
                </h3>
                <p>
                  Browse a curated collection of... cat photos. Powered by
                  cutting-edge technology (and maybe a Unsplash API).
                </p>
              </div>

              <div className="card shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Example Project 3</h3>
                  <p>An ambitious project showing state management.</p>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    "Slightly More Complex" Blog: We Added Pagination!
                  </h3>
                  <p>
                    Behold, a blog! With posts! And... pagination! We're pushing
                    the boundaries of starter template technology here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
