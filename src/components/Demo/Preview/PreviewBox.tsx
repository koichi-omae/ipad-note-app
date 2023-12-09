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
    >
      <Image
        src={
          'https://camo.qiitausercontent.com/bee363b02738b89dc44d2b6bd05641d775a6e001/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3136333539312f37663834373363652d306164362d613932352d663261632d6235396564393963353361612e706e67'
        }
        alt='preview'
        width={112}
        height={112}
      />

      <span
        className='absolute -right-3.5 -top-3.5 z-10 hidden rounded-full border-2 bg-gray-500 px-1.5  font-bold text-white  hover:bg-gray-800  group-hover:block'
        onClick={(e) => {
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
