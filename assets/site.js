/* Coin site — Hebrew (RTL) default, English toggle. No cookies, no trackers.
 * Short strings:  <el data-he="…" data-en="…">  (textContent swap)
 * Long blocks:    <div data-lang-block="he"> … </div><div data-lang-block="en" hidden> … </div>
 * Titles:         <html data-title-he="…" data-title-en="…">
 * Images:         <img data-img-he="…" data-img-en="…">  and  <img alt="(he)" data-alt-en="…">
 * The choice is remembered in localStorage ('coin-lang') only. */
(function () {
  'use strict';
  var KEY = 'coin-lang';
  var html = document.documentElement;

  function setLang(lang) {
    var isHe = lang !== 'en';
    lang = isHe ? 'he' : 'en';
    html.lang = lang;
    html.dir = isHe ? 'rtl' : 'ltr';
    var t = html.getAttribute('data-title-' + lang);
    if (t) document.title = t;
    document.querySelectorAll('[data-he][data-en]').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + lang);
    });
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang-block') !== lang;
    });
    document.querySelectorAll('[data-img-he][data-img-en]').forEach(function (el) {
      el.setAttribute('src', el.getAttribute('data-img-' + lang));
    });
    document.querySelectorAll('img[data-alt-en]').forEach(function (el) {
      if (!el.hasAttribute('data-alt-he')) el.setAttribute('data-alt-he', el.getAttribute('alt') || '');
      el.setAttribute('alt', el.getAttribute('data-alt-' + lang));
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-set-lang')); });
  });

  // Saved choice wins; ?lang=en|he deep-links a language (used for ASC English URLs).
  var q = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  setLang(q === 'en' || q === 'he' ? q : (saved || 'he'));
})();
