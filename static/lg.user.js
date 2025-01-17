// ==UserScript==
// @name         美化洛谷
// @namespace    https://littleswift.moe/
// @version      0.3
// @description  这是“美化洛谷”的新版，由 Orange (orangestd.cn) 修改，主要做了字体修改。
// @author       LittleSwift233, Orange
// @match        https://www.luogu.com.cn/*
// @match        https://www.luogu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.luogu.com.cn
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';
  var font=`
  /* [5] */
@font-face {
font-family: 'Unifont';
font-style: normal;
font-weight: 400;
font-display: swap;
src: url(https://www.unifoundry.com/pub/unifont/unifont-16.0.02/font-builds/unifont-16.0.02.otf) format('otf');
}
/* latin */
@font-face {
font-family: 'Unifont';
font-style: normal;
font-weight: 400;
font-display: swap;
src: url(https://www.unifoundry.com/pub/unifont/unifont-16.0.02/font-builds/unifont-16.0.02.otf) format('otf');
}`;
  var settings=`
      html{
          --y-bg:#fffa;
          --y-d-bg:#ccca;
          --y-d-fg:#0008;
          --y-logo-bg:#07c8;
      }
  `;
  var dark=`
      html{
          --y-bg:#000a;
          --y-d-fg:#fff8;
          --y-logo-bg:#07c8;
      }
  `;
  var styles = `
      /* Font */
      *{
          font-family: "Unifont", sans-serif !important;
          font-weight: 400;
          font-style: normal;
      }
      /* Pretty background */
      .main-container{
          background-image:url(https://t.mwm.moe/fj);
          /* background-color:var(--y-d-bg) !important; */
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
      }
      .lfe-body{
          background-color: #0000 !important;
      }
      .main-container>.wrapper.wrapped.lfe-body.header-layout.tiny{
          background: var(--y-bg) !important;
      }
      .background{
          background: #0000 !important;
      }

      /* Pretty blocks */
      .lg-article,
      .am-panel,
      .am-comment-hd,
      .am-comment-bd,
      textarea,
      .am-input-group,
      .popup,
      .card,
      .btn,
      .inner-card,
      .discuss,
      .dropdown>.center{
          background: var(--y-bg) !important;
          background-color: var(--y-bg) !important;
      }
      .lg-article,
      .am-panel,
      .am-btn,
      #home-center-nav>li>a,
      textarea,
      .am-form-field,
      .am-input-group,
      .popup,
      .card,
      .btn,
      .inner-card,
      .discuss,
      .dropdown>.center{
          border-radius: 1em !important;
      }
      .user-header-top{
          border-top-left-radius: 1em !important;
          border-top-right-radius: 1em !important;
      }

      .am-form-field{
          background-color: #0000 !important;
      }

      .expand{
          background: none !important;
          backdrop-filter: blur(1px);
      }

      /* Pretty slide */
      .top-progress+.lfe-body{
          top:25%;
          left:1em;
          height:24em;
          border-radius:1.85em;
          background: var(--y-bg) !important;
          background-color: var(--y-bg) !important;
          color: var(--y-d-fg) !important;
      }
      .top-progress+.lfe-body>div[style*="background-color"]{
          background-color: #0000 !important;
      }
      .logo-wrap{
          margin:0.4em !important;
          padding:0.7em !important;
          width:2.9em !important;
          height:2.9em !important;
          border-radius:1.45em;
          background: var(--y-logo-bg) !important;
      }

      .main-container{
          margin-left: 0 !important;
      }

      .main-container>.lfe-body:not(.header-layout){
          margin-left: 4.9em !important;
      }

      /* Pretty comments */
      .am-comment-main{
          border-radius: 2em;
      }
      .am-comment-main::before,
      .am-comment-main::after{
          display:none;
      }
      .am-comment-hd{
          border-top-left-radius: 2em;
          border-top-right-radius: 2em;
      }
      .am-comment-bd{
          border-bottom-left-radius: 2em;
          border-bottom-right-radius: 2em;
      }
      .am-comment-bd>blockquote{
          border:none;
      }

      /* Hide ads */
      .am-u-md-12>.lg-article>.am-g>.am-u-md-8{
          display: none;
      }
      .am-u-md-12>.lg-article{
          width:33.333333%;
      }
      .am-u-md-12>.lg-article>.am-g>.am-u-md-4{
          width:100%;
      }
      .qr-img{
          display: none;
      }

      /* Fixed size textarea */
      textarea{
          resize:none;
      }
  `;
  let _=document.createElement("style");_.innerHTML=font;document.head.appendChild(_);
  let styleSheet = document.createElement("style");
  styleSheet.id="y-lgptf";
  styleSheet.innerHTML = settings+styles;
  document.head.appendChild(styleSheet);
})();
