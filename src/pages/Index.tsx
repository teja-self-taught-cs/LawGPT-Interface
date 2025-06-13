import { useState } from "react";
import Header from "@/components/Header";
import ChatSidebar from "@/components/ChatSidebar";
import MainChatArea from "@/components/MainChatArea";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
    // Here you would typically send the message to your API
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ${sidebarCollapsed ? "w-0" : "w-64"} overflow-hidden`}
        >
          <ChatSidebar
            isCollapsed={sidebarCollapsed}
            onToggle={toggleSidebar}
          />
        </div>

        {/* Main chat area */}
        <MainChatArea onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Index;
