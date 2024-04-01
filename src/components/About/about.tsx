import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import data from '../../libs/models/data';
import './about.css';

const About = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const currentCards = data.myProducts.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage,
  );

  const [showText, setShowText] = useState(false); // 텍스트가 보이는 상태 여부 상태

  useEffect(() => {
    // 페이지 로드 후 1초 뒤에 텍스트가 나타나도록 설정
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="About">
        <div className="about-container">
          <h1 className="about_main_text">About</h1>
          <Image
            className="about-main-image"
            src="src/assets/About_main.jpg"
            alt="about_image"
          />
          <div>
            <div className="about-sub-text-top">
              <span>あなたも製品について</span>
            </div>
            <div className="about-sub-text-bottom">
              <span>情報を知ったらプロ</span>
            </div>
          </div>
        </div>
        <div className="about-span">
          <span>
            高性能なプロセッサと大容量のストレージを備えた優れた製品です。{' '}
            <br />
            最新のゲームやビジネスアプリケーションをスムーズに実行できるほか、高解像度の映像や大容量のファイルを快適に処理できます。
            <br />
            また、薄型で軽量なデザインが魅力であり、持ち運びやすさにも配慮されています。
            <br />
            多くのユーザーにとって、このパソコンは優れたパフォーマンスと使いやすさを兼ね備えた理想的な選択肢となるでしょう。
          </span>
        </div>
        <div className="card-container">
          <h1 className="about-main-text-top">My favorite</h1>
          <h1 className="about-main-text-bottom">Product</h1>
          <div className="about_container">
            <Row xs={1} md={3} className="g-4">
              {currentCards.map((card, idx) => (
                <Col key={idx}>
                  <Card
                    border="light"
                    className="cards"
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <Card.Img src={card.imageSrc}></Card.Img>
                    <Card.Body className="card_text">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p className="about_date">・{card.timeAgo}</p>
                      </div>
                      <Card.Title style={{ fontSize: '14px' }}>
                        {card.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
