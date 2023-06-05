export type Member = {
  avatar: string;
  name: string;
};

export type Item = {
  id: string;
  label: string;
  title: string;
  messages: string[];
  attachments: number;
  members: Member[];
};

export type Board = {
  boardName: string;
  items: Item[];
};

export type KanbanData = Board[];
