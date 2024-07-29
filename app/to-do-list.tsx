import Button from '@/components/Button';
import Input from '@/components/Input';
import List from '@/components/List';
import Screen from '@/components/Screen';
import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';
import { Colors } from '@/constants/Colors';
import { List as ListType } from '@/modules/dto/list';
import { useListDatabase } from '@/modules/hooks';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function ToDoList() {
  const listDatabase = useListDatabase();
  const [lists, setLists] = useState<ListType[]>();
  const [newListName, setNewListName] = useState<string>('');
  const [listsQuery, setListsQuery] = useState<string>('');

  const filtredLists = lists?.filter(
    list =>
      list.name.toLowerCase().includes(listsQuery.toLowerCase()) ||
      list.created_at.toLowerCase().includes(listsQuery.toLowerCase())
  );

  const getLists = useCallback(() => {
    listDatabase
      .getAll()
      .then(response => setLists(response.data))
      .catch(e => e);
  }, []);

  function addList() {
    if (newListName)
      listDatabase
        .create({ name: newListName })
        .then(response => {
          setNewListName('');
          listDatabase
            .get({ list_id: response.data.list_id })
            .then(response => {
              const list = response.data;
              if (list) {
                setLists(prev => {
                  if (prev) {
                    return [...prev, list];
                  }
                  return [list];
                });
              }
            });
        })
        .catch(error => console.error(error));
  }

  function deleteList(listId: number) {
    listDatabase
      .deleteOne({ list_id: listId })
      .then(() => setLists(prev => prev?.filter(list => list.id != listId)));
  }

  function clearLists() {
    listDatabase
      .deleteAll()
      .then(() => setLists([]))
      .catch(error => console.error(error));
  }

  useFocusEffect(getLists);

  return (
    <Screen>
      <Title>To-Do List</Title>
      <Subtitle style={{ marginBottom: 20 }}>
        Create and manage your lists
      </Subtitle>

      <Input>
        <Ionicons name="search" color="white" size={20} />
        <Input.Box
          value={listsQuery}
          onChangeText={setListsQuery}
          placeholder="Search for list"
        />
      </Input>

      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Input>
          <Button onPress={addList}>
            <Ionicons name="add" color="white" size={20} />
          </Button>
          <Input.Box
            value={newListName}
            onChangeText={setNewListName}
            onSubmitEditing={addList}
            placeholder="List name"
          />
        </Input>
      </View> */}

      {/* <View style={{ width: '100%' }}>
        <Button
          variant="destructive"
          onPress={clearLists}
          style={{ marginTop: 12, alignSelf: 'flex-end' }}
        >
          <Ionicons name="trash" color={Colors.text} size={20} />
          <Button.Text>Clear</Button.Text>
        </Button>
      </View> */}

      <List />
      {/* <View style={{ position: 'absolute', bottom: 28, right: 28 }}>
        <Button
          style={{
            borderRadius: 100,
            paddingVertical: 5,
            paddingHorizontal: 5,
          }}
          onPress={() => {}}
        >
          <Ionicons name="add" color={Colors.text} size={44} />
        </Button>
      </View> */}

      <FlatList
        style={{ maxHeight: 400, marginTop: 20 }}
        data={filtredLists}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white' }}>
            <Text
              style={{
                color: 'black',
                paddingVertical: 20,
                paddingHorizontal: 30,
              }}
            >
              {item.id} {item.name}
            </Text>

            <Button onPress={() => deleteList(item.id)}>
              <Button.Text>Delete</Button.Text>
            </Button>
          </View>
        )}
      />
    </Screen>
  );
}
