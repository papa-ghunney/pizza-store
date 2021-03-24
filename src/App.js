import React from 'react'
import Sidebar from './SidebarDropdown/Sidebar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from './SidebarDropdown/pages/Overview';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './SidebarDropdown/pages/Reports';
const App = () => {
    return (
        <>
            <Router>
                <Sidebar />
                <Switch>
                    <Route path="/overview" exact component={Overview}></Route>
                    <Route path="/reports" exact component={Reports}></Route>
                    <Route path="/reports/reports1" exact component={ReportsOne}></Route>
                    <Route path="/reports/reports2" exact component={ReportsTwo}></Route>
                    <Route path="/reports/reports3" exact component={ReportsThree}></Route>
                </Switch>
            </Router>
        </ >
    )
}

export default App
