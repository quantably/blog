import React from 'react';
import { Clock, Tag, Bookmark, Share2, Presentation, BarChart2, Database, PieChart, FileText, Code2, MousePointer } from 'lucide-react';

const SocialMediaCard = ({ 
  title = "The Invisible Skill That Decides AI Success",
  tags = ["Leadership"],
  time = "3 min",
  filename = "post-slug",
  siteName = "Quantably"
}) => {
  // Reading progress: assume 10 min = 100%
  const minutes = parseInt(time);
  const progress = Math.min(100, Math.round((minutes / 10) * 100));

  const displayUrl = `quantably.co/blog/${filename}`;

  // Data icon pattern grid (4 rows x 6 cols)
  const iconRows = 4;
  const iconCols = 6;
  const iconSize = 56; // Larger and more prominent
  const cardWidth = 1200;
  const cardHeight = 630;
  const iconHSpacing = (cardWidth - iconSize) / (iconCols - 1);
  const iconVSpacing = (cardHeight - iconSize) / (iconRows - 1);
  const iconXOffset = 0;
  const iconYOffset = 0;
  const patternIcons = [Presentation, BarChart2, Database, PieChart, FileText, Code2];

  // Helper to get a random angle between -45 and 45 degrees
  const getRandomAngle = (row, col) => {
    // Use a deterministic pseudo-random function for SSR consistency
    const seed = row * iconCols + col;
    return (Math.sin(seed) * 45) - 22.5; // Range: -45 to +45
  };

  return (
    <div className="relative w-[1200px] h-[630px] bg-gradient-to-br from-green-100 to-green-50 overflow-hidden border border-gray-300 rounded-2xl shadow-2xl">
      {/* Window frame border */}
      <div className="absolute inset-0 border border-gray-300 rounded-2xl pointer-events-none z-40" />

      {/* Step 5: Add background icon pattern behind window */}
      <div className="w-[1200px] h-[630px] relative">
        {/* Data icon pattern layer - behind window */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
          {Array.from({ length: iconRows }).map((_, row) =>
            Array.from({ length: iconCols }).map((_, col) => {
              const hash = Math.abs(Math.sin((row + 1) * 92821 + (col + 1) * 71933));
              if (hash > 0.9) return null;
              const seed = row * iconCols + col;
              const Icon = patternIcons[seed % patternIcons.length];
              const angle = getRandomAngle(row, col);
              return (
                <Icon
                  key={`${row}-${col}`}
                  size={iconSize}
                  className="text-gray-400"
                  style={{
                    position: 'absolute',
                    left: `${col * iconHSpacing + iconXOffset}px`,
                    top: `${row * iconVSpacing + iconYOffset}px`,
                    transform: `rotate(${angle}deg)`
                  }}
                />
              );
            })
          )}
        </div>
        {/* Foreground window - centered, fixed size */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-white rounded-2xl border border-gray-300 shadow-2xl w-[1000px] h-[500px] flex flex-col">
            {/* Address bar and controls at the top, with time and tags right-aligned */}
            <div className="h-14 flex items-center px-4 border-b border-gray-200">
              {/* Window controls */}
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-700 shadow-sm" />
                <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-yellow-600 shadow-sm" />
                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-green-700 shadow-sm" />
              </div>
              {/* Site name in title bar */}
              <div className="flex-1 text-center">
                <span className="text-base font-semibold text-gray-700 tracking-wide">{siteName}</span>
              </div>
              {/* Bookmark/share icons placeholder */}
              <div className="flex items-center space-x-3">
                <Bookmark className="w-5 h-5 text-gray-500 hover:text-teal-600 transition" />
                <Share2 className="w-5 h-5 text-gray-500 hover:text-teal-600 transition" />
              </div>
            </div>
            {/* Centered title in remaining space, with overlaid tags/time */}
            <div className="flex-1 flex items-center justify-center relative pb-16">
              {/* Overlay tags/time block above the title, right-aligned */}
              <div className="absolute right-0 mr-8 top-12 flex items-center space-x-6 bg-white/80 px-4 py-1 rounded z-10">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700 text-lg font-semibold">{time}</span>
                </div>
                {tags.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <Tag className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700 text-lg font-semibold">{tags.join(', ')}</span>
                  </div>
                )}
              </div>
              <h1 className="text-5xl font-bold text-black text-center max-w-4xl w-full break-words leading-normal z-0">
                {title}
              </h1>
            </div>
          </div>
        </div>
        {/* Hand pointer SVG icon (hyperlink cursor style) */}
        <MousePointer size={120} className="absolute bottom-20 right-20 text-gray-700 opacity-80 z-50" />
      </div>
    </div>
  );
};

// Example usage:
// <SocialMediaCard 
//   title="Your Custom Title Here"
//   tags={["Leadership", "AI", "Strategy"]}
//   time="5 min"
//   filename={post.filename} // <-- Pass the actual slug/filename from your data
//   siteName="Quantably"
// />

export default SocialMediaCard;