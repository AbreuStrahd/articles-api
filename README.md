# ARTICLES-API

Este projeto foi criado para o teste de Dev Trainee com o desafio de desenvolver uma API onde se pode criar, alterar e excluir links do seu blog de preferência (o meu foi o devgo.com.br). Utilizei um Webcrawler para retirar os dados de cada artigo para armazenar na API.

# DESENVOLVIMENTO

Para desenvolver a API, eu utilizei o framework NestJS utilizando o Typescript para criar os métodos GET, PUT, POST e DELETE, onde se pode, respectivamente, listar, alterar, criar e deletar um artigo, utilizando o software Insomnia para realizar os teste.
Para o Webcrawler, foi utilizado o Typescript com um código intuitivo onde se pode alterar para qualquer informação de qualquer site (explicado posteriormente no modo de uso).

# MODO DE USO

Primeiramente, caso queira utilizar as informações de um site específico, será necessário utilizar o Scraping (como para a API de artigos, utilizei um arquivo para cada informação retirada, foi feito dois scrapings, um para os títulos, outro para as URLs). Para isso, altere a URL provida no scraping e a posição em que cada informação está no site.
Após isso, será gerado um arquivo JSON com as informações retiradas do site, será necessário importar e alterar os dados desejados no projeto da API. Após realizar as alterações, será possível executar o "npm run start:dev", onde será hospedado a API na porta localhost:3000, e poderá ser feito os devidos testes.

# CONSIDERAÇÕES FINAIS

Este foi um desafio extremamente interessante e prazeroso de se construir, especialmente por se tratar de alguns projetos que nunca havia feito antes como o WebCrawler, porém, definitivamente foi algo interessante de se estudar e com certeza irei me aprofundar nesses assuntos utilizando outros métodos e linguagens.
