# 🌸 Market Insights Lab
## Pesquisa de Mercado — Clube de Assinatura de Flores

Bem-vindo ao repositório do projeto desenvolvido durante o **Bootcamp Full Stack e Data Analytics**.

Ao longo de **3 encontros**, construiremos uma aplicação completa para coleta de dados de uma pesquisa de mercado, armazenando as respostas no **Supabase** e preparando essas informações para análises de dados.

Ao final do bootcamp, você terá desenvolvido uma aplicação completa utilizando HTML, CSS, JavaScript e Supabase.

---

# 🚀 Objetivo

Desenvolver uma aplicação web capaz de:

- Exibir um formulário de pesquisa;
- Validar os dados informados pelo usuário;
- Registrar as respostas em um banco de dados no Supabase;
- Exibir uma confirmação após o envio;
- Disponibilizar os dados para análise posterior.

---

# 📖 Cenário

Uma floricultura deseja lançar um novo serviço de **assinatura de flores**, onde os clientes recebem arranjos periodicamente em casa.

Antes do lançamento, a empresa precisa entender melhor seu público e responder perguntas como:

- Quem são os potenciais clientes?
- Como é o hábito de compra de flores?
- Quanto estariam dispostos a investir?
- Existe interesse em um serviço de assinatura?

Sua missão será desenvolver a aplicação responsável por coletar essas informações.

---

# 📅 Cronograma do Bootcamp

## ✅ Semana 1 — 18/07
### HTML + GitHub

Nesta etapa construiremos toda a estrutura da aplicação.

### Conteúdos

- Estrutura HTML
- HTML Semântico
- Formulários
- Inputs
- Labels
- Select
- Checkbox
- Radio Button
- Organização do projeto
- Git
- GitHub

### Entregas

- Estrutura inicial do projeto
- Formulário completo em HTML
- Organização das pastas
- Primeiro commit no GitHub

---

## ⏳ Semana 2 — 25/07
### JavaScript + Supabase

Nesta etapa a aplicação ganhará comportamento e persistência dos dados.

### Conteúdos

- Manipulação do DOM
- Eventos
- Validação de formulários
- Coleta dos dados
- Integração com Supabase
- Inserção de registros
- Feedback ao usuário

### Entregas

- Formulário funcional
- Cadastro das respostas no banco
- Mensagens de sucesso e erro

---

## ⏳ Semana 3 — 01/08
### CSS + Hospedagem

Na última etapa transformaremos o projeto em uma aplicação pronta para publicação.

### Conteúdos

- CSS
- Responsividade
- Layout
- Boas práticas de UI
- Hospedagem
- Importação dos dados do Supabase
- Tratamento e organização dos dados

### Entregas

- Interface final
- Aplicação responsiva
- Projeto publicado

---

## ⏳ Semana 4 — 08/08
Dashboards e Análise de Dados

Na etapa final, utilizaremos os dados coletados pela aplicação para transformá-los em informações úteis para a tomada de decisão.

## Conteúdos

- Construção de gráficos
- Desenvolvimento de dashboards
- Análise exploratória dos resultados
- Geração de insights para o negócio
  
### Entregas

- Dashboard interativo
- Visualizações dos principais indicadores
- Análise dos resultados da pesquisa
- Apresentação de recomendações para o cliente

---

# 📋 Requisitos Funcionais

O formulário deverá conter as seguintes seções:

1. Perfil do Respondente
2. Relação com Flores e Plantas
3. Preferências
4. Interesse na Assinatura
5. Disposição a Pagar
6. Entrega
7. Avaliação Final

As perguntas completas podem ser consultadas abaixo.

---

# Estrutura do Formulário

O formulário deverá possuir os seguintes grupos de perguntas.

---

## 1. Perfil do Respondente

### Nome (Opcional)

Tipo:

```
text
```

---

### E-mail (opcional)

Tipo:

```
email
```

Campo obrigatório.

---

