/**
 * Capitalizes the first letter in a string
 * @param word: string
 * @returns string
 */
export const capitalizeFirstLetter = (word: string): string => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Takes a two-dimensional array and returns the inner array
 * @param array
 * @returns unknown[]
 */
export const reduceArray = (array: unknown[][]): unknown[] => {
	return array.reduce(
		(accumulator, currentArray) => {
			for (const currentElement of currentArray) {
				if (!accumulator.includes(currentElement)) {
					accumulator.push(currentElement);
				}
			}

			return accumulator;
		},
		[]
	);
};
