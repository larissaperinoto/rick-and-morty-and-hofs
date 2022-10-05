# Rick and Morty and Hofs

Hoje vamos relembrar das nossas queridas Higher Order Functions e como podemos utiliza-las em  nossas aplicações.

Para a criação desta aplicação consumimos a API [The Rick and Morty API](https://rickandmortyapi.com/).

Nossa aplicação já está funcionando, porém, vamos utilizar os personagens para aplicar alguns conceitos das principais HOFs que temos disponíveis. Portanto, faça o clone deste repositório e tente realizar os exercícios abaixo.

Para o clone, utilize o comando abaixo:

`git clone git@github.com:larissaperinoto/rick-and-morty-and-hofs.git`

Após o clone, entre na pasta do projeto e rode o comando `npm install` no seu terminal e pronto, já podemos iniciar os exercícios! :)

---

### 1 - Renderize na tela apenas os personagens cujo nome incluí "Alien".

Qual HOF faz sentido para realizar esse exercício?

    Dica: Você pode associar a HOF com o método `includes()`;

### 2 - Volte a renderizar todos os personagens na tela.

Você pode deixar a resolução do exercício 1 comentada para ver mais tarde!

### 3 - Renderize na tela apenas os personagens que possuem o _status_ **Alive**.

Essa é parecida com o exercício 1, você se lembra como resolveu?

### 4 - Crie uma nova propriedade para cada personagem e renderize na tela.

Com os personagens de _status_ **Alive** na tela, queremos mostrar mais algumas informações para cada personagem.

No objeto de cada personagem, que é retornado da requisição da API, adicione uma nova propriedade chamada **infos** cujo valor deve ser a concatenação de outras duas informações: "specie - localização.name".

Para mostrar essa nova chave no card do personagem que está sendo renderizado, vá até o arquivo `CharacterCard.js` e descomente a linha 13. Não se esqueça de desestruturar essa nova informação.

Exemplo:

    "Human - Earth (Replacement Dimension)"

<details>
  <summary>Como deve ficar o objeto de cada personagem  com a chave "infos"</summary>

![Captura de tela de 2022-10-05 08-22-57](https://user-images.githubusercontent.com/98956659/194049415-69ca3c8e-9a03-4c98-9db2-9b0983e9ccfc.png)

</details>

Resultado esperado na tela:

![Captura de tela de 2022-10-05 08-12-44](https://user-images.githubusercontent.com/98956659/194049653-a5e6d2e7-5f67-43ea-9d6b-78ee2e6661d9.png)


### 5 - Para cada personagem cujo sobrenome é **Smith**, adicione como segundo nome a palavra **Alien**.

Que tal tentar usar a função `forEach()` para resolver esse exercício?

Exemplo do resultado que esperamos obter:

![Captura de tela de 2022-10-05 08-56-19](https://user-images.githubusercontent.com/98956659/194055030-95d3bd19-eed3-41a6-8492-87eb883e4601.png)

**Obs.:** _Neste momento, a ordem que os personagem são renderizados não faz diferença, queremos apenas alterar as informações._

### 6 - Organize os personagens renderizados em ordem alfabética.

_Ufa, chegamos até aqui!_ Agora vamos organizar esses personagens que estamos renderizando. Qual função podemos utilizar?

