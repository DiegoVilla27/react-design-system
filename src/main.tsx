import { createRoot } from "react-dom/client";
import App from "./App";
import theme from "./theme/themeDefault.json";
import { DesignSystemProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <DesignSystemProvider theme={theme}>
    <App />
  </DesignSystemProvider>
);
