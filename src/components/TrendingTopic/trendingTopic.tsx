import React from 'react';

import { Badge, Card, Col, Row } from 'react-bootstrap';
import data from '../../libs/models/data';

import './trendingTopic.css';

const TrendingTopic: React.FC = () => {
  return (
    <section id="TrendingTopic" className="card_container">
      <h1 className="card_main_text">Trending topics</h1>
      <Row xs={1} md={3} className="g-4">
        {data.topics.map((topic) => (
          <Col key={topic.id}>
            <a
              className="topic-link"
              href={topic.Url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                border="light"
                className="cards"
                style={{
                  cursor: 'pointer',
                }}
              >
                <Card.Img variant="top" src={topic.imageSrc} />
                <Card.Body className="card_text">
                  <div style={{ display: 'flex', margin: '5px 0' }}>
                    {topic.type === 'basics' && (
                      <Badge bg="primary">おすすめ</Badge>
                    )}
                    {topic.type === 'desktop' && (
                      <Badge bg="danger">デスクトップ</Badge>
                    )}
                    {topic.type === 'laptop' && (
                      <Badge bg="danger">ノートブック</Badge>
                    )}
                    {topic.type === 'UMPC' && <Badge bg="info">UMPC</Badge>}
                    {topic.type === 'graphic' && (
                      <Badge bg="info">グラボ</Badge>
                    )}
                  </div>
                  <span className="topic-time">・{topic.time}</span>
                  <Card.Title style={{ fontSize: '14px', marginTop: '5px' }}>
                    {topic.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default TrendingTopic;
