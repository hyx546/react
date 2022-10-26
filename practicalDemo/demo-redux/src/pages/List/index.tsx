import React from 'react';
import { useLocation } from 'react-router';

export default function ListIndex() {
    const localtion = useLocation() as any;
    return (
        <div>
            ListIndex
            <div>
                获取到的路由参数：{localtion?.state?.name}
            </div>
        </div>
    );
}
