const fullName = (firstName, lastname) => {
  return `${firstName} ${lastname}`;
};

const getRandomColor = (seed) => {
  const items = ['#45BD27', '#EEB214', '#BC0036', '#EEB214'];
  return items[(seed * 13) % items.length];
};
const getRandomRole = (seed) => {
  const items = [
    'Manager',
    'Financial Controller',
    'Head Of Finance',
    'Division Director',
  ];
  return items[(seed * 3) % items.length];
};

export { fullName, getRandomColor, getRandomRole };
