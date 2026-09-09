const Button = ({ variant, size, children }) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };
  const btnSizes = {
    large: "btn-large",
    small: "btn-small",
    medium: "btn-medium",
  };
  let styles = {};
  if (variant === "secondary") {
    styles = {
      color: "#333",
    };
  }

  return (
    <button
      className={`btn ${variants[variant]} ${btnSizes[size]}`}
      style={styles}
    >
      {children}
    </button>
  );
};

export default Button;
