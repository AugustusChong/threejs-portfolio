import PropTypes from "prop-types";
import { Dna } from "react-loader-spinner";

const DnaLoader = ({ spinnerProps }) => {
  return (
    <div className={`${spinnerProps.divClassName}`}>
      <Dna
        visible={true}
        height={spinnerProps.height}
        width={spinnerProps.width}
        ariaLabel="dna-loading"
        wrapperClass={spinnerProps.wrapperClassName}
        wrapperStyle={spinnerProps.wrapperStyle}
      />
    </div>
  );
};

DnaLoader.propTypes = {
  spinnerProps: PropTypes.shape({
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    divClassName: PropTypes.string.isRequired,
    wrapperClassName: PropTypes.string,
    wrapperStyle: PropTypes.object,
  }).isRequired,
};

export default DnaLoader;
