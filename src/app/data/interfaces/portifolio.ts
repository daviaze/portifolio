export interface Portifolio {
  title: string;
  description: string;
  general: string;
  tecnologies: string[];
  problemDescription: string;
  solutionDescription: string;
  responsibility: string;
}

export function getAllPortifolio(): Portifolio[] {
  return [
    {
      "title": "Integração com Promoções",
      "description": "Desenvolvimento de um projeto para integrar promoções.",
      "general": "Foi desenvolvido um projeto Work Service que roda como serviço do windows para consultar promoções na API de clube de promoções, armazena-las em um banco de dados diariamente, e gerenciar suas vigências e atualizações das promoções. Além disso, este software também realiza o envio de todas as saídas diariamente junto com o fechamento para a API.",
      "tecnologies": ["C#", ".NET", "Work Service", "Windows Forms", "Dapper", "Firebird"],
      "problemDescription": "O cliente tinha dificuldade em competir com preços de grandes mercados.",
      "solutionDescription": "Foi projetado para possibilitar o cliente ter mais oportunidades e promoções vindas diretas das grandes marcas, concedendo bonificação e outros benefícios.",
      "responsibility": "Análise e desenvolvimento."
    },
    {
      "title": "Integração com Contabilidade",
      "description": "Desenvolvimento de um projeto para envio de XML para plataforma de contadores.",
      "general": "Foi desenvolvido um projeto de API para recebimento dos XMLS e armazena-los no banco de dados, além de outros endpoints para uso do site de consulta dos contadores. Foi desenvolvido também um projeto Work Service que roda como serviço do windows para enviar todos os XMLS criptografados e zipados do cliente para a API.",
      "tecnologies": ["C#", ".NET", "Work Service", "API", "Dapper", "Firebird"],
      "problemDescription": "Os contadores do cliente tinham dificuldade em obter os XMLS de forma mais fácil e prática.",
      "solutionDescription": "Foi projetado para possibilitar os contadores terem mais comodidade e praticidade na hora de fechar a contabilidade do cliente.",
      "responsibility": "Análise e desenvolvimento"
    },
    {
      "title": "Integração com E-commerce",
      "description": "Desenvolvimento de um projeto para envio de produtos e recebimento de pedidos do e-commerce diretamente no sistema gerencial.",
      "general": "Foi desenvolvido um projeto Work Service que roda como serviço do windows que buscas os produtos do banco de dados e os envia através da API, além de receber os pedidos vindo do site já inserindo-os no sistema gerencial do cliente. Essa integração foi feita com diversas plataformas de e-commerce, como por exemplo o WooComerce.",
      "tecnologies": ["C#", ".NET", "Work Service", "Dapper", "Firebird"],
      "problemDescription": "O cliente queria otimizar seu gerenciamento com os produtos e pedidos do site.",
      "solutionDescription": "Foi projetado para possibilitar que o gerenciamento do site fosse todo feito através da própria retaguarda do cliente, mandando todas as atualizações via API para o site, tendo assim um gerenciamento mais centralizado.",
      "responsibility": "Análise e desenvolvimento"
    },
    {
      "title": "API Emissão de Nota",
      "description": "Desenvolvimento de um projeto de API para emissão de nota.",
      "general": "Foi desenvolvido um projeto API que recebe um XML e manipula suas informações utilizando as DLLs do Acbr para emissão, consulta, e cancelamento de NFe.",
      "tecnologies": ["C#", ".NET", "API", "Dapper", "Firebird"],
      "problemDescription": "O intuito foi centralizar o sistema de emissão de nota em um servidor em nuvem, para que mais aplicações possam integrar com a emissão de forma mais padronizada e conscisa.",
      "solutionDescription": "Foi projetado essa API para melhorar a integração, documentação e manutenção.",
      "responsibility": "Análise e desenvolvimento"
    },
    {
      "title": "API PIX",
      "description": "Desenvolvimento de um projeto de API criação e gerenciamento de PIX.",
      "general": "Foi desenvolvido um projeto API que realiza a criação de PIX e gerenciamento através da integração com API de pagamentos",
      "tecnologies": ["C#", ".NET", "API", "FireBase"],
      "problemDescription": "Alguns clientes tinham dificuldade em conseguir boas propostas de bancos para PIX no TEF, com isso preferiam não vender no PIX, assim perdendo mercado.",
      "solutionDescription": "Foi projetado essa API para melhorar sua disputa no mercado integrando com bancos digitais.",
      "responsibility": "Análise e desenvolvimento"
    },
    {
      "title": "App para Pré-venda",
      "description": "Desenvolvimento de um projeto de um aplicativo para pré-venda.",
      "general": "Foi desenvolvido um aplicativo que roda em android e web, em que o vendedor consegue realizar pré-vendas online e offline. A pré-venda é realizada com dados vindo do Firebase, que por sua vez são alimentados por um projeto Work Service que roda como serviço do windows que realiza o envio dos produtos, clientes, estoques, usuários, e recebe os pedidos vindo do aplicativo. Além disso, também foi feito no mesmo projeto um gerenciador web que serve para gerenciar vendedores, empresas, e configurações das mesas.",
      "tecnologies": ["Dart", "Flutter", "FireBase", "C#", ".NET", "Dapper", "Firebird"],
      "problemDescription": "O cliente ia de porta em porta realizando os pedidos no papel e chegando no estabelecimento passava para o sistema gerencial manualmente. Portanto, o cliente queria ter mais praticidade.",
      "solutionDescription": "Foi projetado esse projeto para possibilitar que o cliente tenha mais praticidade e comodidade, além de ter todos os registros salvos em histórico.",
      "responsibility": "Análise e desenvolvimento Full-Stack"
    },
    {
      "title": "App Eventos",
      "description": "Desenvolvimento de um projeto de um aplicativo para compra de tickets de eventos.",
      "general": "Foi desenvolvido um aplicativo que roda em android e web, em que o usuário consegue selecionar um evento próximo de sua localização e comprar o ingresso diretamente pelo aplicativo através da integração com api de pagamentos, que gerencia compras no cartão, pix, etc. Além disso, também foi feito no mesmo projeto um gerenciador web que serve para que os promoters gerenciem os eventos.",
      "tecnologies": ["Dart", "Flutter", "FireBase"],
      "problemDescription": "Esse projeto foi um trabalho freelancer.",
      "solutionDescription": "Esse projeto foi um trabalho freelancer.",
      "responsibility": "Análise e desenvolvimento Full-Stack"
    },
    {
      "title": "App Agenda ",
      "description": "Desenvolvimento de um projeto de um aplicativo para gerenciamento de contatos.",
      "general": "Foi desenvolvido um aplicativo que roda em android e web, em que o usuário consegue adicionar contatos de pessoas com várias informações personalizadas.",
      "tecnologies": ["Dart", "Flutter", "FireBase"],
      "problemDescription": "Esse projeto foi um trabalho freelancer.",
      "solutionDescription": "Esse projeto foi um trabalho freelancer.",
      "responsibility": "Análise e desenvolvimento Full-Stack"
    }
  ];
}
