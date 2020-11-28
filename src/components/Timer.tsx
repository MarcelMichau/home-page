import React, { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

const Timer = ({ sinceDate }) => {
	const [now, updateNow] = useState(differenceInSeconds(new Date(), sinceDate));

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);

		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		updateNow(differenceInSeconds(new Date(), sinceDate));
	}

	return <span>{now.toLocaleString()}</span>;
};

export default Timer;
