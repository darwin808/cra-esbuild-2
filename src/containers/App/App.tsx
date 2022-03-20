import React from "react"
import { Nav } from "components/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { loadable } from "react-lazily/loadable"

const { Test, Home, Custom404 } = loadable(() => import("containers"), {
  fallback: <>Loading...</>
})

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </BrowserRouter>
  )
}
