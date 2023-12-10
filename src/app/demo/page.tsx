'use client';

import { RecoilRoot } from 'recoil';
import PageHeaderContainer from '@/components/Common/PageHeader';
import PreviewContainer from '@/components/Demo/Preview/Preview';

export default function Demo() {
  return (
    <RecoilRoot>
      <PageHeaderContainer />
      <div className='-z-0 h-[80vh]'></div>
      <PreviewContainer />
    </RecoilRoot>
  );
}
