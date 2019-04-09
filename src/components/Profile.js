import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import ProfileImage from './ProfileImage';

const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

const Profile = ({ fixedResolutions }) => {
	return (
		<animated.div style={animationProps}>
			<h2>Marcel Michau</h2>
			<ProfileImage fixed={fixedResolutions} />
			<p>I write code & stuff</p>
		</animated.div>
	);
};

export default Profile;
