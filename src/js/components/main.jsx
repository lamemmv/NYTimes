import { h, Component } from 'preact';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Text } from 'preact-i18n';

import Home from './home/container';

import * as styles from './styles.css';

class Main extends Component {
    render() {
        return (
            <main>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </HashRouter>
            </main>
        );
    };
}

export default Main;
