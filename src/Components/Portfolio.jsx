import React, { useState } from "react";
import { Element } from "react-scroll";
import porfolio_1 from "../../src/assets/image/portfolio_1.jpg"
import porfolio_2 from "../../src/assets/image/portfolio_2.jpg"

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
    <Element id="portfolio" name="portfolio">
    <div
      id="Projects"
      className="hidden p-5 mx-4 my-5 bg-yellow-400 text-dark sm:mx-16 sm:block sm:my-10 rounded-3xl sm:p-10 sm:px-20"
    >
      <section className=" dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] text-center">
                {/* <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Portfolio
                </span> */}
                <h2 className="text-dark font-bold text-center sm:mb-3 mt-5 text-xl leading-[1.8] sm:text-4xl   md:text-5xl">
                  Real world examples of how we have helped Companies achieve
                  their marketing objectives.
                </h2>
                {/* <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p> */}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center w-full sm:-mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-2">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-white text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-white text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-white text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-white text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-full  py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-white text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-white hover:text-black"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex flex-wrap -mx-4"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <PortfolioCard
              ImageHref={porfolio_1}
              category="Astropoints"
              title="this website for astrologer points "
              button="View Details"
              buttonHref="https://astropoints.in/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={porfolio_2}
              category="Triconnix"
              title="digital marketing website to provide services"
              button="View Details"
              buttonHref="https://triconnix.com/ "
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </div>
    </Element>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full sm:px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          {/* <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full h-[100px]" />
          </div> */}
          <div className="relative z-10 mx-7  rounded-2xl bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark overflow-hidden">
            
          <img src={ImageHref} alt="portfolio" className="absolute w-full h-full left-0 right-0 bottom-0 top-0 opacity-50 bg-blend-lighten"  data-aos="fade-right" data-aos-duration="2000"/>
            <span className="block mb-2 text-sm font-medium text-primary">
              {category}
            </span>
            <h3 className="mb-5 text-xl font-bold text-black ">{title}</h3>
            <a
              href={buttonHref}
              className="btn btn-outline btn-warning py-[10px] px-4 text-xs font-medium transition"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};
