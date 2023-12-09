export interface AddPreviewBoxProps {
  onClick: () => void;
}

export default function AddPreviewBoxPresentation({ ...props }: AddPreviewBoxProps) {
  return (
    <div
      className='flex h-28 w-28 items-center justify-center rounded-md bg-gray-200 shadow-lg hover:cursor-pointer hover:opacity-75'
      onClick={props.onClick}
    >
      <span className='text-4xl text-gray-800'>+</span>
    </div>
  );
}
