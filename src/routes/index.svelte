<script>
  import { _, locales } from 'svelte-i18n';
</script>

<ul>
{#each $locales as locale}
	<li><a href=4.0/by/legalcode.{locale}>{locale}</a></li>
{/each}
</ul>
