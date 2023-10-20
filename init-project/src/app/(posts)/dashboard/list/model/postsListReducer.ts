import { PostsState, Action } from "../../types/params";

export const postsListReducer = (state: PostsState, action: Action) => {
  switch (action.type) {
    case "SET_LIMIT": {
      return {
        ...state,
        params: { ...state.params, limit: action.limit, page: 1 },
      };
    }
    case "SET_PAGE": {
      return { ...state, params: { ...state.params, page: action.page } };
    }
    case "SET_SORT": {
      return {
        ...state,
        params: { ...state.params, sort: action.sort, page: 1 },
      };
    }
    case "SET_ORDER": {
      return {
        ...state,
        params: { ...state.params, order: action.order, page: 1 },
      };
    }
    case "SET_SEARCH": {
      return {
        ...state,
        params: { ...state.params, search: action.search, page: 1 },
      };
    }

    case "SET_POSTS": {
      return { ...state, posts: [...action.posts] };
    }

    default:
      throw new Error("Unhandled action");
  }
};
