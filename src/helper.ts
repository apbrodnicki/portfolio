/**
 * Capitalizes the first letter in a string
 * @param {string} word
 * @returns {string}
 */
export const capitalizeFirstLetter = (word: string): string => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};
