import { Spinner } from "components";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <Spinner loading={isLoading} />
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinner;