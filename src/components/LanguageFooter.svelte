<script>
  import { _, locale } from 'svelte-i18n';

  import all_languages from '../../locales/legalcode.json';

	const languages = all_languages.filter(x => x.lang !== $locale);
</script>
<p class="shaded"><a id="languages"></a>{@html $_('language_footer.text')}
<!-- Language Footer Start - DO NOT DELETE -->
{#each languages as {lang, text, url}, i}
<a href="/licenses/by/4.0/{url||`legalcode.${lang}`}">{text}</a>{i === languages.length - 1 ? '.' : ','}
<!---->
{/each}
<!-- Language Footer End - DO NOT DELETE -->
{@html $_('language_footer.more_information')}</p>
