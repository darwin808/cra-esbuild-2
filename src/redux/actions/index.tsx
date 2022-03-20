import { createAction } from "@reduxjs/toolkit"

const removeTest = createAction("DELETE_TEST")
const getTest = createAction("GET_TEST", (payload: string) => ({
  payload
}))

export const actions = {
  removeTest,
  getTest
}
