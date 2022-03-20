import PropTypes from 'prop-types';

function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <div className="t2-toolbar">
      {icon === "view_list" ? 
        <button className="material-icons t2-toolbar-button" onClick={onSwitch}>&#xe8ef;</button> : 
        <button className="material-icons t2-toolbar-button" onClick={onSwitch}>&#xe8f0;</button>
      } 
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
}

export default IconSwitch;