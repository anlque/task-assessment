import { Post } from "./posts";

export type SearchParamsOrder = 'asc' | 'desc'
export type SearchParamsSort = 'id' | 'title'
export type Action = 
| { type: 'SET_LIMIT', limit: string }
| { type: 'SET_PAGE', page: string }
| { type: 'SET_SEARCH', search: string }
| { type: 'SET_SORT', sort: SearchParamsSort }
| { type: 'SET_ORDER', order: SearchParamsOrder }
| { type: 'SET_POSTS', posts: Post[] };

export type PostsDispatch = (action: Action) => void;

export interface SearchParams {
    limit: string,
        page: string,
        sort: SearchParamsSort, 
        order: SearchParamsOrder,
        search: string,
        userId?: string
}

export interface PostsState {
    params: SearchParams,
    posts: Post[]
}