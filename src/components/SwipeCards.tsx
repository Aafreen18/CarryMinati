import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, X, MessageCircle } from 'lucide-react';

const fakeProfiles = [
  {
    id: 1,
    name: 'Study Ka 14',
    age: 19,
    bio: 'Engineering student who thinks coding = copy paste from StackOverflow',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Gaming Pro Max',
    age: 22,
    bio: 'Pro gamer with 0.5 K/D ratio in BGMI',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Sigma Grindset',
    age: 20,
    bio: 'Entrepreneur with a 4-subscriber YouTube channel',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'Gym Bro',
    age: 24,
    bio: 'Lifts 2kg dumbbells, posts motivational quotes daily',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Crypto Expert',
    age: 21,
    bio: 'Lost life savings in Dogecoin, still giving financial advice',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop&crop=face'
  }
];

// 🚀 Better & more contextual roast responses
const roasts = {
  Study: [
    "StackOverflow se copy kar ke degree nahi milti bhai! 📚",
    "Assignment ka deadline zyada pasand hai ya Tinder ka match? 😂",
    "Bhai, compiler bhi tujhe left swipe karega! 🖥️"
  ],
  Gaming: [
    "0.5 K/D? Bhai bots bhi tujhe dekh ke hans rahe hain! 🎮",
    "Tu game kholta hai ya apne teammates ko defeat deta hai? 💀",
    "Pro gamer? Zyada 'loading screen specialist' lag raha hai. ⏳"
  ],
  Sigma: [
    "4 subscribers? Bro, tera channel family group me bhi viral nahi hua! 📉",
    "Sigma grindset? Zyada lag raha hai tuition mindset. 📚",
    "Hustle itna mat kar, pehle ek subscriber toh bada le. 😭"
  ],
  Gym: [
    "2kg dumbbell uthata hai, par caption likhta hai 'beast mode' 🏋️",
    "Protein shake se zyada toh filter lagata hai Insta pe. 📸",
    "Mirror selfie ke alawa gym ka aur kaam karta hai kya? 🪞"
  ],
  Crypto: [
    "Crypto expert? Tu toh apna khud ka password bhool jaata hai! 🔑",
    "Portfolio dekh ke lagta hai wallet bhi tujhe roast karta hoga. 📉",
    "Dogecoin ne tujhe investor se comedian bana diya. 🐶"
  ],
  Generic: [
    "Swipe left/right se zyada tu exam pass kare toh acha hai! 📚",
    "Dating app pe hai, lekin teri bio padh ke lagta hai tuition chahiye. ✏️",
    "Bro, tere selfie angles se trigonometry ki yaad aa gayi! 📐"
  ]
};

const SwipeCards: React.FC = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showRoast, setShowRoast] = useState(false);
  const [currentRoast, setCurrentRoast] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const currentProfile = fakeProfiles[currentProfileIndex];

  const getRoastForProfile = (profileName: string) => {
    if (profileName.includes("Study")) return roasts.Study;
    if (profileName.includes("Gaming")) return roasts.Gaming;
    if (profileName.includes("Sigma")) return roasts.Sigma;
    if (profileName.includes("Gym")) return roasts.Gym;
    if (profileName.includes("Crypto")) return roasts.Crypto;
    return roasts.Generic;
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    setIsAnimating(true);

    const profileRoasts = getRoastForProfile(currentProfile.name);
    const randomRoast = profileRoasts[Math.floor(Math.random() * profileRoasts.length)];
    setCurrentRoast(randomRoast);
    setShowRoast(true);

    setTimeout(() => {
      setShowRoast(false);
      nextProfile();
    }, 2500);
  };

  const nextProfile = () => {
    setCurrentProfileIndex((prev) => (prev + 1) % fakeProfiles.length);
    setIsAnimating(false);
  };

  if (!currentProfile) return null;

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Roast Overlay */}
      {showRoast && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="gradient-roast px-8 py-6 rounded-2xl shadow-card animate-roast-bounce glow-accent">
            <div className="text-center space-y-3">
              <div className="text-5xl">🔥</div>
              <p className="text-white font-semibold text-lg leading-snug">{currentRoast}</p>
            </div>
          </div>
        </div>
      )}

      {/* Profile Card */}
      <Card className={`relative overflow-hidden shadow-card transition-smooth rounded-2xl ${isAnimating ? 'animate-card-swipe' : ''}`}>
        <div className="gradient-card">
          <div className="relative h-[420px] overflow-hidden">
            <img
              src={currentProfile.image}
              alt={currentProfile.name}
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1 drop-shadow">
              {currentProfile.name}, {currentProfile.age}
            </h3>
            <p className="text-sm opacity-90 mb-5 leading-relaxed">{currentProfile.bio}</p>
            
            {/* Action Buttons */}
            <div className="flex justify-center gap-5">
              <Button
                variant="roast"
                size="icon"
                className="h-14 w-14 rounded-full shadow-lg hover:scale-105 transition"
                onClick={() => handleSwipe('left')}
                disabled={isAnimating}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="gaming"
                size="icon"
                className="h-12 w-12 rounded-full shadow-lg hover:scale-105 transition"
                onClick={() => handleSwipe('right')}
                disabled={isAnimating}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              
              <Button
                variant="hero"
                size="icon"
                className="h-14 w-14 rounded-full shadow-lg hover:scale-105 transition"
                onClick={() => handleSwipe('right')}
                disabled={isAnimating}
              >
                <Heart className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Instructions */}
      <div className="mt-5 text-center">
        <p className="text-muted-foreground text-sm italic">
          Swipe left or right — no matches, only burns. 😈
        </p>
      </div>
    </div>
  );
};

export default SwipeCards;
