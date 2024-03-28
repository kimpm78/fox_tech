import { Carousel, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import './editor.css'

const Editor = () => {
  return (
    <>
      <h1 className="editor-title">Editor’s picked</h1>
      <Container className="top-container">
        <Row>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <Row>
                <Col md={6} className="col-layout">
                  <Image
                    className="editor-image"
                    src="/src/assets/pereira.jpg"
                    alt="main-image_1"
                  />
                </Col>
                <Col md={6} className="editor-text">
                  <h1 style={{ color: '#4BA67A' }}>YouTuber</h1>
                  <h2>ペレイラ</h2>
                  <p>Margaret E. Pereira</p>
                  <span>
                    海外で有名な製品レビューユーチューバー。
                    <br />
                    彼女が購読している数は520万人であれば、
                    製品を説明しながら購買者に合理的なことを教えてくれる。彼女の映像を見ることになれば、製品の販売量が高くなるという話がある。
                  </span>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={6} className="col-layout">
                  <Image
                    className="editor-image"
                    src="/src/assets/Hal_Garrett.jpg"
                    alt="Hal_Garrett"
                  />
                </Col>
                <Col md={6} className="editor-text">
                  <h1 style={{ color: '#4BA67A' }}>YouTuber</h1>
                  <h2>ギャレット</h2>
                  <p>Hal Garrett</p>
                  <span>
                    チャンネル登録者数：955,000人、平均エンゲージメント：30,149、推定視聴回数：856,701回
                    <br />
                    主にスマートフォンやパソコン、周辺機器等のガジェットや、自作PCの動画を発信するYouTubeチャンネルです。特にガジェットレビューに関しては、所感を分かりやすく正直に表現している点が特徴。
                  </span>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  )
}

export default Editor
