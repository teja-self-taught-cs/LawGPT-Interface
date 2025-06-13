import ChatInput from "./ChatInput";

interface MainChatAreaProps {
  onSendMessage?: (message: string) => void;
}

const MainChatArea = ({ onSendMessage }: MainChatAreaProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white min-h-0">
      {/* Central content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* LawGPT Logo */}
        <div className="flex items-center gap-3 mb-8">
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

        {/* Main heading */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          What can I help with
        </h1>
      </div>

      {/* Input area at the bottom */}
      <div className="w-full">
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default MainChatArea;
