import React from 'react'

import { Badge, Card, Col, Row } from 'react-bootstrap'
import './trendingTopic.css'

const TrendingTopic: React.FC = () => {
  return (
    <section id="TrendingTopic" className="card_container">
      <h1 className="card_main_text">Trending topics</h1>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card
              border="light"
              className="cards"
              style={{
                cursor: 'pointer',
              }}
            >
              <Card.Img
                variant="top"
                src="/src/assets/Trending_1.jpg"
              ></Card.Img>
              <Card.Body className="card_text">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Badge bg="primary">おすすめ</Badge>
                  <span>・2024.01.20</span>
                </div>
                <Card.Title style={{ fontSize: '14px' }}>
                  iiyama、さくら色にライトアップしたゲーミングPC「さくらモデル」
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default TrendingTopic
