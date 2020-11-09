# Atividade semana 14

## **Projeto em Aula**

Criar uma API Agenda para reunir contatos do nosso usuário.

Criar representação visual da sua arquitetura.

### Dados para Collection

- id: autogerado e obrigatório
- nome: texto e obrigatório
- celular: texto e obrigatório
- dataNascimento: data e obrigatório
- fotoPerfil: texto e não obrigatório

### API deve retornar seguinte JSON:

```jsx
[
	{
		"_id": "5fa6128cb3afb1104017dd1a",
		"nome": "Ana lu",
		"celular": "912345678",
		"dataNascimento": "1996-10-10T02:00:00.000Z",
		"fotoPerfil": "https://linkdafoto.com.br"
	}
]
```

### Essa API deve ter as seguintes rotas:

- [x]  **"/"** Retorna index com apresentação
{
   mensagem: bem vinda a lista de contatinhos
}
- [x]  **"/contatos/"** Retorna todos os dados do banco de dados
- [x]  "**/contatos/criar**" Cria novo contato e retorna mensagem amigável
- [ ]  "**/contatos/**nome/[NOME]" Retorna contato por nome específico
- [ ]  "**/contatos/**id/[ID]" Retorna contato por id específico
- [ ]  "/contatos/deletar/[ID]" Deleta contato por id específico e retorna mensagem amigável
- [ ]  "/contatos/atualizar/telefone/[ID]" Atualiza somente telefone do contato por id específico e retorna mensagem amigável
- [ ]  "/contatos/atualizar/[ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)

### Arquitetura MVC

```bash
\--📂 NOME-DO-SEU-SERVIDOR
		 |   .gitignore
		 |   package-lock.json
		 |   package.json
	   |   **server.js**
			\--📂 node_modules
			\--📂src
			    |   **app.js**
			    |
			    📂---controller
			    |       **NOMEController.js**
			    |
			    📂---model
			    |       **NOMESchema.js
					|       Repository.js**
			    |
			    📂---routes
			            **NOMERoute.js
									index.js**
```
