import React from 'react'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const AppRouter = ()  => (
    <Router>
        <div>
            <Header />
            <Routes>
                    <Route path="/" element={<ExpenseDashboardPage/>} />
                    <Route path="/create" element={<AddExpensePage/>} />
                    <Route path="/edit/:id" element={<EditExpensePage/>} />
                    <Route path="/help" element={<HelpPage/>} />
                    <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
)

export default AppRouter