import { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProectList from './ProectList';

function Portfolio(props) {
  const { proects, filters } = props;

  const [{ selected, proectList }, setSelected] = useState({ selected: "All", proectList: proects});

  const selectFilter = (event) => {
    setSelected(() => {
      const filter = event.target.innerText;
      return {
        selected: filter,
        proectList: proects.filter((proect) => filter === 'All' || filter === proect.category)
      }
    });
  }

  return (
    <div className="task-1">
      <Toolbar 
        filters={filters}
        selected={selected} 
        onSelectFilter={selectFilter}
      />
      <ProectList proects={proectList} />
    </div>
  );
}

Portfolio.propTypes = {
  proects: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      category: PropTypes.string
    })
  ).isRequired,

  filters: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Portfolio;