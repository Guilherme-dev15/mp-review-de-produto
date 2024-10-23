# Página de Review de Produto | Fundamentos de React

## 📚 Descrição do Projeto

Este projeto foi desenvolvido durante um curso de React e visa criar uma interface interativa para a seção de avaliações de produtos da loja de equipamentos de áudio **Escutante**. O aplicativo permite que os usuários visualizem e adicionem reviews de maneira eficiente, utilizando uma API para gerenciar os dados.

## 🌐 Acesse o Projeto

Você pode acessar a aplicação ao vivo aqui: [Projeto de Review de Produto](https://mp-review-de-produto-steel.vercel.app/)

## 🤓 Estrutura do Repositório

A estrutura do repositório é organizada da seguinte forma:


O arquivo principal para implementação é `ReviewSection.jsx`, localizado na pasta `components/`. Você pode personalizar a estrutura e criar novos componentes conforme necessário.

## 📡 API Utilizada

O projeto utiliza a API fornecida pelo **Codante** para gerenciar as avaliações. Os principais endpoints disponíveis são:

- **GET** `https://apis.codante.io/api/reviews-api/reviews`: Recupera todas as avaliações registradas.
- **POST** `https://apis.codante.io/api/reviews-api/reviews`: Adiciona uma nova avaliação ao sistema.

Para mais detalhes, consulte a [documentação da API](https://docs.apis.codante.io).

## 🔨 Funcionalidades Implementadas

- **Exibição de Reviews:** Ao carregar a página, as avaliações existentes são exibidas.
- **Formulário para Adição de Reviews:** Usuários podem adicionar novos reviews com campos para nome, comentário e avaliação em estrelas.
- **Gerenciamento de Estado:** Utilização do **`useState`** para gerenciar o estado das avaliações.
- **Renderização Condicional:** Mensagem exibida quando não há avaliações disponíveis.
- **Responsividade:** Design adaptável a diferentes tamanhos de tela, utilizando **flexbox** ou **grid**.
- **Estilização:** Estilos aplicados com CSS e módulos CSS.

## 🎨 Design Sugerido

O design foi inspirado por um modelo disponível no [Figma](https://www.figma.com/community/file/1418749577351583982/mini-projeto-pagina-de-review-de-um-produto-fundamentos-de-react).

## 👉🏽 Habilidades Praticadas

- Criação de componentes React e uso de props
- Manipulação de estado e eventos com **`useState`**
- Implementação de formulários simples
- Fetch de dados de uma API com **`useEffect`**
- Renderização condicional e manipulação de listas
- Estilização e responsividade com CSS em React
