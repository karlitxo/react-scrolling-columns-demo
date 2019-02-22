import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import getChannels from './getChannels.js';

var items=[];
getChannels().forEach((channel) => {   
  var element = <a className="menu-item" href="/" key={channel.groupId}>{channel.name}</a>;
  items.push(element); 
});

export default props => {
  return (
    <Menu>
    {items}
    </Menu>
  );
};