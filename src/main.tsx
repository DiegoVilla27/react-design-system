import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import theme from "./theme/themeDefault.json";
import { DesignSystemProvider } from "./theme/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <DesignSystemProvider theme={theme}>
    <App />
  </DesignSystemProvider>
  // </StrictMode>
);
