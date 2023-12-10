import { atom } from 'recoil';

export interface addPencilModalProps {
  isShow: boolean;
  pencilData: {
    color: string;
  };
  markerData: {
    color: string;
  };
}

export const addPencilModalState = atom<addPencilModalProps>({
  key: 'addPencilModalState',
  default: {
    isShow: false,
    pencilData: {
      color: '#000000',
    },
    markerData: {
      color: '#9ca4b0',
    },
  },
});
