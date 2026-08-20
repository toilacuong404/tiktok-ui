import { useState, forwardRef } from "react";
import images from "@/assets/images/images";
import styles from "./Img.module.scss";
import classNames from "classnames";

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(images.defaultImage);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
