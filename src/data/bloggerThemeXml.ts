/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const BLOGGER_THEME_XML = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='UTF-8'/>
  <meta content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' name='viewport'/>
  <title><data:view.title/></title>
  <b:include data='blog' name='all-head-content'/>

  <!-- Google Fonts: Archivo (headings) & Inter (body and UI) -->
  <link href='https://fonts.googleapis.com' rel='preconnect'/>
  <link crossorigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect'/>
  <link href='https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&amp;family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&amp;display=swap' rel='stylesheet'/>

  <b:skin><![CDATA[
  /* -------------------------------------------------------------
     VERTIGO POV — BRUTALIST EDITORIAL BLOGGER THEME
     Palette: Paper #F5F0E8 | Ink #1A1A1A | Graphite #6B6B6B | REC #e62117
     Typography: Archivo (800 display titles) | Inter (body, meta, tables, UI)
  ------------------------------------------------------------- */
  :root {
    --bg-paper: #F5F0E8;
    --text-ink: #1A1A1A;
    --text-pencil: #6B6B6B;
    --rec-red: #e62117;
    --font-heading: 'Archivo', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: var(--bg-paper);
    color: var(--text-ink);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: var(--text-ink);
    text-decoration: none;
    transition: color 0.15s ease;
  }
  a:hover {
    color: var(--rec-red);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Pinned Flight-Line Reading Progress Bar */
  #flight-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: var(--rec-red);
    z-index: 9999;
    transition: width 0.05s linear;
  }

  /* Top REC Strip */
  .rec-strip {
    background-color: var(--bg-paper);
    border-bottom: 1px solid rgba(26, 26, 26, 0.15);
    padding: 6px 16px;
    font-size: 12px;
    color: var(--text-pencil);
    font-weight: 500;
  }
  .rec-strip-inner {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }
  .rec-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--rec-red);
    display: inline-block;
    animation: recPulse 1.8s infinite;
  }
  @keyframes recPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.9); }
  }
  .rec-text {
    color: var(--rec-red);
    font-weight: 700;
  }
  .rec-author {
    color: var(--text-ink);
    font-weight: 600;
  }

  /* Sticky Header */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: var(--bg-paper);
    border-bottom: 2px solid var(--text-ink);
  }
  .header-inner {
    max-width: 1024px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .brand-logo {
    font-family: var(--font-heading);
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: var(--text-ink);
  }
  .brand-logo .pov {
    color: var(--rec-red);
  }
  .header-nav {
    display: flex;
    gap: 20px;
    font-size: 14px;
    font-weight: 500;
  }
  .header-nav a:hover {
    color: var(--rec-red);
  }

  /* Main Content Wrapper */
  .main-wrapper {
    max-width: 1024px;
    margin: 0 auto;
    padding: 40px 16px 80px;
    min-height: 70vh;
  }

  /* Article Header */
  .article-meta-top {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-pencil);
    margin-bottom: 16px;
  }
  .article-title {
    font-family: var(--font-heading);
    font-size: 38px;
    line-height: 1.05;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text-ink);
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    .article-title {
      font-size: 56px;
    }
  }

  .byline-bar {
    padding: 14px 0;
    border-top: 1px solid var(--text-ink);
    border-bottom: 1px solid var(--text-ink);
    margin-bottom: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    font-size: 13px;
    color: var(--text-pencil);
    font-weight: 500;
  }
  .byline-bar strong {
    color: var(--text-ink);
  }

  /* Post Body Typography & Elements */
  .post-body-content {
    font-size: 17px;
    line-height: 1.75;
    color: var(--text-ink);
    max-width: 720px;
    margin: 0 auto;
  }
  .post-body-content p {
    margin-bottom: 24px;
  }
  .post-body-content h2 {
    font-family: var(--font-heading);
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: var(--text-ink);
    margin: 48px 0 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(26, 26, 26, 0.2);
  }
  .post-body-content h3 {
    font-family: var(--font-heading);
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: var(--text-ink);
    margin: 32px 0 12px;
  }

  /* Pull Quotes in large red italic Inter */
  .post-body-content blockquote, .pull-quote {
    font-family: var(--font-body);
    font-style: italic;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.35;
    color: var(--rec-red);
    border-left: 3px solid var(--rec-red);
    padding: 16px 0 16px 24px;
    margin: 40px 0;
  }

  /* Brutalist Data Tables */
  .post-body-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 32px 0;
    font-size: 14px;
    border: 1px solid var(--text-ink);
  }
  .post-body-content th {
    background-color: var(--text-ink);
    color: var(--bg-paper);
    padding: 12px 14px;
    text-align: left;
    font-weight: 600;
  }
  .post-body-content td {
    padding: 12px 14px;
    border-bottom: 1px solid rgba(26, 26, 26, 0.15);
  }
  .post-body-content tr:nth-child(even) {
    background-color: rgba(26, 26, 26, 0.03);
  }

  /* Figures & Captions */
  .post-body-content figure {
    margin: 36px 0;
  }
  .post-body-content figcaption {
    font-size: 13px;
    color: var(--text-pencil);
    margin-top: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(26, 26, 26, 0.15);
    font-weight: 500;
  }

  /* Share Bar */
  .post-share-bar {
    margin: 48px 0;
    padding: 16px 0;
    border-top: 1px solid var(--text-ink);
    border-bottom: 1px solid var(--text-ink);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }
  .share-label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-pencil);
    margin-right: 8px;
  }
  .share-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border: 1px solid var(--text-ink);
    font-size: 13px;
    font-weight: 500;
    background-color: var(--bg-paper);
    color: var(--text-ink);
    cursor: pointer;
    font-family: var(--font-body);
    transition: all 0.15s ease;
  }
  .share-btn:hover {
    background-color: var(--text-ink);
    color: var(--bg-paper);
  }

  /* Homepage Grid */
  .homepage-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .post-card {
    border: 1px solid var(--text-ink);
    padding: 24px;
    background-color: var(--bg-paper);
  }
  .post-card-title {
    font-family: var(--font-heading);
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin: 12px 0;
  }
  .post-card-snippet {
    font-size: 15px;
    color: var(--text-pencil);
    margin-bottom: 16px;
  }

  /* Pager */
  .blog-pager {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid var(--text-ink);
    font-size: 14px;
    font-weight: 600;
  }

  /* Site Footer */
  .site-footer {
    border-top: 2px solid var(--text-ink);
    background-color: var(--bg-paper);
    padding: 48px 16px;
    font-size: 13px;
    color: var(--text-pencil);
  }
  .footer-inner {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
  }
  .footer-brand {
    font-family: var(--font-heading);
    font-size: 20px;
    font-weight: 800;
    color: var(--text-ink);
  }
  ]]></b:skin>

  <b:template-skin><![CDATA[
  /* Template skin for Theme Designer compatibility */
  ]]></b:template-skin>
