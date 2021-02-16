import './product.css';

const Product = ({ name, desc, price, children }) => {
  return (
    <div className="product-card">
      <div className="pimage">{children}</div>
      <p className="pname">{name}</p>
      <p className="pdesc">{desc}</p>
      <p className="price">Rs {price}</p>
    </div>
  );
};

export default Product;
