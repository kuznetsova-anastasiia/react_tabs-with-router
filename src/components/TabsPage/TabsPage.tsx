import { useParams } from 'react-router-dom';
import { TabsTable } from '../TabsTable';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsTable tabs={tabs} selectedTabId={tabId} />
    </>
  );
};
