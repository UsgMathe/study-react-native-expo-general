import { Colors } from '@/constants/Colors';
import { useListDatabase } from '@/modules/hooks';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Button from './Button';
import Input from './Input';

type ListProps = {
  listId?: number;
};

export default function List({ listId }: ListProps) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [listName, setListName] = useState<string>('');
  const [listItemValue, setListItemValue] = useState<string>('');

  const listDatabase = useListDatabase();
  function handleCreateList() {
    listDatabase.create({ name: listName }).then(console.log);
  }

  useEffect(() => {
    if (isOpenModal)
      if (listId)
        listDatabase
          .get({ list_id: listId })
          .then(response => console.log(response));
  }, [isOpenModal]);

  return (
    <>
      <Modal
        animationType="slide"
        onRequestClose={() => setIsOpenModal(false)}
        transparent={true}
        visible={isOpenModal}
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'red',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.modal}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setIsOpenModal(false)}>
              <Ionicons name="arrow-back" color="white" size={28} />
            </TouchableOpacity>
            <TextInput
              value={listName}
              onChangeText={setListName}
              style={styles.input}
              placeholder="List name"
              placeholderTextColor={Colors.disabledText}
              cursorColor={Colors.primary}
              onSubmitEditing={handleCreateList}
            />
          </View>

          <Input>
            <Input.Box
              autoFocus
              value={listItemValue}
              onChangeText={setListItemValue}
              placeholder="List item"
              style={{ width: '85%' }}
            />
            <Button>
              <Ionicons name="add" color="white" size={20} />
            </Button>
          </Input>
        </View>
      </Modal>
      <View style={styles.triggerContainer}>
        <Button style={styles.button} onPress={() => setIsOpenModal(true)}>
          <Ionicons name="add" color={Colors.text} size={44} />
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 10,
    paddingHorizontal: 32,
  },
  header: {
    maxWidth: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    paddingBottom: 12,
  },
  input: {
    color: 'white',
    fontSize: 20,
  },
  modalTitle: { color: 'white' },
  triggerContainer: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  button: {
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});
