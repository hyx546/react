import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import GrandSonDemo from './grandSonDemo';

export default function ChildDemo(props: any) {
    const history = useHistory();
    console.log('渲染了', history);
    return (
        <div>
            ChildDemo
            <button onClick={() => history.push('/list')}>跳转到list界面</button>
            <NavLink to="/my">跳转到My界面</NavLink>
            <br />
            <button onClick={() => history.push('/list?name="hyx"')}>跳转到list界面,通过url传递参数</button>
            <button onClick={() => history.push({
                pathname: '/list',
                state: {
                    name: 'hyx'
                }
            })}>跳转到list界面,通过state传递参数</button>
            <GrandSonDemo />
        </div>
    );
}
