# Pagina_de_sorteios
Uma página web muito útil para fazer sorteio de nomes.
Uma página web muito útil para fazer sorteio de nomes.
Uma aplicação feita por mim mesmo. Muito útil para fazer sorteios de nomes para premiar uma ou várias pessoas que o usuário escolher.Nesse projeto foi se usado bastante javascript para 
desenvolver essa página, onde eu trabalhei vários conceitos de javascript adquiridos em cursos online.

<h3>Imagens do projeto:</h3>
<img src="https://github.com/sian19/Pagina_de_sorteios/blob/master/images/Img-Projeto.png">
<p>Aqui o diferencial é nunca repetir um nome em um sorteio, para isso dentro do javascript eu criei uma array para capturar os nomes que o usuário for digitando na textarea,
em seguida usando um laço de repetição (while) e fui criando números aleatórios dentro de uma váriavel local, cada número criado correspondia a uma posição do índice dentro da array, então eu criei uma outra array local para receber os números que foram se criando, se a array estivesse fazia e fosse o primeiro número a ser criado a array dos números recebia o número sorteado, em seguida se pegava o nome de acordo com a posição do índice do número sorteado dentro de uma outra array também local que foi criada com o objetivo de receber os nomes das pessoas sorteadas. Para nunca repetir um nome na segunda fez que o laço de repetição "for" (criado para interar de acordo com o número de pessoas a serem sorteadas pelo usuário) que interava sobre a quantidade de pessoas a serem sorteadas era executado, se verificava se a array dos números sorteadoas estava vazia, se não, simplesmente um outro laço for era criado para interar dessa vez sobre a array dos números sorteados, dessa forma se verificava com um comando if se a posição do índice de acordo com o for era igual ao número que foi sorteado, se sim uma váriavel local recebia um comando booleano true(verdadeiro) e novamente se repetia o laço while até o número que era sorteado for diferente de qualquer número existente dentro da array de números, assim se colocava o nome da pessoa sorteada de acordo com o ídice do número sorteado dentro da array de nomes. Depois era só exibir os nomes sorteados na tela.</p>
</br>
<p>Também foi usado conceitos de localstorage para armazenar na memória do navegador do usuário os nomes que o mesmo digitou para não precisar digita-los novamente caso ele feche o navegador ou algo do tipo.</p>
<p>Também usei métodos dentro do javascript para criar os números aleatórios.</p>

<h3>Link do projeto:</h3>
<a href="https://pagina-de-sorteios.vercel.app/">Clique aqui</a>
