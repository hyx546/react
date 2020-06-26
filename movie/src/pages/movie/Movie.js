import React, { Component } from 'react';
import { Input } from 'antd';
import './movie.scss';

const { Search } = Input;


export class Movie extends Component {
  render() {
    return (
      <div className="db-nav-movie">
        <div className="nav-wrap">
          <div className="nav-primary">
            <div className="nav-logo">
              <a href="https://movie.douban.com">豆瓣电影</a>
            </div>
            <div className="nav-search">
              <Search
                placeholder="搜索电影、电视剧、综艺、影人"
                onSearch={value => console.log(value)}
                style={{ width: 470 }}
                maxLength={60}
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="nav-secondarr">
          <div className="nav-items">
            <ul>
              <li><a href="/">影讯&amp;购票</a>
              </li>
              <li><a href="/">选电影</a>
              </li>
              <li><a href="/">电视剧</a>
              </li>
              <li><a href="/">排行榜</a>
              </li>
              <li><a href="/">分类</a>
              </li>
              <li><a href="/">影评</a>
              </li>
              <li><a href="/">2019年度榜单</a>
              </li>
              <li><a href="/" target="_blank">2019书影音报告</a>
              </li>
            </ul>
          </div>
          <a href="/" className="movieannual"> </a>
        </div>
      </div>
    )
  }
}

export default Movie
