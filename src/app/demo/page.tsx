'use client';

import { use, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import PageHeaderContainer from '@/components/Common/PageHeader';
import PreviewContainer from '@/components/Demo/Preview/Preview';
import AddPencilModalContainer from '@/components/Modal/AddPencilModal';

export default function Demo() {
  useEffect(() => {
    //スクロール禁止設定
    document.body.style.overflow = 'hidden';
  }, []);
  return (
    <RecoilRoot>
      <PageHeaderContainer />
      <canvas id='canvas' className='h-[75vh] w-full border-2 border-black'></canvas>
      <PreviewContainer />
      <AddPencilModalContainer />
    </RecoilRoot>
  );
}
