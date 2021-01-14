'use strict';

module.exports = {
  url: 'https://jonbeckman.com',
  pathPrefix: '/',
  title: 'Jonathan Beckman',
  subtitle: 'Personal Website & Blog of Jonathan Beckman',
  copyright: 'Copyright © Jonathan Beckman 2021. All rights reserved.',
  postsPerPage: 4,
  googleAnalyticsId: '',
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
      path: '/rss.xml'
    },
    {
      label: 'Site Map',
      path: '/sitemap.xml'
    }
  ],
  author: {
    name: 'Jonathan Beckman',
    photo: '/media/profile.jpg',
    bio: 'A Senior DevOps Engineer by day -- angler and investor by night',
    contacts: {
      email: 'hello@jonbeckman.com',
      linkedin: 'jonathantbeckman',
      gitlab: 'jbeckman',
      github: 'unibeck',
    }
  }
};
