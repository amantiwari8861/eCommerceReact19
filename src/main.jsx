import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes";
import AuthContextWrappper from "./context/AuthContextWrappper";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthContextWrappper>
        <RouterProvider router={router} />,
      </AuthContextWrappper>
    </PersistGate>
  </Provider>,
  // </StrictMode>,
);
