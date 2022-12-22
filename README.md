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



<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[3.1]: http://i.imgur.com/yCsTjba.png (google plus icon with padding)
[4.1]: http://i.imgur.com/YckIOms.png (tumblr icon with padding)
[5.1]: http://i.imgur.com/1AGmwO3.png (dribbble icon with padding)
[6.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)




<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/carlsednaoui
[2]: http://www.facebook.com/sednaoui
[3]: https://plus.google.com/+CarlSednaoui
[4]: http://carlsed.tumblr.com
[5]: http://dribbble.com/carlsednaoui
[6]: http://www.github.com/carlsednaoui

## Contributors


Thanks go to these wonderful people:

Follow me on [![alt text][1.1]][1]
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center">
      <a href="#">
      <img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt="Erwin Agpasa"/><br /><sub><b>Erwin T. Agpasa</b></sub>
      </a>
      <br />
          <a href="#question-kentcdodds" title="Answering Questions">💬</a> <a href="https://github.com/all-contributors/all-contributors/commits?author=kentcdodds" title="Documentation">📖</a> <a href="https://github.com/all-contributors/all-contributors/pulls?q=is%3Apr+reviewed-by%3Akentcdodds" title="Reviewed Pull Requests">👀</a> <a href="#talk-kentcdodds" title="Talks">📢</a>
      </td>
    </tr>
    
  </tbody>
</table>