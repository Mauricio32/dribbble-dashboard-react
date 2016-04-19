# Dribbble Dashboard in react

[![Build Status](https://travis-ci.org/Mauricio32/dribbble-dashboard-react.svg?branch=master)](https://travis-ci.org/Mauricio32/dribbble-dashboard-react)

## Objetivo

Criação de POC em react, totalmente client-size, para listagem de shots populares do Dribbble e detalhes de shots.

## Ferramentas

Nesse projeto foi usado React (https://facebook.github.io/react/) como framework RIA como renderização de HTML e consumir a API do Dribbble, foi usado GULP (http://gulpjs.com/) para automatização de tasks como: criação de build e servidor de desenvolvimento com browser-sync (https://www.browsersync.io/), SAAS (http://sass-lang.com/) como pré-processador de CSS, eslint (http://eslint.org/) para padronização de desenvolvimento de código e testes de edição e foi feita a integração continua com o Travis para validação de build.

## Tasks

### gulp watch

Essa task foi criada para criação de um servidor de desenvolvimento com browser-sync além de servir a pasta "dist" e usa-la como base para o servidor.

### gulp (default)

Task usada para servir a pasta de "dist" e buildar a aplicação.

## Como rodar
### Pré-requisitos

É necessaria a instalação global de alguns requisitos:

- NodeJS (https://nodejs.org/en/)
- Bower (http://bower.io/)

### Desenvolvimento

- Clonar a aplicação.
- npm install && bower install
- gulp watch

A aplicação rodará na porta 3000

### Build

- gulp (criação de um diretório chamado dist, ignorado pelo git)

### Servidor de produção

- npm start

### Task de eslint

- npm run lint

## Futuras features

### Em andamento

- Criação de testes usando jasmine com react
- Build automatico travis/heroku (aguardando tempo de ativação de app do Heroku)

### Backlog

- Criação de gerenciador de stores usando redux
- Criação de POC com o mesmo conceito em Angular2
- Posibilidade de compartilhamento de shots com o facebook e twitter.
