import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import PrivateRoutes from "./components/PrivateRoutes.tsx";
import Listed from "./pages/Listed.tsx";
import Article from "./pages/Article.tsx";
import Update from "./pages/Update.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/*" element={<App />} />
            <Route path="/listed" element={<Listed />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/create" element={<Update />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
