'use client'

import { useCardPostsReducer } from "./model/useCardParamsReducer"
import { CardPostsContext,CardPostsDispatchContext } from "./model/CardParamsContext"
import { PostCardList } from "./ui/PostCardList"

export default function Page() {
  const {postsState, dispatch} = useCardPostsReducer()


    return <CardPostsContext.Provider value={postsState}>
              <CardPostsDispatchContext.Provider value={dispatch}>
                <div className='container flex flex-col p-10 h-screen pb-0'>
                  <PostCardList />
                  {<div className='h-1' /> }
                </div>
              </CardPostsDispatchContext.Provider>
          </CardPostsContext.Provider>
  }