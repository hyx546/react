import { useContext, useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router';
import { Permission } from '../App';

export function PermissionRouter(props: any) {
    const permissionList = useContext(Permission) as Array<string>; /* 消费权限列表 */
    const [isMatch, setIsMatch] = useState(false);
    const local = useLocation();
    useEffect(() => {
        /* 判断当前页面是否有权限 */
        const flag = permissionList?.includes(props.path);
        console.log('permissionList', permissionList, flag, props.path, local.pathname);
        setIsMatch(flag);
    }, [props, permissionList]);

    return isMatch ? <Route {...props} /> : <Redirect to={'/noPermission'} />;
}