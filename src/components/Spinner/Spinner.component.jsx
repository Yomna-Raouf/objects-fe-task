import FadeLoader from "react-spinners/FadeLoader";

import './Spinner.styles.scss';

const Spinner = ({ loading, color = "#bf0022" }) => {
  return (
    <div className="spinner">
      <FadeLoader color={color} loading={loading} />
    </div>
  );
};

export default Spinner;
