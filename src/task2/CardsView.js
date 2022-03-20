import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';
import ShopCard from './ShopCard';

function CardsView(props) {
  const { cards } = props;

  return (
    <div className="t2-cards-view">
      {cards.map((card, t2) => <ShopCard card={card} key={t2} />)}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
}

export default CardsView;