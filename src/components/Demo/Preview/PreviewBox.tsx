interface PreviewBoxProps {
  previewNum: number;
  onClick: () => void;
}

export default function PreviewBoxPresentation({ ...props }: PreviewBoxProps) {
  return (
    <div
      className='relative h-28 w-28 rounded-md border border-gray-100 bg-white shadow-lg hover:cursor-pointer hover:opacity-70'
      onClick={props.onClick}
    >
      <span className='absolute bottom-2 left-2 text-lg font-semibold'>{props.previewNum}</span>
    </div>
  );
}
