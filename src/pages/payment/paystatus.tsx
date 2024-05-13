import React, { useState } from "react";
import correct from "../../assets/check-mark.png";
import incorrect from "../../assets/incorrect.png";

export const Paymentstatus = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = (success) => {
    setPaymentSuccessful(success);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        {paymentSuccessful ? (
          <div className="flex flex-col items-center">
            <img src={correct} alt="Successful" className="mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-green-600 dark:text-green-400">
              Payment Successful !!
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Thank you for your payment.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src={incorrect} alt="Unsuccessful" className="mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-600 dark:text-red-400">
              Payment Unsuccessful !!
            </h5>
            <p className="mb-3 text-center font-normal text-gray-500 dark:text-gray-400">
              Your payment was unsuccessful. Please try again.
            </p>
          </div>
        )}
        {/* <button onClick={() => handlePayment(true)}>Mark as Successful</button>
        <button onClick={() => handlePayment(false)}>
          Mark as Unsuccessful
        </button> */}
      </div>
    </div>
  );
};
