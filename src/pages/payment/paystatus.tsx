import React, { useEffect, useState } from "react";
import correct from "../../assets/check-mark.png";
import incorrect from "../../assets/incorrect.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@/contexts/auth.context";

export const Paymentstatus = () => {
  const location = useLocation();
  const { user: u } = useAuth();
  const queryParams = new URLSearchParams(location.search);
  const user = queryParams.get("user");
  const course = queryParams.get("course");
  const [success, setSuccess] = useState();

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/enrollment/create",
        { user, courseId: course },
        {
          headers: {
            Authorization: `Bearer ${u?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => setSuccess(res?.data?.success));
  }, [user, course, u]);

  return (
    <div className=" my-16 flex items-center justify-center pt-16">
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        {success ? (
          <div className="flex flex-col items-center">
            <img src={correct} alt="Successful" className="mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-green-600 dark:text-green-400">
              Payment Successful !!
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Thank you for your payment.
            </p>
            <a href="/">return to home</a>
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
            <a href="/">return to home</a>
          </div>
        )}
      </div>
    </div>
  );
};
