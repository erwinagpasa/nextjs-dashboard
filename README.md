# nextjs-dashboard

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
```

Ref: https://www.youtube.com/watch?v=iP3DnhCUIsE



## Contributors
[![Star on GitHub](https://img.shields.io/github/erwinagpasa/nextjs-dashboard.svg?style=social)](https://github.com/erwinagpasa/nextjs-dashboard)

Thanks go to these wonderful people:

<table>
  <tbody>
    <tr>
      <td><a href="https://www.facebook.com/witchcraft.xxx"><img src="https://avatars.githubusercontent.com/u/637956?s=100&u=8257bbca6cb7bba4841ee509540328439884f8bd&v=4" width="100px;" alt="Erwin Agpasa"/></a><br /><b>Erwin T. Agpasa</b></td>
    </tr>    
  </tbody>
</table>