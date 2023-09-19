const db = require('../db.js');

exports.login = (req, res) => {
  const { student_number, resident_registration_number } = req.body;

  db.query(
    'SELECT student_id FROM students WHERE student_number = ? AND resident_registration_number = ?',
    [student_number, resident_registration_number],
    (err, result) => {
      if (err) {
        console.error('로그인 오류:', err);
        return res.status(500).json({ message: '로그인 오류' });
      }

      // 조회된 사용자 정보가 없을 경우 로그인 실패
      if (result.length === 0) {
        return res.status(401).json({ message: '로그인 실패' });
      }

      // 로그인 성공
      const user = result[0]; // 첫 번째 사용자 정보를 가져옴
      const student_id = students.student_id;
      console.log({ student_id });

      // 여기에서 userId 값을 사용하여 추가 작업을 수행할 수 있습니다.

      // 클라이언트로 응답을 보낼 때 userId와 username을 포함하여 보냅니다.
      res.status(200).json({ message: '로그인 성공', student_id });
    }
  );
};