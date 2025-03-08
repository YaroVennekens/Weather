import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routing from "./routing/Routing.tsx";


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routing />
      </BrowserRouter>
    </QueryClientProvider>

  </>,
);
