import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';
import ShopCard from './ShopCard';

function CardsView(props) {
  const { cards } = props;

  return (
    <div className="t2-cards-view">
      {cards.map((card, i) => <ShopCard card={card} key={i} />)}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
}

export default CardsView;