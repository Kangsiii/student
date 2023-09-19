import React, { useState } from 'react';
import './css/Home.css'; 

function Home() {
  const [studentNumber, setStudentNumber] = useState('');
  const [residentRegistrationNumber, setResidentRegistrationNumber] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (values: Record<string, any>) => {
    try {
      const response = await fetch('http://localhost:3003/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        // 로그인 성공 시 필요한 작업 수행
      } else {
        const errorData = await response.json();
        setLoginError(errorData.message || '로그인 실패');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      setLoginError('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="home-container">
      <div className="login-form">
        <img className='loginLogo' src="img/loginLogo.png" alt="Login Logo" />
        <div className='loginform'>
          <div>
            <img src="img/loginLogo2.png" alt='Login Logo2' />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="학번"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="주민번호 앞자리"
              value={residentRegistrationNumber}
              onChange={(e) => setResidentRegistrationNumber(e.target.value)}
            />
          </div>

          <button onClick={() => handleLogin({ studentNumber, residentRegistrationNumber })}>로그인</button>
          {loginError && <div className="error-message">{loginError}</div>}
        </div>
      </div>
    </div>
  );
}

export default Home;
