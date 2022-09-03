import RepositoriesReducerConstants from "../action-types/action.types";
import { Action } from "../actions";

interface IRepositoriesStore {
    data: string[],
    loading: boolean,
    error: string | null
}

const initialState: IRepositoriesStore = {
    loading: false,
    data: [],
    error: null
}

const reposReducer = (
    state: IRepositoriesStore = initialState,
    action: Action): IRepositoriesStore => {
    switch (action.type) {
        case RepositoriesReducerConstants.SEARCH:
            return { loading: true, error: null, data: [] };
        case RepositoriesReducerConstants.SEARCH_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case RepositoriesReducerConstants.SEARCH_ERROR:
            return { loading: false, error: action.payload, data: [] };

        default:
            return state;
    }
}

export default reposReducer;