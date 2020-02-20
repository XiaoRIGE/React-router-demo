import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Video from './pages/Video'
import Index from './pages/Index'
import Life from './pages/Life'
class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>

                <div className="mainDiv">
                    <div className="leftNav">
                        <div>
                            <h3>一级导航</h3>
                        </div>
                        <div >
                            <ul>
                                <li><Link to="/">首页</Link></li>
                                <li><Link to="/video/">视频课程</Link></li>
                                <li><Link to="/life/">生活百科</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightNav">
                        <Route path="/" exact  component={Index} />
                        <Route path="/video/" component={Video} />
                        <Route path="/life/" component={Life} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;