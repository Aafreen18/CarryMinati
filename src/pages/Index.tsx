import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, MessageCircle, Flame, Zap } from 'lucide-react';
import SwipeCards from '@/components/SwipeCards';
import RelationshipAdvice from '@/components/RelationshipAdvice';
import heroLogo from '@/assets/hero-logo.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src={heroLogo} 
                  alt="CarryMinati Tinder Logo" 
                  className="w-32 h-24 object-cover rounded-xl shadow-card glow-primary"
                />
                <div className="absolute -inset-2 gradient-primary rounded-xl opacity-20 blur-lg" />
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
                CarryMinati
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                TINDER
              </h2>
              <div className="flex items-center justify-center gap-2">
                <Flame className="h-8 w-8 text-primary animate-pulse" />
                <p className="text-xl text-muted-foreground font-medium">
                  Where Love Goes to Die
                </p>
                <Flame className="h-8 w-8 text-primary animate-pulse" />
              </div>
            </div>

            {/* Tagline */}
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg text-muted-foreground">
                The world's most useless dating app! Get roasted instead of matched. 
                Perfect for people who enjoy emotional damage! 💀
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30">
                  ✨ 0% Success Rate
                </span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                  🔥 100% Roast Rate
                </span>
                <span className="px-3 py-1 bg-destructive/20 text-destructive rounded-full border border-destructive/30">
                  💔 Heartbreak Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="swipe" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 gradient-card border border-primary/20">
            <TabsTrigger 
              value="swipe" 
              className="data-[state=active]:gradient-primary data-[state=active]:text-white font-semibold transition-smooth"
            >
              <Heart className="h-4 w-4 mr-2" />
              Swipe & Get Roasted
            </TabsTrigger>
            <TabsTrigger 
              value="advice" 
              className="data-[state=active]:gradient-primary data-[state=active]:text-white font-semibold transition-smooth"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              "Relationship Advice"
            </TabsTrigger>
          </TabsList>

          <TabsContent value="swipe" className="space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Swipe to Get Destroyed
                <Zap className="h-6 w-6 text-primary" />
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Every swipe is a new opportunity to get roasted! Left, right, doesn't matter - 
                you'll get burned either way! 🔥
              </p>
            </div>
            
            <SwipeCards />
          </TabsContent>

          <TabsContent value="advice" className="space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Flame className="h-6 w-6 text-accent" />
                "Expert" Relationship Advice
                <Flame className="h-6 w-6 text-accent" />
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Get world-class relationship advice that will definitely NOT help you! 
                Our AI specializes in crushing dreams! 💀
              </p>
            </div>
            
            <RelationshipAdvice />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-20 text-center space-y-4">
          <div className="gradient-card p-6 rounded-xl shadow-card border border-primary/20 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-2">
              Proudly made for the "Most Useless App" hackathon
            </p>
            <p className="text-xs text-muted-foreground">
              ⚠️ Warning: This app may cause severe damage to your self-esteem ⚠️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
