
import './index.css';
import { useState } from 'react';


function Tab({ tabs }) {


  const [selectedTab, setSelectedTab] = useState(null);

  function renderSelectedTab() {
    if (selectedTab) {
      return <div className='mt-4'>{selectedTab.component}</div>;
    }
  }

  function Button({label, onClick}){
    return (
      <button onClick={onClick} className='px-4 py-2 bg-blue-500 mx-2 text-white rounded hover:bg-blue-600'>{label}</button>
    );
  }
  
  return (
    <div> 
      {tabs.map((tab) => (
        <Button key={tab.id} label={tab.name} onClick={() => setSelectedTab(tab)} />
      ))}
      {renderSelectedTab()}
    </div>
  );
}





export default Tab;