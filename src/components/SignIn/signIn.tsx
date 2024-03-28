import React from 'react'
import { Link } from 'react-router-dom'

import './signIn.css'

const SignIn: React.FC = () => {
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
        <div className="login-link">
          <p>
            すでにアカウントをお持ちですか？ <Link to="/SignIn">Sign IN</Link>
          </p>
        </div>
        <div className="input-group">
          <label htmlFor="email">メールアドレス</label>
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <div className="input-group">
          <label htmlFor="nickname">ニックネーム</label>
          <input type="text" placeholder="ニックネームを入力してください" />
        </div>
        <div>
          <label>パスワード</label>
          <input type="password" placeholder="パスワードを入力してください。" />
        </div>
        <div>
          <label>パスワード確認</label>
          <input type="password" placeholder="パスワードを入力してください。" />
        </div>
        <div>
          <button>アカウント作成</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
