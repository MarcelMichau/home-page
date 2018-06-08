import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Granim from 'granim';
import ProfileImage from './ProfileImage';

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
		const granimInstance = new Granim({
			element: this.headerElement,
			name: 'basic-gradient',
			direction: 'left-right',
			opacity: [1, 1],
			isPausedWhenNotInView: true,
			states: {
				'default-state': {
					gradients: [
						['#AA076B', '#61045F'],
						['#02AAB0', '#00CDAC'],
						['#DA22FF', '#9733EE']
					]
				}
			}
		});
	}

	render() {
		const { className } = this.props;

		return (
			<StyledHeader className={className}>
				<StyledCanvas innerRef={element => (this.headerElement = element)} />
				<StyledIntro>
					<h2>Marcel Michau</h2>
					<ProfileImage
						profileImageResolutions={this.props.profileImageResolutions}
					/>
					<p>I write code & stuff</p>
				</StyledIntro>
			</StyledHeader>
		);
	}
}

Header.propTypes = {
	className: PropTypes.string
};

export default Header;
