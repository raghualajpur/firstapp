import { Component } from 'react'
import TODOitem from '../TODOItem'
import {v4 as uuid} from 'uuid'
import './index.css'

class TODOComp extends Component{
    state={
        data:[],
        title:'',
        des:'',
        date:'',
        activeDay:3
    }

    deleteFunc=(id)=>{
        this.setState(prevState=>({data : prevState.data.filter(each=>{
            if(each.id!==id){
                return each
            }
            return null
        })}))
    }
    

    addTodo=(event)=>{
        event.preventDefault()
        const {title,des,date}=this.state
        const gDate=new Date(date)
        this.setState(prevState=>({data:[...prevState.data, {title,des,id:uuid(),year:gDate.getFullYear(),month:gDate.getMonth()+1,date:gDate.getDate(),day:gDate.getDay()}]}));
        console.log(this.state.activeDay,"hhjjjj")
        this.setState({title:'',des:'',date:'',activeDay:gDate.getDay()})
            
        
    }
    onChangeTitle=(event)=>{
        this.setState({title:event.target.value})
    }
    onChangeDes=(event)=>{
        this.setState({des:event.target.value})
    }
    onChangeDate=(event)=>{
        this.setState({date:event.target.value})
    }

    changeActiveDay=(event)=>{
        if(event.target.innerText==="SUN"){
            this.setState({activeDay:0})
        }
        else if(event.target.innerText==="MON"){
            this.setState({activeDay:1})
        }
        else if(event.target.innerText==="TUE"){
            this.setState({activeDay:2})
        }
        else if(event.target.innerText==="WED"){
            this.setState({activeDay:3})
        }
        else if(event.target.innerText==="THU"){
            this.setState({activeDay:4})
        }
        else if(event.target.innerText==="FRI"){
            this.setState({activeDay:5})
        }
        else if(event.target.innerText==="SAT"){
            this.setState({activeDay:6})
        }
    }


    render(){
        const {activeDay,data}=this.state
        const activeList=data.filter(each=>{
            if(each && each.day===activeDay){
                return each
            }return null
        })
        return (
            <div className='apps'>
            <div className='form-section'>
                <form onSubmit={this.addTodo}>
                    <div className='title-date'>
                       <input type='text' placeholder='Title' value={this.state.title} onChange={this.onChangeTitle} />
                       <input type="date" value={this.state.date} onChange={this.onChangeDate}/>
                    </div>
                    <div className='title-date'>
                        <textarea value={this.state.des} onChange={(event)=>{
                            this.setState({des:event.target.value})
                        }} placeholder='Description'/>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>

            <div className='days-in-row'>
                <div onClick={this.changeActiveDay}  className={`days-box ${this.state.activeDay===0 ? "active-day" : ""}`}>
                    SUN
                </div>
                <div onClick={this.changeActiveDay} className={`days-box ${this.state.activeDay===1 ? "active-day" : ""}`}>
                    MON
                </div>
                <div onClick={this.changeActiveDay}   className={`days-box ${this.state.activeDay===2 ? "active-day" : ""}`}>
                    TUE
                </div>
                <div onClick={this.changeActiveDay}  className={`days-box ${this.state.activeDay===3 ? "active-day" : ""}`}>
                    WED
                </div>
                <div onClick={this.changeActiveDay} className={`days-box ${this.state.activeDay===4 ? "active-day" : ""}`}>
                    THU
                </div>
                <div onClick={this.changeActiveDay}  className={`days-box ${this.state.activeDay===5 ? "active-day" : ""}`}>
                    FRI
                </div>
                <div onClick={this.changeActiveDay} className={`days-box ${this.state.activeDay===6 ? "active-day" : ""}`}>
                    SAT
                </div>
            </div>
            <div>
                <ul>
                    {activeList.map(each=>(
                        <TODOitem key={each.id} id={each.id} title={each.title} disc={each.des} del={this.deleteFunc}/>
                    ))}
                </ul>
            </div>

            </div>
        )
    }

}

export default TODOComp