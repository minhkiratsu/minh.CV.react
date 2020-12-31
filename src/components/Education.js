import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Education extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className="card-content">
                        <h6><strong>HỌC VẤN</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Chứng chỉ</th>
                                    <th>Ngày cấp</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lập trình web</td>
                                    <td>20/12/2020</td>
                                </tr>
                                <tr>
                                    <td>Lập trình di động</td>
                                    <td>20/12/2020</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Education;