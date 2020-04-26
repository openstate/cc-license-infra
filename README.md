# Proof of Concept

Recreating the Creative Commons [legalcode](https://github.com/creativecommons/creativecommons.org/master/docroot/legalcode/by_4.0.html) html with Svelte/Sapper and svelte-i18n.

Goal is:
- very similar html
- components

So no PWA yet, we removed `%sapper.scripts%` from the `template.html`.

Some finds:
- CC html is inregular:
    + not always closing `<li>`
    + mixed image closing `<img />` and `<img>`
- CC language styling:
    + `:not(lang-en)` is hiding all navigation (why?) except for mobile (not translated)
- CC translation:
    + `alt` attributes are not translated
    + legalcode not in Transifex
- Sapper extra tags:
    + `<base href=/>` (issue [#904](https://github.com/sveltejs/sapper/issues/904))
- Svelte extra tags:
    + `<noscript id='sapper-head-...'></noscript>` for dynamic head
- Svelte issues:
    + `preserveComments` compiler setting doesn't seem to work
    + `preserveWhitespace` compiler setting doesn't work for all whitespace (prefix spaces and newlines)

## Run

```bash
yarn
yarn dev
```