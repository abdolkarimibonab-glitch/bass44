import { useState } from 'react';

export default function ProductGallery({ product }) {
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const [active, setActive] = useState(0);

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <img
          src={gallery[active]}
          alt={product.alt}
          width="480"
          height="360"
          loading="eager"
          fetchpriority="high"
        />
        {product.salePrice && <span className="badge badge-discount">پیشنهاد ویژه</span>}
      </div>
      {gallery.length > 1 && (
        <div className="product-gallery-thumbs" role="tablist" aria-label="تصاویر محصول">
          {gallery.map((src, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`تصویر ${i + 1}`}
              className={i === active ? 'active' : ''}
              onClick={() => setActive(i)}
            >
              <img src={src} alt="" loading="lazy" width="80" height="60" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
