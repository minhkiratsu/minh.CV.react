import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6><strong>Kĩ Năng</strong></h6>
                        <div className = "row mt-top">
                            <div className = "col s6">
                                <p>HTML</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '90%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>CSS</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '80%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Javascipt</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '70%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Jquery</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '75%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>PHP</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '81%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>SQL</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '80%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;