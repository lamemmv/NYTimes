import { h, Component } from 'preact';
import {
    connect
} from 'preact-redux';

import {
    bindActionCreators
} from 'redux';

import API from '../api';

import * as NewsActions from '../actions';

class Home extends Component {
    componentWillMount() {
        this.props.actions.getNews({ page: 0 });
    }

    render() {
        const { items } = this.props.model;

        return (
            <div>
                <div data-ride="carousel" class="carousel slide carousel-fade" id="ep-carousel-captions">
                    <ol class="carousel-indicators">
                        <li class="" data-slide-to="0" data-target="#ep-carousel-captions"></li>
                        <li data-slide-to="1" data-target="#ep-carousel-captions" class="active"></li>
                        <li data-slide-to="2" data-target="#ep-carousel-captions" class=""></li>
                    </ol>
                    <div role="listbox" class="carousel-inner ep-carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('../../../../assets/images/banner.jpg')} />
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Thông báo khai giảng khóa học mới</h3>
                                <p>Khai giảng lớp luyện thi tuyển sinh <strong>10</strong>.</p>
                                <p><a class="btn btn-lg btn-primary" href="#" role="button">Chi tiết</a></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={require('../../../../assets/images/banner2.jpg')} />
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Thông báo nghỉ lễ</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p><a class="btn btn-lg btn-primary" href="#" role="button">Chi tiết</a></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={require('../../../../assets/images/banner3.jpg')} />
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Thông báo tuyển giáo viên</h3>
                                <p>Cần tuyển <strong>10</strong> giáo viên Toán, 5 giáo viên Lý, 5 giáo viên Hóa, 2 giáo viên Ngữ văn. Tốt nghiệp đại học, có ít nhất 2 năm kinh nghiệm.</p>
                                <p><a class="btn btn-lg btn-primary" href="#" role="button">Chi tiết</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">


                    {
                        items.map((item) => {
                            return (<div class='col l3 col m6 col s12'>
                                <div class="card" style="width: 20rem;">
                                    {
                                        item.multimedia.length > 0 ?
                                            <img class="card-img-top"
                                                src={API.getServerDomain() + item.multimedia.filter(m => m.subtype == 'xlarge')[0].url}
                                                alt="Card image cap" />
                                            : null
                                    }
                                    <div class="card-body">
                                        <h4 class="card-title">{item.headline.main}</h4>
                                        <p class="card-text">{item.snippet}</p>
                                        <a href="#" class="btn btn-primary">Details</a>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        model: state.newsReducers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(NewsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);