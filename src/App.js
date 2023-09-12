import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home 페이지에서는 헤더와 메뉴를 렌더링하지 않음 */}
          <Route path="/" element={<Home />} />

          {/* 다른 페이지에서는 헤더와 메뉴를 렌더링 */}
          <Route path="/Main" element={<>
            <Header />
            <Menu />
            <Main />
          </>} />

          {/* 다른 페이지 라우트들을 여기에 추가 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;