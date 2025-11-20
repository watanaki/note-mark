import { ActionButttonsRow, Content, NotePreviewList, RootLayout, Siderbar } from '@/components';
import DraggableTopBar from './components/DraggableTopBar';

function App(): React.JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Siderbar className="p-2">
          <ActionButttonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Siderbar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">uBBB</Content>
      </RootLayout>
    </>
  );
}

export default App;
