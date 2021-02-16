import './productDetail.css';
import p1 from './../../assets/p1.png';

const ProductDetail = () => {
  return (
    <div className="pdetail">
      <h4>
        <div className="primary">Order Details</div>
        <div className="secondary">
          <i className="fas fa-share"></i>Share the product
        </div>
      </h4>
      <section>
        <img src={p1} alt="jean" />
        <div className="info">
          <p className="pname">Pepe jeeans</p>
          <p className="disc">
            Men Blue Skinny Fit Mid-Rise Clean...
            <br />
            Size: 30 | Qty: 1
          </p>
          <p className="price">Rs 5,845</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
