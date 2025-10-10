export interface Theme {
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    background: string;
    info: string;
    error: string;
    warning: string;
    success: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
  };
  font: {
    family: {
      bold: string;
      semibold: string;
      regular: string;
      light: string;
    };
    size: {
      xs: string;
      sm: string;
      md: string;
    };
  };
}
