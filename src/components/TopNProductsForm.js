import axios from "axios";
import React, { useState } from "react";

const AllProductsForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    categoryName: "",
    topN: "",
    minPrice: "",
    maxPrice: "",
  });

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { companyName, categoryName, topN, minPrice, maxPrice } = formData;

    const token = "your_token_here";

    try {
      // const response = await axios.get(
      //   `https://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products`,
      //   {
      //     params: {
      //       top: topN,
      //       minPrice: `${minPrice}p`,
      //       maxPrice: `${maxPrice}p`,
      //     },
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      // console.log(response.data);

      const response = [
        {
          productName: "Laptop 1",
          price: 2236,
          rating: 4.7,
          discount: 63,
          availability: "yes",
        },
        {
          productName: "Laptop 13",
          price: 1244,
          rating: 4.5,
          discount: 45,
          availability: "out-of-stock",
        },
        {
          productName: "Laptop 1",
          price: 2236,
          rating: 4.7,
          discount: 63,
          availability: "yes",
        },
        {
          productName: "Laptop 13",
          price: 1244,
          rating: 4.5,
          discount: 45,
          availability: "out-of-stock",
        },
        {
          productName: "Laptop 1",
          price: 2236,
          rating: 4.7,
          discount: 63,
          availability: "yes",
        },
        {
          productName: "Laptop 13",
          price: 1244,
          rating: 4.5,
          discount: 45,
          availability: "out-of-stock",
        },
        {
          productName: "Laptop 1",
          price: 2236,
          rating: 4.7,
          discount: 63,
          availability: "yes",
        },
        {
          productName: "Laptop 13",
          price: 1244,
          rating: 4.5,
          discount: 45,
          availability: "out-of-stock",
        },
        {
          productName: "Laptop 1",
          price: 2236,
          rating: 4.7,
          discount: 63,
          availability: "yes",
        },
        {
          productName: "Laptop 13",
          price: 1244,
          rating: 4.5,
          discount: 45,
          availability: "out-of-stock",
        },
        {
          productName: "Laptop 1",
          price: 2236,
          rating: 4.7,
          discount: 63,
          availability: "yes",
        },
        {
          productName: "Laptop 13",
          price: 1244,
          rating: 4.5,
          discount: 45,
          availability: "out-of-stock",
        },
        {
          productName: "Laptop 1",
          price: 2236,
          rating: 4.7,
          discount: 63,
          availability: "yes",
        },
        {
          productName: "Laptop 13",
          price: 1244,
          rating: 4.5,
          discount: 45,
          availability: "out-of-stock",
        },
        // Add more products here if needed
      ];

      setProducts(response);
      setLoading(false); // Set loading state to false
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-full w-[50vw] items-center justify-center overflow-x-hidden">
      {products.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold m-4 text-white">Products</h1>
          <div className="flex flex-col w-[50vw] gap-x-4 items-center h-[100vh] justify-center bg-gray-200 bg-opacity-25 shadow-lg rounded-lg p-8 border border-gray-300 border-opacity-25 glassmorphism overflow-x-scroll">
            {currentProducts.map((product, index) => (
              <div class="w-1/2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <p>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.productName}
                  </h5>
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price: {product.price}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Rating: {product.rating}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Discount: {product.discount}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Availability: {product.availability}
                </p>
              </div>
            ))}
          </div>
          {products.length > productsPerPage && (
            <div className="mt-4">
              {Array.from({
                length: Math.ceil(products.length / productsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  className="mr-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center bg-gray-200 bg-opacity-25 shadow-lg rounded-lg p-8 border border-gray-300 border-opacity-25 glassmorphism">
          <form className="space-y-4 h-full w-[50vw]" onSubmit={handleSubmit}>
            <div className="glassmorphism">
              <label htmlFor="companyName" className="block font-semibold mb-1">
                Company Name:
              </label>
              <select
                id="companyName"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-transparent focus:outline-none focus:border-blue-500 neumorphism"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="AMZ">AMZ</option>
                <option value="FLP">FLP</option>
                <option value="SNP">SNP</option>
                <option value="MYN">MYN</option>
                <option value="AZO">AZO</option>
              </select>
            </div>
            <div className="relative glassmorphism">
              <label
                htmlFor="categoryName"
                className="block font-semibold mb-1"
              >
                Category Name:
              </label>
              <select
                id="categoryName"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-transparent focus:outline-none focus:border-blue-500 neumorphism"
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Phone">Phone</option>
                <option value="Computer">Computer</option>
                <option value="TV">TV</option>
                <option value="Earphone">Earphone</option>
                <option value="Tablet">Tablet</option>
                <option value="Charger">Charger</option>
                <option value="Mouse">Mouse</option>
                <option value="Keypad">Keypad</option>
                <option value="Bluetooth">Bluetooth</option>
                <option value="Pendrive">Pendrive</option>
                <option value="Remote">Remote</option>
                <option value="Speaker">Speaker</option>
                <option value="Headset">Headset</option>
                <option value="Laptop">Laptop</option>
                <option value="PC">PC</option>
              </select>
            </div>
            <div className="relative glassmorphism">
              <label htmlFor="topN" className="block font-semibold mb-1">
                Top N:
              </label>
              <input
                id="topN"
                type="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-transparent focus:outline-none focus:border-blue-500 neumorphism"
                onChange={handleChange}
              />
            </div>
            <div className="relative glassmorphism">
              <label htmlFor="minPrice" className="block font-semibold mb-1">
                Min Price:
              </label>
              <input
                id="minPrice"
                type="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-transparent focus:outline-none focus:border-blue-500 neumorphism"
                onChange={handleChange}
              />
            </div>
            <div className="relative glassmorphism">
              <label htmlFor="maxPrice" className="block font-semibold mb-1">
                Max Price:
              </label>
              <input
                id="maxPrice"
                type="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-transparent focus:outline-none focus:border-blue-500 neumorphism"
                onChange={handleChange}
              />
            </div>
            <div className="relative glassmorphism flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AllProductsForm;
