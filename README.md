
💊 Sistema de Gestão de Farmácia - Cadastro de Produtos
<br />

<div align="center">
<img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="35%"/>
</div>

<br />

<div align="center">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/POO-Conceitos-orange?style=for-the-badge" />
</div>

<br />

1. Sobre o Projeto
Este projeto é um sistema de Gerenciamento de Estoque Farmacêutico desenvolvido em TypeScript. Ele foi estruturado utilizando os pilares da Programação Orientada a Objetos (POO) para simular o dia a dia de uma farmácia, permitindo o controle de dois tipos distintos de mercadorias: Medicamentos e Cosméticos.

O sistema utiliza um Menu Interativo via terminal para realizar todas as operações de CRUD (Create, Read, Update, Delete).

<br />

2. Pilares de POO Aplicados
Para tornar o código escalável e organizado, foram aplicados os seguintes conceitos:

Herança: A classe Produto serve como classe pai (Abstrata), fornecendo a base para Medicamento e Cosmetico.

Polimorfismo: Os métodos de listagem e consulta tratam diferentes tipos de objetos de forma genérica.

Encapsulamento: Proteção dos dados sensíveis através de atributos privados e métodos de acesso.

Interface/Repository: Uso de contratos (ProdutoRepository) para definir as regras de negócio do Controller.

<br />

3. Estrutura do Sistema
🏗️ Arquitetura
Model: Classes que definem os objetos (Produto.ts, Medicamento.ts, Cosmetico.ts).

Repository: Interface que dita os métodos obrigatórios do sistema.

Controller: Onde reside a lógica de negócio (ex: ProdutoController), gerenciando a Collection que armazena os dados em memória.

Menu: O arquivo principal que gerencia a entrada de dados e a interface com o usuário.

🧪 Diferenciação de Atributos
Medicamento: Possui o atributo generico (exibe se é Genérico ou Referência).

Cosmético: Possui o atributo fragrancia.

<br />

4. Como Executar
Clone o repositório:

Bash
git clone https://github.com/BrenoNunes96/ProdutosCadastro.git
Instale as dependências:

Bash
npm install
Inicie o sistema:

Bash
npm start
<br />

🛠️ Requisitos Técnico
Node.js v20+

TypeScript instalado globalmente ou via ts-node

Biblioteca readline-sync para interação via terminal

<br />

🎓 Créditos
Projeto desenvolvido por Breno Nunes durante o Bootcamp JavaScript Full Stack da Generation Brasil.

Links Úteis:

Perfil no GitHub

Repositório do Projeto
