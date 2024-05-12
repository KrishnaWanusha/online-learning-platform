import React from "react";

const ViewCourse = () => {
  // Hardcoded course details
  const course = {
    title: "Apple Watch Series 7 GPS, ",
    image: "/docs/images/products/apple-watch.png",
    coordinator: "Hiruni Perera",
    category: "Business",
    description: "",
    date: "2024/05/10",
    price: "$599",
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <div className=" container  mt-28 mb-8 overflow-hidden rounded-lg border border-gray-300 shadow-lg">
        <h1 className="mt-4 mb-6 px-6 text-3xl font-semibold text-gray-900 dark:text-white">
          {course.title}
        </h1>
        <div className="mb-4 h-72 w-72">
          <img
            className="h-full w-full rounded-lg object-cover "
            src={course.image}
            alt="product image"
          />
        </div>
        <div className="px-6 pb-6 text-left">
          <p className="mb-2 text-base text-gray-900 dark:text-white">
            Coordinator: {course.coordinator}
          </p>
          <p className="mb-2 text-base text-gray-900 dark:text-white">
            Category: {course.category}
          </p>
          <p className="mb-2 text-base text-gray-900 dark:text-white">
            Description: {course.description}
          </p>
          <p className="mb-2 text-base text-gray-900 dark:text-white">
            Date: {course.date}
          </p>
          <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Price: {course.price}
          </p>
          <a
            href="#"
            className="  mb-6 rounded-lg bg-teal-500 px-8 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
