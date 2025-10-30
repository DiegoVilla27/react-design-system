/**
 * Babel configuration for the React Design System project.
 *
 * Purpose:
 * - Transpile modern JavaScript and JSX for the target runtime environments.
 * - Used by tools such as Jest and build/test pipelines that rely on Babel transforms.
 *
 * Presets:
 * - @babel/preset-env
 *   - Converts modern ES syntax to the target environment specified in `targets`.
 *   - Here `targets.node: 'current'` is convenient for test environments that run
 *     the current Node version locally/CI.
 * - @babel/preset-react
 *   - Enables JSX transformation for React.
 *   - `runtime: 'automatic'` uses the new automatic JSX runtime (no need to import React).
 *
 * Notes:
 * - For browser-focused builds, adjust `targets` in preset-env (or use Browserslist).
 * - Keep this file minimal; add plugins/presets only when required (e.g. decorators).
 */
module.exports = {
  presets: [
    // Transpile modern JS according to the current Node runtime (suitable for tests).
    ['@babel/preset-env', { targets: { node: 'current' } }],

    // JSX support for React using the automatic runtime (no explicit React import required).
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
};