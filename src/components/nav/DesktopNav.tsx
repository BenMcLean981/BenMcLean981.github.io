import { Link } from "react-router-dom";

export function DesktopNav() {
  return (
    <div className="flex space-x-7">
      <div>
        <Link to="/" className="flex items-center py-4 px-2">
          <img src="favicon.ico" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-semibold text-gray-500 text-lg hover:text-blue-500 transition duration-300">
            Ben McLean
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-1">
        <Link
          to="/resume"
          className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
        >
          Resume
        </Link>
        <Link
          to="/minesweeper"
          className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
        >
          Minesweeper
        </Link>
      </div>
    </div>
  );
}
