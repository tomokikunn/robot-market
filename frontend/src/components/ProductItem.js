import "../styles/components/ProductItem.scss";
const ProductItem = (props) => {
  const { onAddToCart, productData } = props;
  return (
    <div className="product-item-card">
      <div className="product-info-container">
        <div className="content-row row">
          <div className="col-4 img-info">
            <div className="img-container">
              <img src={productData?.image} className="product-img" />
            </div>
          </div>
          <div className="col-8 meta-info">
            <div className="name-text">{productData?.name}</div>
            <div className="price-text">{productData?.price}</div>
            <div className="material-info-text">{productData?.material}</div>
            <div className="created-date-text">{productData?.createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
