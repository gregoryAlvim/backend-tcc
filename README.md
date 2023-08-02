<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## API Documentation

## User

#### **Cria um usuário**

```http
  POST /users/create-user
```

#### Body

| Parâmetro   | Tipo       |  Descrição                           | Requerimento |
| :---------- | :--------- |  :---------------------------------- | :--------- |
| `name` | `string` | Nome do usuário | **Obrigatório**
| `email` | `string` | E-mail de acesso | **Obrigatório**
| `password` | `string` | Senha de acesso | **Obrigatório**
| `avatar` | `string` | Url da imagem | **Opcional**

##

#### **Retorna os dados do usuário**

```http
  GET /users/find-user-by/
```
#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**


##

#### **Atualiza os dados do usuário**

```http
  PATCH /users/update-user-by/
```

#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**


#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `name` | `string` | Nome do usuário | **Opcional**
| `email` | `string` | E-mail de acesso | **Opcional**
| `password` | `string` | Senha de acesso | **Opcional**
| `avatar` | `string` | Url da imagem | **Opcional**


## Auth

#### **Login do usuário para criar o token de acesso e o token de atualização**

```http
  POST /auth/login
```

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `email` | `string` | E-mail de acesso | **Obrigatório**
| `password` | `string` | Senha de acesso | **Obrigatório**

##

#### **Utiliza o token de atualização para atualizar um token expirado**

```http
  POST /auth/refresh
```

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `refresh` | `string` | Token de atualização | **Obrigatório**

## Wallet

#### **Atualiza o valor da carteira do usuário**

```http
  PATCH /wallet/update/
```

#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `value` | `number` | Valor atual da carteira | **Obrigatório**

## Category


 Todas as rotas dessa categoria necessitam do header!
#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**

#### **Cria uma categoria**

```http
  POST /categories/create-category
```

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `name` | `string` | Nome da categoria | **Obrigatório**
| `type` | `string` | Tipo da categoria | **Obrigatório**

#### **Atualiza os dados da categoria**

```http
  PATCH /categories/update-category-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | uuid da categoria | **Obrigatório**

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `name` | `string` | Nome da categoria | **Opcional**
| `type` | `string` | Tipo da categoria | **Opcional**

#### **Retorna todas as categorias do usuário**

```http
  GET /categories/get-all
```

Retorna 3 arrays, sendo eles:

#### **allCategoriesHTTP**: com todas as categorias. 
#### **incomeCategoriesHTTP**: somente com as categorias de receitas.
#### **expenseCategoriesHTTP**: somente com as categorias de despesas.

## Expense


 Todas as rotas dessa categoria necessitam do header!

#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**

#### **Cria uma despesa**

```http
  POST /expenses/create-expense
```

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `category_uuid` | `string` | UUID da categoria | **Obrigatório**
| `description` | `string` | Descrição da despesa | **Obrigatório**
| `date` | `string` | Data da despesa no formato "DD/MM/YYYY" | **Obrigatório**
| `value` | `number` | Valor da despesa | **Obrigatório**
| `isPay` | `boolean` | A despesa já foi paga? | **Obrigatório**

#### **Atualiza os dados de uma despesa**

```http
  PATCH /expenses/update-expense-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID da despesa | **Obrigatório**

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `category_uuid` | `string` | UUID da categoria | **Opcional**
| `description` | `string` | Descrição da despesa | **Opcional**
| `date` | `string` | Data da despesa no formato "DD/MM/YYYY" | **Opcional**
| `value` | `number` | Valor da despesa | **Opcional**
| `isPay` | `boolean` | A despesa já foi paga? | **Opcional**

#### **Retorna os dados de uma despesa**

```http
  GET /expenses/find-expense-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID da despesa | **Obrigatório**

#### **Retorna todas as despesas do usuário de um determinado mês**

```http
  GET /expenses/get-all?month=$&year=$
```

#### URL Query

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `month` | `string` | Número referênte ao mês que deseja filtrar, "8" Agosto | **Obrigatório**
| `year` | `string` | Ano que deseja filtrar, "2023" | **Obrigatório**

#### **Deleta uma despesa**

```http
  DELETE /expenses/delete-expense-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID da despesa | **Obrigatório**

## Income


 Todas as rotas dessa categoria necessitam do header!

#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**

#### **Cria uma receita**

```http
  POST /incomes/create-income
```

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `category_uuid` | `string` | UUID da categoria | **Obrigatório**
| `description` | `string` | Descrição da receita | **Obrigatório**
| `date` | `string` | Data da receita no formato "DD/MM/YYYY" | **Obrigatório**
| `value` | `number` | Valor da receita | **Obrigatório**
| `isReceived` | `boolean` | A receita já foi recebida? | **Obrigatório**

