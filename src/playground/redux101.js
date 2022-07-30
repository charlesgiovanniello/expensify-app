import {createStore} from 'redux'
//ACTION GENERATOR

//Action generators are preferred over in-line action objects
const incrementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1}={}) =>({
    type: 'DECREMENT',
    decrementBy
})

const set = ({count = 0}={}) =>({
    type:'SET',
    count
})

const reset = () =>({
    type:'RESET'
})

//Reducer
//Reducers are pure functions. The output is only determined by the input
//Never change state or actions. Only return the desired new state instead of mutating existing data.

const countReducer = (state = { count : 0 }, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                count:state.count+action.incrementBy
            }
        case 'DECREMENT':
            return {
                count:state.count-action.decrementBy
            }
        case 'SET':
            return {
                count:action.count
            }
        case 'RESET':
            return{
                count:0
            }
        default:
            return state
    } 
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(decrementCount({decrementBy:10}))
store.dispatch(set({count:20}))
store.dispatch(reset())
//console.log(store.getState())
