export const Loader = ({ loading }) => {
  return (
    loading && (
      <div className="loader-container position-absolute">
        <div className="loader"></div>
      </div>
    )
  );
};
