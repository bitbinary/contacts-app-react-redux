import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../store/contactsReducer';
// Components
import Contacts from './Contacts/index';
import Layout from './layout/Layout';
import AddNewModal from './AddContactModal/index';
import { Button, NewContactBtn } from './utils/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
// Services
import * as userClient from '../services/httpClient';

export default function ContactApp() {
  const { users, newUser } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    userClient.getUserContacts({ pageNo: 2 }).then((users) => {
      dispatch(setContacts(users.data));
    });
  }, []);

  function toggleAddNewModal() {
    setModalVisible((prevState) => !prevState);
  }
  function handleCancel(e) {
    if (e.target.id === 'addnew-bg') setModalVisible((prevState) => !prevState);
  }
  function saveContact() {
    userClient
      .addUserContacts(newUser)
      .then((res) => {
        alert(`Added new user with id ${res.id}`);
      })
      .catch(() => {
        alert('Failed to add contact');
      });
  }
  return (
    <>
      {/* Layout defines the structure of the container that displays thr comtacts app */}

      <Layout>
        {/* Contacts contains all the contact components */}
        <Contacts.Container
          extras={
            <NewContactBtn
              icon={<FontAwesomeIcon icon={faPencilAlt} />}
              onClick={toggleAddNewModal}
            />
          }
          header={<Contacts.Header>Contacts ({users?.length})</Contacts.Header>}
        >
          <Contacts.List data={users}></Contacts.List>
        </Contacts.Container>
        {/* New contacts modal */}
        {modalVisible && (
          <AddNewModal.Container
            cancel={handleCancel}
            header={<AddNewModal.Header>New contact</AddNewModal.Header>}
            footer={
              <AddNewModal.Footer key="footer">
                <Button onClick={saveContact} label="Save" />
              </AddNewModal.Footer>
            }
          />
        )}
      </Layout>
    </>
  );
}
