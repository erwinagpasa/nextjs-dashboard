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
<!-- links to social media icons -->
<!-- no need to change these -->
[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[3.1]: http://i.imgur.com/1AGmwO3.png (dribbble icon with padding)
[4.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)
<!-- links to your social media accounts -->
<!-- update these accordingly -->
[1]: https://twitter.com/rootaccess000
[2]: https://www.facebook.com/witchcraft.xxx
[3]: https://dribbble.com/erwinagpasa
[4]: https://github.com/erwinagpasa


Thanks go to these wonderful people:


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="#"><img src="https://avatars.githubusercontent.com/u/637956?s=100&u=8257bbca6cb7bba4841ee509540328439884f8bd&v=4" width="100px;" alt="Erwin Agpasa"/><br /><sub><b>Erwin T. Agpasa</b></sub></a><br />[![alt text][1.1]][1]</td>
    </tr>
    
  </tbody>
</table>