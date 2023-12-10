import { Tab } from '@headlessui/react';
import { useAddPencilModal } from '@/hooks/Modal/useAddPencilModal';

interface AddPencilModalProps {
  isShow: boolean;
  tabData: TabDataProps;
  pencilData: PencilDataProps;
  markerData: MarkerDataProps;
  setIsShow: () => void;
  setPencilColor: (color: string) => void;
  setMarkerColor: (color: string) => void;
}

interface TabDataProps {
  tabList: string[];
}

interface PencilDataProps {
  color: string;
}

interface MarkerDataProps {
  color: string;
}

function AddPencilModalPresentation({ ...props }: AddPencilModalProps) {
  return (
    props.isShow && (
      <div
        className='fixed left-0 top-0 z-50 flex h-[100vh] w-full items-center justify-center bg-gray-800/50'
        onClick={props.setIsShow}
      >
        <div
          className='rounded-md bg-white p-8'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='w-[678px]'>
            <Tab.Group>
              <Tab.List className='flex justify-center gap-2 space-x-1 rounded-xl bg-blue-900/20 p-2'>
                {props.tabData.tabList.map((tab, index) => (
                  <Tab
                    key={tab + '-' + index}
                    className='w-full rounded-md border-none bg-gray-200 px-4 py-2 text-xl font-semibold tracking-wider ui-selected:bg-gray-600 ui-selected:text-white ui-active:border-none'
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className='mt-4 border-2 p-4'>
                    <div className='flex items-center'>
                      <label className='mr-4 text-lg font-semibold'>Color</label>
                      <input
                        type='color'
                        className='h-8 w-8 rounded-md hover:cursor-auto'
                        value={props.pencilData.color}
                        onChange={(e) => props.setPencilColor(e.target.value)}
                      />
                    </div>
                    <div className='relative my-12 flex items-center justify-center'>
                      <div className='pencil-trapezoid-top -mr-1 -rotate-90' />
                      <div className='pencil-trapezoid -mr-0.5 -rotate-90' />
                      <div className='h-8 w-[600px] bg-gray-300 ' />
                      <div
                        style={{ backgroundColor: props.pencilData.color }}
                        className='h-4 w-6 rounded-r'
                      />
                      <div
                        style={{ backgroundColor: props.pencilData.color }}
                        className='absolute left-24 h-8 w-60 rounded'
                      />
                      <div className='absolute -top-4 right-16 h-4 w-2 bg-gray-300' />
                      <div className='absolute -top-4 right-16 h-2 w-32 bg-gray-300' />
                    </div>
                    <div className='mt-4 text-right'>
                      <button className='mr-4 rounded-md bg-blue-400 px-2 py-1 font-semibold tracking-widest text-white hover:opacity-75'>
                        保存
                      </button>
                      <button
                        className='rounded-md bg-gray-400 px-2 py-1 font-semibold tracking-widest text-white hover:opacity-75'
                        onClick={props.setIsShow}
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className='mt-4 border-2 p-4'>
                    <div className='flex items-center'>
                      <label className='mr-4 text-lg font-semibold'>Color</label>
                      <input
                        type='color'
                        className='h-8 w-8 rounded-md hover:cursor-auto'
                        value={props.markerData.color}
                        onChange={(e) => props.setMarkerColor(e.target.value)}
                      />
                    </div>
                    <div className='relative my-12 flex items-center justify-center'>
                      <div
                        style={{ backgroundColor: props.markerData.color }}
                        className='marker-trapezoid-top -mr-1 -rotate-90'
                      />
                      <div className='marker-trapezoid -mr-1 -rotate-90' />
                      <div className='h-8 w-[600px] bg-gray-400 ' />
                      <div className='h-6 w-4 rounded-r bg-gray-400' />
                      <div
                        style={{ backgroundColor: props.markerData.color }}
                        className='absolute left-24 h-8 w-40 rounded'
                      />
                      <div className='absolute -top-4 right-16 h-4 w-2 bg-gray-400' />
                      <div className='absolute -top-4 right-16 h-2 w-32 bg-gray-400' />
                    </div>
                    <div className='mt-4 text-right'>
                      <button className='mr-4 rounded-md bg-blue-400 px-2 py-1 font-semibold tracking-widest text-white hover:opacity-75'>
                        保存
                      </button>
                      <button
                        className='rounded-md bg-gray-400 px-2 py-1 font-semibold tracking-widest text-white hover:opacity-75'
                        onClick={props.setIsShow}
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    )
  );
}

export default function AddPencilModalContainer() {
  const { isAddPencilModal, setRestDataAndShow, setPencilColor, setMarkerColor } =
    useAddPencilModal();

  const data: AddPencilModalProps = {
    isShow: isAddPencilModal.isShow,
    tabData: {
      tabList: ['Pencil', 'marker'],
    },
    pencilData: {
      color: isAddPencilModal.pencilData.color,
    },
    markerData: {
      color: isAddPencilModal.markerData.color,
    },
    setIsShow: setRestDataAndShow,
    setPencilColor: setPencilColor,
    setMarkerColor: setMarkerColor,
  };

  return <AddPencilModalPresentation {...data} />;
}