</head>

<body>
  <!-- Pinned Reading Progress Line -->
  <div id='flight-progress'></div>

  <!-- Top REC Strip -->
  <div class='rec-strip'>
    <div class='rec-strip-inner'>
      <span class='rec-dot'></span>
      <span class='rec-text'>REC</span>
      <span>&#183;</span>
      <span class='rec-author'>Vertigo POV</span>
      <span>&#183;</span>
      <span>Expedition Journal</span>
      <span>&#183;</span>
      <span><data:view.title/></span>
    </div>
  </div>

  <!-- Header -->
  <header class='site-header'>
    <div class='header-inner'>
      <a class='brand-logo' expr:href='data:blog.homepageUrl'>
        VERTIGO <span class='pov'>POV</span>
      </a>
      <nav class='header-nav'>
        <a expr:href='data:blog.homepageUrl'>Archive</a>
        <a href='https://vertigopov.blogspot.com/2026/10/dolomites-travel-guide.html'>Dolomites Guide</a>
      </nav>
    </div>
  </header>

  <!-- Main Content Section with required Blog1 Widget -->
  <main class='main-wrapper'>
    <b:section class='main' id='main-section' maxwidgets='1' name='Main Content' showaddelement='no'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2'>
        <b:widget-settings>
          <b:widget-setting name='showInlineAds'>false</b:widget-setting>
          <b:widget-setting name='showShareButtons'>false</b:widget-setting>
          <b:widget-setting name='showReactions'>false</b:widget-setting>
        </b:widget-settings>

        <b:includable id='main' var='top'>
          <div class='blog-posts'>
            <b:loop values='data:posts' var='post'>
              <b:include data='post' name='post'/>
            </b:loop>
          </div>
          <b:include name='postPagination'/>
        </b:includable>

        <b:includable id='post' var='post'>
          <b:if cond='data:view.isSingleItem'>
            <!-- Single Article View -->
            <article class='article-container'>
              <div class='article-meta-top'>
                <span style='color: var(--rec-red); font-weight:700;'>EXPEDITION</span>
                <span>&#183;</span>
                <span><data:post.dateHeader/></span>
                <b:if cond='data:post.labels'>
                  <span>&#183;</span>
                  <b:loop values='data:post.labels' var='label'>
                    <span><data:label.name/></span>
                  </b:loop>
                </b:if>
              </div>

              <h1 class='article-title'><data:post.title/></h1>

              <div class='byline-bar'>
                <div>
                  By <strong>Vertigo POV</strong> &#183; <span>Published <data:post.dateHeader/></span>
                </div>
                <div>
                  <span>Editorial Guide</span>
                </div>
              </div>

              <div class='post-body-content' id='post-content'>
                <data:post.body/>
              </div>

              <!-- Inter Share Bar with safe script handlers -->
              <div class='post-share-bar'>
                <span class='share-label'>Share Guide</span>
                <button class='share-btn' onclick='copyGuideLink()' type='button'>
                  Copy link
                </button>
                <button class='share-btn' onclick='shareGuideX()' type='button'>
                  X
                </button>
                <button class='share-btn' onclick='shareGuideFacebook()' type='button'>
                  Facebook
                </button>
                <button class='share-btn' onclick='shareGuideWhatsApp()' type='button'>
                  WhatsApp
                </button>
              </div>
            </article>
          <b:else/>
            <!-- Homepage Archive List Item -->
            <div class='homepage-grid' style='margin-bottom: 24px;'>
              <div class='post-card'>
                <div class='article-meta-top'>
                  <span><data:post.dateHeader/></span>
                  <span>&#183;</span>
                  <span>By Vertigo POV</span>
                </div>
                <h2 class='post-card-title'>
                  <a expr:href='data:post.url'><data:post.title/></a>
                </h2>
                <div class='post-card-snippet'>
                  <data:post.snippet/>
                </div>
                <a expr:href='data:post.url' style='font-size: 13px; font-weight: 700; color: var(--rec-red); text-transform: uppercase;'>
                  Read expedition &#8594;
                </a>
              </div>
            </div>
          </b:if>
        </b:includable>

        <b:includable id='postPagination'>
          <div class='blog-pager' id='blog-pager'>
            <b:if cond='data:newerPageUrl'>
              <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' id='blog-pager-newer-link'>
                &#8592; Newer Expeditions
              </a>
            </b:if>
            <b:if cond='data:olderPageUrl'>
              <a class='blog-pager-older-link' expr:href='data:olderPageUrl' id='blog-pager-older-link'>
                Older Expeditions &#8594;
              </a>
            </b:if>
          </div>
        </b:includable>
      </b:widget>
    </b:section>
  </main>

  <!-- Footer -->
  <footer class='site-footer'>
    <div class='footer-inner'>
      <div>
        <div class='footer-brand'>VERTIGO POV</div>
        <p style='margin-top: 6px;'>High-altitude aviation, wingsuit pov, and alpine expedition journals.</p>
        <p style='margin-top: 4px;'>Next in this series: Lauterbrunnen, Switzerland</p>
      </div>
      <div>
        <p>Author: <strong>Vertigo POV</strong></p>
        <p style='margin-top: 4px;'>&#169; 2026 Vertigo POV. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Safe Client-Side Scripts (Progress & Share) -->
  <script type='text/javascript'>
  //<![CDATA[
    window.addEventListener('scroll', function() {
      var bar = document.getElementById('flight-progress');
      if (!bar) return;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        var progress = (window.pageYOffset / docHeight) * 100;
        bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
      }
    });

    function copyGuideLink() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(function() {
          alert('Link copied to clipboard');
        });
      } else {
        var dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Link copied to clipboard');
      }
    }

    function shareGuideX() {
      var url = encodeURIComponent(window.location.href);
      var title = encodeURIComponent(document.title);
      window.open('https://x.com/intent/tweet?text=' + title + '&url=' + url, '_blank');
    }

    function shareGuideFacebook() {
      var url = encodeURIComponent(window.location.href);
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
    }

    function shareGuideWhatsApp() {
      var url = encodeURIComponent(window.location.href);
      var title = encodeURIComponent(document.title);
      window.open('https://api.whatsapp.com/send?text=' + title + '%20' + url, '_blank');
    }
  //]]>
  </script>
</body>
</html>`;
