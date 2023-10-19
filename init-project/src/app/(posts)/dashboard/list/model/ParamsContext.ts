import { createContext } from 'react';

export type SearchParamsOrder = 'asc' | 'desc'
export type SearchParamsSort = 'id' | 'title'
export type Action = 
| { type: 'SET_LIMIT', limit: string }
| { type: 'SET_PAGE', page: string }
| { type: 'SET_SEARCH', search: string }
| { type: 'SET_SORT', sort: SearchParamsSort }
| { type: 'SET_ORDER', order: SearchParamsOrder };

type ParamsDispatch = (action: Action) => void;

export interface SearchParams {
    limit: string,
    page: string,
    sort: SearchParamsSort, 
    order: SearchParamsOrder,
    search: string,
}

export const initialParams: SearchParams = {
    limit: '10',
    page: '1',
    sort: 'id', 
    order: 'asc',
    search: '',
  }

export const ParamsContext = createContext<SearchParams>(initialParams);
export const ParamsDispatchContext = createContext<ParamsDispatch | null>(null);
