import { Carousel } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './topPage.css';

const TopPage = () => {
  return (
    <Container className="top-container">
      <Row>
        <Carousel
          data-bs-theme="dark"
          prevIcon={<span className="carousel-control-prev-icon" />}
          nextIcon={<span className="carousel-control-next-icon" />}
          indicators={false}
        >
          <Carousel.Item>
            <Row>
              <Col md={6} className="top-container">
                <p className="main-date">2024年3月18日</p>
                <label className="main-title">
                  使う場所を選ばないHPのディスプレイ一体型PCが画期的
                </label>
                <span className="main-text">
                  ディスプレイ一体型PCは、大画面をコンパクトに設置できるPCとして、家庭、オフィスで人気のあるモデルです。しかし、多くの製品には大型スタンドが装着されており、ほかの部屋に運ぶのが面倒。据え置きで使われているケースが多いことでしょう。
                </span>
                <div className="main-profile">
                  <Image src="/src/assets/interface_1.svg" />
                  <span>ヤサシイ鈴木</span>
                  <span className="main-date">・１分前に登録</span>
                </div>
              </Col>
              <Col md={6}>
                <Image
                  className="main-image"
                  src="src/assets/main_1.jpg"
                  alt="First_slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={6} className="top-container">
                <p className="main-date">2024年3月18日</p>
                <label className="main-title">
                  マイクロソフト、Copilotキー搭載「法人向け Surface Pro
                  10/Surface Laptop 6」発表
                </label>
                <span className="main-text">
                  マイクロソフトは、「Surface」シリーズの新モデルとして、「法人向け
                  Surface Pro 10」「法人向け Surface Laptop
                  6」を発表した。4月9日より順次、出荷を開始する予定だ。
                </span>
                <div className="main-profile">
                  <Image src="/src/assets/interface_2.svg" />
                  <span>川崎美穂</span>
                  <span className="main-date">・1日前に登録</span>
                </div>
              </Col>
              <Col md={6}>
                <Image
                  className="main-image"
                  src="/src/assets/main_2.jpeg"
                  alt="Second_slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={6} className="top-container">
                <p className="main-date">2024年3月18日</p>
                <label className="main-title">
                  GeChic、縦・横置き対応の14型モバイルディスプレイ「On-Lap
                  M141E」本日3/22発売
                </label>
                <span className="main-text">
                  テックウインドは、GeChic製14型モバイルディスプレイ「On-Lap
                  M141E」を本日3月22日に発売する。
                </span>
                <div className="main-profile">
                  <Image src="/src/assets/Interface_3.svg" />
                  <span>荻野美幸</span>
                  <span className="main-date">・54分前に登録</span>
                </div>
              </Col>
              <Col md={6}>
                <Image
                  className="main-image"
                  src="/src/assets/main_3.jpeg"
                  alt="Third_slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="sub-container">
        <Col className="sub-text">
          <div className="sub-container" style={{ backgroundColor: '#f5f5f5' }}>
            <a
              className="sub-link"
              href="https://makuring.jp/pc/rog-zephyrus-g16/"
            >
              <Image
                className="sub-image"
                src="/src/assets/main_sub1.jpg"
                alt="rog-zephyrus-g16"
              />
              Rog Zephyrus G16
              GU605をレビューデザイン・性能・最薄と理想的すぎるゲーミングノートPC
            </a>
          </div>
        </Col>
        <Col className="sub_text">
          <div className="sub-container" style={{ backgroundColor: '#f5f5f5' }}>
            <a
              className="sub-link"
              href="https://makuring.jp/pc/hp-spectre-x360-14/"
            >
              <Image
                className="sub-image"
                src="/src/assets/main_sub2.jpg"
                alt="hp_spectre_x360-14"
              />
              HP Spectre x360
              14をレビュー上質感と使いやすさ両立の13.5インチ2in1ノートPC
            </a>
          </div>
        </Col>
        <Col className="sub_text">
          <div
            className="sub-container"
            style={{
              backgroundColor: '#f5f5f5',
            }}
          >
            <a
              className="sub-link"
              href="https://makuring.jp/pc/hp-elite-dragonfly/"
            >
              <Image
                className="sub-image"
                src="/src/assets/main_sub3.jpg"
                alt="hp-elite-dragonfly-g2"
              />
              HP Elite Dragonfily
              G2レビュー総合力にすぐれる5G/LTE対応の13インチ2in1ノートPC
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopPage;
