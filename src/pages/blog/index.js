import * as React from "react";
import { Link, graphql } from "gatsby";

import { Card } from "antd";

import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <Card
          key={node.id}
          title={node.frontmatter.title}
          style={{ width: "50%", margin: "20px auto" }}
          extra={<Link to={`/blog/${node.slug}`}>Read Post</Link>}
        >
          <p>Posted: {node.frontmatter.date}</p>
        </Card>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
