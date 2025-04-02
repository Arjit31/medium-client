export type blogType = {
  id: string;
  authorId: string;
  content: string;
  published: boolean;
  title: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
  };
};
