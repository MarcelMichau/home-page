import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Container = styled.div`
  background-color: #1d2129;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 100px;
  grid-gap: 5px;
  grid-template-areas:
    'h'
    'm'
    'f';
`;

const AlignedHeader = styled(Header)`
  grid-area: h;
`;

const AlignedMain = styled(Main)`
  grid-area: m;
`;

const AlignedFooter = styled(Footer)`
  grid-area: f;
`;

export function IndexPage({ data }) {
  return (
    <Layout>
      <Container>
        <AlignedHeader
          profileImageResolutions={data.file.childImageSharp.resolutions}
        />
        <AlignedMain content={data.markdownRemark.html} />
        <AlignedFooter />
      </Container>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query MainContent($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    file(relativePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        resolutions(width: 120) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }
  }
`;
