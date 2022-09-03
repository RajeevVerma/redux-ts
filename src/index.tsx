import ReactDom from 'react-dom';
import App from './components/App';

const Main = () => {
    return (<App />);
};

ReactDom.render(<Main />, document.querySelector('#root'));