import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(function(item) {
            return (item.key!== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    addItem(e) {
        const itemArray = this.state.items;
        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }

        console.log(itemArray);

        e.preventDefault();
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="введите задачу">
                        </input>
                        <button type="submit">ok</button>
                        <TodoItems entries={this.state.items} delete={this.deleteItem}/>

                    </form>
                </div>
            </div>
        );
    }
}
export default TodoList;