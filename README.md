# ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage%20(2).png?v=1627787432690) Insta F Project ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage%20(2).png?v=1627787432690)
Este projeto foi criado com o intuito de seguir uma conta específica de Instagram com múltiplas contas, usando apenas a `xcsrftoken` e a `sessionid` das contas zumbi.

### 📁 Sessões
- 📦 [Dependências](#dependences)
- 📜 [Como Usar](#how-to-use)
- ⚠ [Atenção](#danger)

<a name="dependences"></a>
### 📦 Dependências
Nome | Versão | Download |
--------- | ------ | ------ |
[instagood](https://www.npmjs.com/package/instagood/v/1.4.1) | 1.4.1 | instagood@1.4.1 |

<a name="how-to-use"></a>
### 📜 Como Usar
Comece configurando a `accounts.json`, fornecendo os dados necessários, usando as informações contidas na localStorage da sua conta do Instagram que será usada como um zumbi. Após isso, basta setar o nome do usuário que deseja seguir na `main.js`.

<a name="danger"></a>
### ⚠ Atenção
O uso de proxy + setTimeout() é altamente recomendado, assim evitando a suspensão da sua conta. Esse script serve apenas como base para projetos maiores.
