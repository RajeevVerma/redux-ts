
import axios from 'axios';
import { Dispatch } from 'react';
import { Action } from '../actions';
import RepositoriesReducerConstants from './../action-types/action.types';

export const searchRepo = (term: string) => {

    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: RepositoriesReducerConstants.SEARCH
        });

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });

            const names = data.objects.map((x: any) => x.package.name);
            dispatch({
                type: RepositoriesReducerConstants.SEARCH_SUCCESS,
                payload: names
            });

        } catch (err: any) {
            dispatch({
                type: RepositoriesReducerConstants.SEARCH_ERROR,
                payload: err.message
            });
        }
    }
};


