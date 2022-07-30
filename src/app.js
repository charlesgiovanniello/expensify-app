import React from 'react'
import ReactDOM from "react-dom/client";
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense,
    removeExpense,
    editExpense} from './actions/expenses'
import {setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate} from './actions/filters'
import {getVisibleExpenses} from './selectors/expenses'

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description:'Water bill',amount:2000}))
const expenseTwo = store.dispatch(addExpense({description:'Electric bill',amount:1500}))
store.dispatch(setTextFilter('water'))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.createRoot(document.getElementById('app')).render(jsx);