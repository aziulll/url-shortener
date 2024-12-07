# URL Shortener - NestJS

Este projeto é um **Encurtador de URLs** simples, criado utilizando o framework **NestJS**, sem persistência em banco de dados. As URLs encurtadas são armazenadas em memória, o que significa que os dados são perdidos quando o servidor é reiniciado.

## Funcionalidades

- **Encurtamento de URL**: Encurta qualquer URL fornecida.
- **Redirecionamento de URL**: Redireciona o usuário para a URL original quando o código encurtado é acessado.

## Tecnologias Utilizadas

- **NestJS**: Framework para Node.js.
- **Node.js**: Plataforma JavaScript no servidor.
- **TypeScript**: Superset de JavaScript.
- **Postman** ou **Insomnia** para testar as APIs (opcional).

## Instruções para Rodar o Projeto

### 1. Clonar o Repositório

Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/url-shortener-nestjs.git
cd url-shortener-nestjs
```

### 2. Instalar as Dependências

Instale as dependências do projeto com o **npm**:

```bash
npm install
```

### 3. Rodar o Servidor

Inicie o servidor com o comando:

```bash
npm run start
```

O servidor estará rodando na URL `http://localhost:3001`.

### 4. Testar a API

#### Encurtar uma URL

Faça um **POST** para o endpoint `/url/shorten` com o corpo da requisição contendo a URL original:

**Exemplo:**

**URL de Requisição:**  
`POST http://localhost:3001/url/shorten`

**Corpo da Requisição:**

```json
{
  "url": "https://www.exemplo.com"
}
```

**Resposta:**

```text
http://encurt/abcd12
```

#### Redirecionar para a URL Original

Faça um **GET** para o endpoint `/url/:shortCode`, onde `:shortCode` é o código gerado para a URL encurtada.

**Exemplo:**

**URL de Requisição:**  
`GET http://localhost:3001/abcd12`

O servidor irá redirecioná-lo para a URL original associada ao código.

**Redirecionamento:**  
`https://www.exemplo.com`

### 5. Testando com cURL

Se preferir, você pode usar **cURL** para testar as APIs:

- **Encurtar uma URL**:

```bash
curl -X POST http://localhost:3001/url/shorten -H "Content-Type: application/json" -d '{"url": "https://www.exemplo.com"}'
```

- **Redirecionar para a URL original**:

```bash
curl http://encurt/abcd12
```

## Estrutura do Projeto

```bash
src/
  ├── app.module.ts        # Módulo principal da aplicação
  ├── app.controller.ts  # Controller que expõe as rotas da API
  └── app.service.ts     # Serviço que gerencia o encurtamento e redirecionamento de URLs
  └── main.ts              # Arquivo principal de inicialização do servidor
```

## Como Funciona

1. **Encurtar URL**: O usuário envia uma URL para o endpoint `/url/shorten` via POST. O servidor gera um código aleatório (de 6 caracteres) para encurtar a URL. Este código é mapeado para a URL original em memória e é retornado como a URL encurtada.
   
2. **Redirecionamento**: Quando o usuário acessa uma URL encurtada (por exemplo, `http://encurt/abcd12`), o servidor redireciona o usuário para a URL original associada ao código.

## Limitações

- As URLs encurtadas são armazenadas em **memória**, ou seja, se o servidor for reiniciado, todas as URLs encurtadas serão perdidas.
- Não há autenticação ou controle de acesso no sistema.

## Melhorias Futuras

- Persistência de dados utilizando banco de dados (MySQL, PostgreSQL, etc).
- Criação de um sistema de autenticação para usuários.
- Implementação de limites de uso e expiração para as URLs encurtadas.

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Faça suas mudanças e commit (`git commit -am 'Adiciona nova feature'`).
4. Envie para o branch (`git push origin minha-feature`).
5. Abra um Pull Request.

---

Se tiver mais alguma dúvida ou sugestão, fique à vontade para abrir uma issue ou contribuir!

