[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"
![valid XHTML][checkmark]

[getcomposer]: https://getcomposer.org/
[uninstall-mods]: https://getcomposer.org/doc/03-cli.md#remove

# @mozg/react-portfolio

## Sinopse

Automações usando [React](https://reactjs.org/) rodando na [Heroku](https://www.heroku.com/)

## Motivação

Evangelizar a plataforma [React](https://reactjs.org/)

## Característica técnica

Para o aplicativo o Heroku usa o arquvo [app.json](app.json)

Para a implantação o Heroku usa o arquvo [package.json](package.json)

Como a Heroku trabalha com o [NPM](https://www.npmjs.com/), todas as dependências a ser usada no projeto está registrada no arquivo [package.json](package.json)

## Descrição

Um aplicativo [React](https://reactjs.org/) usando [Express 4](http://expressjs.com/).

# Executando Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/)

    git clone git@github.com:mozgbrasil/heroku-portfolio.git
    cd heroku-react-app
    npm install
    npm start

Seu aplicativo agora deve estar em execução em [http://localhost:5000/](http://localhost:5000/)

## Implantando na Heroku

Clique abaixo para implantar o aplicativo na sua conta na [Heroku](https://www.heroku.com/)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mozgbrasil/heroku-portfolio)

Em seguida clique no botão "Deploy"

Ao finalizar a implantação do aplicativo será exibido a mensagem "Your app was successfully deployed."

Clique no botão "View"

Será carregado o aplicativo

Em seguida você pode fazer um fork desse repositório e fazer as alterações necessárias, certifique de apontar o seu repositório na Heroku e habilitar a implantação automatica.

## Sobre o aplicativo para o Heroku

Esse aplicativo foi desenvolvido pela [MOZG](http://mozg.com.br/) e se encontra disponível no seguinte repositório no github [https://github.com/mozgbrasil/heroku-react-app](https://github.com/mozgbrasil/heroku-react-app), qualquer contribuição é bem vinda.

## Run Local

cd ~/dados/git/projects/react-portfolio/client
npm start

## Error: POST http://localhost:3000/api/login 500 (Internal Server Error)

O servidor não está ativo, o comando a seguir deve iniciar o serviço

cd ~/dados/git/projects/react-portfolio/servers/express
npm start

:cat2: :cat2:
