# Desafio proposto pela Devnology
Você precisará construir um sistema para uma agência de veículos, ele será composto por uma api e um frontend (Web), usando node js para api e flutter para o frontend . 

Crie um arquivo readme falando um pouco sobre as decisões que tomou e caso não tenha feito algo explique o porquê. Também informe os passos para fazer sua aplicação rodar e caso tenha, o processo de deploy.

Precisamos que nosso sistema seja capaz de:

Cadastrar a compra de um veículo, modelo, marca, ano de fabricação, placa, cor, chassi, data da compra e valor da compra.

Registrar a venda de um veículo, com data da venda, valor da venda.

Deverá ser possível listar todos os veículos, veículos disponíveis e histórico de veículos vendidos.

Caso queira criar mais funcionalidades fique a vontade e lembre de falar sobre elas no readme.



# Entregas & Decisões

Para criação da API eu optei pelo Typescript (por familiaridade com projetos anteriores) e para persistir dados eu utilizei o banco Mysql, gerenciado através da ferramenta Dbeaver.
sobre a arquitetura, eu escolhi o modelo MVC (Model-View-Controller) separando as camadas Model e Controller as deixando independentes.

Confesso que tive dificuldade para implementar a busca de veículos disponiveis e vendidos. Talvez pela preocupação com o prazo e o tempo gasto com o frontend que eu não conhecia. 



# Instalação - comandos necessários
npm install

npm run dev


# A API

Rotas

Todas as vendas de carro

/buys/

[

  {

    "id": 1,
    "nome": "volvo ultimate dark",
    "modelo": "suv",
    "marca": "volvo",
    "ano": 2023,
    "placa": "kdorjeunfksy",
    "cor": "azul",
    "chassi": "GWGCLLDB",
    "datacompra": "2022-08-09T18:45:22.000Z",
    "valorcompra": 120000

  },


  {

    "id": 2,
    "nome": "mercedes stronger beer",
    "modelo": "suv",
    "marca": "mercedes",
    "ano": 2022,
    "placa": "kfotuerjdfht",
    "cor": "vermelho",
    "chassi": "GWGCLLDB",
    "datacompra": "2022-06-12T11:45:22.000Z",
    "valorcompra": 120000

  }

]


Mostra venda por id

/buys/2


{

  "id": 2,
  "nome": "mercedes stronger beer",
  "modelo": "suv",
  "marca": "mercedes",
  "ano": 2022,
  "placa": "kfotuerjdfht",
  "cor": "vermelho",
  "chassi": "GWGCLLDB",
  "datacompra": "2022-06-12T11:45:22.000Z",
  "valorcompra": 120000
  
}






# Ferramentas utilizadas no projeto
Express, Typescript, Insomnia, Mysql, Dbeaver.

