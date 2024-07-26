import { List } from './list';

export type PromiseResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type CreateListPromiseResponse = PromiseResponse<{ list_id: number }>;
export type GetListPromiseResponse = PromiseResponse<List | null>;
export type GetAllListsPromiseResponse = PromiseResponse<List[] | []>;
export type DeleteAllListsPromiseResponse = PromiseResponse<null>;
export type DeleteListPromiseResponse = PromiseResponse<null>;
