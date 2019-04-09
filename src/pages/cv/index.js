import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import ProfileImage from '../../components/ProfileImage';
//import About from '../components/About';
import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

export function CVPage({ data, currentDate = new Date() }) {
	theme.accentColour = theme.accentColourPalette[5];

	const headerProps = useSpring({ opacity: 1, from: { opacity: 0 } });
	const contentProps = useSpring({
		from: { opacity: 0, transform: 'translateY(40px)' },
		to: { opacity: 1, transform: 'translateY(0px)' },
		delay: 1000
	});

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={
						<animated.div style={headerProps}>
							<h2>Marcel Michau</h2>
							<ProfileImage fixed={data.file.childImageSharp.fixed} />
							<p>I write code & stuff</p>
						</animated.div>
					}
					mainContent={
						<animated.div
							style={contentProps}
							dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
						/>
					}
				/>
			</Layout>
		</ThemeProvider>
	);
}

export default CVPage;

CVPage.propTypes = {
	data: PropTypes.object.isRequired,
	currentDate: PropTypes.object
};

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
		}
		file(relativePath: { eq: "profile.jpg" }) {
			childImageSharp {
				fixed(width: 250, height: 250) {
					...GatsbyImageSharpFixed_withWebp_tracedSVG
				}
			}
		}
	}
`;
