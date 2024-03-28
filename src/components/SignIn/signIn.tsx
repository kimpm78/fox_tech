import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';
import './signIn.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (rememberMe) {
      const savedEmail = localStorage.getItem('emailData');
      setEmail(savedEmail || '');
    }
  }, [rememberMe]);

  const handleLogin = () => {
    if (
      (email === 'dev01@gmail.com' || email === 'foxTech') &&
      password === '123456'
    ) {
      localStorage.setItem('emailData', rememberMe ? email : '');
      localStorage.setItem('passwordData', rememberMe ? password : '');
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/'; // ログイン後にホームページに遷移
      return true;
    } else {
      setError('無効な電子メールまたはパスワードです');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <div className="signin-container">
        <div className="signin-left">
          <img
            className="signin-image"
            src="/src/assets/signin_image.jpg"
            alt="signin_page"
          />
        </div>
        <div className="signin-right">
          <h2>ログイン</h2>
          <div className="input-group">
            <label htmlFor="email">メールアドレス または ニックネーム</label>
            <input
              type="text"
              id="email"
              placeholder="example@gmail.com or example"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>パスワード</label>
            <input
              type="password"
              id="password"
              placeholder="パスワードを入力してください"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkbox">
            <input
              className="signin-box"
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">
              次回からメールアドレスまたはニックネームを省略
            </label>
          </div>
          <button className="signin-button" type="submit">
            ログインする
          </button>
          <div className="signin-link">
            <p>
              <Link to="/ForgetPassword">パスワードを忘れの方</Link>
            </p>
          </div>
          {error && (
            <div className="error-message shake">
              <MdErrorOutline className="error-icon" />
              {error}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SignIn;
