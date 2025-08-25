import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

// Roast categories
const roastBank: Record<string, string[]> = {
  love: [
    "Bhai, tera love life toh Windows Update jaisa hai—kabhi khatam hi nahi hota wait! ⏳",
    "Dating tips? Bro, tu toh abhi friendship zone ke tutorial mein phase hua hai! 📚",
    "Love advice? Tere ex ne bhi tujhse zyada commitment Pizza Hut ke coupon ko diya tha. 🍕",
  ],
  looks: [
    "Mirror bhi tujhe dekh ke blur ho jata hoga! 🪞",
    "Bhai, tu toh filter ke bina horror movie lagta hai! 👻",
    "Tera DP dekh ke toh log WiFi off kar dete honge. 📴",
  ],
  confidence: [
    "Pickup lines? Bro, tu toh apna naam bolne mein bhi buffering karta hai. ⏳",
    "Confidence chahiye? Gym ja, dumbbell uthaa pehle, girls baad mein! 🏋️",
    "Bro, tu toh elevator pitch bhi stairs pe deta hai. 🛗➡️🪜",
  ],
  social: [
    "Relationship skills? Bhai tu toh group chat mein bhi ignored hai. 📵",
    "Tu social nahi antisocial bhi nahi—bas invisible hai. 👀",
    "Girls ko approach karega? Bro, tu toh Zomato delivery boy ko bhi thanks nahi bolta! 🚴",
  ],
  apps: [
    "Tinder? Bro, tu toh Candy Crush mein bhi left swipe ho jaata hai. 🍭",
    "Right swipe karna seekh pehle, warna AI bhi tujhe reject karega! 🤖",
    "Bhai, dating apps pe tera bio dekh ke log uninstall kar dete honge. 📱"
  ],
  generic: [
    "Bro, tera sabse bada relationship hai WiFi ke sath. 📡",
    "Love life improve karna hai? Gym join kar aur shampoo change kar. 💪🧴",
    "Bhai tu advice lene aaya hai ya apne future loneliness ka trailer dekhne? 🎬"
  ]
};

// Keyword map
const keywordMap: Record<string, keyof typeof roastBank> = {
  "crush": "love",
  "love": "love",
  "girlfriend": "love",
  "boyfriend": "love",
  "date": "love",
  "romance": "love",

  "ugly": "looks",
  "handsome": "looks",
  "beautiful": "looks",
  "face": "looks",
  "photo": "looks",
  "dp": "looks",

  "confidence": "confidence",
  "impress": "confidence",
  "talk": "confidence",
  "approach": "confidence",
  "nervous": "confidence",
  "shy": "confidence",

  "friend": "social",
  "chat": "social",
  "social": "social",
  "ignored": "social",
  "group": "social",

  "tinder": "apps",
  "bumble": "apps",
  "hinge": "apps",
  "app": "apps",
  "swipe": "apps"
};

// Function to analyze user input
const getRoast = (input: string): string => {
  const lowerInput = input.toLowerCase();

  // Match keywords
  for (const keyword in keywordMap) {
    if (lowerInput.includes(keyword)) {
      const category = keywordMap[keyword];
      const roasts = roastBank[category];
      return roasts[Math.floor(Math.random() * roasts.length)];
    }
  }

  // Fallback: generic roast
  const generic = roastBank.generic;
  return generic[Math.floor(Math.random() * generic.length)];
};

const RelationshipAdvice: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to CarryMinati's 'Relationship Advisor' 😈 — Ask me anything about love, and I’ll roast you for free!",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getRoast(inputValue),
        isBot: true
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="gradient-card shadow-card border border-primary/20">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full gradient-primary glow-primary">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">CarryMinati's RoastBot 🔥</h3>
              <p className="text-muted-foreground text-sm">Your love life = My punchline</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4 max-h-96 overflow-y-auto mb-6 scrollbar-thin">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 transition-all duration-300 ease-out transform ${
                  message.isBot ? 'justify-start animate-fade-in' : 'justify-end animate-fade-in-scale'
                }`}
              >
                {message.isBot && (
                  <div className="p-2 rounded-full bg-primary/20">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}

                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-md ${
                    message.isBot
                      ? 'bg-secondary text-secondary-foreground rounded-tl-none'
                      : 'gradient-primary text-white glow-primary/30 rounded-tr-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>

                {!message.isBot && (
                  <div className="p-2 rounded-full bg-accent/20">
                    <User className="h-4 w-4 text-accent" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="p-2 rounded-full bg-primary/20">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-secondary px-4 py-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-400" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex gap-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me for advice... if you dare! 😈"
              className="flex-1 bg-secondary border-primary/30 focus:border-primary transition-smooth"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              variant="hero"
              size="icon"
              disabled={!inputValue.trim() || isTyping}
              className="shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground italic">
              ⚠️ Warning: This bot is 100% roasting, 0% helping.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RelationshipAdvice;
