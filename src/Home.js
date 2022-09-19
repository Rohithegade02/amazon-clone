import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";
import Carousel from "react-multi-carousel";

function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg"
              alt=""
            />
          </div>
          <div className="home__row">
            <Product
              id="12321341"
              title="The Lean Startup:How Constant Innovation Creates Radically Successful Businesses Paperback "
              price={30.0}
              image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
              rating={3}
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater ,Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              image="https://m.media-amazon.com/images/I/51ddU7z-xXL._SL1000_.jpg"
              rating={3}
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC49RG905SUXEN 49' Curved LED Gaming Monitor"
              price={200.0}
              image="https://m.media-amazon.com/images/I/31ZLxx1UdJL.jpg"
              rating={3}
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) |Smart speaker with Alexa ,Charcoal Fabric"
              price={99}
              image="https://m.media-amazon.com/images/I/61UnzwX+4NL._SX522_.jpg"
              rating={5}
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9 unch,Wi-Fi,128Gb)-Sliver (4th Generation)"
              price={239.0}
              image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SL1500_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG905SUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WOHD"
              price={1095.0}
              image="https://images.samsung.com/is/image/samsung/ca-c49rg9-lc49rg90ssnxza-backsilver-153309948?$720_576_PNG$"
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
