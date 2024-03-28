import React, { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';

import './ForgetPassword.css';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [authentication, setAuthentication] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');

  const handleError = () => {
    if (!email || !authentication || !newPassword || !confirmPassword) {
      setError('すべての項目が入力されていません');
      return;
    }
    if (!authentication) {
      setError('認証コードが入力されていません');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('パスワードが一致しません');
      return;
    }
    if (!agree) {
      setError('利用規約に同意してください');
      return;
    }
  };

  return (
    <div className="forget-container">
      <div className="forget-left">
        <img
          className="forget-image"
          src="/src/assets/signin_image.jpg"
          alt="signin_page"
        />
      </div>
      <div className="forget-right">
        <h2>パスワードを忘れた方</h2>
        <div className="forget-link">
          <p>
            ご登録されたメールアドレスにパスワード再設定のご案内が送信されます。
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
          <label>認証コード</label>
          <input
            type="password"
            id="authentication"
            placeholder="認証コードを入力してください"
            value={authentication}
            onChange={(e) => setAuthentication(e.target.value)}
          />
        </div>
        <button className="forget-button">送信する</button>
        <div className="input-group">
          <label>新しいパスワード</label>
          <input
            type="password"
            id="newPassword"
            placeholder="パスワードを入力してください"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>新しいパスワード確認</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="パスワードを再入力してください"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="checkbox">
          <input className="memories-box" type="checkbox" id="memories" />
          <label htmlFor="memories">
            Tech
            BlogIDの利用について利用規約が運用されます。登録すると規約に同意した
            ものとみなされます。
          </label>
        </div>
        <button className="forget-button" onClick={handleError}>
          パスワードをリセットする
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

export default ForgetPassword;
