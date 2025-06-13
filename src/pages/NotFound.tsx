import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-6">
        <div className="text-center">
          {/* LawGPT Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-white"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-gray-700 font-semibold text-xl">LawGPT</span>
          </div>

          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            The page you're looking for doesn't exist. Let's get you back to the
            chat.
          </p>

          <Link to="/">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white">
              Back to Chat
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
