"use client";

import Image, { ImageProps } from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Skeleton } from "./skeleton";

type Props = Omit<ImageProps, "onLoad"> & {
  skeletonClassName?: string;
  // Require alt to satisfy Next Image accessibility lint
  alt: string;
};

export function ImageWithSkeleton({
  skeletonClassName = "",
  className = "",
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { alt, ...rest } = props as Props;

  // If the browser already has the image cached, the img.complete flag will be true
  // After mount (Detect that and mark as loaded so it won't stay stuck with the skeleton)
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const img = el.querySelector("img") as HTMLImageElement | null;
    if (!img) return;

    if (img.complete && img.naturalWidth) {
      setLoaded(true);
      return;
    }

    const onImgLoad = () => setLoaded(true);
    img.addEventListener("load", onImgLoad);
    return () => img.removeEventListener("load", onImgLoad);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full h-full ${props.style ? "" : ""}`}
    >
      {!loaded && (
        <Skeleton
          className={`absolute inset-0 w-full h-full z-0 ${skeletonClassName}`}
        />
      )}

      <Image
        {...(rest as ImageProps)}
        alt={alt}
        className={`${className} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 relative z-10`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}

export default ImageWithSkeleton;
