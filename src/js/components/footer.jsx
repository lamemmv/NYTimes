import { h, Component } from "preact";
import { Link, HashRouter } from 'react-router-dom';
import { Text } from 'preact-i18n';

class EPFooter extends Component {
    render() {
        return (
            < HashRouter >
                <div class="card-footer text-muted">
                2 days ago
              </div>
            </HashRouter>
        );
    };
}

export default EPFooter;
