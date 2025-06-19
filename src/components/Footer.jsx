import { SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef } from "react-icons/si";

export const Footer = () => (
  <footer className="py-8 px-4 bg-card border-t border-primary/10 mt-12">
    <div className="container mx-auto max-w-5xl flex flex-col items-center gap-2">
      {/* Coding Platform Links */}
      <div className="flex gap-4 mb-2">
        <a
          href="https://leetcode.com/u/nalbalwarrudraksh/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
          title="LeetCode"
        >
          <SiLeetcode size={22} />
        </a>
        <a
          href="https://www.hackerrank.com/profile/nalbalwarrudrak1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
          title="HackerRank"
        >
          <SiHackerrank size={22} />
        </a>
        
      </div>
      {/* Quick Links */}
      <div className="flex gap-6 justify-center">
        <a href="#about" className="hover:text-primary text-sm">About</a>
        <a href="#skills" className="hover:text-primary text-sm">Skills</a>
        <a href="#projects" className="hover:text-primary text-sm">Projects</a>
        <a href="#contact" className="hover:text-primary text-sm">Contact</a>
      </div>
      <span className="text-xs text-muted-foreground mt-2">
        &copy; {new Date().getFullYear()} Rudraksh Nalbalwar. All rights reserved.
      </span>
      <span className="text-xs text-muted-foreground block text-center">
        Built with React, Tailwind CSS, and ❤️
      </span>
      <a href="#hero" className="text-xs text-primary hover:underline block text-center mt-2">
        Back to Top
      </a>
    </div>
  </footer>
);