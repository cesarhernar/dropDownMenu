import { connect } from 'react-redux';
import React from 'react';
import Children from './../components/Children'
import * as actions from './../actions/todoActions';

let Category = ({name, children, id}) => {
    return (
      <div>
      <Children id={child.id} name={child.name} children={child.children} />
      </div>
    );
  }

let mapStateToProps = (state) => {
  return { tasks: state.todo.tasks };
};

let mapDispatchToProps = (dispatch) => {
  return {
    submit: (action) => {
      dispatch(actions.addTaskActionCreator(action));
    },
    finished: (action) => { 
      dispatch(actions.markTaskActionCreator(action));
    } 
  };
};

Category = connect(mapStateToProps, mapDispatchToProps)(Category);


export default Category;