#### **Atualiza os dados de uma receita**

```http
  PATCH /incomes/update-income-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID da receita | **Obrigatório**

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `category_uuid` | `string` | UUID da categoria | **Opcional**
| `description` | `string` | Descrição da receita | **Opcional**
| `date` | `string` | Data da receita no formato "DD/MM/YYYY" | **Opcional**
| `value` | `number` | Valor da receita | **Opcional**
| `isReceived` | `boolean` | A receita já foi recebida? | **Opcional**

#### **Retorna os dados de uma receita**

```http
  GET /incomes/find-income-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID da receita | **Obrigatório**

#### **Retorna todas as receitas do usuário de um determinado mês**

```http
  GET /incomes/get-all?month=$&year=$
```

#### URL Query

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `month` | `string` | Número referênte ao mês que deseja filtrar, "8" Agosto | **Obrigatório**
| `year` | `string` | Ano que deseja filtrar, "2023" | **Obrigatório**

#### **Deleta uma receita**

```http
  DELETE /incomes/delete-income-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID da receita | **Obrigatório**

## Planning


 Todas as rotas dessa categoria necessitam do header!

#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**

#### **Cria um planejamento**

```http
  POST /plannings/create-planning
```

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `month` | `string` | Número referênte ao mês | **Obrigatório**
| `goal` | `number` | Meta do planejamento | **Obrigatório**
| `planningsByCategory` | `array` | Exemplo do corpo do objeto abaixo | **Obrigatório**

#### Body to planningsByCategory

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `goal` | `number` | Meta do planejamento para categoria | **Obrigatório**
| `category_uuid` | `string` | UUID da categoria | **Obrigatório**

#### **Retorna os dados de um planejamento**

```http
  GET /plannings/find-planning-by/${id}
```
#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID do planejamento | **Obrigatório**

#### **Deleta um planejamento**

```http
  DELETE /plannings/delete-planning-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID do planejamento | **Obrigatório**

## PlanningByCategory


 Todas as rotas dessa categoria necessitam do header!

#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**

#### **Atualiza um planejamento por categoria**

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID do planejamento por categoria | **Obrigatório**

#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `goal` | `number` | Meta de planejamento para essa categoria| **Obrigatório**
| `category_uuid` | `string` | UUID da categoria | **Obrigatório**

#### **Deleta um planejamento por categoria**

```http
  DELETE /plannings/delete-planning-by-category-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID do planejamento por categoria | **Obrigatório**

## Objective


 Todas as rotas dessa categoria necessitam do header!

#### Header

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `Authorization`      | `string` |  Bearer Token JWT | **Obrigatório**

#### **Cria um objetivo**

```http
  POST /objectives/create-objective
```
#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `date` | `string` | Data para alcançar o objetivo no formato "DD/MM/YYYY" | **Obrigatório**
| `goal` | `number` | Meta desejada | **Obrigatório**
| `initialValue` | `number` | Quantos já tem guardado para essa meta? | **Obrigatório**
| `description` | `string` | Descrição do seu objetivo | **Obrigatório**
| `suggestion` | `object` | Exemplo do corpo do objeto abaixo | **Obrigatório**

#### Body to suggestion

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `name` | `string` | "Curto", ou "Medio", ou "Longo" | **Obrigatório**
| `amountParcels` | `number` | Quantidade de parcelas | **Obrigatório**
| `valueOfParcels` | `string` | Valor das parcelas | **Obrigatório**

#### **Retorna as 3 sugestões de reserva para o objetivo**

```http
  POST /objectives/build-suggestions
```
#### Body

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `date` | `string` | Data para alcançar o objetivo no formato "DD/MM/YYYY" | **Obrigatório**
| `goal` | `number` | Meta desejada | **Obrigatório**
| `initialValue` | `number` | Quantos já tem guardado para essa meta? | **Obrigatório**

#### **Retorna um objetivo**

```http
  GET /objectives/find-objective-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID do objetivo | **Obrigatório**

#### **Retorna todos os objetivos do usuário**

```http
  GET /objectives/get-all
```

#### **Deleta um objetivo**

```http
  Delete /objectives/delete-objective-by/${id}
```

#### URL Param

| Parâmetro   | Tipo       | Descrição                                   | Requerimento |
| :---------- | :--------- | :------------------------------------------ | :--------- |
| `id` | `string` | UUID do objetivo | **Obrigatório**

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
