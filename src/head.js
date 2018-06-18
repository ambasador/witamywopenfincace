import React from 'react';
import logo from './logo.png';
import bootstrap from './boostrap.css';
import head from './head.css';
import fonts from './fonts.css';
class Head extends React.Component{
    render(){
        return (
            <div className="head">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-md-push-9">
                            <div className="head--logo">
                                <a target="_blank" href="http://www.open-partners.pl/"><img src={logo} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-9 col-md-pull-3">
                            <h1 className="head--slogan"><span>Open Partners - </span>Więcej produktów, więcej ofert, więcej
                                możliwości!</h1>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Head;
