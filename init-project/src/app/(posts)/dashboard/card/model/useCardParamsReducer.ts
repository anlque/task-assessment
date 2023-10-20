import { useReducer } from "react";
import { postsCardReducer } from "./postsCardReducer";
import { initialCardPostsState } from "./CardParamsContext";

export const useCardPostsReducer = () => {
  const [postsState, dispatch] = useReducer(
    postsCardReducer,
    initialCardPostsState
  );
  return { postsState, dispatch };
};
