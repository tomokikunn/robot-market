import "../styles/components/ProductItem.scss";
import { CurrencyConverter } from "../utils/CurrencyConverter";
import moment from "moment";
import Button from "react-bootstrap/Button";

const ProductItem = (props) => {
  const { onAddToCart, productData } = props;
  return (
    <div className="product-item-card">
      <div className="product-info-container">
        <div className="row title-row">
          <div className="name-text">{productData?.name}</div>
          <div className="price-text">
            {CurrencyConverter(productData?.price)}
          </div>
        </div>

        <div className="content-row row">
          <div className="img-container">
            <img src={productData?.image} className="product-img" />
          </div>
          <div className="col-12 meta-info">
            <div className="material-info-text">{productData?.material}</div>
            <div className="created-date-text">
              Created{" "}
              {moment(productData?.createdAt).isValid
                ? moment(productData?.createdAt).format("DD-MM-YYYY")
                : ""}
            </div>
          </div>
          <div className="col-12 add-cart-container">
            <div className="col-12 col-lg-4">
              <Button
                className="add-cart-btn"
                disabled={productData?.stock == 0}
                onClick={() => onAddToCart(productData)}
              >
                Add to Cart
              </Button>
            </div>
            <div className="col-12 col-lg-8">
              <div className="in-stock-qty">
                {productData?.stock !== 0
                  ? `${productData?.stock} in stock`
                  : "Out of stock"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
