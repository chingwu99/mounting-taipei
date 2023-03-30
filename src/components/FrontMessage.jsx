import { useContext } from "react";
import { FrontMessageContext } from "../contexts/frontMessageContext";
import { BsCheckCircle } from "react-icons/bs";

const FrontMessage = () => {
  const [message] = useContext(FrontMessageContext);

  return (
    <>
      <div
        className="toast-container position-fixed"
        style={{ bottom: "15px", left: "15px" }}
      >
        {message.text && (
          <div
            className="toast show "
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-delay="3000"
          >
            <div className="front-toast d-flex rounded">
              <div className="  d-flex justify-content-center align-items-center w-100">
                <div className=" w-75 d-flex justify-content-center align-items-center">
                  <div className="fs-2 w-25 d-flex justify-content-center align-items-center">
                    <BsCheckCircle className="text-success" />
                  </div>

                  <div className="fs-5 w-75 d-flex justify-content-center align-items-center">
                    {message.text}
                  </div>
                </div>
                <div className=" w-25 d-flex justify-content-end  align-items-top  h-100 ">
                  <button
                    type="button"
                    className="btn-close m-2"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FrontMessage;
