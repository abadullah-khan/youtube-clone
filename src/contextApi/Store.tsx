import axios from "axios";
import { createContext, useReducer } from "react";
import { State, Action, ContextProps } from "./type/Type";

const initialState: State = {
  loading: true,
  posts: [],
  error: null,
  currentPage: 1,
  video: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "FETCH_SUCCESS":
      const uniqueData = action.payload.filter(
        (post) =>
          !state.posts.some(
            (existingPost) => existingPost.postId === post.postId
          )
      );
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...uniqueData],
      };
    case "INCREMENT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "GET_VIDEO":
      const selectedVideo =
        state.posts?.find((post) => post.postId === action.payload) || null;
      return {
        ...state,
        video: selectedVideo,
      };
    default:
      return state;
  }
};

export const Store = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
  fetchApi: () => {},
});

export const Context = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApi = (currentPage: number) => {
    axios
      .get(`https://internship-service.onrender.com/videos?page=${currentPage}`)
      .then((response) => {
        const data = response.data.data.posts;
        // console.log(data);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  };

  return (
    <Store.Provider value={{ state, dispatch, fetchApi }}>
      {children}
    </Store.Provider>
  );
};
