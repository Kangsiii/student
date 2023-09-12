import React, { useState } from 'react';
import './css/Home.css'; 

function Home() {
  // 상태 변수를 사용하여 학번과 주민번호 앞자리를 관리합니다.
  const [studentNumber, setStudentNumber] = useState('');
  const [residentRegistrationNumber, setResidentRegistrationNumber] = useState('');

  // 로그인 버튼을 클릭할 때 실행되는 함수
  const handleLogin = () => {
    // 학번과 주민번호 앞자리를 사용하여 로그인 처리를 수행합니다.
    // 이 부분에서 서버로 요청을 보내서 로그인 처리를 할 수 있습니다.
    // 예를 들어, Axios 또는 fetch를 사용하여 서버와 통신할 수 있습니다.
    // 로그인에 성공하면 다음 페이지로 이동하도록 코드를 작성하세요.
    // 예를 들어, React Router를 사용하여 페이지를 이동할 수 있습니다.
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
                type="password"
                placeholder="주민번호 앞자리"
                value={residentRegistrationNumber}
                onChange={(e) => setResidentRegistrationNumber(e.target.value)}
            />
            </div>

            <button onClick={handleLogin}>로그인</button>
        </div>
      </div>
    </div>
  );
}

export default Home;