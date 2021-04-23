import {Component} from "react";

import FormAddCase from "../FormAddCase";
import ToDoListItem from "../ToDoListItem";

import styles from "./ToDoList.module.css";

import {initialState} from "./initialState";
class ToDoList extends Component {

    state = {...initialState}

    onAddCase = ({name, priority})=>{
        this.setState(prevState => {
            const {list} = prevState;
            const newList = [...list];
            const newCase = {
                id: "6",
                name,
                priority,
                isRead: false
            };
            newList.push(newCase);
            return {
                list: newList
            }
        })
            /*
            const oldState = {
                list: [
                    {
                    id: "1",
                    name: "Курс по Реакту Репеты",
                    isRead: false,
                    },
                    {
                    id: "2",
                    name: "Курс по Vue.js Минина",
                    isRead: false,
                    },
                    {
                    id: "3",
                    name: "Курс по Angular Богдана",
                    isRead: true,
                    },
                ],
                caseValue: "",
                };
            const updateStatePart = {
                list: newList
            }
            const newState = Object.assign(oldState, {list: newList})
            */
    }

    onDeleteCase = (idx)=>{
        this.setState(({list})=>{
            const newList = [...list];
            newList.splice(idx, 1);
            // const result = newList.filter((_, index)=> index !== idx);
            return {
                list: newList
            }
        });
    }

   onCaseDone = (idx)=>{
        this.setState(({list})=>{
            const newList = list.map(item => ({...item}));
            const {isRead} = newList[idx];
            newList[idx].isRead = !isRead;
            return {
                list: newList
            }
        })
    }

    render() {

        const {title} = this.props;
        const {list} = this.state;
        const {onCaseDone, onDeleteCase, onAddCase} = this;

        const caseElements = list.map(({id, ...props}, idx) => {
            props = {...props, 
                onDelete: ()=>onDeleteCase(idx),
                onChange: ()=>onCaseDone(idx)
            };
            return <ToDoListItem key={id} {...props} />
        });

        const doneNumber = list.filter(({isRead}) => isRead).length;

        return (
            <>
            <h2>{title}</h2>
            <FormAddCase onSubmit={onAddCase} />
            <p>Количество сделанных дел: {doneNumber}</p>
            <ul>
                {caseElements}
            </ul>
            </>
        )
    }
}

export default ToDoList;