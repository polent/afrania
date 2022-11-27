# Landsmannschaft Afrania

Open Sourced Code Base for Afrania.de

Based on and forked from https://github.com/madrilene/eleventy-excellent

## Features

**This starter includes:**

- The whole CSS workflow as suggested by buildexcellentwebsit.es
- Accessible site navigation, editable in `src/_data/navigation.js`
- Image optimization with Eleventy-img _(see blog post)_
- Youtube embed with lite-youtube _(see blog post)_
- Easy resource fetching with eleventy-fetch _(see blog post)_
- Syntax highlighting via eleventy-plugin-syntaxhighlight _(see blog post)_
- SEO basics (XML-sitemap, metadata)
- dayjs handling dates & times
- 301 redirects for Netlify
- Advanced markdown handling
- Bundling via esbuild
- RSS feed
- Links to social networks in footer
- Mastodon domain verification snippet

## First steps

- **Important:** edit meta data in `src/_data/meta.js`, it's being used all over the template.
- Search for 'eleventy-excellent.netlify.app'. You'll find an entry in `src/assets/css/global/global-styles.css`. Replace with your own domain.
- Edit your social media in `src/_data/social.js` and `src/_includes/icons`. If you add new icons they must be prefixed with "social-". By default you have rss, mastodon, twitter, ko-fi, linkedin and github. Great resource: https://lucide.dev/
- Not required, but recommended: Delete `github.js` in `src/_data/github.js` and the blog posts, as these serve only as an example.
- Edit your preferences (colors, fluid text sizes etc.) in `src/assets/css/design-tokens`.
- Optional: set your (favicon) icons in `src/assets/images/favicon`.

## Development

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify JS, inline and minify CSS.

```
npm run build
```
