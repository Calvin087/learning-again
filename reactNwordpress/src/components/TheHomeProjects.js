import React from "react";
import TheProjectCardR from "./TheProjectCardR";
import TheProjectCardW from "./TheProjectCardW";
import { Link } from "react-router-dom";

const TheHomeProjects = () => (
  <div>
    <div className="container mx-auto lg:w-2/6 xl:w-2/6 text-center mt-12">
      <p>
        <span className="font-semibold text-5xl">ReactJs ///</span>
        <span className="text-red-700 font-thin text-3xl">Apps</span>
      </p>
    </div>

    <div className="flex flex-wrap p-4">
      <TheProjectCardR
        image={
          "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.39.13_640x400.png"
        }
        title={"Calvin T's website redesign"}
        description={
          "Taking my portfolio from wordpress to React and hacking together a blog API"
        }
      />
      <TheProjectCardR
        image={
          "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.42.10_640x400.png"
        }
        title={"Black Economics Biz Directory"}
        description={
          "An ongoing project currently using Google Sheets as a backend API"
        }
        link={"https://black-economics.web.app/"}
      />
      <TheProjectCardR
        image={
          "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.43.44_640x400.png"
        }
        title={"React Expense Tracker"}
        description={
          "A Crud app built in React to track expenses while using AriBnB Libraries."
        }
        link={"https://expensis-app.firebaseapp.com/dashboard"}
      />
      <TheProjectCardR
        image={
          "http://calvint1.sg-host.com/wp-content/uploads/2020/07/lockdown.png"
        }
        title={"Lockdown Productivity App"}
        description={
          "Understanding how to build components in React and manage state."
        }
        link={"https://lockdown-decision.web.app/"}
      />
    </div>

    <div className="container mx-auto lg:w-2/6 xl:w-2/6 text-center mt-12">
      <p>
        <span className="font-semibold text-5xl">Wordpress ///</span>
        <span className="text-red-700 font-thin text-3xl">Clients</span>
      </p>
    </div>

    <div className="flex flex-wrap p-4">
      <TheProjectCardW
        image={
          "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.45.06_640x400.png"
        }
        title={"Eva Tellez OT, Build + SEO"}
        description={
          "Website design and build for an occupational therapist based in Madrid."
        }
        link={"https://evatellez.com/"}
      />
      <TheProjectCardW
        image={
          "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.45.41_640x400.png"
        }
        title={"The Contractor Sales Template"}
        description={
          "A reusable and customisable template sold to contractors."
        }
        link={"https://fencingservicesnorthlondon.torramedia.com/"}
      />
      <TheProjectCardW
        image={
          "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.46.11_640x400.png"
        }
        title={"Kyokushin Karate Build + SEO"}
        description={
          "Built for my old Karate club, attracting local students using SEO"
        }
        link={"http://budokyokushinkai.com/"}
      />
      <TheProjectCardW
        image={
          "http://calvint1.sg-host.com/wp-content/uploads/2020/07/Screenshot-2020-07-18-at-16.46.46_640x400.png"
        }
        title={"Torra Media Marketing"}
        description={
          "My own personal site, used to book client calls and explain my services."
        }
        link={"http://www.torramedia.com/"}
      />
    </div>
  </div>
);

export default TheHomeProjects;
