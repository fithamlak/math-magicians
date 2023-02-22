import PropTypes from 'prop-types';

function Button(props) {
  Button.defaultProps = {
    name: '',
    onClick: () => {},
    className: '',
  };
  Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };
  const { name, onClick, className } = props;

  return (
    <button type="button" name={name} className={className} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
