import Button from '../components/Button.jsx';
import { useSEO } from '../utils/seo.js';

export default function NotFoundPage() {
  useSEO({
    title: 'صفحه یافت نشد | آتریا الکترونیک',
    description: 'صفحه مورد نظر یافت نشد.',
  });
  return (
    <div className="container notfound">
      <span className="notfound-code" dir="ltr">404</span>
      <h1>صفحه مورد نظر یافت نشد</h1>
      <p>ممکن است نشانی را اشتباه وارد کرده باشید یا این صفحه حذف شده باشد.</p>
      <Button to="/" variant="gold" size="md">بازگشت به صفحه اصلی</Button>
    </div>
  );
}
