import React from "react"
import ReactDOM from "react-dom"
import { App } from "containers"
import { Provider } from "react-redux"
import { persistor, store } from "redux/store"
import { PersistGate } from "reduxjs-toolkit-persist/integration/react"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<>Loading....</>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
