"use client"; // This ensures the component is a client-side component

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons"; // Default link icon

// Client-side component that handles the link click tracking
export default function ClickableLink({ url, page, title, subtitle, icon }) {
  async function handleClick() {
    try {
      // Sending the click event data to the server
      await fetch(`/api/click?url=${btoa(url)}&page=${page}`, {
        method: "POST",
      });
      console.log("Click event sent successfully");
    } catch (error) {
      console.error("Failed to send click event:", error);
    }
  }

  return (
    <a
      href={url.startsWith("http") ? url : `http://${url}`} // Ensure valid URLs
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick} // Track clicks
      className="bg-indigo-800 p-2 block flex"
    >
      <div className="relative -left-4 overflow-hidden w-16">
        <div className="w-16 h-16 bg-blue-700 aspect-square flex items-center justify-center">
          {icon ? (
            <Image
              className="w-full h-full object-cover"
              src={icon}
              alt="icon"
              width={64}
              height={64}
            />
          ) : (
            <FontAwesomeIcon icon={faLink} className="w-8 h-8" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center shrink grow-0 overflow-hidden">
        <div>
          <h3>{title}</h3>
          <p className="text-white/50 h-6 overflow-hidden">{subtitle}</p>
        </div>
      </div>
    </a>
  );
}
