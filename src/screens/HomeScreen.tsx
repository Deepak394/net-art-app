import React from "react";
import one from "../asserts/1.png";
import two from "../asserts/2.png";
import three from "../asserts/3.png";

const HomeScreen = () => {
  return (
    <>
      <div className="home-screen-container">
        <div className="home-left-img-container">
          <img src={one} alt="" />
        </div>
        <div className="home-right-img-text-container">
          <div className="heading-text">
            <h3>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>
            <ul className="home-list">
              <li>
                {" "}
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <img src={two} alt="" />
          <p >
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="bottom-container-img">
          <img src={three} alt="" />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
        </div>
      </div>
      <div className="bottom2-container">
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>

    </>
  );
};

export default HomeScreen;
