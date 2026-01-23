export function ProductCard({ product, onAddCart }) {
  const { img, name, sub, price, note } = product;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="seafood-card rounded-4 overflow-hidden h-100">

        {/* IMAGE */}
        <div className="seafood-img-wrap">
          <img src={img} alt={name} />
        </div>

        {/* CONTENT */}
        <div className="p-4 d-flex flex-column">
          <h5 className="fw-bold mb-1">{name}</h5>
          <small className="text-muted">{sub}</small>

          <div className="price-badge mt-3 mb-2">
            🔥 {price}
          </div>

          <p className="text-secondary small mb-4">
            {note}
          </p>

          <button
            className="btn order-btn mt-auto"
            onClick={() => onAddCart(product)}
          >
            Đặt ngay
          </button>
        </div>

      </div>
    </div>
  );
}
