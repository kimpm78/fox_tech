import { useState } from 'react';
import {
  Card,
  Col,
  Row,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from 'react-bootstrap';
import Iframe from 'react-iframe';
import data from '../../libs/models/data';
import Image from 'react-bootstrap/Image';
import './blog.css';

const Blog = () => {
  // ページの状態管理
  const [currentPage, setCurrentPage] = useState(1);
  // ページごとにカード数
  const cardsPerPage = 3;
  // 全体カードのデータ
  const currentCards = data.videos.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage,
  );

  // 이전 페이지로 이동
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // 다음 페이지로 이동
  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.videos.length / cardsPerPage)),
    );
  };

  // テキストを30文字に切る関数
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="Blog">
      <div className="card_container">
        <h1 style={{ paddingBottom: '70px' }}>Blog & YouTube Review</h1>
        <Row xs={1} md={3} className="g-4">
          {currentCards.map((card, idx) => (
            <Col key={idx}>
              <Card>
                <div className="iframe-container">
                  <Iframe url={card.youtubeUrl} />
                </div>
                <Card.Body>
                  <Card.Title className="card-title">
                    <h5>{truncateText(card.title, 30)}</h5>
                  </Card.Title>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '20px',
                      gap: '20px',
                    }}
                  >
                    <Image className="blog_img" src={card.imageSrc} />
                    <span>{card.author}</span>
                    <span>・{card.timeAgo}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonToolbar
            aria-label="Toolbar with button groups"
            className="pagination"
          >
            <ButtonGroup className="me-2 mt-4" aria-label="First group">
              <Button onClick={goToPrevPage} disabled={currentPage === 1}>
                ＜
              </Button>
              <Button>{currentPage}</Button>
              <Button
                onClick={goToNextPage}
                disabled={
                  currentPage === Math.ceil(data.videos.length / cardsPerPage)
                }
              >
                ＞
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    </section>
  );
};

export default Blog;
