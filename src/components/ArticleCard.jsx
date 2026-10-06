import { Link } from 'react-router-dom';
import { ARTICLES } from '../data/articles.js';
import SectionHeading from './SectionHeading.jsx';
import Button from './Button.jsx';
import { toFaDigits } from '../utils/format.js';

export default function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.slug}`} className="article-card">
      <div className="article-card-media">
        <img src={article.image} alt={article.title} loading="lazy" width="320" height="180" />
        <span className="article-card-cat">{article.category}</span>
      </div>
      <div className="article-card-body">
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="article-card-meta">
          <span>⏱ {toFaDigits(article.readingTime)} دقیقه مطالعه</span>
          <span className="article-card-more">ادامه مطلب ←</span>
        </div>
      </div>
    </Link>
  );
}

export function ArticlesSection() {
  return (
    <section className="articles-section" aria-labelledby="articles-title">
      <div className="container">
        <SectionHeading id="articles-title" tone="dark" title="مقالات آموزشی" subtitle="دانش فنی لازم برای انتخاب درست منبع تغذیه، به زبان ساده." />
        <div className="articles-grid">
          {ARTICLES.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
        <div className="articles-more">
          <Button to="/articles" variant="ghost" size="md">مشاهده همه مقالات</Button>
        </div>
      </div>
    </section>
  );
}
