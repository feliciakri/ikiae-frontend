const SearhButton = () => {
  // The logic for searching for products hasn't been created yet
  return (
    <div className="hidden md:flex justify-between border-2 lg:w-1/4 border-gray-300 bg-gray-100 rounded">
      <input
        className="bg-gray-100 md:h-8 pl-2 pr-8 text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button className="px-2">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      </button>
    </div>
  );
};

export default SearhButton;
