import React from "react";

export default function Login() {
  return (
    <div className="w-full">
      <div className="block rounded-lg bg-black shadow-lg dark:bg-white">
        <div className="lg:flex lg:flex-wrap flex">
          <div className="h-screen w-1/2 px-4 md:px-0">
            <div className="md:mx-6 md:p-12">
              <div className="text-center">
                <img
                  className="mx-auto w-48"
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                  We are The Lotus Team
                </h4>
              </div>

              <form>
                <p className="mb-4">Please login to your account</p>
                <div className="relative mb-4" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    className="peer-focus:text-primary dark:autofill:shadow-autofill dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                  />
                  <label className="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black">
                    Username
                  </label>
                </div>

                <div className="relative mb-4" data-twe-input-wrapper-init>
                  <input
                    type="password"
                    className="peer-focus:text-primary dark:autofill:shadow-autofill dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput11"
                    placeholder="Password"
                  />
                  <label className="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black">
                    Password
                  </label>
                </div>

                <div className="mb-12 pb-1 pt-1 text-center">
                  <button
                    className="shadow-dark-3 hover:shadow-dark-2 focus:shadow-dark-2 active:shadow-dark-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:shadow-black/30"
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    Log in
                  </button>

                  <a href="#!">Forgot password?</a>
                </div>

                <div className="flex items-center justify-between pb-6">
                  <p className="me-2 mb-0">Don't have an account?</p>
                  <button
                    type="button"
                    className="border-danger text-danger hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950 inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            className="lg:rounded-e-lg lg:rounded-bl-none flex h-screen w-1/2 items-center rounded-b-lg"
            style={{
              background:
                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
            }}
          >
            <div className="px-4 py-6 text-white md:mx-6 md:p-12">
              <h4 className="mb-6 text-xl font-semibold">
                We are more than just a company
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
