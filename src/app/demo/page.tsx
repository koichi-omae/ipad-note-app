'use client';

import { RecoilRoot } from 'recoil';
import PageHeaderContainer from '@/components/Common/PageHeader';
import PreviewContainer from '@/components/Demo/Preview/Preview';
import AddPencilModalContainer from '@/components/Modal/AddPencilModal';

export default function Demo() {
  return (
    <RecoilRoot>
      <PageHeaderContainer />
      <canvas onScroll={(e) => e.preventDefault()} id='canvas' className='h-screen w-full'></canvas>
      <PreviewContainer />
      <AddPencilModalContainer />
    </RecoilRoot>
  );
}
