import { useRecoilState, useRecoilValue } from 'recoil';
import { fileNameInputState } from '@/models/Common/FileNameInput';

export const useFileNameInput = () => {
  const isFileNameInput = useRecoilValue(fileNameInputState);
  const setIsFileNameInput = useRecoilState(fileNameInputState)[1];

  const setFileName = (fileName: string) => {
    setIsFileNameInput((prev) => ({
      ...prev,
      fileName: fileName,
    }));
  };

  const setIsEdit = () => {
    setIsFileNameInput((prev) => ({
      ...prev,
      isEdit: !prev.isEdit,
    }));
  };

  return {
    isFileNameInput,
    setFileName,
    setIsEdit,
  };
};
