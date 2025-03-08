import React from "react"

interface ShowcaseItemProps {
  title: string
  description: string
}

export const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
  title,
  description,
}) => (
  <div className="card shadow-lg">
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
)
