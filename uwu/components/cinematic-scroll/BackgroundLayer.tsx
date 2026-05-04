"use client";

import Image from "next/image";
import { BackgroundConfig } from "./cinematic-content";

interface BackgroundLayerProps {
  config: BackgroundConfig;
}

export function BackgroundLayer({ config }: BackgroundLayerProps) {
  const baseStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
  };

  if (config.type === "video" && config.src) {
    return (
      <div style={baseStyle}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={config.poster}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={config.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  if (config.type === "image" && config.src) {
    return (
      <div style={{ ...baseStyle, overflow: "hidden" }}>
        <Image
          src={config.src}
          alt={config.alt ?? ""}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>
    );
  }

  // Fallback: gradient
  return (
    <div
      style={{
        ...baseStyle,
        background:
          config.value ??
          "linear-gradient(160deg, #0a0a0a 0%, #111214 50%, #0d0e10 100%)",
      }}
    />
  );
}
