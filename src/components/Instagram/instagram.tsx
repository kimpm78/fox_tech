import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import data from '../../libs/models/data';
import './instagram.css';

const Instagram: React.FC = () => {
  return (
    <>
      <div className="instagram-container">
        <div className="text-title-frame">
          <label className="instagram-title-top ">Follow Us</label>
          <img
            className="instagram_icon"
            src="/src/assets/Instagram.svg"
            alt="fox_image2"
          />
          <label className="instagram-title-bottom">Instagram</label>
        </div>
        <div className="instagram-card-container">
          <Row xs={1} md={2} className="g-4">
            {data.followers.map((follower) => (
              <Col key={follower.id}>
                <Card>
                  <Card.Img
                    className="instagram-card-image"
                    src={follower.imageSrc}
                    alt="follower_image"
                  ></Card.Img>
                  <Card.Body style={{ margin: '0 0 0 0' }}>
                    <Card.Title className="instagram_title">
                      {follower.name}
                    </Card.Title>
                    <span className="instagram_text">{follower.text}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Instagram;
