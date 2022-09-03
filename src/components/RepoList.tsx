
import { useState } from 'react';
import { useActions } from './../hooks/useActions';
import { useTypedSelector } from './../hooks/useTypedSelectors';

const RepoList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepo } = useActions();
    const { data, loading, error } = useTypedSelector((state) => state.repos);
    console.log('repos', data);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchRepo(term);
    }

    return <>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button> Search </button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h2>Loading...</h2>}
        {!error && !loading &&
            data.map(x => <li>{x}</li>)}
    </>
}

export default RepoList;