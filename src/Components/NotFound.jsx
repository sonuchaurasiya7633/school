const NotFound = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <img src="./images/not-found.svg" alt="Not Found" className="w-3/4 md:w-1/2" />
      <h4 className="text-lg md:text-xl text-indigo-500 mt-4">404 | Not found</h4>
    </div>
  );
};

export default NotFound;