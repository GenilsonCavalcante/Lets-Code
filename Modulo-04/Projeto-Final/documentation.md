# Documentation

    * FUNÇÕES CRIADORAS
    * FUNÇÕES DE REQUISICOES HTTP
    * LISTENERS
    * INDEX QUE JUSTA TUDO.

### Images

Facebook - https://edent.github.io/SuperTinyIcons/images/svg/facebook.svg
Twitter - https://edent.github.io/SuperTinyIcons/images/svg/twitter.svg
Instagram - https://edent.github.io/SuperTinyIcons/images/svg/instagram.svg
Youtube - https://edent.github.io/SuperTinyIcons/images/svg/youtube.svg


### Cores

    --cor-primaria: #FFF;
    --cor-secundaria: #138fcd;
    --cor-terciaria: #036694;
    --area-de-pesquisa: #fdd685;


### Functions

* main.js - responsável por executar todas as funções;
* request-api.js - responsável por fazer a requisisão a API;
* create-elements.js - cria os componentes dinamicamente para o conteúdo do site, necessitando da importação da função (request-api.js) para que seja processada;
* button.js - chamada pela função (main.js) para estilizar e dinamizar o button do site na área de pesquisa;