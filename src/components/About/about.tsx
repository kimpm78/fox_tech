import { useState } from 'react';
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

  // 前のページに移動(TODO：デザインのUIに対応できるようにする)
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // 次のページに移動(TODO：デザインのUIに対応できるようにする)
  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.videos.length / cardsPerPage)),
    );
  };

  return (
    <section id="About">
      <div style={{ backgroundColor: '#fbc0a6', display: 'grid' }}>
        <h1 className="about_main_text">About</h1>
        <Image
          className="about_main_image"
          src="src/assets/About_main.jpg"
          alt="about_main1"
        />
        <div
          style={{
            fontSize: '35px',
            color: '#fff',
            fontWeight: '600',
            margin: '20px 0px 20px 100px',
          }}
        >
          <span>あなたも製品について</span>
        </div>
        <div
          style={{
            fontSize: '35px',
            color: '#fff',
            fontWeight: '600',
            margin: '0px 0px 30px 200px',
          }}
        >
          <span>情報を知ったらプロ</span>
        </div>
      </div>
      <div style={{ margin: '50px 40px 90px 500px' }}>
        <span>
          高性能なプロセッサと大容量のストレージを備えた優れた製品です。 <br />
          最新のゲームやビジネスアプリケーションをスムーズに実行できるほか、高解像度の映像や大容量のファイルを快適に処理できます。
          <br />
          また、薄型で軽量なデザインが魅力であり、持ち運びやすさにも配慮されています。
          <br />
          多くのユーザーにとって、このパソコンは優れたパフォーマンスと使いやすさを兼ね備えた理想的な選択肢となるでしょう。
        </span>
      </div>
      <div>
        <h1 style={{ fontSize: '90px', margin: '0 0 30px 100px' }}>
          My favorite
        </h1>
        <h1 style={{ fontSize: '90px', margin: '0 0 30px 300px' }}>Product</h1>
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
  );
};

export default About;
