import ghpages from 'gh-pages';

ghpages.publish(
	'public',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/ylahssini/tic-tac-toe.git',
		user: {
			name: 'Youssef',
			email: 'ylahssini@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('🚀 Deploy Complete!');
	}
);
