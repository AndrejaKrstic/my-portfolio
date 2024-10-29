"use client";

import { useImage } from "@/hooks/useImage";
import Image from "next/image";

interface ImageComponentProps {
  publicId: string;
  classes?: string;
}

export type imageType = {
  imageUrl: string | null;
  width: number;
  height: number;
} | null;

const ImageComponent = ({ publicId, classes }: ImageComponentProps) => {
  const { image, isLoading, isError } = useImage(publicId);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {image?.imageUrl && (
        <Image
          className={classes}
          width={image.width || 300}
          height={image.height || 300}
          src={image.imageUrl}
          alt="My Image"
        />
      )}
    </div>
  );
};

export default ImageComponent;
