import React, { Component } from 'react';
// import { Menu, Dropdown } from 'antd';
// import { CaretDownOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
import './nav.scss';


export class Nav extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <div className="items">
            <ul>
              <li><a href="/">豆瓣</a></li>
              <li><a href="/">读书</a></li>
              <li><a href="/">电影</a></li>
              <li><a href="/">音乐</a></li>
              <li><a href="/">同城</a></li>
              <li><a href="/">小组</a></li>
              <li><a href="/">阅读</a></li>
              <li><a href="/">FM</a></li>
              <li><a href="/">时间</a></li>
              <li><a href="/">豆品</a></li>
            </ul>
          </div>
          <div className="top-nav-doubanapp">
            <a href="/">下载豆瓣客户端</a>
          </div>
          <div className="top-nav-info">
            <a href="/login" className="nav-login" >登录/注册</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
