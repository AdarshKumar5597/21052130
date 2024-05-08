import React, { useState } from "react";
import "./App.css";
import TopNProductsForm from "./components/TopNProductsForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="h-[100vh] w-[100vw] flex flex-row overflow-hidden p-5 bg-gray-800">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4">
                    <a href="/" className="flex flex-col justify-between items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mb-52" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold flex flex-col dark:text-white">
                          <p>A</p>
                          <p>D</p>
                          <p>A</p>
                          <p>R</p>
                          <p>S</p>
                          <p>H</p>
                          <br></br>
                          <p>M</p>
                          <p>A</p>
                          <p>R</p>
                          <p>T</p>
                        </span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </nav>
      <div className="w-1/2 flex items-center justify-center h-full">
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Select Top N Products
        </button>
      </div>
      <div className="w-1/2 h-full">
        {showForm && <TopNProductsForm/>}
      </div>
    </div>
  );
}

export default App;
