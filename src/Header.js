import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

/** 必ず、昨日パッケージをインポートする*/
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      {/**  logo on the left -> img */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/**  検索欄
       * SearchIconがつかえれば、npmでインストールの必要がある、
       * 1,npm install @material-ui/core;
       * 2,npm install @material-ui/icons
       */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/**   三つリンク*/}
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">こんにちは,ログイン</span>
            <span className="header_optionLineTwo">アカウント&リスト</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">返品もこちら</span>
            <span className="header_optionLineTwo">注文履歴</span>
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">今すぐ登録</span>
            <span className="header_optionLineTwo">プライム</span>
          </div>
        </Link>
      </div>
      {/**   Basket icon with number マッケートのアイコン　と商品数*/}
      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          {/**   shopping Basket icon マッケートのアイコン*/}
          <ShoppingBasketIcon />
          {/**   number 商品数*/}
          <span className="header_optionLineTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
