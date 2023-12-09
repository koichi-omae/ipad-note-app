'use client';

import AddPreviewBoxPresentation, { AddPreviewBoxProps } from './AddPreviewBox';
import PreviewBoxPresentation from './PreviewBox';

interface PreviewProps {
  previewBoxes: AddPreviewBoxProps[];
  addPreviewBox: AddPreviewBoxProps;
}

function PreviewPresentation({ ...props }: PreviewProps) {
  return (
    <div className='absolute bottom-0 flex h-[15vh] w-full items-center overflow-x-scroll bg-gray-100  px-8'>
      <div className='flex items-center gap-8'>
        {props.previewBoxes.map((previewBox, index) => (
          <PreviewBoxPresentation key={index} previewNum={index + 1} onClick={previewBox.onClick} />
        ))}
        <AddPreviewBoxPresentation {...props.addPreviewBox} />
      </div>
    </div>
  );
}

export default function PreviewContainer() {
  const handleTest = () => {
    console.log('test');
  };

  const data: PreviewProps = {
    previewBoxes: [
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
      {
        onClick: () => handleTest(),
      },
    ],
    addPreviewBox: {
      onClick: () => handleTest(),
    },
  };

  return <PreviewPresentation {...data} />;
}
