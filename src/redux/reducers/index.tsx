import { createReducer } from "@reduxjs/toolkit"
import { actions } from "redux/actions"

export const testReducer = createReducer("test test test REDUX ", {
  [actions.getTest.toString()]: (state, action) => action.payload,
  [actions.removeTest.toString()]: (state, action) => ""
})
