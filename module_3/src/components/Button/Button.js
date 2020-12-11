import './Button.scss';

function Button({className = '', action}) {
  return (
  <button className={`button ${className}`}>{action}</button>
  );
}

export default Button;