# Plataforma de Informações sobre Medicamentos do SUS

## Descrição do Projeto

A plataforma é uma aplicação desenvolvida em **Angular** que visa informar os cidadãos sobre os medicamentos disponíveis no Sistema Único de Saúde (SUS), orientar sobre como acessar os serviços relacionados e localizar os pontos de distribuição mais próximos. Além disso, a plataforma conta com um canal de comunicação onde os usuários podem relatar problemas e enviar sugestões para promover a melhoria contínua da prestação dos serviços de saúde.

---

## Funcionalidades Principais

1. **Informação sobre Medicamentos do SUS**:
   - Lista completa de medicamentos disponíveis no SUS.
   - Pesquisa por nome do medicamento, categoria ou indicação.
   - Detalhes sobre indicações, contraindicações e formas de uso.

2. **Orientação para Acesso aos Serviços**:
   - Passo a passo para obter medicamentos gratuitos ou subsidiados.
   - Informações sobre a documentação necessária.

3. **Localização de Pontos de Distribuição**:
   - Mapas interativos que mostram farmácias públicas e privadas participantes do programa Farmácia Popular.
   - Exibição de endereço, telefone e horários de funcionamento.
   - Funcionalidade de geolocalização para identificar pontos de distribuição próximos.

4. **Canal de Comunicação**:
   - Formulário para relato de problemas (ex.: falta de medicamentos).
   - Possibilidade de envio de sugestões para melhorias nos serviços de saúde.

---

## Tecnologias Utilizadas

- **Frontend**:
  - Angular
  - HTML, CSS, TypeScript
- **Backend Simulado**:
  - JSON Server (para simular a API)

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

1. [Node.js](https://nodejs.org/)
2. [Angular CLI](https://angular.io/cli)
3. JSON Server:
   ```bash
   npm install -g json-server
   ```

---

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências do Angular**:
   ```bash
   npm install
   ```

3. **Inicie o JSON Server**:
   - Crie um arquivo `db.json` no diretório raiz com a seguinte estrutura inicial:
     ```json
     {
       "medicamentos": [],
       "pontosDeDistribuicao": [],
       "relatos": []
     }
     ```
   - Execute:
     ```bash
     json-server --watch db.json --port 3000
     ```

4. **Inicie o servidor de desenvolvimento Angular**:
   ```bash
   ng serve
   ```
.
