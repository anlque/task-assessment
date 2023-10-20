import { SearchParams, Action } from "./ParamsContext"
import { useReducer } from "react"
import { initialParams } from "./ParamsContext"

const paramsReducer = (state: SearchParams, action: Action)=>{
    switch (action.type) {
        case 'SET_LIMIT': {
          return {...state, limit: action.limit, page: '1'}
        }
        case 'SET_PAGE': {
          return {...state, page: action.page}
        }
        case 'SET_SORT': {
          return {...state, sort: action.sort , page: '1'}
        }
        case 'SET_ORDER': {
            return {...state, order: action.order , page: '1'}
        }
        case 'SET_SEARCH': {
            return {...state, search: action.search , page: '1'}
        }
        default:
            throw new Error("Unhandled action");
      }
  }

  const useParamsReducer=()=> {
    const [params, dispatch] = useReducer(paramsReducer, initialParams);
    return {params, dispatch}
  }

  export default useParamsReducer