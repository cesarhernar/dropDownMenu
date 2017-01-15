import { connect } from 'react-redux';
import React from 'react';
import Children from './../components/Children';

let Category = ({name, children, id}) => {
    return (
      <div className="container">
        <ul>
          <Children key={id} name={name} children={children} />
        </ul>
      </div>
    );
  }

let mapStateToProps = (state) => {
  return state.category;
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

Category = connect(mapStateToProps, mapDispatchToProps)(Category);


export default Category;