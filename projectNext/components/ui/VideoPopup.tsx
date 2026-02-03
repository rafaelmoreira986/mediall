"use client";
import { useState } from "react";

interface VideoPopupProps {
  videoId: string;
  className?: string;
  children?: React.ReactNode;
}

export default function VideoPopup({ videoId, className = "", children }: VideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        href="#"
        className={className}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        {children}
      </a>
      {isOpen && (
        <div
          className="video-popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{ position: "relative", width: "80%", maxWidth: 900, aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: -40,
                right: 0,
                background: "none",
                border: "none",
                color: "white",
                fontSize: 30,
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
