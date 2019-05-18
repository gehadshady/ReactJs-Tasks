import React ,{Component} from 'react';
import  { ToDoList } from './ToDoList/ToDoList'
import Counter from './counter/counter';
import LikeDislike from './Like-Dislike/Like-Dislike'
import './App.css';
class App extends Component{
  render(){
    return (
      <div>
        <h1>1-Counter</h1>
        <Counter/>
        <hr/>
        <h1>2-ToDoList</h1>

        <ToDoList />
        <hr/>
      
        <h1>3-Like and Dislike buttons</h1>
        <LikeDislike/>

      </div>
    );
  }
}


export default App;
