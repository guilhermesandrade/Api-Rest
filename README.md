# 📦 API REST - Produtos (Node.js + Express + MongoDB + Swagger)

API REST criada como trabalho prático de Backend - 2º Bimestre.  
Ela permite o gerenciamento de produtos de uma loja.


## ✅ Funcionalidades da API:

- Listar todos os produtos
- Buscar um produto específico por **ID** ou **Nome**
- Cadastrar um novo produto
- Atualizar um produto existente
- Deletar um produto


## 🛠️ Tecnologias utilizadas:

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Swagger (Documentação)
- Railway (Deploy)


## 📚 Documentação Swagger (pública):

👉 Acesse:  https://app.swaggerhub.com/apis/guilherme-1b4/api-produtos/1.0.0



## 🧪 Exemplos de Endpoints disponíveis:

| Método | Rota | Função |
|---|---|---|
| GET | `/api/produtos` | Listar todos os produtos |
| GET | `/api/produto?id=ID` | Buscar produto por ID |
| GET | `/api/produto?nome=Nome` | Buscar produto por Nome |
| POST | `/api/produtos` | Cadastrar novo produto |
| PUT | `/api/produtos/:id` | Atualizar produto |
| DELETE | `/api/produtos/:id` | Deletar produto |


## ✅ Status da entrega:

✔️ API funcionando

✔️ Documentação Swagger pública

✔️ Banco de dados no MongoDB Atlas

✔️ Deploy online no Railway