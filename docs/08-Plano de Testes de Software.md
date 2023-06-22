# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

<!--
 Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
.-->

A equipe trabalhou no planejamento dos testes a serem realizados na aplicação, com o objetivo de verificar os cumprimentos dos requisitos propostos no início desse projeto, conforme descrito no quadro dos casos de testes a seguir. Na seção seguinte, de registro de testes, são apresentados os resultados dos testes.

| Casos de testes | Funcionalidade avaliada                                                                                                               | Usuários participantes                      | Entrada testada                                                           | Saída esperada                                                                                                                        | 
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| CT-01           | Capacidade de a página home vincular à página de cadastro de medicamentos quando ocorrer o clique no botão "cadastro de medicamentos" | Sr. Marcos Castro, proprietário de farmácia | Clique no botão "cadastrar medicamentos"                                  | Abertura da página de cadastro de medicamentos                                                                                        |
| CT-02           | Aceite de entrada de dados em todos os campos da página de cadastro de medicamentos                                                   | Sr. Marcos Castro, proprietário de farmácia | Inserção dos dados nos campos da página citada                            | Confirmar cadastro realizado com sucesso                                                                                              |
| CT-03           | Upload de arquivo de imagem do medicamento                                                                                            | Sr. Marcos Castro, proprietário de farmácia | Clique em "escolher arquivo" e busca do arquivo no repositório do usuário | Escolha do arquivo e confirmação do cadastro realizado com sucesso                                                                    |
| CT-04           | Aceite e rejeição de caracteres válidos e inválidos nos campos da página de cadastro de medicamentos                                  | Sr. Marcos Castro, proprietário de farmácia | Teste de lançamento de letras, números e caracteres especiais nos campos  | Aceite de entrada e rejeição de entrada (através de mensagem de erro) de acordo com o que se espera de preenchimento em cada campo    |
| CT-05           | Capacidade da página home apresentar medicamentos em destaque, por menor preço, e um campo para pesquisas por nome de medicamentos    | Luzia Silva, cliente                        | Acessar o site através da Url em um navegador                             | Página home deve apresentar diferentes medicamentos com menores preços e disponibilizar um campo de pesquisa por nome de medicamentos |
| CT-06           | Pesquisa por nome de medicamento                                                                                                      | Luzia Silva, cliente                        | Nome do medicamento desejado                                              | Listagem do medicamento pesquisado contendo valor, nome e descrição do mesmo                                                          |
| CT-07           | Salvar e excluir favoritos                                                                                                            | Luzia Silva, cliente                        | Clique no icone de  "favoritar"                                           | Salvar produto como favorito ou excluir produto de favoritos                                                                          |
| CT-08           | Login e erro de Login                                                                                                                 | Gabriel, cliente                            | Inserção dos dados nos campos da página citada  e clique no botão "Login" | Confirmar login realizado com sucesso                                                                                                 |
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para JavaScript](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
