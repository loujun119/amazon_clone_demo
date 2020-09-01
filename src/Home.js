import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-fe.ssl-images-amazon.com/images/G/09/2020/x-site/monthly_deal/07/gw/dayof/076015_GW_DO_01._CB409267032_.jpg"
        alt=""
      />
      <div className="home_row">
        {/** Product  one component(id, title, price, rating, image) */}
        <Product
          id="1"
          title="三脚 スマホ三脚 リモコン付き ビデオカメラ 一眼レフカメラ ミニ三脚 さんきゃく 3WAY雲台 4段階伸縮 360回転 収納袋付きiPhone/Android スマホ等対応…"
          price={1794}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61JLrDPxRNL._AC_SL1500_.jpg"
        />
        {/** Product  two component(id, title, price, rating, image) */}
        <Product
          id="1"
          title="三脚 スマホ三脚 リモコン付き ビデオカメラ 一眼レフカメラ ミニ三脚 さんきゃく 3WAY雲台 4段階伸縮 360回転 収納袋付きiPhone/Android スマホ等対応…"
          price={1794}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61JLrDPxRNL._AC_SL1500_.jpg"
        />
        {/** Product  three component(id, title, price, rating, image) */}
        <Product
          id="1"
          title="三脚 スマホ三脚 リモコン付き ビデオカメラ 一眼レフカメラ ミニ三脚 さんきゃく 3WAY雲台 4段階伸縮 360回転 収納袋付きiPhone/Android スマホ等対応…"
          price={1794}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/61JLrDPxRNL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        {/** Product  one component(id, title, price, rating, image) */}
        <Product
          id="1"
          title="三脚 スマホ三脚 リモコン付き ビデオカメラ 一眼レフカメラ ミニ三脚 さんきゃく 3WAY雲台 4段階伸縮 360回転 収納袋付きiPhone/Android スマホ等対応…"
          price={1794}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61JLrDPxRNL._AC_SL1500_.jpg"
        />
        {/** Product  two component(id, title, price, rating, image) */}
        <Product
          id="1"
          title="三脚 スマホ三脚 リモコン付き ビデオカメラ 一眼レフカメラ ミニ三脚 さんきゃく 3WAY雲台 4段階伸縮 360回転 収納袋付きiPhone/Android スマホ等対応…"
          price={1794}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61JLrDPxRNL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        {/** Product  one component(id, title, price, rating, image) */}
        <Product
          id="1"
          title="三脚 スマホ三脚 リモコン付き ビデオカメラ 一眼レフカメラ ミニ三脚 さんきゃく 3WAY雲台 4段階伸縮 360回転 収納袋付きiPhone/Android スマホ等対応…"
          price={1794}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61JLrDPxRNL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
