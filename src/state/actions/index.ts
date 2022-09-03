import RepositoriesReducerConstants from "../action-types/action.types";

interface SearchRepositoriesAction {
    type: RepositoriesReducerConstants.SEARCH,
}

interface SearchRepositoriesSuccessAction {
    type: RepositoriesReducerConstants.SEARCH_SUCCESS,
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: RepositoriesReducerConstants.SEARCH_ERROR,
    payload: string
}

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;
