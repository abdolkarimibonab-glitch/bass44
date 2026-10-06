import { useEffect } from 'react';
import { SITE } from '../data/site.js';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSEO({ title, description, path = '', type = 'website', jsonLd = null }) {
  const ld = JSON.stringify(jsonLd);
  useEffect(() => {
    const url = SITE.url + path;
    if (title) document.title = title;
    if (description) {
      upsertMeta('name', 'description', description);
    }
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let ldScript = document.getElementById('ld-json');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'ld-json';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = ld || '';
  }, [title, description, path, type, ld]);
}
