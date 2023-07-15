import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                     
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>0xPEPE</b> {" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>0XPepe</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      Contract : 0x7e23a9775a9cce48e180d5692b179d38815e5d69
                    </p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://t.me/ZeroXPepeCoin">
                      <i aria-hidden="true" className="fab fa-telegram" />
                    </a>
                   
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="#"
                    className="btn"
                  >
                    <span>Buy 0xPepe</span>
                  </a>
                  <a href="#" className="btn-lnk">
                    {" "}
                    Chart{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/profile2.png"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    
                    <li>
                      <span className="num">0x<strong>PEPE</strong></span>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> 0XPepe </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="about"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> About <strong>0xPepe</strong></span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                  <span> 0x<strong>Pepe</strong> </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Introducing </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Meme coin on ethereum network, The essence of decentralization and the power of communities to come together, transforming it into a dynamic digital asset. 0xPepe seeks to unite the technology or programming "0x" hexadecimal and Pepe-loving communities.{" "}
                    </div>
                  </div>
                 
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pepe1.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                  <span> 0x<strong>Pepe</strong> </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Community Owned </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      0xPepe is dedicated to the community, Contract address will be renounced and liquidity locked to make investors safer.
                      </p>
                    </div>
                  </div>
                  
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pepe1.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                  <span> 0x<strong>Pepe</strong> </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Low Tax </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Every transaction will be deducted 1% tax fee, the cost of the tax is used for marketing.{" "}
                    </div>
                  </div>
                  
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pepe1.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="lui-bgtitle">
              <span> About 0xPepe </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="tokenomics">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Tokenomics </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
               
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Total Supply </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Total Supply 0xPepe 100.000.000
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        100 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Max Transaction </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Max Transaction is 2%
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "2%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        2 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Max Wallet </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Max Wallet is 2%
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "2%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        2 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Team / Dev Supply </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Team & Dev 0% Supply Allocation
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "0%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        0 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Total Taxes </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Taxes 1%
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "1%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                       1 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Tax Allocation </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          1% Tax Goes To Marketing Wallet
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "1%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        1 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Tokenomics </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Pricing */}
      <section className="lui-section lui-gradient-center" id="roadmap">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Roadmap</span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                
              </div>
            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="pricing-items row">
              <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="lui-subtitle">
                    <span> 0x<strong>Pepe</strong> </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      Deployment <b></b>
                    </span>
                    
                  </div>
                  
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Contract Deployment
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Website Deployment
                        </li>
                        <li>
                          <span>Social Creation</span>
                        </li>
                        <li>
                          <span>Whitepaper</span>
                        </li>
                        <li>
                          <span>Social Update</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                 
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pepe1.png)",
                    }}
                  />
                </div>
              </div>
              <div className="pricing-col center col-xs-12 col-sm-6 col-md-6 col-lg-4">
                
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >

                  <div className="lui-subtitle">
                  <span> 0x<strong>Pepe</strong> </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      Expansion <b></b>
                    </span>
                    
                  </div>
                  
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="" />
                          CoinGecko Listing
                        </li>
                        <li>
                          <i className="" />
                          CoinMarketCap Listing
                        </li>
                        <li>
                          <i className="" />
                          Ads Promotion
                        </li>
                        <li>
                          <i className="" />
                          Burn Plan
                        </li>
                        <li>
                          <i className="" />
                          1000 Holders
                        </li>
                      </ul>
                    </div>
                  </div>
                 
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pepe1.png)",
                    }}
                  />
                </div>
              </div>
              <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                  
                >
                  <div className="lui-subtitle">
                  <span> 0x<strong>Pepe</strong> </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      Development <b>$</b>
                    </span>
                    
                  </div>
                  
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="" />
                          Partnership
                        </li>
                        <li>
                          <i className="" />
                          0xPepe App
                        </li>
                        <li>
                          <i className="" />
                          Trust Wallet Whitelist
                        </li>
                        <li>
                          <i className="" />
                          Cex Listing
                        </li>
                        <li>
                          <i className="" />
                          0xPepe Worlwide Growth.
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pepe1.png)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Roadmap </span>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};
export default Index;
