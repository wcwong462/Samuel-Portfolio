import React, { useState } from "react";

interface Item {
  title: string;
  desc?: string;
}

interface HoverPopCardProps {
  title: string;
  color?: string;
  items: Item[];
}

const HoverPopCard: React.FC<HoverPopCardProps> = ({ title, color = "", items }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative bg-muted rounded-lg p-4 transition-shadow duration-300 cursor-pointer shadow-md hover:shadow-xl group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <h3 className={`font-semibold text-lg mb-2 ${color}`}>{title}</h3>
      <div
        className={`absolute left-0 top-0 w-full z-20 bg-background rounded-lg p-4 shadow-2xl border border-primary/30 transition-all duration-300 ${
          hovered ? "opacity-100 scale-105 translate-y-2 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ minHeight: 180 }}
      >
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
          {items.map((item, idx) => (
            <li key={idx}>
              <b>{item.title}</b>
              {item.desc && <><br /><span className="text-xs">{item.desc}</span></>}
            </li>
          ))}
        </ul>
      </div>
      {/* Show a preview of the first 2 items when not hovered */}
      {!hovered && (
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-xs">
          {items.slice(0, 2).map((item, idx) => (
            <li key={idx}><b>{item.title}</b></li>
          ))}
          {items.length > 2 && <li>...and more</li>}
        </ul>
      )}
    </div>
  );
};

export default HoverPopCard;
