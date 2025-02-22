import { Link } from "react-router-dom";
const Header = () => {
  return (
    
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Binary_Books Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              BinaryBooks
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span className="bi bi-gear-wide-connected cursor-pointer text-xl text-gray-500 dark:text-white"></span>
            <span className="bi bi-search cursor-pointer text-xl text-gray-500 dark:text-white"></span>
                <Link
                  to="/cart"
                  className="bi bi-cart-plus cursor-pointer text-xl text-gray-500 dark:text-white"
                >
                  <span className="absolute top-4 right-15 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full dark:bg-red-700">3</span>
                </Link>
            
            <span className="bi bi-person-circle cursor-pointer text-xl text-gray-500 dark:text-white"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
