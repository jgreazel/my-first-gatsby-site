import * as React from "react";
import Layout from "../components/layout";

import { Collapse } from "antd";

const AboutPage = () => {
  const { Panel } = Collapse;
  return (
    <Layout pageTitle="About Me">
      <h2>Experience</h2>
      <Collapse>
        <Panel header="DMSi">
          <p>Software Engineer</p>
          <p>Omaha, NE</p>
          <p>February 2021 - Present</p>
          <ul>
            <li>
              Worked to migrate DMSi's flagship ERP application from a
              Windows-based app to a microservices-based, single-page web app
            </li>
            <li>Lead developer for the app's installed sales module</li>
            <li>
              Managed weekly releases of internal npm packages and middleware
              services
            </li>
          </ul>
        </Panel>
        <Panel header="Greazel Sites, LLC">
          <p>Owner</p>
          <p>Ames, IA</p>
          <p>July 2020 - May 2021</p>
          <ul>
            <li>
              Created professional Wordpress sites catering to my clients'
              business and personal needs
            </li>
            <li>
              Managed day-to-day operations; including accounting, social media,
              and development
            </li>
          </ul>
        </Panel>
        <Panel header="Buildretrend">
          <p>Software Development Intern</p>
          <p>Omaha, NE</p>
          <p>May 2019 - August 2020</p>
          <ul>
            <li>Summer & Fall 2019, Summer 2020</li>
            <li>
              Developed in-house web app to organize, categorize, and prioritize
              software issues
            </li>
            <li>
              Migrated existing application pages to React, collaborating
              closely with architecture and QA teams
            </li>
          </ul>
        </Panel>
      </Collapse>
      <h2>Education</h2>
      <Collapse>
        <Panel header="Iowa State University">
          <p>Computer Engineering, BS</p>
          <p>Ames, IA</p>
          <p>2017 - 2021</p>
          <ul>
            <li>3.71 GPA</li>
            <li>Top 2% Sophomore Engineers - Spring 2018</li>
          </ul>
        </Panel>
      </Collapse>
    </Layout>
  );
};

export default AboutPage;
