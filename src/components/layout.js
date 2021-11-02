import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { navBar, socialLinks, title } from "./layout.module.css";

import { Button, Popover } from "antd";
import {
  MenuOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const menu = (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <div className={navBar}>
        <div className={socialLinks}>
          <Button shape="circle" icon={<GithubOutlined />} ghost />
          <Button shape="circle" icon={<LinkedinOutlined />} ghost />
        </div>
        <Link to="/" className={title}>
          Jonathan Greazel
        </Link>
        <Popover content={menu} placement="bottom" trigger="click">
          <Button icon={<MenuOutlined />} ghost />
        </Popover>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
