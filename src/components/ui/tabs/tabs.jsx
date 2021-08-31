import React, { useState } from 'react';
import {TabButton, Header, Content} from './styled';

// Логотип сайта с названием
function Tabs ({tabsList = [], maxContentHeiht}) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => (
          <TabButton
            key={`tab${index * 10}`}
            $isSelect={selectIndex === index}
            {...selectIndex === index
              ? {as: 'span'}
              : {onClick: ()=> {
                setSelectIndex(index);
              },
              }
            }
          >{tab.title}
          </TabButton>
        ))}
      </Header>
      <Content $maxContentHeiht={maxContentHeiht}>{tabsList[selectIndex].content}</Content>
    </div>
  );
}

export default Tabs;
