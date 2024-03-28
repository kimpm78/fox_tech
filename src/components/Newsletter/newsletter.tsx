import React from 'react';

import { Button, Form } from 'react-bootstrap';
import './newsletter.css';
const Newsletter: React.FC = () => {
  return (
    <Form>
      <div className="newsletter-container">
        <div>
          <label className="newsletter-title">
            To our
            <br /> Newsletter
          </label>
          <div className="newsletter-content">
            <input
              className="input-newsletter"
              type="email"
              placeholder="メールアドレスを入力してください。"
              aria-label="Search"
            />
            <Button className="newsletter-submit" variant="dark">
              送信
            </Button>
          </div>
        </div>
        <div className="fox-laptop">
          <img src="/src/assets/fox_laptop.svg" alt="fox_laptop" />
        </div>
      </div>
    </Form>
  );
};

export default Newsletter;
