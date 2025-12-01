# 🍕 Bella Pizza - Landing Page Institucional

Este projeto consiste em uma aplicação web simples desenvolvida para uma pizzaria fictícia ("Bella Pizza"). O objetivo é oferecer uma solução digital para pequenos negócios locais, focada em apresentação de produtos e facilidade de contato.

O projeto foi desenvolvido seguindo a abordagem **Mobile First**, respeitando padrões de acessibilidade web e integrando consumo de dados externos via API.

## 🚀 Funcionalidades

1.  **Design Responsivo (Mobile First):**
    - Interface otimizada primeiramente para dispositivos móveis, adaptando-se automaticamente para tablets e desktops através de _Media Queries_.
2.  **Galeria Dinâmica (Integração com API):**

    - A seção "Destaques do Dia" consome dados da **Foodish API**.
    - As imagens das pizzas são carregadas aleatoriamente via JavaScript a cada atualização da página ou ao clicar no botão "Ver outras opções".

3.  **Acessibilidade Web:**

    - Uso de HTML semântico (`<header>`, `<main>`, `<nav>`, `<section>`).
    - Navegação clara e atributos `aria-label` para leitores de tela.
    - Contraste de cores adequado e foco visível em elementos interativos.

4.  **Informações de Contato:**
    - Exibição clara de endereço e horário de funcionamento.
    - Botão "Chamar no WhatsApp" (simulação de link direto `wa.me`).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do conteúdo.
- **CSS3:** Estilização com variáveis (CSS Variables), Flexbox e CSS Grid.
- **JavaScript (ES6+):** Lógica para manipulação do DOM e requisições assíncronas (`async/await` e `fetch`).
- **API Externa:** [Foodish API](https://foodish-api.com/) (para imagens de pizzas).

## ⚠️ Observações

- A API _Foodish_ é pública e gratuita. Ocasionalmente, pode apresentar lentidão no retorno das imagens dependendo do tráfego do servidor deles.
- O link do WhatsApp é demonstrativo e redireciona para a página inicial do serviço (`wa.me`). Para um uso real, bastaria adicionar o número do telefone na URL.

---

**Desenvolvido para a disciplina de Padrões Web - UniFECAF**
