global.accounts = require('./accounts.json'); // o .json que tem as informações para fazer login nas contas

const instagood = require('instagood'); // require na nossa dependência principal e obrigatória para o funcionamento. ( https://www.npmjs.com/package/instagood )
const userFollow = 'winchesterdeveloper'; // o usuário que será seguido pelas contas fornecidas
const followersNumber = 2; // número de contas que irão seguir o usuário userFollow ( em ordem crescente -> user_1, user_2, user_3, user_4... )

for(var i = 1; i <= followersNumber; i++) {
	// vai realizar o login na conta do ./accounts.json usando a xcsrftoken e a session id
    const user = new instagood('user', accounts[`user_${i}`].xcsrftoken, accounts[`user_${i}`].sessionid);
	
	// vai seguir o usuário userFollow em ordem das contas fornecidas no ./accounts.json
    user.friendships('follow', userFollow).then((response) => console.log(response), (err) => console.log(err));
        
	// mostrará no console o userFollow + a conta que seguiu o mesmo
	console.log(userFollow + ' seguido por: ' + accounts[`user_${i}`].username);
};
