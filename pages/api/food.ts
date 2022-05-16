// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GetServerSideProps } from 'next';

// type Data = {
// 	name: string;
// };

export const getServerSideProps: GetServerSideProps = async () => {
	const checker = await fetch(
		`https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPE_KEY}&number=2`
	);
	const data: any = await checker.json();
	console.log(data);

	return {
		props: { data },
	};
};

export default getServerSideProps;
