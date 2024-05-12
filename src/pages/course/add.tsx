import React from "react";

export default function CourseAddPage() {
  return (
    <>
      <section className="mx-auto mt-32 mb-12 max-w-4xl rounded-md bg-teal-500 p-6 shadow-md dark:bg-gray-800">
        <h1 className="text-xl font-bold capitalize text-white dark:text-white">
          Add Course
        </h1>
        <form>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">Title</label>
              <input
                id="title"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-gray-400"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">Category</label>
              <select className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500">
                <option>Information Technology</option>
                <option>Engineering</option>
                <option>Business</option>
                <option>Science and Humanities</option>
              </select>
            </div>

            <div>
              <label className="text-white dark:text-gray-200">
                Coordinator
              </label>
              <input
                id="coordinator"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Price</label>
              <input
                id="price"
                type="number"
                min={0}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Description
              </label>
              <textarea
                id="textarea"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-6 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="text-white dark:text-gray-200">Date</label>
              <input
                id="date"
                type="date"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block  font-medium text-white">Image</label>
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md  font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 hover:text-black">
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="transform rounded-md bg-black px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-gray-400 focus:bg-gray-600 focus:outline-none">
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
