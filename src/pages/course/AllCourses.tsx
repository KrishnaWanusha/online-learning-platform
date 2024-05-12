import React from "react";

const AllCourses = () => {
  // Hardcoded course details
  const courses = [
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "/docs/images/products/apple-watch.png",
      coordinator: "Hiruni Perera",
      category: "Business",
      price: "$599",
    },
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "/docs/images/products/apple-watch.png",
      coordinator: "Hiruni Perera",
      category: "Business",
      price: "$599",
    },
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "/docs/images/products/apple-watch.png",
      coordinator: "Hiruni Perera",
      category: "Business",
      price: "$599",
    },
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: "/docs/images/products/apple-watch.png",
      coordinator: "Hiruni Perera",
      category: "Business",
      price: "$599",
    },
  ];

  return (
    <div className="lg:grid-cols-3 mt-28 mb-9 grid grid-cols-1 gap-2 px-6 sm:grid-cols-3">
      {courses.map((course, index) => (
        <div
          key={index}
          className="mb-8 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
        >
          <a href="#">
            <img
              className="rounded-t-lg p-8"
              src={course.image}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {course.title}
              </h5>
            </a>
            <a href="#">
              <h3 className="text-base  tracking-tight text-gray-900 dark:text-white">
                {course.coordinator}
              </h3>
            </a>
            <a href="#">
              <h3 className="text-base tracking-tight text-gray-900 dark:text-white">
                {course.category}
              </h3>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {course.price}
              </span>
              <a
                href="#"
                className="rounded-lg bg-teal-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
