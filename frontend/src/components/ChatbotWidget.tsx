import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Minimize2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendMessage } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", content: "Γεια σας! Πώς μπορώ να σας βοηθήσω;" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    // Add user message
    const userMessage = { type: "user", content: message };
    setMessages(prev => [...prev, userMessage]);

    const currentMessage = message;
    setMessage("");
    setIsLoading(true);

    try {
      // Use your utility function to send the message to n8n
      const response = await sendMessage(currentMessage);

      // Use the response from n8n as the bot reply
      setMessages(prev => [
        ...prev,
        { type: "bot", content: response.reply ?? response.message }
      ]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [
        ...prev,
        { type: "bot", content: "Συγγνώμη, υπήρξε πρόβλημα. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά." }
      ]);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 bg-basketball-orange hover:bg-basketball-orange/90 transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-basketball-blue to-basketball-orange text-white p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="font-heading text-lg">Βοηθός Ακαδημίας</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 w-8 h-8"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 w-8 h-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg font-body text-sm ${
                      msg.type === "user"
                        ? "bg-basketball-orange text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    <ReactMarkdown>
                      {typeof msg.content === "string"
                        ? msg.content.replace(/\\n/g, "\n")
                        : ""}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-basketball-orange rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-basketball-orange rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-basketball-orange rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>

          <div className="p-4 border-t bg-white">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ρωτήστε μας για προπονήσεις, εγγραφές..."
                className="flex-1 font-body"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="basketball" 
                size="icon"
                disabled={isLoading || !message.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatbotWidget;