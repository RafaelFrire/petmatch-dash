import Image from "next/image";

type bannerImageProps = {
  width: number;
  height: number;
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const BannerImage:React.FC<bannerImageProps> = ({width, height, src, ...props}) => {
  return (
      <Image
        src={src}
        width={width}
        height={height}
        layout="responsive"
        className="object-center"
        {...props}
        alt="Banner de adoção"
        loading="lazy"
      />
  );
};
