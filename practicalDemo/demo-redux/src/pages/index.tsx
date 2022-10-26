import React, { useState } from 'react';
import { connect } from 'react-redux';
import { InfoReducerActionEnum, InfoReducerActionType, numberActionEnum } from '../reducers/indexTypes';
import ChildDemo from './ChildDemo';

function Index(props: any) {
    const { number, addNumber, delNumber, info, changeName } = props;
    const [name, setName] = useState('');
    console.log(11);
    
    return (
        <div>
            展示的数量： {number}
            <button onClick={addNumber}>新增</button>
            <button onClick={delNumber}>减少</button>
            <div>名字:{info.name}，描述: {info.mes}</div>
            <input type="text" placeholder='改变名字' onChange={(e) => setName(e.target.value)} />
            <button onClick={() => changeName(name)}>确定</button>
            <ChildDemo />
        </div>
    );
}

const mapStateToProps = (state: { number: number; info: InfoReducerActionType['payLoad']; }) => ({ number: state.number, info: state.info });

const mapDispatchToProps = (dispatch: any) => ({
    addNumber: () => dispatch({ type: numberActionEnum.ADD }),
    delNumber: () => dispatch({ type: numberActionEnum.DEL }),
    changeName: (mes: string) => dispatch({ type: InfoReducerActionEnum.SET, payLoad: { name: mes } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
