import Image, { StaticImageData } from 'next/image';

export interface PreviewBoxProps {
  selectIndex: number;
  previewNum: number;
  image: ImageDataProps;
  onClick: () => void;
  onDelte: () => void;
}

export interface ImageDataProps {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
}

export default function PreviewBoxPresentation({ ...props }: PreviewBoxProps) {
  return (
    <div
      className={`group relative h-32 w-32 rounded-md border-2 bg-white p-1 shadow-lg hover:cursor-pointer 
     ${props.selectIndex === props.previewNum ? 'border-blue-600' : 'border-gray-100'} 
       `}
      onClick={props.onClick}
      onTouchStart={props.onClick}
    >
      <Image
        src={props.image.src}
        alt={props.image.alt}
        width={props.image.width}
        height={props.image.height}
        className='mx-auto'
      />

      <span
        className='absolute -right-3.5 -top-3.5 z-10 hidden rounded-full border-2 bg-gray-500 px-1.5  font-bold text-white  hover:bg-gray-800  group-hover:block'
        onClick={(e) => {
          e.stopPropagation();
          props.onDelte();
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          props.onDelte();
        }}
      >
        ×
      </span>
      <span className='absolute bottom-0 left-0 z-10 block rounded-md bg-white/80 p-1 text-lg font-semibold shadow-inner'>
        {props.previewNum}
      </span>
    </div>
  );
}
