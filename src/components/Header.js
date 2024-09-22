import React, { useState } from 'react';
import './Header.css';  // CSSをインポート
import { slide as Menu } from 'react-burger-menu';
import { Link} from 'react-router-dom';


function Header() {
  const [isOpen, setIsOpen] = useState(false);  // メニューの開閉状態を管理

  // メニューを閉じる処理
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    
    <div className="header-container">
      {/* 背景の白いボックス */}
      <div className="header-background"></div>

      {/* タイトルテキスト */}
      <div className="header-text-container">
        <div className="header-text"></div> {/* なにもないのはさみしい？ */}
      </div>

      {/* メニューバーアイコン */}
      <Menu
      isOpen={isOpen}  // メニューの開閉状態をバインド
      onStateChange={({ isOpen }) => setIsOpen(isOpen)}  // 状態が変わるたびに開閉状態を更新
      >
        <div className="menu-item"><Link to="/" onClick={closeMenu}>TOP</Link></div>
        <div className="menu-item"><Link to="/Access" onClick={closeMenu}>ACCESS</Link></div>
        <div className="menu-item"><Link to="/About" onClick={closeMenu}>ABOUT US</Link></div>
        <div className="menu-item"><Link to="/AboutFont" onClick={closeMenu}>FONT</Link></div>
        <div className="menu-item"><Link to="/Works" onClick={closeMenu}>WORKS</Link></div>
        <div className="menu-item"><Link to="/News" onClick={closeMenu}>NEWS</Link></div>
      </Menu>
    </div>
  );
}

export default Header;
