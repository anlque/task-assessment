'use client'

import { ListPostsContext, ListPostsDispatchContext } from './model/ListPostsContext';
import { useListPostsReducer } from './model/useListPostsReducer';
import { PostsListTable } from './ui/PostsListTable/PostsListTable';

export default function Page() {

  const {postsState, dispatch} = useListPostsReducer()


    return <ListPostsContext.Provider value={postsState}>
              <ListPostsDispatchContext.Provider value={dispatch}>
                <div className='container flex flex-col p-10 overflow-scroll'>
                  <h4 className='font-semibold mb-5'>Post List</h4>
                  <PostsListTable />
                </div>
              </ListPostsDispatchContext.Provider>
          </ListPostsContext.Provider>
           
  }


