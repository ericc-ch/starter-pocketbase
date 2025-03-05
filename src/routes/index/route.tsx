import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to My Landing Page</h1>
            <p className="py-6">
              This is a simple landing page created using daisyUI.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            About This Starter Template
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">React SPA</h3>
                <p>
                  This starter template is built using React, a popular
                  JavaScript library for building user interfaces. It leverages
                  the power of React to create a single-page application (SPA)
                  that provides a smooth and responsive user experience.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">PocketBase</h3>
                <p>
                  PocketBase is an open-source backend that provides a simple
                  and efficient way to manage your application's data. It
                  supports various databases and offers a RESTful API, making it
                  easy to integrate with your React SPA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Responsive Design</h3>
                <p>
                  This template is designed to be fully responsive, ensuring a
                  great user experience on all devices, from desktops to mobile
                  phones.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Easy Integration</h3>
                <p>
                  Integrating PocketBase with your React SPA is straightforward,
                  thanks to its RESTful API and simple setup process.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Customizable</h3>
                <p>
                  Feel free to customize this template to fit your specific
                  needs. The use of daisyUI ensures that you have a wide range
                  of components and styles at your disposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