### Faixa etária

Opções:

- Menos de 18 anos
- 18 a 24 anos
- 25 a 34 anos
- 35 a 44 anos
- 45 a 54 anos
- 55 anos ou mais

---

### Cidade

Tipo:

```
text
```

---

### Estado

Select contendo todos os estados brasileiros.

---

### Tipo de moradia

- Casa
- Apartamento
- Condomínio
- Outro

---

# 2. Relação com Flores e Plantas

### Com que frequência você compra flores ou plantas?

- Nunca
- Raramente
- Algumas vezes por ano
- Mensalmente
- Quinzenalmente
- Semanalmente

---

### Onde costuma comprar?

Permitir múltipla escolha.

- Floriculturas
- Supermercados
- Feiras
- Garden Centers
- Internet
- Redes sociais
- Outro

---

### Para quais ocasiões costuma comprar?

Permitir múltipla escolha.

- Presentes
- Decoração
- Datas comemorativas
- Eventos
- Uso pessoal
- Outro

---

# 3. Preferências

### Você prefere

- Flores naturais
- Plantas
- Ambos

---

### Quais flores ou plantas você mais gosta?

Campo de texto.

---

### O que considera mais importante na compra?

- Preço
- Qualidade
- Durabilidade
- Entrega rápida
- Aparência
- Variedade
- Atendimento

---

# 4. Interesse na Assinatura

### Você teria interesse em um serviço de assinatura?

- Sim
- Talvez
- Não

---

### Com que frequência gostaria de receber?

- Semanalmente
- Quinzenalmente
- Mensalmente
- Apenas em datas especiais

---

### O que mais atrairia você nesse serviço?

Permitir múltipla escolha.

- Praticidade
- Economia
- Curadoria especializada
- Flores diferentes a cada entrega
- Entrega em casa
- Flexibilidade
- Outro

---

# 5. Disposição a Pagar

### Quanto estaria disposto(a) a investir por mês?

- Até R$ 50
- R$ 51 a R$ 80
- R$ 81 a R$ 120
- R$ 121 a R$ 180
- Acima de R$ 180

---

### Qual modelo de plano você prefere?

- Plano fixo mensal
- Plano flexível (pausar quando desejar)
- Compra avulsa
- Não sei

---

# 6. Entrega

### Canal preferido para contratar

- Site
- WhatsApp
- Aplicativo
- Loja física
- Instagram

---

### Forma de recebimento

- Entrega em casa
- Retirada na loja

---

### Melhor período para entrega

- Manhã
- Tarde
- Noite
- Indiferente

---

# 7. Avaliação Final

### De 0 a 10, qual a chance de contratar esse serviço?

Permitir selecionar apenas um valor

---

### O que impediria você de contratar esse serviço?

Campo de texto.

---

### Deseja receber novidades sobre o lançamento?

- Sim
- Não

---

# 📁 Estrutura do Projeto

```
/
│
├── assets/
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── supabase.js
│
├── index.html
└── README.md
```

---


# 🗄️ Banco de Dados (Supabase)

> 🚧 Esta seção será construída na **Semana 2**.

Aqui serão documentados:

- Estrutura da tabela
- Configuração do projeto
- Chaves de acesso
- Integração com JavaScript

---

# 🎨 Interface

> 🚧 Esta seção será concluída na **Semana 3**.

Serão apresentados:

- Guia de cores
- Layout final
- Responsividade
- Organização do CSS

---

# 🌐 Publicação

> 🚧 Disponível na **Semana 3**.

Ao final do projeto você aprenderá a publicar sua aplicação.

---

# ⭐ Desafio Extra

> 🚧 Revelado na **Semana 3**.

Haverá um desafio adicional para quem desejar evoluir o projeto além do conteúdo apresentado em aula.

---

## 📌 Acompanhe a evolução

Este README será atualizado a cada encontro com novas instruções, melhorias e conteúdos desenvolvidos durante o bootcamp.