import React from 'react';
import displayName from './../eventFunctions/displayName';


let Children = ({name, id, children}) => {
  if (children) {
    children = children.map(child => <Children key={child.id} name={child.name} children={child.children} />);
  } else {
    return (
      <li>
        <div className="linkContainer">
          <a href="#" className="Title" onClick={displayName}> {name} </a>
        </div>
      </li>
    );
   }
  
  return (
    <li>
      <div className="linkContainer">
        <a href="#" className="Title" onClick={displayName}> {name}  <span>></span></a>
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