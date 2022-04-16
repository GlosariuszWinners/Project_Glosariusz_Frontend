import axios from 'axios';

export const polishAlphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'z', 'ź', 'ż'];

export const getPolishAlphabet = async () => {
	try {
		const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/words/alphabet`);
		return data;
	} catch(e) {
		console.error(e);
		return [];
	}
};