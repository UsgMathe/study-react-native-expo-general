export type List = {
  id: number;
  name: string;
  created_at: string;
};

export type CreateList = Omit<List, 'id' | 'created_at'>;
