import React from 'react';

const About = ({ list }) => {
	return list.map(item => <h2 key={item}>{item}</h2>);
};

export default About;
