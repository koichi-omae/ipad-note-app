import { atom } from 'recoil';
import { ImageDataProps } from '@/components/Demo/Preview/PreviewBox';
import NoteBgImage from '~/img/note-bg.png';

interface previewBoxState {
  selectIndex: number;
  previewBoxList: ImageDataProps[];
}

export const previewBoxState = atom<previewBoxState>({
  key: 'previewBoxState',
  default: {
    selectIndex: 1,
    previewBoxList: [
      {
        src: NoteBgImage,
        alt: 'preview',
        width: 100,
        height: 100,
      },
    ],
  },
});
