import React ,{Component} from 'react';
import './ToDoList.css';

class ToDoList extends Component{

    constructor(props){
        super(props);
        this.state = {items:[{index:Math.random()*10,value: "learn react", done: true}]};

    }
    
    markTodoDone=(item)=>{     
        item.done=!item.done;
        console.log(this.state.items)
        this.setState({
        items:this.state.items
        })
    }

    add=()=>{
        const newItem=(document.getElementsByName("item")[0].value).trim();
        if(newItem)
        {
            this.state.items.push({index:Math.random()*10, value:newItem,done:false})
            this.setState({
                items:this.state.items
            })  
            document.getElementsByName("item")[0].value="";
        } 
    }

    render(){
        let remaningTasks=this.state.items.filter(item=>item.done==false);
        return (
            <>
               <input type="text" name="item" />
               <button onClick={this.add}>Add</button>
               <br/>
               <ul>
                {this.state.items.map((item)=>{
                    return(<TodoListItem key={item.index}  item={item} markTodoDone={this.markTodoDone.bind(this,item)} />
                    )
                })}

               </ul>
               <p>{remaningTasks.length} remaining out of {this.state.items.length} tasks</p>
            </>
        );
      }
}


class TodoListItem extends Component {

    render(){
        let todoClass = this.props.item.done ? 
        "is-done" : "i";
        return (
            <li className={todoClass} onClick={this.props.markTodoDone}>{this.props.item.value}</li>
        )
    }

}

export { ToDoList ,TodoListItem} ;