import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage?: (message: string) => void;
  placeholder?: string;
}

const ChatInput = ({
  onSendMessage,
  placeholder = "Ask me anything about law",
}: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && onSendMessage) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full pr-12 py-4 text-base rounded-xl border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white shadow-sm"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!message.trim()}
            className="absolute right-2 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-gray-800"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
