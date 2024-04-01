import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollTopButton.css';

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ページのスクロール位置を取得
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  //コンポーネントがマウントされたらページスクロールのイベントリスナ追加
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 一番上スクロール関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Offcanvas가 열렸을 때 해시태그로 이동하는 동작을 막습니다.
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash && hash !== '#') {
        window.history.pushState('', document.title, window.location.pathname);
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    const offcanvasElement = document.querySelector('.offcanvas');
    if (offcanvasElement) {
      offcanvasElement.addEventListener('shown.bs.offcanvas', handleHashChange);
    }
    return () => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener(
          'shown.bs.offcanvas',
          handleHashChange,
        );
      }
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollTopButton;
