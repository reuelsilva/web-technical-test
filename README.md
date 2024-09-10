# Addison Global Web Technical Assesement
Teste front-end aplicado pela Addison Global ( https://github.com/addisonglobal/web-technical-test )
## 🎯 Objetivo do teste

Desenvolver uma promotions page rápida e responsiva em mobile first. A promotions page possui 2 telas ou filtros em uma única página:
* New Customers - Uma lista de promotions apenas para novos clientes.
* All Promotions - Uma lista de todas promotions

Quando a pagina é carregada deve buscar os dados para exibir as promotions. O objeto de promotion contém uma flag `onlyNewCustomers` que indica se uma promotion é aplicável para novos clientes ou nao.

As promotions devem ser ordenadas pela propriedade `sequence`.

### Instalação e Execução

Para executar este projeto localmente, siga estes passos:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/reuelsilva/web-technical-test.git
   cd web-technical-test
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   
3. **Execute o servidor JSON-Server:**
   ```bash
   npx json-server --watch "data.json" -p 3000
    ```
4. **Abra com o Live Server**

### 🎨 Tecnologias

- **HTML 🟠**
- **CSS 🔵**
- **JavaScript 🟡**
- **JSON-Server**
