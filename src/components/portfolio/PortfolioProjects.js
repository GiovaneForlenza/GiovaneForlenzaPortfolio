import austinMovingCo from "../../assets/portfolio/austinMovingCo.jpg";
import confrariaDoInvestidor from "../../assets/portfolio/confrariaDoInvestidor.png";
import shopHub from "../../assets/portfolio/ecommerceShopHub.jpg";
import recipeMenu from "../../assets/portfolio/recipeBook.jpg";
import taskList from "../../assets/portfolio/taskList.png";

export const PROJECTS = [
  // ShopHub Ecommerce
  {
    en_title: "ShopHub Ecommerce",
    br_title: "ShopHub Ecommerce",
    tags: ["React", "Local Storage"],
    en_description: [
      "ShopHub is a React-based e-commerce demonstration project developed to strengthen advanced state management concepts and component communication. Built from scratch using React, TypeScript, and modern front-end practices, the application simulates a complete shopping experience while maintaining synchronized data across multiple pages and components.",
      "The project focuses on scalable state management, reusable component architecture, and Local Storage integration to preserve user interactions and cart information. Every interface element, product card, and reusable component was designed and implemented from the ground up to create a realistic and responsive user experience.",
    ],
    br_description: [
      "ShopHub é um projeto de demonstração de e-commerce criado com React, desenvolvido para aprimorar conceitos avançados de gerenciamento de estado e comunicação entre componentes. Construído do zero usando React, TypeScript e práticas modernas de front-end, o aplicativo simula uma experiência de compra completa, mantendo os dados sincronizados em várias páginas e componentes..",
      "O projeto foca na gestão de estado escalável, arquitetura de componentes reutilizáveis ​e integração com armazenamento local para preservar as interações do utilizador e as informações do carrinho de compras. Cada elemento da interface, card de produto e componente reutilizável foi construído e implementado para criar uma experiência de realista e responsiva.",
    ],
    projectLink: "https://gff-shophub-ecommerce.vercel.app/",
    codeLink: "https://github.com/GiovaneForlenza/ShopHub",
    photo: shopHub,
  },

  // Task List
  {
    en_title: "Todo List",
    br_title: "Task List",
    tags: ["React", "NextJS", "TypeScript", "Local Storage", "Scss"],
    en_description: [
      "Task List is a productivity application developed to explore complex state management patterns using Redux. The application allows users to create, update, organize, and track tasks while maintaining data persistence through Local Storage.",
      "Built with React and Redux, the project demonstrates efficient state handling across multiple components and user interactions. The architecture emphasizes maintainability, predictable state updates, and a responsive user experience while showcasing modern front-end development practices.",
    ],
    br_description: [
      "Task List é um aplicativo de produtividade desenvolvido para explorar padrões complexos de gerenciamento de estado usando Redux. O aplicativo permite que os usuários criem, atualizem, organizem e acompanhem tarefas, mantendo a persistência dos dados por meio do armazenamento local.",
      "Construído com React e Redux, o projeto demonstra um gerenciamento de estado eficiente em múltiplos componentes e interações do usuário. A arquitetura enfatiza a facilidade de manutenção, atualizações de estado previsíveis e uma experiência de usuário responsiva, ao mesmo tempo que apresenta práticas modernas de desenvolvimento front-end.",
    ],
    projectLink: "https://task-list-gff.netlify.app/",
    codeLink: "https://github.com/GiovaneForlenza/todo-list-react-2025",
    photo: taskList,
  },

  // Confraria do Investidor
  {
    en_title: "Confraria do Investidor",
    br_title: "Confraria do Investidor",
    tags: ["Wordpress", "Elementor", "Custom CSS"],
    en_description: [
      "This WordPress-based website was developed for a client hosting an investment lobby event featuring speakers, lectures, and educational sessions about investing. Built using Elementor, custom CSS, and custom components, the project focuses on delivering a clear, structured, and professional presentation of event information while maintaining a modern and responsive user experience.",
      "The website emphasizes accessible content organization, allowing users to easily browse speaker profiles, event schedules, and session details. Custom styling and layout solutions were implemented to align with the client’s branding and enhance visual hierarchy across all sections of the site. The development process focused on flexibility and maintainability, ensuring the client could easily update event content as needed.",
    ],
    br_description: [
      "Este site baseado em WordPress foi desenvolvido para um cliente que organiza um evento de lobby de investimentos com palestrantes, apresentações e sessões educativas sobre investimentos. Construído com Elementor, CSS personalizado e componentes personalizados, o projeto tem como foco apresentar as informações do evento de forma clara, estruturada e profissional, mantendo uma experiência de usuário moderna e responsiva.",
      "O site prioriza a organização acessível do conteúdo, permitindo que os usuários naveguem facilmente pelos perfis dos palestrantes, pela programação dos eventos e pelos detalhes das sessões. Soluções personalizadas de estilo e layout foram implementadas para se alinharem à identidade visual do cliente e aprimorarem a hierarquia visual em todas as seções do site. O processo de desenvolvimento focou na flexibilidade e na facilidade de manutenção, garantindo que o cliente pudesse atualizar facilmente o conteúdo dos eventos conforme necessário.",
    ],
    projectLink: "https://confrariadoinvestidor.com.br/evento/braganca/",
    photo: confrariaDoInvestidor,
  },

  // Austin Moving Co.
  {
    en_title: "Austin Moving Co.",
    br_title: "Austin Moving Co.",
    tags: ["Wordpress", "Gutenberg Blocks", "Custom CSS"],
    en_description: [
      "Austin Moving Company is a professional business website developed for a moving services company based in Texas. Built from scratch using WordPress and Gutenberg blocks, the website includes service area pages, custom layouts, a blog system, and dynamic content structures designed to support marketing and SEO efforts.",
      "The project involved close collaboration with another developer and direct communication with the client to gather requirements, clarify business needs, and ensure successful project delivery. The result is a scalable and user-friendly website that effectively presents the company's services while providing a solid foundation for future content growth.",
    ],
    br_description: [
      "A Austin Moving Company é um site profissional desenvolvido para uma empresa de mudanças sediada no Texas. Construído do zero usando WordPress e blocos do Gutenberg, o site inclui páginas de áreas de serviço, layouts personalizados, um sistema de blog e estruturas de conteúdo dinâmicas projetadas para apoiar as estratégias de marketing e SEO.",
      "O projeto envolveu colaboração direta com outro desenvolvedor e com o cliente para coletar requisitos, esclarecer as necessidades do cliente e garantir a entrega bem-sucedida do projeto. O resultado é um website escalável e fácil de usar que apresenta os serviços da empresa de forma eficaz, ao mesmo tempo que fornece uma base sólida para o crescimento futuro do conteúdo.",
    ],
    projectLink: "https://austinmoving.company/",
    photo: austinMovingCo,
  },

  // Recipe Menu
  {
    en_title: "Recipe Menu",
    br_title: "Menu de receitas",
    tags: ["Framer", "CMS", "Components & Filters"],
    en_description: [
      "Created a fully responsive recipe website in Framer featuring dynamic CMS-powered content management for recipe entries.",
      "Developed reusable UI components to streamline design consistency and improve scalability. Integrated filtering systems that allow users to browse recipes by category, making content discovery intuitive and user-friendly.",
    ],
    br_description: [
      "Criei um site de receitas totalmente responsivo no Framer, com gerenciamento de conteúdo dinâmico baseado em CMS para a publicação de receitas.",
      "Desenvolvi componentes de interface do usuário reutilizáveis ​​para otimizar a consistência do design e melhorar a escalabilidade. Integrei sistemas de filtragem que permitem aos usuários navegar pelas receitas por categoria, tornando a descoberta de conteúdo intuitiva e fácil de usar.",
    ],
    projectLink: "https://gff-receitas.framer.website/",
    photo: recipeMenu,
  },
];
