'use client';

import AddPreviewBoxPresentation, { AddPreviewBoxProps } from './AddPreviewBox';
import PreviewBoxPresentation, { ImageDataProps } from './PreviewBox';
import { usePreviewBox } from '@/hooks/Demo/usePreviewBox';
import NoteBgImage from '~/img/note-bg.png';

interface PreviewProps {
  selectIndex: number;
  previewBoxes: ImageDataProps[];
  addPreviewBox: (previewBox: ImageDataProps) => void;
  setSelectIndex: (index: number) => void;
  deletePreviewBox: (index: number) => void;
}

function PreviewPresentation({ ...props }: PreviewProps) {
  return (
    <div className='fixed bottom-0 flex h-[15vh] w-full items-center overflow-x-scroll bg-gray-100  px-8'>
      <div className='flex items-center gap-10'>
        {props.previewBoxes.map((previewBox, index) => (
          <PreviewBoxPresentation
            key={index}
            selectIndex={props.selectIndex}
            previewNum={index + 1}
            image={previewBox}
            onClick={() => props.setSelectIndex(index + 1)}
            onDelte={() => props.deletePreviewBox(index)}
          />
        ))}
        <AddPreviewBoxPresentation
          onClick={() =>
            props.addPreviewBox({
              src: NoteBgImage,
              alt: 'preview',
              width: 100,
              height: 100,
            })
          }
        />
      </div>
    </div>
  );
}

export default function PreviewContainer() {
  const { isPreviewBox, setSelectIndex, addPreviewBoxList, deletePreviewBoxList } = usePreviewBox();

  const handleAddPreviewBox = (previewBox: ImageDataProps) => {
    addPreviewBoxList(previewBox);
  };

  const deletePreviewBox = (index: number) => {
    if (isPreviewBox.previewBoxList.length <= 1) {
      return;
    } else {
      if (index + 1 === isPreviewBox.previewBoxList.length) {
        setSelectIndex(index);
        deletePreviewBoxList(index);
      } else {
        setSelectIndex(index + 1);
        deletePreviewBoxList(index);
      }
    }
  };

  const data: PreviewProps = {
    selectIndex: isPreviewBox.selectIndex,
    previewBoxes: isPreviewBox.previewBoxList,
    addPreviewBox: handleAddPreviewBox,
    setSelectIndex: (index: number) => setSelectIndex(index),
    deletePreviewBox: (index: number) => deletePreviewBox(index),
  };

  return <PreviewPresentation {...data} />;
}
