import {Component} from "react";

import {initialState} from "./initialState";

import {fields} from "./fields";

class FormAddCase extends Component {
    state = {...initialState}

    handleChange = ({target}) => {
        const {name, type, value, checked} = target;
        this.setState({
            [name]: (type === "checkbox") ? checked : value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        const {onSubmit} = this.props;
        const {caseValue, priority} = this.state;
        const formData = {
            name: caseValue,
            priority
        };
        onSubmit(formData);

        this.resetForm();
    }

    resetForm(){
        this.setState({
            caseValue: ""
        })
    }

    render(){
        const {caseValue, priority, isDone} = this.state;
        const {handleSubmit, handleChange} = this;

        const priorityOptions = fields.priority.options.map(({value, text}) => <option value={value}>{text}</option>)

        return (
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Новое дело</label>
            <input onChange={handleChange} value={caseValue} {...fields.caseValue}/>
            <select name={fields.priority.name} onChange={handleChange}>
                {priorityOptions}
            </select>
            <label>Сделано: </label>
            <input onChange={handleChange} {...fields.isDone} checked={isDone}/>
            <button type="submit">Добавить</button>
            </form>            
        )
    }
}

export default FormAddCase;