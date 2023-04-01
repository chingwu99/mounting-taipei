import { useSelector } from "react-redux";
import { BsCheckCircle } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

const MessageToast = () => {
  const messages = useSelector((state) => state.message);
  //   console.log(messages);
  return (
    <>
      <div
        className="toast-container position-fixed"
        style={{ bottom: "15px", left: "15px" }}
      >
        {messages?.map((msg) => {
          return (
            <div
              className="toast show "
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              data-delay="3000"
              key={msg.id}
            >
              <div
                className="front-toast d-flex rounded"
                style={{
                  backgroundColor:
                    msg.type === "success"
                      ? "rgb(195, 232, 187)"
                      : "rgb(250, 164, 146)",
                }}
              >
                <div className="  d-flex justify-content-center align-items-center w-100">
                  <div className=" w-75 d-flex justify-content-center align-items-center">
                    <div className="fs-2 w-25 d-flex justify-content-center align-items-center">
                      {msg.type === "success" ? (
                        <BsCheckCircle className="text-success" />
                      ) : (
                        <BsXCircle className="text-danger" />
                      )}
                    </div>

                    <div className="fs-5 w-75 d-flex justify-content-center align-items-center">
                      {msg.text}
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
          );
        })}
      </div>
    </>
  );
};

export default MessageToast;
