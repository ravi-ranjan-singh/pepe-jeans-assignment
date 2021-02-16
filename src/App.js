import Header from './components/header/header';
import OptionCard from './components/optionCard/optionCard';
import OrderDetails from './components/orderDetails/orderDetails';
import ProductDetail from './components/productDetails/productDetail';
import RelatedProducts from './components/relatedProducts/relatedProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <OrderDetails />
      <OptionCard ico="far fa-clock">Reschedule The Delivery</OptionCard>
      <OptionCard ico="far fa-bell">
        Pick up from the last Hub / Courier
      </OptionCard>
      <OptionCard ico="fas fa-truck">Get delivery updates</OptionCard>
      <ProductDetail />
      <RelatedProducts />
    </div>
  );
}

export default App;
