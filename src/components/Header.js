import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Granim from 'granim';

const StyledHeader = styled.header`
	position: relative;
	text-align: center;
	background-color: #282c34;
	color: #ffffff;
	font-size: 24px;
`;

const StyledCanvas = styled.canvas`
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const StyledIntro = styled.div`
	position: relative;
	z-index: 1;
`;

class Header extends Component {
	headerElement = null;

	componentDidMount() {
		new Granim({
			element: this.headerElement,
			name: 'basic-gradient',
			direction: 'left-right',
			opacity: [1, 1],
			isPausedWhenNotInView: true,
			states: {
				'default-state': {
					gradients: [
						['#161616', '#AAAAAA'],
						['#050B47', '#DE2222'],
						['#5768E1', '#0B26E9']
					]
				}
			}
		});
	}

	render() {
		const { className, children } = this.props;

		return (
			<StyledHeader className={className}>
				<StyledCanvas ref={element => (this.headerElement = element)} />
				<StyledIntro>{children}</StyledIntro>
			</StyledHeader>
		);
	}
}

Header.propTypes = {
	className: PropTypes.string
};

export default Header;
