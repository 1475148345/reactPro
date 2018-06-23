import React from 'react';
import PropTypes from 'prop-types';//字段类型检测
import {toggleBody} from '../lib/util';
export const PcSelect = (props) => {
    props.show?toggleBody(1):toggleBody(0);
    return (
        <section className="pc-select" style={{display:props.show?'block':''}}>
            <div className="ceng"></div>
            <div className="content">
                <div className="title">
                    <span onClick={props.cancelAction}>取消</span>
                    <span>{props.title}</span>
                    <span onClick={props.confirmAction}>确定</span>
                </div>
                <ul>
                    {
                        props.arr.map((item,i)=>{
                            return(
                                <li key={i} onClick={()=>{props.valueAction(item)}}>{item.value}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
// 指定 props 的默认值：
PcSelect.defaultProps = {
    arr:[],
    show:false
};
PcSelect.prototype = {
    arr: PropTypes.array.required,
    title: PropTypes.array.required,
    confirmAction: PropTypes.func,
    cancelAction: PropTypes.func,
    valueAction: PropTypes.func,
};