import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';

function ShopItem(props) {
  const { item } = props;

  const imageStyle = {
    backgroundImage: 'url(' + item.img + ')'
  }
  
  return (
    <div className="t2-item">
      <div className="t2-item-image" style={imageStyle}></div>
      <h2 className="t2-item-name">{item.name}</h2>
      <p className="t2-item-color">{item.color}</p>
      <p className="t2-item-price">{'$'+item.price}</p>
      <button className="t2-item-button">Add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.instanceOf(ProductModel).isRequired
}

export default ShopItem;