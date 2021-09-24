import ReactDOM from 'react-dom';
import HomePage from './Homepage/Homepage';
import './index.css';
import Wallet from './Wallet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navebar from './Homepage/Navebar';

ReactDOM.render(
    <Router>
        <Navebar />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Wallet" component={Wallet} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
