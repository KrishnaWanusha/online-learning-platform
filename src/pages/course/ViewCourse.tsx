import ButtonComponent from "@/components/ButtonComponent";
import { useAuth } from "@/contexts/auth.context";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewCourse = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [state, setState] = useState<any>({});

  const makePayment = useCallback(async () => {
    const stripe = await loadStripe(
      "pk_test_51PDQlFJwc1F7FQXgZmjtg2R5KBXUksVV7plExES7AS1jib1ppG0DZnyINSTZWzxKUYzSDstIp60iIbTaGq3QZyIw00aeCzOs13"
    );

    await axios
      .post(
        "http://localhost:5000/payment/create",
        {
          data: state,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const session = res.data;
        const result = stripe?.redirectToCheckout({
          sessionId: session.id,
        });
      });
  }, [state, loadStripe, user]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/course/get/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setState(res.data));
  }, []);

  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <div className=" container mt-28 mb-8 overflow-hidden rounded-lg border border-gray-300 shadow-lg dark:bg-gray-800">
        <h1 className="mt-4 mb-6 px-6 text-3xl font-semibold text-gray-900 dark:text-white">
          {state?.title}
        </h1>
        <div className="mx-auto mb-4 flex h-72 w-full items-center justify-center">
          <img
            className="h-full rounded-lg object-cover "
            src={state?.image}
            alt="product image"
          />
        </div>
        <div className="px-6 pb-6 text-left">
          <p className="mb-2 text-base text-gray-900 dark:text-white">
            Coordinator: {state?.language}
          </p>
          <p className="mb-2 text-base text-gray-900 dark:text-white">
            Category: {state?.category}
          </p>
          <p className="mb-2 text-base text-gray-900 dark:text-white">
            Description: {state?.description}
          </p>
          <p className="mb-2 text-base text-gray-900 dark:text-white">
            Date: {state?.duration}
          </p>
          <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Price: {state?.price}
          </p>
          <ButtonComponent onClick={makePayment}>Buy Now</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
