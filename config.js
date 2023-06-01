'use strict';

module.exports = {
  url: 'https://jonbeckman.com',
  pathPrefix: '/',
  title: 'Jonathan Beckman',
  subtitle: 'Personal Website & Blog of Jonathan Beckman',
  disclaimer: 'Views expressed within are of my own, they may or may not reflect the opinion of '
    + 'my employer. Copyright © Jonathan Beckman 2022. All rights reserved.',
  postsPerPage: 3,
  googleAnalyticsId: 'G-NV3GRHNDN2',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Get in touch',
      path: '/pages/contacts'
    },
    {
      label: 'RSS',
      path: '/rss.xml',
      isNotGatsbyPage: true
    },
    {
      label: 'Site Map',
      path: '/sitemap/sitemap-0.xml',
      isNotGatsbyPage: true
    }
  ],
  author: {
    name: 'Jonathan Beckman',
    photo: '/media/profile.jpg',
    bio: 'A Senior DevOps Engineer and blockchain enthusiast by day -- angler and investor by night',
    contacts: {
      email: 'hello@jonbeckman.com',
      linkedin: 'jonathantbeckman',
      gitlab: 'jbeckman',
      github: 'unibeck',
      medium: 'jonathantbeckman',
      phone: '6784041601',
      status: 'status.jonbeckman.com',
    }
  }
};
