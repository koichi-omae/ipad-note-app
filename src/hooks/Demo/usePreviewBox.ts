import { useRecoilState, useRecoilValue } from 'recoil';
import { ImageDataProps } from '@/components/Demo/Preview/PreviewBox';
import { previewBoxState } from '@/models/Demo/PreviewBox';

export const usePreviewBox = () => {
  const isPreviewBox = useRecoilValue(previewBoxState);
  const setIsPreviewBox = useRecoilState(previewBoxState)[1];

  const setSelectIndex = (index: number) => {
    setIsPreviewBox((prev) => ({
      ...prev,
      selectIndex: index,
    }));
  };

  const addPreviewBoxList = (previewBox: ImageDataProps) => {
    setIsPreviewBox((prev) => ({
      ...prev,
      previewBoxList: [...prev.previewBoxList, previewBox],
    }));
  };

  const deletePreviewBoxList = (index: number) => {
    setIsPreviewBox((prev) => ({
      ...prev,
      previewBoxList: prev.previewBoxList.filter((_, i) => i !== index),
    }));
  };

  return {
    isPreviewBox,
    setSelectIndex,
    addPreviewBoxList,
    deletePreviewBoxList,
  };
};
