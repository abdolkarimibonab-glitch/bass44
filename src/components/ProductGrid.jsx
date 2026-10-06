import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products, emptyMessage = 'محصولی مطابق فیلترها یافت نشد.' }) {
  if (!products.length) {
    return <div className="product-grid-empty">{emptyMessage}</div>;
  }
  return (
    <div className="product-grid">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
