

let Children = ({name, id, children}) => {
  children.map(child => <Children id={child.id} name={child.name} children={child.children} />);
  return (
    <div>
     {name}
    {children}
    </div>
  );
}

export default Children;