import React from 'react';
import '../styles/Todo.styles.css';
import Form from './Form.component';
import Header from './Header.component';
import TodoList from './TodoList.component';
import Footer from './Footer.component';

function Todo() {
  return (
    <div>
      <Header />
      <Form />
      <TodoList />
      <Footer />
    </div>
  );
};

Todo.displayName = "Todo";

export default Todo;
