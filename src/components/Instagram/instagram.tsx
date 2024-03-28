import { Card, Col, Container, Row } from 'react-bootstrap'
import './instagram.css'

const Instagram = () => {
  return (
    <Container className="instagram_bg">
      <div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#4ba67a' }}>Follow Us</h3>
          <img
            className="Instagram_icon"
            src="/src/assets/Instagram.svg"
            alt="fox_image2"
          />
          <h1>Instagram</h1>
        </div>
        <div className="about_container">
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img src="/src/assets/follow_us1.jpg"></Card.Img>
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: 'center', marginBottom: '20px' }}
                    >
                      フィリッパ オールドリッジ
                    </Card.Title>
                    <span style={{ fontSize: '16px', padding: '5px' }}>
                      PUBG 最強プレイヤーは PUBGの世界大会出場経験を
                      持つプロプレイヤー選手です。
                    </span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default Instagram
