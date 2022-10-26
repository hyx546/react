import React from 'react';
import PostIndex from '../Post';
import { useHistory } from 'react-router';

export default function MyIndex() {
    const history = useHistory();
    const id = 123;
    return (
        <div>
            MyIndex
            <button onClick={() => history.push(`/post/${id}`)}>跳转到指定id文档</button>
        </div>
    );
}
