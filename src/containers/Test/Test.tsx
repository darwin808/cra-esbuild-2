import React from "react"
import { useNavigate } from "react-router-dom"
import { actions } from "redux/actions"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import { RootState } from "redux/store"

export const Test = () => {
  const test = useAppSelector((e: RootState) => e.test)
  const dispatch = useAppDispatch()
  // passing props in router v6
  const navigate = useNavigate()

  const handleClick = () => {
    navigate({ pathname: "/" }, { state: { test: "props" } })
  }
  return (
    <div className="App">
      <h1>APP2 page</h1>
      <h1>{JSON.stringify(test)}</h1>
      <button onClick={handleClick}>go to home</button>
      <button onClick={() => dispatch(actions.getTest("dispatch test"))}> set redux value</button>
      <button onClick={() => dispatch(actions.removeTest())}>Remove reduxt value</button>
    </div>
  )
}
