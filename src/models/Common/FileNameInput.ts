import { atom } from 'recoil';

export interface FileNameInputProps {
  fileName: string;
  isEdit: boolean;
}

export const fileNameInputState = atom<FileNameInputProps>({
  key: 'fileNameInputState',
  default: {
    fileName: 'undefined',
    isEdit: false,
  },
});
