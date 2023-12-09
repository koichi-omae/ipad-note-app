'use client';

import AddPreviewBoxPresentation, { AddPreviewBoxProps } from './AddPreviewBox';
import PreviewBoxPresentation, { ImageDataProps } from './PreviewBox';
import { usePreviewBox } from '@/hooks/Demo/usePreviewBox';

interface PreviewProps {
  selectIndex: number;
  previewBoxes: ImageDataProps[];
  addPreviewBox: (previewBox: ImageDataProps) => void;
  setSelectIndex: (index: number) => void;
  deletePreviewBox: (index: number) => void;
}

function PreviewPresentation({ ...props }: PreviewProps) {
  return (
    <div className='flex h-[15vh] w-full items-center overflow-x-scroll bg-gray-100  px-8'>
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
              src: 'https://camo.qiitausercontent.com/bee363b02738b89dc44d2b6bd05641d775a6e001/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3136333539312f37663834373363652d306164362d613932352d663261632d6235396564393963353361612e706e67',
              alt: 'preview',
              width: 112,
              height: 112,
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
      if (index > 0) {
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
