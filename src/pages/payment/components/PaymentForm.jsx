import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { LoadingContext } from "../../../contexts/loadingContext";

const PaymentForm = ({ total, name, paySubmit }) => {
  const stripe = useStripe();
  const element = useElements();
  const { loadingState, setLoadingState } = useContext(LoadingContext);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !stripe) {
      return;
    }

    setLoadingState(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    // console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: `${name}`,
        },
      },
    });

    setLoadingState(false);

    if (paymentResult.error) {
      alert("您輸入的卡號有誤！請輸入正確卡號");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("付款成功！");
        paySubmit();
      }
    }
  };

  return (
    <form className="w-100" onSubmit={paymentHandler}>
      <p className="fs-4 fw-bolder">付款卡號</p>
      <CardElement className="bg-white py-3 px-7 my-3" />
      <button
        className="btn btn-primary py-2 px-7 rounded-0 w-100"
        disabled={loadingState}
      >
        確認付款
      </button>
    </form>
  );
};

export default PaymentForm;
