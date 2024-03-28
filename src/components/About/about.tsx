import { Card, Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './about.css'

const About = () => {
  return (
    <section id="About">
      <div style={{ backgroundColor: '#fbc0a6', display: 'flex' }}>
        <h1 className="about_main_text">About</h1>
        <Image
          className="about_main_image"
          src="src/assets/About_main.jpg"
          alt="about_main1"
        />
      </div>
      <div>
        <span>あなたも製品について</span>
        <span>情報を知ったらプロ</span>
      </div>
      <div style={{ margin: '50px 77px 90px 100px' }}>
        <span>
          高性能なプロセッサと大容量のストレージを備えた優れた製品です。最新のゲームやビジネスアプリケーションをスムーズに実行できるほか、高解像度の映像や大容量のファイルを快適に処理できます。
          <br />
          また、薄型で軽量なデザインが魅力であり、持ち運びやすさにも配慮されています。多くのユーザーにとって、このパソコンは優れたパフォーマンスと使いやすさを兼ね備えた理想的な選択肢となるでしょう。
        </span>
      </div>
      <div>
        <h1 style={{ margin: '100px' }}>My favorite product</h1>
        <div className="about_container">
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
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
                    src="/src/assets/macbook_15.jpg"
                  ></Card.Img>
                  <Card.Body className="card_text">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <p>・2023.10.18</p>
                    </div>
                    <Card.Title style={{ fontSize: '14px' }}>
                      アップル M2搭載の15型「MacBook Air」
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  )
}

export default About
