import React, { useContext } from "react";
import ReactLoading from "react-loading";
import { LoadingContext } from "../contexts/loadingContext";

const Loading = () => {
  const { loadingState } = useContext(LoadingContext);
  return (
    <>
      {loadingState ? (
        <div className="reactLoading-container">
          <ReactLoading type="bars" color="#f5deb3" height={100} width={100} />
        </div>
      ) : null}
    </>
  );
};

export default Loading;
