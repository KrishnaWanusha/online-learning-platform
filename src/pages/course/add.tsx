import firebase from "@/config/firebase";
import React, { useCallback, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CourseAddPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState<any>();
  const [state, setState] = useState<any>({
    category: "Information Technology",
    language: "English",
  });

  const submit = useCallback(() => {
    const storage = getStorage(firebase);
    const storageRef = ref(
      storage,
      `courses/${state?.title ?? "course_image"}`
    );
    uploadBytes(storageRef, image)
      .then(() => getDownloadURL(storageRef))
      .then((url) => {
        return axios.post("http://localhost:4000/course/add", {
          ...state,
          image: url,
        });
      })
      .then((res) => {
        if (res.data) navigate("/courses");
      });
  }, [state, image]);

  return (
    <>
      <section className="mx-auto mt-32 mb-12 max-w-4xl rounded-md bg-teal-500 p-6 shadow-md dark:bg-gray-800">
        <h1 className="text-xl font-bold capitalize text-white dark:text-white">
          Add Course
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="text-white dark:text-gray-200">Title</label>
            <input
              id="title"
              type="text"
              onChange={(e) =>
                setState((s: any) => ({ ...s, title: e.target.value }))
              }
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-gray-400"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200">Category</label>
            <select
              onChange={(e) =>
                setState((s: any) => ({ ...s, category: e.target.value }))
              }
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
            >
              <option>Information Technology</option>
              <option>Engineering</option>
              <option>Business</option>
              <option>Science and Humanities</option>
            </select>
          </div>

          <div>
            <label className="text-white dark:text-gray-200">Language</label>
            <select
              onChange={(e) =>
                setState((s: any) => ({ ...s, language: e.target.value }))
              }
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
            >
              <option>English</option>
              <option>Sinhala</option>
              <option>Spanish</option>
              <option>Chineese</option>
            </select>
          </div>
          <div>
            <label className="text-white dark:text-gray-200">Price</label>
            <input
              id="price"
              type="number"
              min={0}
              onChange={(e) =>
                setState((s: any) => ({ ...s, price: e.target.value }))
              }
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200">
              Duration (hours)
            </label>
            <input
              type="number"
              onChange={(e) =>
                setState((s: any) => ({ ...s, duration: e.target.value }))
              }
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-white dark:text-gray-200">Description</label>
            <textarea
              id="textarea"
              onChange={(e) =>
                setState((s: any) => ({ ...s, description: e.target.value }))
              }
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-6 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
            ></textarea>
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
                      onChange={async (e) => {
                        const file = e?.target?.files?.[0]!;

                        if (file) {
                          setImage(file);
                        }
                      }}
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
          <button
            onClick={() => submit()}
            className="transform rounded-md bg-black px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-gray-400 focus:bg-gray-600 focus:outline-none"
          >
            Save
          </button>
        </div>
      </section>
    </>
  );
}
