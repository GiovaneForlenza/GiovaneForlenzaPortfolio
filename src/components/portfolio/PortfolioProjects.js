import weather from "../../assets/portfolio/reactWeatherLookup.jpg";
import parkingLot from "../../assets/portfolio/parkinglotControl.jpg";
import schoolManagement from "../../assets/portfolio/schoolManagement.jpg";
import recipeMenu from "../../assets/portfolio/recipeBookMockup.png";
import cocktail from "../../assets/portfolio/cocktailSelection.jpg";
import taskList from "../../assets/portfolio/taskListMockup.png";
import shopHub from "../../assets/portfolio/ecommerceShopHub.jpg";

export const PROJECTS = [
  // Weather Forecast
  // {
  //   en_title: "Weather forecast",
  //   br_title: "Clima Tempo",
  //   tags: ["React", "Tailwind", "API"],
  //   en_description: [
  //     "This project leverages the OpenWeatherAPI to deliver real-time weather data and forecasts (hourly/daily) for cities worldwide.",
  //     "Simply type a city name and watch the digital clouds part 🌤️, the interactive dashboard with dynamic visuals does the rest!",
  //   ],
  //   br_description: [
  //     "Este projeto utiliza a OpenWeatherAPI para fornecer dados meteorológicos em tempo real e previsões (horárias/diárias) de cidades ao redor do globo.",
  //     "Apenas escreva o nome da cidade que você quer procurar e veja a mágica acontecer diante dos seus olhos!",
  //   ],
  //   projectLink: "https://weather-lookup-react.netlify.app",
  //   codeLink: "https://github.com/GiovaneForlenza/weather-app-youtube",
  //   photo: weather,
  // },
  // Parking Lot Control
  // {
  //   en_title: "Parking lot control",
  //   br_title: "Controle de estacionamento",
  //   tags: ["React", "Tailwind", "API", "Local Storage"],
  //   en_description: [
  //     "This prototype was for a freelancer client that wanted a simple and elegant way to save the check in/out time of a vehicle in their parking lot.",
  //     "Using the CarTypesAPI, the program shows every car make and model.",
  //   ],
  //   br_description: [
  //     "Esse protótipo foi feito para um cliente freela que queria uma maneira simples e elegante de registrar os horário de entrada e saída de carros do seu estacionamento.",
  //     "O programa faz uso da CarTypesAPI para mostrar as marcas e modelos de carros.",
  //   ],
  //   projectLink: "https://parkinglot-control.netlify.app",
  //   codeLink: "https://github.com/GiovaneForlenza/parking-lot-control",
  //   photo: parkingLot,
  // },
  // School Management
  // {
  //   en_title: "School Management",
  //   br_title: "Controle de escola",
  //   tags: ["React", "Scss", "Local Storage"],
  //   en_description: [
  //     "When a language school reached out to me to make a project for their classes and students, I hopped right in to work!",
  //     "This dashboard allows the user to see all registered staff, and each one has access to their classes.",
  //   ],
  //   br_description: [
  //     "Quando uma escola de idiomas me procurou para criar um projeto para organizarem suas aulas e alunos, eu não pensei 2 vezes antes de começar!",
  //     "Essa Dashboard permite que o usuário veja todos os funcionários registrados, e cada um deles têm acesso à suas respectivas turmas.",
  //   ],
  //   projectLink: "https://school-management-program.netlify.app",
  //   codeLink: "https://github.com/GiovaneForlenza/school-management",
  //   photo: schoolManagement,
  // },
  // Task List
  {
    en_title: "Todo List",
    br_title: "Task List",
    tags: ["React", "NextJS", "TypeScript", "Local Storage", "Scss"],
    en_description: [
      "A streamlined task management web app built with Next.js and React, enabling users to create, organize, and store tasks with titles and descriptions. Tasks persist via browser local storage, ensuring data retention between sessions.",
      "Features a clean, intuitive interface styled with SCSS for maintainable and scalable CSS architecture.",
    ],
    br_description: [
      "Aplicativo web de gerenciamento de tarefas desenvolvido com Next.js e React, permitindo a criação, organização e armazenamento de tarefas com títulos e descrições. Os dados são persistidos via local storage do navegador, garantindo retenção entre sessões.",
      "Interface limpa e intuitiva, estilizada com SCSS para uma arquitetura CSS modular e escalável.",
    ],
    projectLink: "https://task-list-gff.netlify.app/",
    codeLink: "https://github.com/GiovaneForlenza/todo-list-react-2025",
    photo: taskList,
  },
  // Recipe Menu
  {
    en_title: "Recipe Menu",
    br_title: "Menu de receitas",
    tags: ["React", "Scss"],
    en_description: [
      "The idea for this project came to me when I didn't know what to cook, and I thought 'Wouldn't it be cool if I had my own recipes menu?'",
      "And the rest is history.",
    ],
    br_description: [
      "A ideia pra esse projeto surgiu quando eu não sabia oque cozinhar, e então eu pensei 'Não seria legal se eu tivesse o meu próprio menu de receitas?'",
      "E o resto é historia.",
    ],
    projectLink: "https://recepie-book.netlify.app",
    codeLink: "https://github.com/GiovaneForlenza/recipe-book",
    photo: recipeMenu,
  },
  // ShopHub Ecommerce
  {
    en_title: "ShopHub Ecommerce",
    br_title: "ShopHub Ecommerce",
    tags: ["React", "Local Storage"],
    en_description: [
      "An e-commerce product listing page built with React, displaying products with individual detail pages containing user reviews, comments, and ratings.",
      "Cart data persists via browser local storage, ensuring items remain saved between sessions without a backend.",
      "Upon purchase, users are redirected to a purchase summary page, confirming order details and completing the checkout flow.",
    ],
    br_description: [
      "Uma página de listagem de produtos de e-commerce construída com React, exibindo produtos com páginas de detalhe individuais contendo avaliações, comentários e classificações dos usuários.",
      "Os dados do carrinho persistem via local storage do navegador, garantindo que os itens permaneçam salvos entre sessões sem necessidade de backend.",
      "Ao finalizar a compra, o usuário é redirecionado para uma página de resumo do pedido, confirmando os detalhes da compra e completando o fluxo de checkout.",
    ],
    projectLink: "https://recepie-book.netlify.app",
    codeLink: "https://github.com/GiovaneForlenza/recipe-book",
    photo: shopHub,
  },
  // Cocktail Selection
  // {
  //   en_title: "Cocktail Selection",
  //   br_title: "Seleção de drinks",
  //   tags: ["React", "Scss", "API"],
  //   en_description: [
  //     "Custom cocktail recipe portal built for a client using TheCocktailDB API. Delivers ingredient-based search filters, responsive design, and dynamic content loading.",
  //     "Streamlines recipe discovery through RESTful API integration and performance-optimized UI.",
  //   ],
  //   br_description: [
  //     "Portal personalizado de receitas de coquetéis desenvolvido para um cliente utilizando a API TheCocktailDB. Oferece filtros de busca por ingredientes, design responsivo e carregamento dinâmico de conteúdo.",
  //     "Otimiza a descoberta de receitas através de integração com API RESTful e interface de alto desempenho.",
  //   ],
  //   projectLink: "https://react-project-cocktaildb.netlify.app",
  //   codeLink: "https://github.com/GiovaneForlenza/cocktail-db",
  //   photo: cocktail,
  // },
];
