import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductModel from './data/ProductModel';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

function Store (props) {
  const { products } = props;

  const [cardMode, selectMode] = useState(true);

  const onSwitch = () => {
    selectMode((mode) => !mode);
  }

  return (
    <div className="task-2">
      <IconSwitch icon={cardMode ? "view_list" : "view_module"} onSwitch={onSwitch} />  
      {cardMode ? <CardsView cards={products} /> : <ListView items={products} />}    
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel)).isRequired
}

export default Store;