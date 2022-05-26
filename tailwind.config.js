module.exports = {
  mode:'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        body:"#E9D5CA",
        sidebar:"#827397",
        btn:"#4D4C7D",
        cta:"#363062"
      }
    },
  },
  plugins: [],
}
