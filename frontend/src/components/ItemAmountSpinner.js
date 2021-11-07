import { FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../styles/components/ItemAmountSpinner.scss";
const ItemAmountSpinner = (props) => {
  const { value, onIncrease, onDecrease } = props;
  return (
    <InputGroup className="item-amount-spinner">
      <Button className="btn decrease-btn" onClick={onDecrease}>
        -
      </Button>
      <FormControl className="qty-value" disabled value={value} />
      <Button className="btn increase-btn" onClick={onIncrease}>
        +
      </Button>
    </InputGroup>
  );
};

export default ItemAmountSpinner;
