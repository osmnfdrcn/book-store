interface State {
  genreFilter: string[];
  publisherFilter: string[];
  authorFilter: string[];
  languageFilter: string[];
  showGenres: boolean;
  showAuthors: boolean;
  showPublishers: boolean;
  showLanguages: boolean;
  isLoading: boolean;
}

type Action =
  | { type: "SET_GENRE_FILTER"; payload: string[] }
  | { type: "SET_PUBLISHER_FILTER"; payload: string[] }
  | { type: "SET_AUTHOR_FILTER"; payload: string[] }
  | { type: "SET_LANGUAGE_FILTER"; payload: string[] }
  | { type: "SET_SHOW_GENRES"; payload: boolean }
  | { type: "SET_SHOW_AUTHORS"; payload: boolean }
  | { type: "SET_SHOW_PUBLISHERS"; payload: boolean }
  | { type: "SET_SHOW_LANGUAGES"; payload: boolean }
  | { type: "SET_ISLOADING"; payload: boolean };

export const initialState: State = {
  isLoading: false,
  genreFilter: [],
  publisherFilter: [],
  authorFilter: [],
  languageFilter: [],
  showGenres: true,
  showAuthors: false,
  showPublishers: false,
  showLanguages: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ISLOADING":
      return { ...state, isLoading: action.payload };
    case "SET_AUTHOR_FILTER":
      return { ...state, authorFilter: action.payload };
    case "SET_PUBLISHER_FILTER":
      return { ...state, publisherFilter: action.payload };
    case "SET_LANGUAGE_FILTER":
      return { ...state, languageFilter: action.payload };
    case "SET_GENRE_FILTER":
      return { ...state, genreFilter: action.payload };
    case "SET_SHOW_GENRES":
      return { ...state, showGenres: action.payload };
    case "SET_SHOW_AUTHORS":
      return { ...state, showAuthors: action.payload };
    case "SET_SHOW_PUBLISHERS":
      return { ...state, showPublishers: action.payload };
    case "SET_SHOW_LANGUAGES":
      return { ...state, showLanguages: action.payload };

    default:
      return state;
  }
};
