const BASE_URL = 'https://reqres.in/api/';

const getUserContacts = ({ pageNo = 1 }) => {
  return new Promise((resolve, reject) =>
    fetch(`${BASE_URL}users?page=${pageNo}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(data);
        } else reject([]);
      })
      .catch((e) => console.error(e))
      .catch((e) => console.error(e))
  );
};

const addUserContacts = (payload = {}) => {
  return new Promise((resolve, reject) =>
    fetch(`${BASE_URL}users`, { method: 'POST', body: payload })
      .then((response) => response.json())
      .then((data) => {
        if (data) resolve(data);
        else reject(null);
      })
      .catch((e) => console.error(e))
      .catch((e) => console.error(e))
  );
};

export { getUserContacts, addUserContacts };
