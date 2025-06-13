import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

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
    <Sidebar className="w-64 bg-gray-100 border-r border-gray-200">
      <SidebarHeader className="flex flex-row items-center justify-between p-3 border-b border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="w-8 h-8 hover:bg-gray-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarMenu>
          {chatTitles.map((chat) => (
            <SidebarMenuItem key={chat.id}>
              <SidebarMenuButton className="w-full justify-start text-left p-3 rounded-lg hover:bg-gray-200 text-gray-700 text-sm">
                {chat.title}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default ChatSidebar;
