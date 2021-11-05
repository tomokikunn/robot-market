import "../styles/components/ProductItem.scss";
const ProductItem = (props) => {
  const { onAddToCart, productData } = props;
  return (
    <div className="product-item-card">
      <div className="product-info-container">
        <div className="meta-row row">
          <div className="col-6 material-info">
            <img src={productData?.image} className="product-img" />
          </div>
          <div className="col-6 created-date-info">
            <p className="name-text">{productData?.name}</p>
            <p className="price-text">{productData?.price}</p>

            <p className="material-info-text">{productData?.material}</p>
            <p className="created-date-text">{productData?.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
