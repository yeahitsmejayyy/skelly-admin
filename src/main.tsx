import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"

import "@/index.css";
import App from "@/App";
import { trpc } from "@/lib/trpc";

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3001/trpc",
    }),
  ],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <App />
            <Toaster richColors={false} position="top-center" />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  </StrictMode>
);
