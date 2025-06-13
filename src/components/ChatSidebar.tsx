import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatSidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const ChatSidebar = ({ isCollapsed, onToggle }: ChatSidebarProps) => {
  // Generate mock chat titles for the sidebar
  const chatTitles = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: "Chat title",
  }));

  return (
    <div className="w-64 h-full bg-gray-100 border-r border-gray-200 flex flex-col">
      <div className="flex flex-row items-center justify-between p-3 border-b border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="w-8 h-8 hover:bg-gray-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto">
        <div className="space-y-1">
          {chatTitles.map((chat) => (
            <button
              key={chat.id}
              className="w-full text-left p-3 rounded-lg hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
            >
              {chat.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
