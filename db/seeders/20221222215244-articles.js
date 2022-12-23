'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("articles", [
      {
        author: 'Administração',
        image: "https://filestorage.ejitech.co.mz//uploads/reservaja/1670309029-Luis BD.PNG",
        description: `Em 2021 a Epsilon Energia Solar abriu uma nova delegação na Zambézia, fruto das
              necessidades que a Província apresenta em termos energéticos. Localizados na vila do
              Gurué, a EES tem à disposição dos clientes produtos de iluminação solar (SHS), Bombas de
              água solares e mais recentemente sistemas autónomos.`,

        title: 'Abertura da Delegação do Gurué (Zambézia)',
        tag: 'Eventos',
        updatedAt: new Date(),
        createdAt: new Date('10/09/2021'),
      },
      {
        author: 'Administração',
        image: "https://filestorage.ejitech.co.mz//uploads/reservaja/1670309029-Luis BD.PNG",
        description: `A Epsilon Energia Solar fez uma doação de 15 kits solares ao Parque Nacional de
        Chimanimani. Esta doação irá contribuir no apoio à electrificação de parte dos edifícios das
        escolas Mussapa, Sanguene, Machir e Nharimba que se encontram na zona tampão do
        parque Natural. Esta iniciativa teve como parceiro o BIOFUND.`,

        title: 'Doação de kits solares ao Parque Nacional de Chimanimani',
        tag: 'Eventos',
        updatedAt: new Date(),
        createdAt: new Date('12/06/2022'),
      },
      {
        author: 'Administração',
        image: "https://filestorage.ejitech.co.mz//uploads/reservaja/1670309029-Luis BD.PNG",
        description: `Está em fase final o projecto da electrificação de 16 Centros de Saúde Rurais na Província da
        Zambézia. Projecto da Janela FAZER Social, financiado pela GIZ, permitindo à Epsilon Energia
        Solar electrificar unidades de Sáude Rurais com capacidade até 3kW.`,
        title: 'Projecto Centros de Saúde da Zambézia',
        tag: 'Projectos',
        updatedAt: new Date(),
        createdAt: new Date('31/11/2022'),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
