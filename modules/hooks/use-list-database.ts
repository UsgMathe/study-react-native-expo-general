import { useSQLiteContext } from 'expo-sqlite';
import { CreateList, List } from '../dto/list';
import {
  CreateListPromiseResponse,
  DeleteAllListsPromiseResponse,
  DeleteListPromiseResponse,
  GetAllListsPromiseResponse,
  GetListPromiseResponse,
} from '../dto/response';

type ListProps = {
  list_id: number;
};

export function useListDatabase() {
  const database = useSQLiteContext();

  async function create(list: CreateList) {
    return new Promise<CreateListPromiseResponse>(async (resolve, reject) => {
      await database
        .runAsync('INSERT INTO lists(name) VALUES(?)', list.name)
        .then(response => {
          const list_id = response.lastInsertRowId;

          resolve({
            success: true,
            message: 'List added successfully',
            data: { list_id },
          });
        })
        .catch((error: Error) => reject(error));
    });
  }

  async function get({ list_id }: ListProps) {
    return new Promise<GetListPromiseResponse>(async (resolve, reject) => {
      await database
        .getFirstAsync<List>('SELECT * FROM lists WHERE id = ?', list_id)
        .then(list => {
          resolve({
            success: true,
            message: 'List fetched successfully',
            data: list,
          });
        })
        .catch((error: Error) => reject(error));
    });
  }

  async function getAll() {
    return new Promise<GetAllListsPromiseResponse>(async (resolve, reject) => {
      await database
        .getAllAsync<List>('SELECT * FROM lists')
        .then(lists => {
          resolve({
            success: true,
            message: 'Lists fetched successfully',
            data: lists,
          });
        })
        .catch((error: Error) => reject(error));
    });
  }

  async function deleteOne({ list_id }: ListProps) {
    return new Promise<DeleteListPromiseResponse>(async (resolve, reject) => {
      await database
        .getFirstAsync<List>('DELETE FROM lists WHERE id = ?', list_id)
        .then(() => {
          resolve({
            success: true,
            message: 'List cleared successfully',
            data: null,
          });
        })
        .catch((error: Error) => reject(error));
    });
  }

  async function deleteAll() {
    return new Promise<DeleteAllListsPromiseResponse>(
      async (resolve, reject) => {
        await database
          .getFirstAsync<List>('DELETE FROM lists')
          .then(() => {
            resolve({
              success: true,
              message: 'List cleared successfully',
              data: null,
            });
          })
          .catch((error: Error) => reject(error));
      }
    );
  }

  return { create, get, getAll, deleteAll, deleteOne };
}
