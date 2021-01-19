import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'phone':
      icon = ICONS.PHONE;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'gitlab':
      icon = ICONS.GITLAB;
      break;
    case 'medium':
      icon = ICONS.MEDIUM;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
