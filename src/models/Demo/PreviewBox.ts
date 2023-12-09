import { atom } from 'recoil';
import { ImageDataProps } from '@/components/Demo/Preview/PreviewBox';

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
        src: 'https://camo.qiitausercontent.com/bee363b02738b89dc44d2b6bd05641d775a6e001/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3136333539312f37663834373363652d306164362d613932352d663261632d6235396564393963353361612e706e67',
        alt: 'preview',
        width: 112,
        height: 112,
      },
    ],
  },
});
