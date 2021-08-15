// Funtion to return the fullname joining first name and last name
const fullName = (firstName, lastname) => {
  return `${firstName} ${lastname}`;
};

// Funtion to get a random color based on a given seed(integer) value
const getRandomColor = (seed) => {
  const items = ['#45BD27', '#EEB214', '#BC0036', '#EEB214'];
  return items[(seed * 13) % items.length];
};

// Funtion to get a random Role based on a given seed(integer) value;
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
