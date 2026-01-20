/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Custom Palette
        'orchid': '#CDA1B6',      // Primary Accent (Pink)
        'gunmetal': '#2E2532',    // Sidebar / Headings (Dark)
        'slate': '#959097',       // Subtitles / Inactive items
        'pale': '#C8C6C9',        // Borders / Secondary Backgrounds
        'paper': '#FBFBFB',       // Main Background / Cards
      }
    },
  },
  plugins: [],
}