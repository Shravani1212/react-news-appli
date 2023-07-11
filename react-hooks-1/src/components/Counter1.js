import React, { useReducer } from 'react'

export const Counter1 = () => {
    const initialState={
        firstCounter:0
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment' :
                return {
                    firstCounter:state.firstCounter+1
                }
                break
                case 'decrement' :
                    
                    return {firstCounter:state.firstCounter-1}
                    break
                    case 'reset' :
                        return initialState
                        break
                    default:
                        return state
        }
    }
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        
        <div>
           Count::: {count.firstCounter}
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}
