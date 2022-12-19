import React from 'react';
import { RightOutlined } from '@ant-design/icons';

const HeaderFilter = (props) => {
  return (
    <div>
      <h3 class="widget-title mb-0 pb-0 ">
        <span>{props.title}</span>
      </h3>
    </div>
  );
};

export default HeaderFilter;
