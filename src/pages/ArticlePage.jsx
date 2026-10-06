import { Link, useParams, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { getArticle, ARTICLES } from '../data/articles.js';
import { getProduct } from '../data/products.js';
import { useSEO } from '../utils/seo.js';
import { CalendarIcon, ClockIcon, UserIcon, ShareIcon, PhoneIcon } from '../components/Icons.jsx';
import { toFaDigits } from '../utils/format.js';
import { SITE } from '../data/site.js';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  useSEO({
    title: article ? `${article.title} | آتریا الکترونیک` : 'مقاله یافت نشد | آتریا الکترونیک',
    description: article ? article.excerpt : '',
    path: article ? `/articles/${article.slug}` : '',
    type: 'article',
    jsonLd: article ? {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.excerpt,
      author: { '@type': 'Organization', name: 'آتریا الکترونیک' },
      publisher: { '@type': 'Organization', name: 'آتریا الکترونیک' },
      mainEntityOfPage: `${SITE.url}/articles/${article.slug}`,
    } : null,
  });

  if (!article) return <Navigate to="/404" replace />;

  const relatedProducts = article.relatedProducts.map(getProduct).filter(Boolean);
  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: article.title, url });
      else {
        await navigator.clipboard.writeText(url);
        alert('لینک مقاله کپی شد');
      }
    } catch { /* cancelled */ }
  };

  return (
    <article className="article-page">
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'خانه', to: '/' },
            { label: 'مقالات آموزشی', to: '/articles' },
            { label: article.title },
          ]} />
          <span className="article-cat-chip">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span><UserIcon size={16} /> {article.author}</span>
            <span><CalendarIcon size={16} /> {toFaDigits(article.date)}</span>
            <span><ClockIcon size={16} /> {toFaDigits(article.readingTime)} دقیقه مطالعه</span>
          </div>
        </div>
      </div>

      <div className="container article-layout">
        <div className="article-content">
          <img className="article-cover" src={article.image} alt={article.title} width="720" height="405" loading="eager" fetchpriority="high" />

          <nav className="article-toc" aria-label="فهرست مطالب">
            <strong>فهرست مطالب</strong>
            <ol>
              {article.sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>
              ))}
            </ol>
          </nav>

          {article.sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id}>{s.heading}</h2>
              {(s.paras || []).map((p, i) => <p key={i}>{p}</p>)}
              {s.list && <ul className="list-check">{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
              {s.table && (
                <table className="specs-table">
                  <caption className="sr-only">{s.heading}</caption>
                  <thead>
                    <tr>{s.table.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row, i) => (
                      <tr key={i}>{row.map((cell, j) => (j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>))}</tr>
                    ))}
                  </tbody>
                </table>
              )}
              {s.paras2 && s.paras2.map((p, i) => <p key={i}>{p}</p>)}
            </section>
          ))}

          {article.faq.length > 0 && (
            <section aria-labelledby="article-faq">
              <h2 id="article-faq">سوالات متداول</h2>
              {article.faq.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>
          )}

          <div className="article-share">
            <span>اشتراک‌گذاری:</span>
            <button type="button" onClick={share}><ShareIcon size={16} /> کپی / اشتراک لینک</button>
            <a href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer noopener">تلگرام</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`} target="_blank" rel="noreferrer noopener">واتساپ</a>
          </div>

          <div className="article-cta">
            <p>برای مشاوره فنی و استعلام موجودی، با کارشناسان آتریا تماس بگیرید.</p>
            <a href={`tel:${SITE.phone}`} className="btn btn-gold btn-md"><PhoneIcon size={16} /> <span dir="ltr">{SITE.phoneDisplay}</span></a>
          </div>
        </div>

        <aside className="article-sidebar">
          <div className="article-sidebar-card">
            <h2>محصولات مرتبط</h2>
            <ul>
              {relatedProducts.map((p) => (
                <li key={p.id}>
                  <Link to={`/product/${p.slug}`}>
                    <img src={p.image} alt="" loading="lazy" width="56" height="42" />
                    <span>{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="article-sidebar-card">
            <h2>مقالات مرتبط</h2>
            <ul>
              {otherArticles.map((a) => (
                <li key={a.slug}><Link to={`/articles/${a.slug}`}>{a.title}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
