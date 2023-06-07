import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Section2 from './group/Section2';
import Section3 from './group/Section3';
import Section4 from './group/Section4';
import Section5 from './group/Section5';
//import Section6 from './group/Section6';
import Section7 from './group/Section7';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sample1" element={<App />} />
      <Route path="/sample2" element={<Section2 />} />
      <Route path="/sample3" element={<Section3 />} />
      <Route path="/sample4" element={<Section4 />} />
      <Route path="/sample5" element={<Section5 />} />
      <Route path="/sample6" element={<Section5 />} /> {/*change element */}
      <Route path="/sample7" element={<Section7 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
