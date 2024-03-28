import { Col, Row } from 'react-bootstrap';
import './footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <img
        className="logo"
        src="src/assets/Fox_Tech_Logo.svg"
        alt="fox_tech_logo"
      />
      <hr className="border border-white border-1 opacity-50"></hr>
      <div className="footer-wrapper">
        <Row className="">
          <Col className="footer-column">
            <label className="footer-title">ABOUT US</label>
            <p className="footer-text">
              コンピュータを好きな人向けのレビュー！
              最新ニュース、製品紹介をレビューを頂いております。
              スポンサーに関しては下記のメールアドレスに ご連絡お願い致します。
            </p>
            <label className="footer-title">ADDRESS</label>
            <p className="footer-text">
              〒 777-7777
              <br />
              栃木県栃木市藤岡町部屋258番地9号
            </p>
            <label className="footer-title">PHONES</label>
            <p className="footer-text">+81) 090-1234-8697</p>
          </Col>
          <Col>
            <label className="footer-title">QUICK LINK</label>
            <ul className="footer-ul">
              <li>
                <a className="footer-link" href="#">
                  HOME
                </a>
              </li>
              <li>
                <a className="footer-link" href="#1">
                  TRENDING TOPIC
                </a>
              </li>
              <li>
                <a className="footer-link" href="#2">
                  EDITOR'S PICKED
                </a>
              </li>
              <li>
                <a className="footer-link" href="#3">
                  BLOG & YOUTUBE REVIEW
                </a>
              </li>
              <li>
                <a className="footer-link" href="/SignUp">
                  SIGN UP
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <div>
              <h4 className="footer-sub-text">
                豊富なコンピュータの世界を 知らせてくれるFox tech！
              </h4>
            </div>
            <div className="footer-fox">
              <img
                className="fox_img2"
                src="/src/assets/fox_1.svg"
                alt="fox_image2"
              />
              <div className="footer-icon">
                <a href="https://github.com">
                  <FaGithub className="github-icon" />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="https://www.youtube.com/">
                  <FaYoutube className="social-icon" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <p
            className="footer-text"
            style={{ textAlign: 'center', marginTop: '50px' }}
          >
            © 2023 Fox Tech. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
