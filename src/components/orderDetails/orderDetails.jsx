import './orderDetails.css';
const OrderDetails = () => {
  return (
    <main>
      <div className="content">
        <h4>Your order is in transit</h4>
        <h3>Arriving on July </h3>
        <h5>
          <a href="##">
            <i className="fas fa-share"></i>Share the link
          </a>
        </h5>
        <h1>Monday</h1>
        <h1 id="date">05</h1>
        <h4 id="secondary">Shipped From Mumbai</h4>
        <h6>
          <i className="fas fa-info-circle"></i>Status of the package
          <i className="fas fa-chevron-down"></i>
        </h6>
      </div>
      <div className="buttons">
        <button>View Shipment details</button>
        <button>Take actions</button>
      </div>
    </main>
  );
};

export default OrderDetails;
