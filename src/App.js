import './App.css';
import './styles/Fonts.css';
import { useEffect, useState } from 'react';
import Contacts from './components/Contacts/index';
import Layout from './components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import * as userClient from './services/httpClient';
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userClient.getUserContacts({ pageNo: 2 }).then((users) => {
      setUsers(users.data);
    });
  }, []);
  return (
    <div className="App">
      <Layout>
        <Contacts.Container
          extras={
            <div className="contacts-addnew-btn flex flex-item-center">
              <FontAwesomeIcon icon={faPencilAlt} />
            </div>
          }
          header={<div>Contacts ({users?.length})</div>}
        >
          <Contacts.List data={users}></Contacts.List>
        </Contacts.Container>
      </Layout>
    </div>
  );
}

export default App;
