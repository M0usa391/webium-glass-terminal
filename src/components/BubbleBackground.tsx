
import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  size: number;
  duration: number;
  left: number;
  opacity: number;
}

const BubbleBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  
  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 15 }, (_, i) => createBubble(i));
    setBubbles(initialBubbles);
    
    // Add new bubbles periodically
    const interval = setInterval(() => {
      setBubbles(prev => {
        // Remove bubbles that have completed animation
        const filtered = prev.filter(bubble => 
          document.getElementById(`bubble-${bubble.id}`)?.getBoundingClientRect().bottom > 0
        );
        
        // Add a new bubble
        return [...filtered, createBubble(prev.length + 1)];
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const createBubble = (id: number): Bubble => ({
    id,
    size: Math.random() * 100 + 20, // 20-120px
    duration: Math.random() * 15 + 10, // 10-25 seconds
    left: Math.random() * 100, // 0-100%
    opacity: Math.random() * 0.5 + 0.1, // 0.1-0.6
  });
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map(bubble => (
        <div
          id={`bubble-${bubble.id}`}
          key={bubble.id}
          className="bubble"
          style={{
            '--duration': bubble.duration,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            opacity: bubble.opacity,
            animationDuration: `${bubble.duration}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
