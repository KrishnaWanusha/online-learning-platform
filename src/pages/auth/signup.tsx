import React, { useCallback, useState } from "react";
import HomeLogo from "@/assets/HomeLogo.png";
import { useToasts } from "react-toast-notifications";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [state, setState] = useState<any>({});

  const signup = useCallback(() => {
    try {
      if (state?.password !== state?.confirmpassword) {
        throw new Error("Password do not match!");
      }
      const { _confirmpassword, ...rest } = state;
      axios
        .post("http://localhost:5000/auth/signup", {
          ...rest,
        })
        .then((res) => {
          if (res.data) {
            addToast("Registration Successfull", {
              appearance: "success",
              autoDismiss: true,
            });
            navigate("/auth/login");
          }
        });
    } catch (e: any) {
      addToast(e.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }, [state]);

  return (
    <div className="mb-12 mt-32 flex items-center justify-center">
      <div className="mt-10 block rounded-lg bg-white shadow-lg dark:bg-white">
        <div className="lg:flex lg:flex-wrap flex">
          <div className="w-full px-4  md:px-0">
            <div className=" md:mx-6 md:px-8 md:py-2">
              <div className="flex items-center justify-center pb-6">
                <img
                  alt="logo"
                  src={HomeLogo}
                  style={{
                    width: "150px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
              </div>

              <form>
                <p className="mb-4">Please Sign Up to your account</p>
                <div className="relative mb-4" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    className="peer-focus:text-primary dark:autofill:shadow-autofill dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                    onChange={(e) =>
                      setState((s: any) => ({ ...s, username: e.target.value }))
                    }
                  />
                  <label className="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black">
                    Username
                  </label>
                </div>

                <div className="relative mb-4" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    className="peer-focus:text-primary dark:autofill:shadow-autofill dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    onChange={(e) =>
                      setState((s: any) => ({ ...s, email: e.target.value }))
                    }
                  />
                  <label className="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black">
                    Email
                  </label>
                </div>

                <div className="relative mb-4" data-twe-input-wrapper-init>
                  <input
                    type="password"
                    className="peer-focus:text-primary dark:autofill:shadow-autofill dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput11"
                    placeholder="Password"
                    onChange={(e) =>
                      setState((s: any) => ({ ...s, password: e.target.value }))
                    }
                  />
                  <label className="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black">
                    Password
                  </label>
                </div>

                <div className="relative mb-4" data-twe-input-wrapper-init>
                  <input
                    type="password"
                    className="peer-focus:text-primary dark:autofill:shadow-autofill dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput11"
                    onChange={(e) =>
                      setState((s: any) => ({
                        ...s,
                        confirmpassword: e.target.value,
                      }))
                    }
                  />
                  <label
                    htmlFor="exampleFormControlInput11"
                    className="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black"
                  >
                    Confirm Password
                  </label>
                </div>

                <div className="mb-12 pb-1 pt-1 text-center">
                  <button
                    className="shadow-dark-3 hover:shadow-dark-2 focus:shadow-dark-2 active:shadow-dark-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mb-3 inline-block w-full rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:shadow-black/30"
                    type="button"
                    onClick={signup}
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Sign Up
                  </button>
                  <div className="flex items-center justify-between pb-6">
                    <p className="me-2 mr-3 mb-0">Already have an account?</p>
                    <button
                      type="button"
                      className="border-danger text-danger hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950 inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
