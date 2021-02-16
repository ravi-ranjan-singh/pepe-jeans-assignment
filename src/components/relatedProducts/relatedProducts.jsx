import './relatedProducts.css';
import p2 from './../../assets/p2.png';
import p3 from './../../assets/p3.png';
import Product from '../product/product';
const RelatedProducts = () => {
  return (
    <div className="rp_card">
      <h3>You may also like</h3>
      <div className="products-area">
        <Product
          name="Pepe jeans"
          desc="Solid Slim Fit Polo T-shirt"
          price="5,845"
        >
          <img src={p3} alt="product1" />
        </Product>
        <Product
          name="Pepe jeans"
          desc="Solid Slim Fit Polo T-shirt"
          price="5,845"
        >
          <img src={p2} alt="product1" />
        </Product>
      </div>
    </div>
  );
};

export default RelatedProducts;
