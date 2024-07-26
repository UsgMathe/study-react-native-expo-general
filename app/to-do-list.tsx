import Button from '@/components/Button';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/Colors';
import { List } from '@/modules/dto/list';
import { useListDatabase } from '@/modules/hooks';
import { globalStyles } from '@/theme/styles';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function toDoList() {
  const listDatabase = useListDatabase();
  const [lists, setLists] = useState<List[]>();

  const getLists = useCallback(() => {
    listDatabase
      .getAll()
      .then(response => setLists(response.data))
      .catch(e => e);
  }, []);

  function addList() {
    listDatabase
      .create({ name: 'List' + lists?.length })
      .then(response => {
        listDatabase.get({ list_id: response.data.list_id }).then(response => {
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
      <Text style={[globalStyles.title, { marginBottom: 20 }]}>To-Do-List</Text>

      <Button onPress={addList} style={{ marginBottom: 10 }}>
        <Button.Text>Create list</Button.Text>
      </Button>

      <Button onPress={clearLists}>
        <Button.Text>Clear lists</Button.Text>
      </Button>

      <FlatList
        style={{ maxHeight: 400, marginTop: 20 }}
        data={lists}
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
