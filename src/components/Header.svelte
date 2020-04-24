<script>
  import { _ } from 'svelte-i18n';
</script>
<!-- Site Header Start - DO NOT DELETE -->
<div class="site-header-wrapper"><!---->
  <header id="masthead" class="site-header sticky-nav-main sticky attached" role="banner"><!---->
    <div class="site-header-main"><!---->
      <div class="site-branding"><!---->
        <a class="cc-site-logo-link" href="https://creativecommons.org/" rel="home"><!---->
          <img class="cc-site-logo" src="https://creativecommons.org/wp-content/themes/cc/images/cc.logo.white.svg" height="72" width="303">
        </a><!---->
      </div><!---->
      <button id="menu-toggle" class="menu-toggle"><i class="cc-icon-menu"></i> <span>{@html $_('header.menu')}</span></button>
      <div id="site-header-menu" class="site-header-menu"><!---->
        <nav id="mobile-navigation" class="mobile-navigation" role="navigation" aria-label="Mobile Menu"><!---->
          <div class="menu-mobile-menu-container"><ul id="menu-mobile-menu" class="mobile-menu"><!---->
            <li id="menu-item-48798" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48798"><a href="https://creativecommons.org/share-your-work/">{@html $_('header.share_your_work')}</a></li>
            <li id="menu-item-48799" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48799"><a href="https://creativecommons.org/use-remix/">{@html $_('header.use_remix')}</a></li>
            <li id="menu-item-48800" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-7466 menu-item-48800"><a href="https://creativecommons.org/about/">{@html $_('header.what_we_do')}</a></li>
            <li id="menu-item-48801" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48801"><a href="https://creativecommons.org/blog/">{@html $_('header.blog')}</a></li>
            <li id="menu-item-48802" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48802"><a href="https://creativecommons.org/about/global-affiliate-network/">{@html $_('header.global_affiliate_network')}</a></li>
            <li id="menu-item-48803" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48803"><a href="https://creativecommons.org/use-remix/search-the-commons/">{@html $_('header.search_the_commons')}</a></li>
          <!---->
          </ul></div><!---->
        </nav><!---->
        <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="Primary Menu"><!---->
          <div class="menu-primary-menu-container"><ul id="menu-primary-menu" class="primary-menu"><!---->
            <li id="menu-item-48791" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48791"><a href="https://creativecommons.org/share-your-work/">{@html $_('header.share_your_work')}</a></li>
            <li id="menu-item-48792" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48792"><a href="https://creativecommons.org/use-remix/">{@html $_('header.use_remix')}</a></li>
            <li id="menu-item-48570" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-7466 menu-item-48570"><a href="https://creativecommons.org/about/">{@html $_('header.what_we_do')}</a></li>
            <li id="menu-item-48793" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48793"><a href="https://creativecommons.org/blog/">{@html $_('header.blog')}</a></li>
          <!---->
          </ul></div><!---->
        </nav><!---->
        <nav id="secondary-navigation" class="secondary-navigation" role="navigation" aria-label="Secondary Menu"><!---->
          <div class="menu-secondary-menu-container"><ul id="menu-secondary-menu" class="secondary-menu"><li id="menu-item-48804" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48804"><a href="https://creativecommons.org/about/global-affiliate-network/">{@html $_('header.global_affiliate_network')}</a></li>
            <li id="menu-item-48805" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48805"><a href="https://creativecommons.org/use-remix/search-the-commons/">{@html $_('header.search_the_commons')}</a></li>
            <li id="menu-item-48806" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48806"><a href="https://creativecommons.org/about/contact/">{@html $_('header.contact')}</a></li>
          <!---->
          </ul></div><!---->
        </nav><!---->
        <nav id="social-navigation" class="social-navigation" role="navigation" aria-label="Social Links Menu"><!---->
          <div class="menu-social-links-container"><ul id="menu-social-links" class="social-links-menu"><!---->
            <li id="menu-item-48807" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-48807"><a href="https://www.facebook.com/creativecommons"><span class="screen-reader-text">{@html $_('header.facebook')}</span></a></li>
            <li id="menu-item-48808" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-48808"><a href="https://twitter.com/creativecommons"><span class="screen-reader-text">{@html $_('header.twitter')}</span></a></li>
            <li id="menu-item-48809" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-48809"><a href="mailto:info@creativecommons.org"><span class="screen-reader-text">{@html $_('header.mail')}</span></a></li>
          <!---->
          </ul></div><!---->
        </nav><!---->
      </div><!---->
    </div><!---->
  </header><!---->
  <header class="site-header spacer" role="banner"><!---->
    <div class="site-header-main"><!---->
      <div class="site-branding"><!---->
        <a class="cc-site-logo-link" href="https://creativecommons.org/" rel="home"><!---->
          <img class="cc-site-logo" src="https://creativecommons.org/wp-content/themes/cc/images/cc.logo.white.svg" height="72" width="303">
        </a><!---->
      </div><!---->
      <button id="menu-toggle" class="menu-toggle"><i class="cc-icon-menu"></i> <span>{@html $_('header.menu')}</span></button>
      <div id="site-header-menu" class="site-header-menu"><!---->
        <nav id="mobile-navigation" class="mobile-navigation" role="navigation" aria-label="Mobile Menu"><!---->
          <div class="menu-mobile-menu-container"><ul id="menu-mobile-menu" class="mobile-menu"><!---->
            <li id="menu-item-48798" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48798"><a href="https://creativecommons.org/share-your-work/">{@html $_('header.share_your_work')}</a></li>
            <li id="menu-item-48799" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48799"><a href="https://creativecommons.org/use-remix/">{@html $_('header.use_remix')}</a></li>
            <li id="menu-item-48800" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-7466 menu-item-48800"><a href="https://creativecommons.org/about/">{@html $_('header.what_we_do')}</a></li>
            <li id="menu-item-48801" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48801"><a href="https://creativecommons.org/blog/">{@html $_('header.blog')}</a></li>
            <li id="menu-item-48802" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48802"><a href="https://creativecommons.org/about/global-affiliate-network/">{@html $_('header.global_affiliate_network')}</a></li>
            <li id="menu-item-48803" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48803"><a href="https://creativecommons.org/use-remix/search-the-commons/">{@html $_('header.search_the_commons')}</a></li>
          <!---->
          </ul></div><!---->
        </nav><!---->
        <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="Primary Menu"><!---->
          <div class="menu-primary-menu-container"><ul id="menu-primary-menu" class="primary-menu"><!---->
            <li id="menu-item-48791" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48791"><a href="https://creativecommons.org/share-your-work/">{@html $_('header.share_your_work')}</a></li>
            <li id="menu-item-48792" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48792"><a href="https://creativecommons.org/use-remix/">{@html $_('header.use_remix')}</a></li>
            <li id="menu-item-48570" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-7466 menu-item-48570"><a href="https://creativecommons.org/about/">{@html $_('header.what_we_do')}</a></li>
            <li id="menu-item-48793" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48793"><a href="https://creativecommons.org/blog/">{@html $_('header.blog')}</a></li><!---->
          <!---->
          </ul></div><!---->
        </nav><!---->
        <nav id="secondary-navigation" class="secondary-navigation" role="navigation" aria-label="Secondary Menu"><!---->
          <div class="menu-secondary-menu-container"><ul id="menu-secondary-menu" class="secondary-menu"><li id="menu-item-48804" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48804"><a href="https://creativecommons.org/about/global-affiliate-network/">{@html $_('header.global_affiliate_network')}</a></li>
            <li id="menu-item-48805" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48805"><a href="https://creativecommons.org/use-remix/search-the-commons/">{@html $_('header.search_the_commons')}</a></li>
            <li id="menu-item-48806" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-48806"><a href="https://creativecommons.org/about/contact/">{@html $_('header.contact')}</a></li>
          <!---->
          </ul></div><!---->
        </nav><!---->
        <nav id="social-navigation" class="social-navigation" role="navigation" aria-label="Social Links Menu"><!---->
          <div class="menu-social-links-container"><ul id="menu-social-links" class="social-links-menu"><!---->
            <li id="menu-item-48807" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-48807"><a href="https://www.facebook.com/creativecommons"><span class="screen-reader-text">{@html $_('header.facebook')}</span></a></li>
            <li id="menu-item-48808" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-48808"><a href="https://twitter.com/creativecommons"><span class="screen-reader-text">{@html $_('header.twitter')}</span></a></li>
            <li id="menu-item-48809" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-48809"><a href="mailto:info@creativecommons.org"><span class="screen-reader-text">{@html $_('header.mail')}</span></a></li>
          <!---->
          </ul></div><!---->
        </nav><!---->
      </div><!---->
    </div><!---->
  </header><!---->
</div><!---->

<aside id="header-below" class="widget-area"><!---->
  <section id="text-15" class="widget-1 widget-first widget-last widget-odd widget widget_text"><!---->
    <div class="textwidget"><!---->
      <div id="donation-bar-wrapper" class="donation-bar-wrapper"><!---->
        <div id="donation-bar-inner" class="donation-bar-inner"><!---->
          <p class="donate-text">{@html $_('donate.text')}</p>
          <div class="donate-action"><a href="/donate?utm_campaign=2018fund&utm_source=license_header2018" class="button donate arrow">{@html $_('donate.donate')}<span class="hide-on-mobile"><!----> {@html $_('donate.now')}</span></a></div>
        </div><!---->
      </div><!---->
    </div><!---->
  </section><!---->
</aside><!---->
<!---->

<!---->

<!-- Site Header End - DO NOT DELETE -->