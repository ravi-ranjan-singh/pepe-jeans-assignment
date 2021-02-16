import './optionCard.css';
const OptionCard = ({ ico, children }) => {
  return (
    <div className="option-card">
      <span>
        <i className={`${ico}`}></i>
        <span>{children}</span>
      </span>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

export default OptionCard;
