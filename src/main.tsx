import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import NewsDetailsPage from "./pages/NewsDetailsPage";
import NewsFeedPage from "./pages/NewsFeedPage";
import RegisterPage from "./pages/RegisterPage";

import "./index.css";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root") as HTMLElement;
createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NewsFeedPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news/:id" element={<NewsDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
