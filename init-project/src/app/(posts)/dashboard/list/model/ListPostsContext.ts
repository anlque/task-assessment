import { createContext } from 'react';
import { PostsState, PostsDispatch } from '../../types/params';


export const initialListPostsState: PostsState = {
  params: {
    limit: '10',
    page: '1',
    sort: 'id', 
    order: 'asc',
    search: '',
  },
  posts: []
  }
    

export const ListPostsContext = createContext<PostsState>(initialListPostsState);
export const ListPostsDispatchContext = createContext<PostsDispatch | null>(null);
