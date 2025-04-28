/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  blocklist: [
    "\[default\:\\u202F\$\{N\(\`\$\{u\}\`\)\}\]"  
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
