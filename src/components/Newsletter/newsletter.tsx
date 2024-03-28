import React from 'react'

import { Button, Form } from 'react-bootstrap'
import './newsletter.css'
const Newsletter: React.FC = () => {
  return (
    <Form className="d-flex">
      <div>
        <h2 className="newsletter_title">
          To our
          <br /> Newsletter
        </h2>
        <div className="letter_form">
          <input
            className="input_newsletter"
            type="email"
            placeholder="メールアドレスを入力してください。"
            aria-label="Search"
          />
          <Button className="" variant="dark">
            送信
          </Button>
        </div>
        <img
          style={{ marginLeft: '90%' }}
          src="/src/assets/fox_laptop.svg"
          alt="fox_laptop"
        />
      </div>
    </Form>
  )
}

export default Newsletter
