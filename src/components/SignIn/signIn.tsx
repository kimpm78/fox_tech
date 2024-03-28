import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';
import './signIn.css';
import Home from '../Home';

const SignIn: React.FC = () => {
  const getEmail = localStorage.getItem('emailData');
  const getPassword = localStorage.getItem('passwordData');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [memories, setMemories] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email == 'dev01@gmail.com' && password == '123456') {
      localStorage.setItem('emailData', 'dev01@gmail.com');
      localStorage.setItem('passwordData', '123456');
    }
  };

  // // login 維持
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handlerLogIn = (email, password) => {
  //   localStorage.setItem('isLoggedIn', '1');
  //   // ログインされたときの処理
  //   setIsLoggedIn(true);
  // };
  // // 再読み込み時にログインを維持する
  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  //   if (storedUserLoggedInInformation === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // // ログアウトする時の処理
  // const handlerLogout = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  const handleErrorLogIn = () => {
    if (!email || !password) {
      setError('すべての項目が入力されていません');
      return;
    }
    if (!password) {
      setError('パスワードが入力されていません');
      return;
    }
  };

  return (
    <div>
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
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
                <label htmlFor="email">
                  メールアドレス または ニックネーム
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
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
                <input className="signin-box" type="checkbox" id="memories" />
                <label htmlFor="memories">
                  次回からメールアドレスまたはニックネームを省略
                </label>
              </div>
              <button className="signin-button" onClick={handleErrorLogIn}>
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
      )}
    </div>
  );
};

export default SignIn;
