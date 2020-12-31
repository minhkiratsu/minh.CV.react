import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6 className = "mt-bottom" ><strong>Giới thiệu</strong></h6>
                        <p className = "grey-text">Quê ở Quảng Trị, học CNTT ở trường ĐHSP Đà Nẵng.</p>
                    </div>
                    <div className ="card-action">
                        <h6><strong>Thông tin cá nhân</strong></h6>
                        <div className = "row mt">
                            <div className="col s12 m6 16 x16">
                                <p><strong>Địa chỉ: </strong>Quảng Trị</p>
                                <p><strong>Email: </strong>capminh@gmail.com</p>
                                <p><strong>Số điện thoại: </strong>0329881683</p>       
                            </div>
                            <div className = "s12 m6 16 x16">
                            <p><strong>Ngoại ngữ: </strong>English</p>
                                <p><strong>Kĩ năng mềm: </strong>Không có</p>
                                <p><strong>Sở thích </strong>Du lịch, tham gia tình nguyện</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;