import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ScrollTopButton.css'

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  // ページのスクロール位置を取得
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  //コンポーネントがマウントされたらページスクロールのイベントリスナ追加
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 一番上スクロール関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {isVisible && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}
export default ScrollTopButton
