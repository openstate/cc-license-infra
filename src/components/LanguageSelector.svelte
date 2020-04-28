<script>
  import { _, locale } from 'svelte-i18n';

  import languages from '../../locales/legalcode.json';
</script>
<!-- Language Selector Start - DO NOT DELETE -->
<div id="language-selector-block" class="container">
<div class="language-selector-inner">
{@html $_('language_selector.text')}
<img class="language-icon" src="/images/language_icon_x2.png" alt="Languages">
<select>
{#each languages as {lang, text, url}}
<option value="{url||`legalcode.${lang}`}" selected={lang===$locale}>{text}</option>
{/each}
</select>
</div>
</div>
<!-- Language Selector End - DO NOT DELETE -->