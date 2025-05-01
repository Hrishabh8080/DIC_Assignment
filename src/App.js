import './App.css';
import ListItem from './ListItem';
import { demoData } from './Data';
import { useState } from 'react';

function App() {
  const [customData, setCustomData] = useState(demoData);

  const handleClickExpand = (itemName) => {
    const newData = customData.map((data) => {
      if (data.name === itemName) {
        return {
          ...data,
          isExpanded: !data.isExpanded,
        };
      }
      if (data.children) {
        return {
          ...data,
          children: data.children.map((child) => {
            if (child.name === itemName) {
              return {
                ...child,
                isExpanded: !child.isExpanded,
              };
            }
            return child;
          }),
        };
      }
      return data;
    });
    setCustomData(newData);
  };

  const createNestedList = (data) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <ListItem itemName={item.name} handleClick={() => handleClickExpand(item.name)} />
          {item.isExpanded && item.children && (
            <ul>
              {createNestedList(item.children)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className="App">
      <ul>
        {createNestedList(customData)}
      </ul>
    </div>
  );
}

export default App;