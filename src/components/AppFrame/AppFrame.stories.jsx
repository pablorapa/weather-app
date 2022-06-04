import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'AppFrame',
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat ducimus cupiditate numquam neque aut iste, minus porro. Unde, quasi suscipit! Eveniet cupiditate ducimus enim fuga nulla. Quo, quod deleniti.
        </AppFrame>
    </Router>
)