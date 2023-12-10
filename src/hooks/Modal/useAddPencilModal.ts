import { useRecoilState, useRecoilValue } from 'recoil';
import { addPencilModalState } from '@/models/Modal/addPencilModal';

export const useAddPencilModal = () => {
  const isAddPencilModal = useRecoilValue(addPencilModalState);
  const setIsAddPencilModal = useRecoilState(addPencilModalState)[1];

  const setRestDataAndShow = () => {
    setIsAddPencilModal((prev) => ({
      ...prev,
      isShow: !prev.isShow,
      pencilData: {
        color: '#000000',
      },
      markerData: {
        color: '#DDE000',
      },
    }));
  };

  const setPencilColor = (color: string) => {
    setIsAddPencilModal((prev) => ({
      ...prev,
      pencilData: {
        ...prev.pencilData,
        color,
      },
    }));
  };

  const setMarkerColor = (color: string) => {
    setIsAddPencilModal((prev) => ({
      ...prev,
      markerData: {
        ...prev.markerData,
        color,
      },
    }));
  };

  return {
    isAddPencilModal,
    setRestDataAndShow,
    setPencilColor,
    setMarkerColor,
  };
};
