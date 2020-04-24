<script>
  import { _, locale } from 'svelte-i18n';

  import Header from '../components/Header.svelte';
  import LanguageSelector from '../components/LanguageSelector.svelte';
  import Footer from '../components/Footer.svelte';
</script>
<body class="lang-{$locale}"><!---->
<Header />
<LanguageSelector />
<slot></slot>
<Footer />
{@html '<script type="text/javascript">\n  /* <![CDATA[ */\n  var screenReaderText = ' + JSON.stringify({"expand": $_('screen_reader.expand'), "collapse": $_('screen_reader.collapse')}) + ';\n  /* ]]> */\n</script>'}
<script type='text/javascript' src='https://creativecommons.org/wp-content/themes/twentysixteen/js/functions.js'></script>
<script type='text/javascript' src='/includes/legalcode.js'></script>
<!---->
<!-- Site Footer End - DO NOT DELETE -->
</body>