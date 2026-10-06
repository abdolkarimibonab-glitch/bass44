import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { ARTICLES } from '../data/articles.js';
import ArticleCard from '../components/ArticleCard.jsx';
import { useSEO } from '../utils/seo.js';

export default function ArticlesPage() {
  useSEO({
    title: 'مقالات آموزشی | آتریا الکترونیک',
    description: 'آموزش تخصصی خرید پاور صنعتی، تفاوت پاور 12 و 24 ولت، انتخاب آمپر مناسب و آشنایی با پاور سوئیچینگ — از تیم فنی آتریا الکترونیک.',
    path: '/articles',
  });

  return (
    <div className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'مقالات آموزشی' }]} />
        <h1>مقالات آموزشی</h1>
        <p>دانش فنی لازم برای انتخاب درست منبع تغذیه، به زبان ساده</p>
      </div>
      <div className="container articles-grid articles-page-grid">
        {ARTICLES.map((a) => <ArticleCard key={a.slug} article={a} />)}
      </div>
    </div>
  );
}
