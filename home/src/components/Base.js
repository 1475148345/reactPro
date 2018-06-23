import React from 'react';
import PropTypes from 'prop-types';//字段类型检测
/* 定义函数式组件 */
export const ListButton = (props) => {
    // 左边 
    let leftView = () => {
        let view = '';
        if (props.leftIcon) {
            view = <i className={props.leftIcon}></i>;
        }
        if (props.leftTitle) {
            view = <span>{props.leftTitle}</span>;
        }
        return view;
    };
    //中间
    let centerView = () => {
        let view = '';
        if (props.centerTitle) {
            view = <b className={props.centerSty}>{props.centerTitle}</b>;
        }
        if (props.centerImg) {
            view = <i className="avatar"><img src={props.centerImg} style={props.imgSty} alt="" /></i>;
        }
        return view;
    }
    // 右边
    let rightView = () => {
        let view = '';
        if (props.rightIcon) {
            view = <i className={props.rightIcon}></i>
        } else if (props.rightIconNone) {
            view = <i className=""></i>
        }
        return view || <i className="angle-right"></i>;
    }
    return (
        <div className={'flex flex-ai-c list-botton ' + props.viewSty + (props.animate ? ' sploosh' : '')} onClick={props.onPressAction} >
            {leftView()}
            {centerView()}
            {rightView()}
        </div>
    )
}
export const SubmitBotton = (props) => {
    return (
        <div className={"submit-botton " + props.submitButtonSty} onClick={props.onPressAction}>
            {props.title}
        </div>
    )
}
export const ListInput = (props) => {
    return (
        <div className="flex flex-ai-c list-input-sty" onClick={props.onClick}>
            <div className="flex-1 flex flex-ai-c">
                <span>{props.leftTitle}</span>
                {props.required ? <label>*</label> : null}
            </div>
            <input type="text" placeholder={props.placeholder} disabled={props.disabled} defaultValue={props.defaultValue}  onChange={props.onChange} />
            {props.disabled ? <i className="angle-right"></i> : null}
        </div>
    )
}
export const ListTextArea = (props) => {
    return (
        <div className="textarea-sty">
            <p>{props.title}</p>
            <textarea placeholder={props.placeholder} defaultValue={props.defaultValue} onChange={props.onChange}></textarea>
            <span>还可输入<b>{props.totalFont}</b>字</span>
        </div>
    )

}
/* 
*类型可选值：
*array、bool、func、number、object、string、symbol、element（react元素）、node（任何东西都可以被渲染:numbers, strings, elements,或者是包含这些类型的数组(或者是片段)）
*/
ListButton.propTypes = {
    leftTitle: PropTypes.string,
    leftIcon: PropTypes.string,
    centerTitle: PropTypes.string,
    centerSty: PropTypes.string,
    centerImg: PropTypes.string,
    onPressAction: PropTypes.func,
    imgSty: PropTypes.object,
    viewSty: PropTypes.string,
    rightIcon: PropTypes.string,
    rightIconNone: PropTypes.bool
};
// 指定 props 的默认值：
ListButton.defaultProps = {
    leftTitle: '',
    leftIcon: '',
    centerTitle: '',
    centerSty: '',
    imgSty: {},
    viewSty: ''
};
ListInput.prototype = {
    leftTitle: PropTypes.string.required,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
};
ListTextArea.prototype = {
    title: PropTypes.string.required,
    placeholder: PropTypes.string,
    totalFont: PropTypes.number,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
};
SubmitBotton.prototype = {
    title: PropTypes.string,
    onPressAction: PropTypes.func,
    submitButtonSty: PropTypes.string,
};
