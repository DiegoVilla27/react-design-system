/**
 * Theme
 *
 * Central theme contract used by the design system. All values are strings to
 * allow CSS-friendly tokens (e.g. "#fff", "1rem", "16px", "Inter, system-ui").
 */
export interface Theme {
  /**
   * Color palette used by components.
   * Semantic tokens should map to values consumable in CSS variables.
   */
  colors: {
    /** Primary brand color (used for primary actions). */
    primary: string;
    /** Primary brand color on hover/active states. */
    primaryHover: string;
    /** Secondary/neutral action color. */
    secondary: string;
    /** Secondary color on hover/active states. */
    secondaryHover: string;
    /** Page background color. */
    background: string;
    /** Informational color (e.g. for tips or neutral alerts). */
    info: string;
    /** Error color for destructive states and messages. */
    error: string;
    /** Warning color for cautionary states. */
    warning: string;
    /** Success color for positive confirmations. */
    success: string;
    /** Primary text color (high contrast). */
    textPrimary: string;
    /** Secondary text color (muted/less prominent). */
    textSecondary: string;
    /** Border / divider color. */
    border: string;
  };

  /**
   * Typography tokens.
   *
   * - family: semantic font-family stacks keyed by weight/intent.
   * - size: semantic font-size tokens.
   */
  font: {
    /**
     * Font family stack tokens.
     * Each token should be a valid CSS font-family value or stack.
     */
    family: {
      /** Bold font family stack (used for strong emphasis). */
      bold: string;
      /** Semi-bold font family stack. */
      semibold: string;
      /** Regular/default font family stack. */
      regular: string;
      /** Light font family stack (when lighter weight is required). */
      light: string;
    };

    /**
     * Font size tokens.
     * Values should include a unit (px, rem, em) to be used directly in CSS.
     */
    size: {
      /** Extra-small font size (e.g. "12px" or "0.75rem"). */
      xs: string;
      /** Small font size (e.g. "14px" or "0.875rem"). */
      sm: string;
      /** Medium/default font size (e.g. "16px" or "1rem"). */
      md: string;
    };
  };
}
