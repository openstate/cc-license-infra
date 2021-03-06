# Proof of Concept

Recreating the Creative Commons [legalcode](https://github.com/creativecommons/creativecommons.org/blob/master/docroot/legalcode/by_4.0.html) html with Svelte/Sapper and svelte-i18n.

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
    + `<noscript id='sapper-head-...'></noscript>` for dynamic `<svelte:head>` (not a problem but needs to be stripped for compare)
- Svelte issues:
    + `preserveComments` compiler setting doesn't seem to work (opened issue [#4730](https://github.com/sveltejs/svelte/issues/4730), pending PR [#4736](https://github.com/sveltejs/svelte/pull/4736))
    + `preserveWhitespace` compiler setting doesn't work for all whitespace (prefix spaces and newlines) (opened issue [#4731](https://github.com/sveltejs/svelte/issues/4731), pending PR [#4737](https://github.com/sveltejs/svelte/pull/4737)) ~, to prevent newline collapse we added `<!---->` as a temporary fix (since comments are stripped)~.

## Run

```bash
# awaiting some PRs merging upstream, link a newer svelte
git clone "https://github.com/bwbroersma/svelte.git#fix-preserve-whitespace"
cd svelte
yarn
yarn link
cd ..

git clone "https://github.com/openstate/cc-license-infra.git"
cd cc-license-infra
yarn
yarn link svelte
yarn dev
```
