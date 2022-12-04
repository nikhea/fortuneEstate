import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NiceModal from "@ebay/nice-modal-react";
import { AuthProvider } from "./lib/auth";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
        <BrowserRouter>
          <NiceModal.Provider>
            <App />
          </NiceModal.Provider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  </React.StrictMode>
);
