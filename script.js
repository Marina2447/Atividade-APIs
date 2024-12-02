// Função para consumir a API e exibir os dados
    async function fetchUsers() {
      const apiUrl = "https://jsonplaceholder.typicode.com/users";
      try {
        // Faz a requisiçao da API
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        // function buscarDadosComFetch() {
        //   return fetch("https://jsonplaceholder.typicode.com/users")
        //   .then(response => response.json())
        //   .then(dados => dados)
        //   .catch(erro => console.log("Erro ao buscar dados:", erro));
        // }
        

        // Convertendo a resposta em JSON
        const users = await response.json();
        

        //  exibir os dados
        const userList = document.getElementById("user-list");

        // Iterando sobre o array de usuários com forEach
        users.forEach(user => {
          const userDiv = document.createElement("div");
          userDiv.style.padding = "10px";

          // informações do usuário na pagina html
          const name = document.createElement("h3");
          name.textContent = `Nome: ${user.name}`;
          userDiv.appendChild(name);

          const phone = document.createElement("p");
          phone.textContent = `Telefone: ${user.phone}`;
          userDiv.appendChild(phone);

          const email = document.createElement("p");
          email.textContent = `Email: ${user.email}`;
          userDiv.appendChild(email);

          // Iterando sobre o endereço com for...in
          const address = document.createElement("p");
          address.textContent = "Endereço:";
          userDiv.appendChild(address);

          // exibir dados de endereços
          for (const key in user.address) {
            if (typeof user.address[key] !== "object") {
              const addressDetail = document.createElement("span");
              addressDetail.textContent = `${key}: ${user.address[key]}, `;
              userDiv.appendChild(addressDetail);
            }
          }

          userList.appendChild(userDiv);
        });
      } catch (error) {
        // Tratamento de erros
        console.error("Erro ao buscar usuários:", error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Não foi possível carregar os usuários.";
        document.body.appendChild(errorMessage);
      }
    }

    //  chama a funçao
    fetchUsers();