import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import data from '../../libs/models/data';
import './editor.css';

const Editor = () => {
  return (
    <>
      <h1 className="editor-main-title">Editor’s picked</h1>
      <Container>
        <Row>
          <Carousel data-bs-theme="dark" indicators={false}>
            {data.youtubers.map((item) => (
              <Carousel.Item key={item.id}>
                <Row xs={1} md={2}>
                  <Col md={6} className="col-layout editor-text">
                    <Image
                      className="editor-image"
                      src={item.imageSrc}
                      alt={`main-image_${item.id}`}
                    />
                  </Col>
                  <Col>
                    <div className="editor-sub-container">
                      <label className="editor-title">{item.type}</label>
                      <h2 className="editor-name">{item.name}</h2>
                      <p className="editor-fullName">{item.fullName}</p>
                      <span className="editor-text">{item.text}</span>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </>
  );
};

export default Editor;
