/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'dozer',
    'architecture',
    // {
    //   type: 'category',
    //   label: 'Introduction',
    //   link: {
    //     type: 'doc', 
    //     id: 'dozer/dozer',
    //   },
    //   items: [
    //     {
    //       type: 'html',
    //       value: 'DOZER CLOUD',
    //       defaultStyle: false,
    //       className: 'sidebar-item-group',
    //     },
    //     'dozer/architecture',
    //     {
    //       type: 'html',
    //       value: 'DOZER CORE',
    //       defaultStyle: false,
    //       className: 'sidebar-item-group',
    //     },
    //     'dozer/comparision',
    //   ],
    // },
    'installation',
    'getting_started',
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'doc',
        id: 'configuration/overview', 
      },
      items: [
        'configuration/connectors',
        'configuration/endpoints',
        'configuration/security',
      ],
    },
    {
      type: 'category',
      label: 'Queries',
      link: {
        type: 'generated-index',
        slug: '/querying',
      },
      items: [
        'querying/grpc',
        'querying/rest',
      ]
    },
    {
      type: 'category',
      label: 'Dozer SQL',
      link: {
        type: 'doc',
        id: 'sql/introduction',
      },
      items: [
        'sql/functions_and_operators',
        'sql/data_types',
      ]
    },
    'data_types',
    {
      type: 'category',
      label: 'Contributing',
      link: {
        type: 'doc',
        id: 'contributing/overview', 
      },
      items: [
        'contributing/settingup',
        'contributing/connector',
      ],
    },
  ],
};

module.exports = sidebars;
