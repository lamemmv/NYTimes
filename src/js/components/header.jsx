import { h, Component } from "preact";
import { Link, HashRouter } from 'react-router-dom';
import { Localizer, Text } from 'preact-i18n';
import logo from '../../assets/images/logo1.png';

class EPHeader extends Component {
    render() {
        return (
            < HashRouter >
                <nav class="navbar navbar-expand-md navbar-light ep-navbar">
                    <Link to="/" class="navbar-brand ep-navbar-brand">
                        <img src={logo} width={80}></img>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/about" class='nav-link ep-nav-link'>
                                    <Text id='header.about'></Text>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/parents" class='nav-link ep-nav-link'>
                                    <Text id='header.parents'></Text>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/exam" class='nav-link ep-nav-link'>
                                    <Text id='header.examination'></Text>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/files" class='nav-link ep-nav-link'>
                                    <Text id='header.files'></Text>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/news" class='nav-link ep-nav-link'>
                                    <Text id='header.news'></Text>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/recruitment" class='nav-link ep-nav-link'>
                                    <Text id='header.recruitments'></Text>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class='nav-link ep-nav-link'>
                                    <Text id='header.contact'></Text>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </HashRouter>
        );
    };
}

export default EPHeader;
