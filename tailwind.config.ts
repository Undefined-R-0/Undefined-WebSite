// tailwind.config.ts
import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { createVariableColors, variableColorsPlugin } from 'tailwindcss-variable-colors'

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // You can also not pass the colors parameter,
    // it will use the colors from tailwindcss by default.
    colors: createVariableColors(colors),
  },
  plugins: [variableColorsPlugin(colors)],
}

export default config