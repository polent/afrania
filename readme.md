# Landsmannschaft Afrania

Open Sourced Code Base for https://www.afrania.de

[<img alt="Deployed with web deploy" src="https://img.shields.io/badge/Deployed With-web deploy-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/web-deploy)

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
