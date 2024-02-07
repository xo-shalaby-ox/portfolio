import React, { useState } from "react";
import "./Portfolio.css";
import PortfolioImg from "../../assets/weather.jpg";
import PortfolioImg1 from "../../assets/TodoList.png";
import PortfolioImg2 from "../../assets/portfolio.jpg";
import PortfolioImg3 from "../../assets/siut.jpg";
import PortfolioImg4 from "../../assets/black.jpg";
import PortfolioImg5 from "../../assets/food.jpg";
export const Portfolio = () => {
  const [toggleStates, setToggleStates] = useState(0);
  const toggleTabs = (e) => {
    setToggleStates(e);
  };
  return (
    <section className="portfolio section " id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>
      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <div className="portfolio__box">
            <img
              src={PortfolioImg}
              className="portfolio__pic"
              onClick={() => toggleTabs(1)}
            />
            <p className="portfolio__title">Weather App</p>
            <a
              href="https://weather-self-nine.vercel.app/"
              className="portfolio__link"
              target="_blank"
            >
              <button className="portfolio__btn">Check More</button>
            </a>
          </div>
          <div
            className={
              toggleStates === 1
                ? "portfolio__modal active-modal"
                : "portfolio__modal"
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTabs(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>
              <h3 className="portfolio__modal-title">Weather App</h3>
              <p className="portfolio__modal-description">
                Wep App built with React JS FrameWork
              </p>
              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides information about weather temperature.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides information about wind speed.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides information about air humidity.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides information about all countries of the world.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio__content">
          <div className="portfolio__box">
            <img
              src={PortfolioImg1}
              className="portfolio__pic"
              onClick={() => toggleTabs(2)}
            />
            <p className="portfolio__title">Todo List</p>
            <a
              href="https://todo-list-bice-ten.vercel.app/"
              className="portfolio__link"
              target="_blank"
            >
              <button className="portfolio__btn">Check More</button>
            </a>
          </div>
          <div
            className={
              toggleStates === 2
                ? "portfolio__modal active-modal"
                : "portfolio__modal"
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTabs(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>
              <h3 className="portfolio__modal-title">Todo List</h3>
              <p className="portfolio__modal-description">
                Wep App built with React JS FrameWork
              </p>
              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides adding daily tasks
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides deleting tasks
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides updating tasks
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio__content">
          <div className="portfolio__box">
            <img
              src={PortfolioImg2}
              className="portfolio__pic"
              onClick={() => toggleTabs(3)}
            />
            <p className="portfolio__title">Portfolio</p>
            <a href="" className="portfolio__link" target="_blank">
              <button className="portfolio__btn">Check More</button>
            </a>
          </div>
          <div
            className={
              toggleStates === 3
                ? "portfolio__modal active-modal"
                : "portfolio__modal"
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTabs(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>
              <h3 className="portfolio__modal-title">Portfolio</h3>
              <p className="portfolio__modal-description">
                Wep App built with React JS FrameWork
              </p>
              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    porvides some personal information about me.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides some information about my hobbies.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides some information about my skills.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides some information about my services.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    provides some information about my social media and my
                    contacts.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio__content">
          <div className="portfolio__box">
            <img
              src={PortfolioImg3}
              className="portfolio__pic"
              onClick={() => toggleTabs(4)}
            />
            <p className="portfolio__title">Suit App</p>
            <a
              href="https://1998mohamed.github.io/mo-suit/?fbclid=IwAR3G1IC9gb7j2eiDRCXrt535yfKr3JKnt0ExLv5VAqr3Mw2c3tYZZVR3h4U"
              className="portfolio__link"
              target="_blank"
            >
              <button className="portfolio__btn">Check More</button>
            </a>
          </div>
          <div
            className={
              toggleStates === 4
                ? "portfolio__modal active-modal"
                : "portfolio__modal"
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTabs(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>
              <h3 className="portfolio__modal-title">Suit</h3>
              <p className="portfolio__modal-description">
                Wep App built with React JS FrameWork and JSON database
              </p>
              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    List types of suits for men or woman and provide a
                    description for each suit.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Provide a suit’s price and colors and ability to add the
                    items to your cart.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    List all items that you choose in your cart and provide the
                    total price of all item and ability to remove any item form
                    your car.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio__content">
          <div className="portfolio__box">
            <img
              src={PortfolioImg4}
              className="portfolio__pic"
              onClick={() => toggleTabs(5)}
            />
            <p className="portfolio__title">Black GYM</p>
            <a
              href="https://black-gym-eta.vercel.app/"
              className="portfolio__link"
              target="_blank"
            >
              <button className="portfolio__btn">Check More</button>
            </a>
          </div>
          <div
            className={
              toggleStates === 5
                ? "portfolio__modal active-modal"
                : "portfolio__modal"
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTabs(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>
              <h3 className="portfolio__modal-title">Black GYM</h3>
              <p className="portfolio__modal-description">
                Wep App built with React JS FrameWork
              </p>
              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Portfoilio For Gym which provide an information for this
                    Gym.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    List a features for the users and provide them with the
                    exercises.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">List Gym’s offers.</p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Users can contact with the Gym by sending mails.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio__content">
          <div className="portfolio__box">
            <img
              src={PortfolioImg5}
              className="portfolio__pic"
              onClick={() => toggleTabs(6)}
            />
            <p className="portfolio__title">Food Resturant</p>
            <a
              href="https://1998mohamed.github.io/?fbclid=IwAR1pfkZbMXtU-bRc4Kxh1sOVQhVe2lBh8W9t2xSYKaJkAEFExQ9XWeSVBCw#"
              className="portfolio__link"
              target="_blank"
            >
              <button className="portfolio__btn">Check More</button>
            </a>
          </div>
          <div
            className={
              toggleStates === 6
                ? "portfolio__modal active-modal"
                : "portfolio__modal"
            }
          >
            <div className="portfolio__modal-content">
              <i
                onClick={() => toggleTabs(0)}
                className="uil uil-times portfolio__modal-close"
              ></i>
              <h3 className="portfolio__modal-title">Pizza Resturant</h3>
              <p className="portfolio__modal-description">
                Wep App built with React JS FrameWork
              </p>
              <ul className="portfolio__modal-portfolios grid">
                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    It display collection of pizza and desserts .
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    List containing details about each type of pizza and
                    desserts.
                  </p>
                </li>

                <li className="portfolio__modal-portfolio">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    It provides a way to place an order and choose the item you
                    need.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
