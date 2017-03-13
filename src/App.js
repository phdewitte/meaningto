import React, { Component } from 'react';
import AddTodo from './todos/AddTodo';
import FilterSet from './todos/components/FilterSet';
import VisibleTodoList from './todos/VisibleTodoList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Meaning to...</h1>

                <AddTodo />
                <VisibleTodoList />
                <FilterSet />
            </div>
        );
    }
};
