import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Section2 from './group/Section2'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/sample1" element={<App/>}/>
            <Route path="/sample2" element={<Section2/>}/>
            <Route path="/sample3" element={<App/>}/>
            <Route path="/sample4" element={<App/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)