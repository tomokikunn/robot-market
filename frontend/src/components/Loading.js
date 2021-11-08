import { Modal, Spinner } from "react-bootstrap";
import "../styles/components/Loading.scss";

const Loading = (props) => {
  const { show } = props;
  return (
    <Modal show={show} centered className={"loading-spinner-modal"}>
      <div className="loading-container">
        <Spinner className="loading-spinner" animation="border" />
        <div className="loading-text">Loading</div>
      </div>
    </Modal>
  );
};

export default Loading;
