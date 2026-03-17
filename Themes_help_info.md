Hey Mukul,

The **github-readme-stats** service (the one you're using at `github-readme-stats.vercel.app`) comes with a **long list of built-in themes**. You just swap out `radical` in your URL with any other theme name like this:

```html
<img src="https://github-readme-stats.vercel.app/api/pin/?username=Mukulkalsait&repo=A01_100_Dockerfile_From_Scratch&theme=THEME_NAME" />
```

Here’s the current full list of supported themes (as of the latest updates from the repo):

- default
- transparent (great for auto-adapting to GitHub's light/dark mode)
- dark
- radical (the one you're using now – vibrant pink/purple)
- merko
- gruvbox
- gruvbox_light
- tokyonight
- onedark
- cobalt
- synthwave
- highcontrast
- dracula
- prussian
- monokai
- vue
- vue-dark
- shades-of-purple
- nightowl
- buefy
- blue-green
- algolia
- great-gatsby
- darcula
- bear
- solarized-dark
- solarized-light
- chartreuse-dark
- nord
- gotham
- material-palenight
- graywhite
- vision-friendly-dark
- ayu-mirage
- midnight-purple
- calm
- flag-india
- omni
- react
- jolly
- maroongold
- yeblu
- blueberry
- slateorange
- kacho_ga
- outrun
- ocean_dark
- city_lights
- github_dark
- github_dark_dimmed
- discord_old_blurple
- aura_dark
- panda
- noctis_minimus
- cobalt2
- swift
- aura
- apprentice
- moltack
- codeSTACKr
- rose_pine
- catppuccin_latte
- catppuccin_mocha
- date_night
- one_dark_pro
- rose
- holi
- neon
- blue_navy
- calm_pink
- ambient_gradient

Some popular/popular ones people love:

- **tokyonight** → clean dark cyberpunk vibe
- **dracula** → purple + pink classic dark theme
- **onedark** → similar to VS Code's One Dark
- **github_dark** → matches GitHub's own dark mode
- **transparent** → no background, blends perfectly everywhere
- **catppuccin_mocha** or **catppuccin_latte** → very trendy pastel dark/light
- **neon** → glowing bright accents
- **nord** → cool arctic colors

Just pick one, plug it in, and push to see how it looks. Example with a few:

```html
<!-- Dark & clean -->
<img src="https://github-readme-stats.vercel.app/api/pin/?username=Mukulkalsait&repo=A01_100_Dockerfile_From_Scratch&theme=tokyonight&description_lines_count=2" />

<!-- Super vibrant -->
<img src="https://github-readme-stats.vercel.app/api/pin/?username=Mukulkalsait&repo=A01_100_Dockerfile_From_Scratch&theme=dracula&description_lines_count=2" />

<!-- Matches GitHub dark mode -->
<img src="https://github-readme-stats.vercel.app/api/pin/?username=Mukulkalsait&repo=A01_100_Dockerfile_From_Scratch&theme=github_dark&description_lines_count=2" />
```

If you want uniform card sizes across all your pinned repos, keep using `&description_lines_count=2` (or 3) like we talked about earlier.

Which style are you leaning toward — dark/minimal, colorful/neon, or something pastel? Let me know and I can suggest a few that might suit your profile best! 🚀
