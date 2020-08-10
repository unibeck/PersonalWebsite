'use strict';

module.exports = {
  url: 'https://jonbeckman.com',
  pathPrefix: '/',
  title: 'Jonathan Beckman',
  subtitle: 'Personal Website & Blog of Jonathan Beckman',
  copyright: 'Copyright © Jonathan Beckman 2020. All rights reserved.',
  postsPerPage: 4,
  googleAnalyticsId: '', //TODO
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
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Jonathan Beckman',
    photo: '/headshot_square.jpeg',
    bio: 'A Senior DevOps Engineer and Office Manager by day -- real estate investor and property manager by night', //TODO
    contacts: {
      email: 'jonathantbeckman@gmail.com',
      linkedin: '#jbeckman',
      gitlab: 'jbeckman',
      github: '#unibeck',
    }
  }
};
