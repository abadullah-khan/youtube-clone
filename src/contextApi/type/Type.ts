import { Dispatch } from "react";

export type Post = {
  comment: { count: number; commentingAllowed: boolean };
  creator: {
    name: string;
    id: string;
    handle: string;
    pic: string;
  };
  postId: string;
  reaction: { count: number; voted: boolean };
  submission: {
    title: string;
    description: string;
    hyperlink: string;
    mediaUrl: string;
    placeholderUrl: string;
    thumbnail: string;
  };
};

export type State = {
  loading: boolean;
  posts: Post[];
  error: string | null;
  currentPage: number;
  video: Post | null;
};

export type Action =
  | {
      type: "FETCH_SUCCESS";
      payload: Post[];
    }
  | { type: "FETCH_ERROR"; payload: string }
  | { type: "INCREMENT_PAGE" }
  | { type: "GET_VIDEO"; payload: string };

export type ContextProps = {
  state: State;
  dispatch: Dispatch<Action>;
  fetchApi: (currentPage: number) => void;
};
