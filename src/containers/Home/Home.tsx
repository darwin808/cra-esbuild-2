import React from "react"
import { useLocation } from "react-router-dom"

export const Home = () => {
  // how to access props in router v6
  const location = useLocation()
  return (
    <div>
      Home
      <h1>{JSON.stringify(location)}</h1>
    </div>
  )
}
