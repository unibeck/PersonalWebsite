const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'phone':
      href = `tel:${contact}`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/${contact}`;
      break;
    case 'gitlab':
      href = `https://www.gitlab.com/${contact}`;
      break;
    case 'medium':
      href = `https://medium.com/@${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
