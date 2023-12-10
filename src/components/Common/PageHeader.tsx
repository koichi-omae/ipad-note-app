'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useFileNameInput } from '@/hooks/Common/useFileNameInput';
import { FileNameInputProps } from '@/models/Common/FileNameInput';

interface PageHeaderProps {
  isFileNameInput: FileNameInputProps;
  headerClick: (e: React.MouseEvent<HTMLHeadElement, MouseEvent>) => void;
  setFileName: (fileName: string) => void;
  setIsEdit: () => void;
  inputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function PageHeaderPresentation({ ...props }: PageHeaderProps) {
  useEffect(() => {
    document.getElementById('fileNameInput')?.focus();
  }, [props.isFileNameInput.isEdit]);

  return (
    <header
      className='flex h-[5vh] w-full items-center justify-between bg-gray-100 px-8'
      onClick={(e) => props.headerClick(e)}
    >
      <ul className='flex items-center gap-4'>
        <Link href='/'>
          <li className='text-xl'>{'<'}</li>
        </Link>
        {props.isFileNameInput.isEdit ? (
          <input
            id='fileNameInput'
            className='rounded-md border-2 border-gray-500 text-lg font-semibold '
            value={props.isFileNameInput.fileName}
            onChange={(e) => props.setFileName(e.target.value)}
            onKeyDown={(e) => props.inputKeyDown(e)}
          />
        ) : (
          <li
            className='text-lg font-semibold tracking-wide hover:cursor-pointer'
            onClick={props.setIsEdit}
          >
            {props.isFileNameInput.fileName}
          </li>
        )}
      </ul>
      <ul className='flex items-center gap-4'>
        <li>
          <button className='rounded-md bg-blue-500 px-2 py-0.5 font-semibold text-white hover:opacity-75'>
            共有
          </button>
        </li>
        <li>
          <button>🖊️</button>
        </li>
      </ul>
    </header>
  );
}

export default function PageHeaderContainer() {
  const { isFileNameInput, setFileName, setIsEdit } = useFileNameInput();

  const handleHeaderClick = (e: React.MouseEvent<HTMLHeadElement, MouseEvent>) => {
    e.stopPropagation();
    if (!isFileNameInput.isEdit) {
      return;
    }
    if (isFileNameInput.fileName === '') {
      return;
    }
    setIsEdit();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFileNameInput.fileName === '') {
      return;
    }
    if (e.keyCode === 229) {
      return;
    }
    if (e.keyCode === 13) {
      setIsEdit();
    }
  };

  const data: PageHeaderProps = {
    isFileNameInput,
    headerClick: handleHeaderClick,
    setFileName,
    setIsEdit,
    inputKeyDown: handleInputKeyDown,
  };

  return <PageHeaderPresentation {...data} />;
}
