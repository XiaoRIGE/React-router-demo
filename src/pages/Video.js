import React, { Component } from 'react'
import ReactPage from './video/ReactPage'
import {Link,Route} from 'react-router-dom'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="topNav">
                    <ul>
                        <li><Link to="/video/react">react</Link></li>
                        <li><Link to="/video/vue">vue</Link></li>
                        <li><Link to="/video/flutter">flutter</Link></li>
                    </ul>
                </div>
                <div className="videoContent">
                    视屏学习
                    <Route path="/video/react" component={ReactPage}/>
                    <Route path="/video/vue" component={Vue}/>
                    <Route path="/video/flutter" component={Flutter}/>
                </div>
            </div>
         );
    }
}
 
export default Video;