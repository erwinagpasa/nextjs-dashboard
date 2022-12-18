# nextjs-playground

Demo: https://main.dkvv58mowx94a.amplifyapp.com

# Installing tailwindcss

1. npm install -D tailwindcss postcss autoprefixer

2. npx tailwindcss init -p 

3. Config file
```

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. add new component folder within the root then modify the config +

```
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],  
```

5. Add these tailwind directives in global.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```# nextjs-dashboard
