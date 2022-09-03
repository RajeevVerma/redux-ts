
import { Provider } from 'react-redux';
import { store } from '../state';
import RepoList from './RepoList';

const App = () => {
    return <Provider store={store}>
        <>
            <h1>
                Search Packages
            </h1>
            <RepoList />
        </>
    </Provider>
};

export default App;