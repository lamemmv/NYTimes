import { h, Component } from 'preact';
import { Provider } from 'preact-redux';
import EPHeader from './header';
import EPMain from './main';
import EPFooter from './footer';

const App = ({ store }) => (
    <Provider store={store}>
        <div class='container'>
            <EPHeader />
            <EPMain />
            <EPFooter/>
        </div>
    </Provider>
)

export default App;