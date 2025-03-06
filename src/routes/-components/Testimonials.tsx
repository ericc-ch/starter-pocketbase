import React from "react"

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-base-300 text-base-content py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold">
          🗣️ Testimonials (Definitely Real)
        </h2>
        <div className="carousel carousel-center rounded-box space-x-4 p-4">
          <div className="carousel-item">
            <div className="card w-96 shadow-xl">
              <div className="card-body">
                <p>
                  "I used to wander aimlessly, but now I wander aimlessly with
                  *purpose* thanks to this platform!"
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-primary">Skeptical User</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
