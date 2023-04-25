Esse repositório foi criado com a finalidade de estudo.
Essa alteração é em finalidade de teste de comandos. 

O versionamento funciona da seguinte forma:

Primeiro você deve escolher um local a onde vai criar seu repositório do git(criar a pasta usando `mkdir[nome]`).
Logo após criar essa pasta, você deve iniciar com o comando `git init`, assim criando o seu repositório git na pasta selecionada. 

Quando você quiser criar uma nova branch você pode criar com o comando `git branch -nome-da-branch`(lembrando que após criar a branch, ainda necessita do comando `git checkout nome-da-branch` para ir até ela.) ou utilizar o comando `git checkout -b nome-da-branch` e já vai direto para a branch!

Após você adicionar ou alterar um arquivo na branch você deve adicionar-lo com o `git add .` ou `git add nome-do-arquivo` e logo após de adicionar-lo você deve commitalo(comentar) de preferência com quais alterações você fez, para realizar esse comentário é usado o comando `git commit -m "Mensagem da alteração feita"`

Sempre abusar do `git status` para saber se o arquivo já foi comitado ou não e também usar `git branch` para saber qual branch estou trabalhando sempre.

Assim que estiver tudo pronto e rodando perfeitamente, para unir o que foi trabalhado na(s) outra(s) branch(s), deve-se dar o `git checkout main`(que isso voltara para a branch principal) e depois eu devo utilizar o comando `git merge nome-da-branch` para que unifique todos os arquivos.

1.   OBS: Nunca altere o mesmo arquivo em branchs diferentes, pois isso pode gerar conflito. Tendo que resolver utilizando o VSCODE com o comando `code .` para inciar-lo já no local.
        - Sempre que for criar uma nova branch remota, é necessário que a primeira vez que for usar o `git push` seja usado o comando `git push -u origin nome-da-branch`
        - Para remover uma branch local se usa o comando `git branch -d` (usado após ser mergeado os arquivos da branch) nome-da-branch e é possível usar -D para forçar o delete
       - Para remover uma branch remotamente é necessário o comando `git push origin --delete nome-da-branch`.
