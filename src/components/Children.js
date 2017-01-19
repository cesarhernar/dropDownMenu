import React from 'react';
import displayName from './../eventFunctions/displayName';


let Children = ({name, id, children, clss}) => {
  if (children) {
    children = children.map(child => <Children key={child.id} name={child.name} children={child.children} />);
  } else {
    return (
      <li>
        <div className={clss || "linkContainer"}>
          <a href="#" className="Title"> {name} </a>
        </div>
      </li>
    );
   }
  
  return (
    <li>
      <div className={clss || "linkContainer"}>
        <a href="#" className="Title" onClick={displayName}> {name} <span className="span">></span></a>
      </div>
      <div className="Child">
        <ul>
          {children}
        </ul>
     </div>
    </li>
  );
}

export default Children;