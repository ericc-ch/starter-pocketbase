import { createRouter, RouterProvider } from "@tanstack/react-router"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { routeTree } from "./routeTree.gen"

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.querySelector("#root")!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)

  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
