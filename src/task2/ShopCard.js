import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';

function ShopCard(props) {
  const { card } = props;
  
  const cardStyle = {
    backgroundImage: 'url(' + card.img + ')'
  }

  return (
    <div className="t2-card" style={cardStyle}>
      <h2 className="t2-card-name">{card.name}</h2>
      <p className="t2-card-color">{card.color}</p>
      <div className="t2-card-bottom">
        <p className="t2-card-price">{'$'+card.price}</p>
        <button className="t2-card-button">Add to cart</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.instanceOf(ProductModel).isRequired
}

export default ShopCard;