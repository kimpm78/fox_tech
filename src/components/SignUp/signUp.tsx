import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './signUp.css';
import { MdErrorOutline } from 'react-icons/md';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');

  const handleError = () => {
    if (!email || !nickname || !password || !confirmPassword) {
      setError('すべての項目が入力されていません');
      return;
    }
    if (password !== confirmPassword) {
      setError('パスワードが一致しません');
      return;
    }
    if (!agree) {
      setError('利用規約に同意してください');
      return;
    }
    // 회원가입 로직 구현
    // 여기서 회원가입 요청을 보내고, 성공적으로 가입되었다면 로그인 페이지로 이동하는 등의 작업을 수행할 수 있습니다.
    // 예: history.push('/SignIn');
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img
          className="signup-image"
          src="/src/assets/signup_image.jpg"
          alt="signup_page"
        />
      </div>
      <div className="signup-right">
        <h2>アカウントを作成</h2>
        <div className="signup-link">
          <p>
            すでにアカウントをお持ちですか？ <Link to="/SignIn">Sign IN</Link>
          </p>
        </div>
        <div className="input-group">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="nickname">ニックネーム</label>
          <input
            type="text"
            id="nickname"
            placeholder="ニックネームを入力してください"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">パスワード確認</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="パスワードを再度入力してください"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="checkbox">
          <input
            className="signup-box "
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree">
            Tech Blog
            IDの利用について利用規約が運用されます。登録すると規約に同意した
            ものとみなされます。
          </label>
        </div>
        <button className="signup-button" onClick={handleError}>
          アカウント作成
        </button>
        {error && (
          <div className="error-message shake">
            <MdErrorOutline className="error-icon" />
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
