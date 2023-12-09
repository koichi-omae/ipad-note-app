'use client';

import { RecoilRoot } from 'recoil';
import PreviewContainer from '@/components/Demo/Preview/Preview';

export default function Demo() {
  return (
    <RecoilRoot>
      <div>
        <div className='-z-0 h-[85vh]'></div>
        <PreviewContainer />
      </div>
    </RecoilRoot>
  );
}
