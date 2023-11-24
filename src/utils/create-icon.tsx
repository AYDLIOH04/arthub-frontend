import Image from "next/image";

type CustomIconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const CustomIcon = ({
  src,
  alt,
  width,
  height,
  className,
}: CustomIconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default CustomIcon;
