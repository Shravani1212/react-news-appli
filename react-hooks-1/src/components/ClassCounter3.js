import React, { Component } from 'react'

export class ClassCounter3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !==this.state.count){
        console.log(`Updating Document title`)
        document.title=`clicked ${this.state.count} times`
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Clicked {this.state.count}</button>
                <input type='text' value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
            </div>
        )
    }
}

export default ClassCounter3
