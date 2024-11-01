"use client";

import { useImage } from "@/hooks/useImage";
import Image from "next/image";
import { useIntl } from "react-intl";
import { RotateLoader } from "react-spinners";
import style from "./ImageComponent.module.css";

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
  const intl = useIntl();
  return (
    <div>
      {isLoading && (
        <div className={style.spinnerContainer}>
          <RotateLoader className={style.spinner} color="white" />
        </div>
      )}
      {isError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={classes}
          src={`https://placehold.co/500x300?text=${intl.formatMessage({
            id: "error-loading",
          })}`}
          alt="ErrorImage"
        />
      )}
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
