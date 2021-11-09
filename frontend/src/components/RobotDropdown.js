import { Dropdown, DropdownButton } from "react-bootstrap";
import "../styles/components/RobotDropdown.scss";

const RobotDropdown = (props) => {
  const { dropdowns = [], value, onSelectDropdown } = props;
  return (
    <DropdownButton
      className="robot-dropdown"
      defaultValue={null}
      title={value == null ? "All" : value}
    >
      {dropdowns !== undefined &&
        dropdowns.length !== undefined &&
        dropdowns.length > 0 &&
        dropdowns.map((item) => {
          return (
            <Dropdown.Item
              eventKey={item}
              onClick={() => onSelectDropdown(item)}
            >
              {item}
            </Dropdown.Item>
          );
        })}
    </DropdownButton>
  );
};

export default RobotDropdown;
