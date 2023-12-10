'use client';

import { RecoilRoot } from 'recoil';
import PageHeaderContainer from '@/components/Common/PageHeader';
import PreviewContainer from '@/components/Demo/Preview/Preview';
import AddPencilModalContainer from '@/components/Modal/AddPencilModal';

export default function Demo() {
  return (
    <RecoilRoot>
      <PageHeaderContainer />
      <div className='flex h-[80vh] items-center justify-center bg-gray-400 lg:p-8'>
        <div className='z-10 h-[830px] w-[768px] bg-white'>
          <div className='w-full border-b border-b-gray-400 pt-12' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='h-10 w-full border-b border-b-gray-400 ' />
          <div className='w-full border-b border-b-gray-400 pb-12' />
        </div>
      </div>
      <PreviewContainer />
      <AddPencilModalContainer />
    </RecoilRoot>
  );
}
