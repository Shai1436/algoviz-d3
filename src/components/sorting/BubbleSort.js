import React from 'react';
import { fn } from '../../core/algorithms/sorting/bubbleSort';
import AnimatedArray from '../../core/animatedObjects/animatedArray';
import Footer from '../Footer';

const BubbleSort = (props) => {
	const arrayWrapper = new AnimatedArray(50, 50, 'cornflowerblue', 'tomato', fn, props.arr);

	return (
		<Footer animationWrapper={arrayWrapper}></Footer>
	);
};

export default BubbleSort;
