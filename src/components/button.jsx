import PropTypes from 'prop-types';

function Button(props) {
  Button.defaultProps = {
    name: '',
    onClick: () => {},
  };
  Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
  };
  const { name, onClick } = props;

  return (
    <button type="button" name={name} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
