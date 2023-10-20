interface User {
  id: string;
  name: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  description: string;
  user: User;
}
