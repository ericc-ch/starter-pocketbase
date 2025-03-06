import React from "react"

export const Features: React.FC = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          ✨ Features (Probably)
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Blazing Fast 🚀</h3>
              <p>
                It's fast. Like, really fast. We think. Our servers are
                located... somewhere. Speed guaranteed* (*speed not actually
                guaranteed).
              </p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Cutting-Edge Tech 🪚</h3>
              <p>
                We use all the latest buzzwords: AI, blockchain, Web3.0, quantum
                entanglement... We don't know what they mean, but they sound
                cool!
              </p>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Scalable Solution 🪜</h3>
              <p>
                Scales to meet your needs. From zero users to maybe dozens!
                We're ready for exponential growth (or at least linear...
                possibly logarithmic).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
