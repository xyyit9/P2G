import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import React, {Component} from 'react';
import style from './Register.css';
import Nav from 'components/Nav/Nav';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class Register extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                //输入框距离左边的距离
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                //输入框的长度
                sm: {span: 15},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset:  8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
        <div>
            <Nav/>
            <div className="wrapperBox">
                <div className="bodyBox">
                    <div className="headerOneBox">注册</div>
                    <section className="formBox">
                        <Form onSubmit={this.handleSubmit}>

                            <FormItem
                                {...formItemLayout}
                                label={(
                                    <span>
              用户名&nbsp;
                                        <Tooltip title="你想要别人如何称呼你?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
                                )}
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [{required: true, message: '请输入您的用户名!', whitespace: true}],
                                })(
                                    <Input placeholder="3-9个字符，可使用字母、数字、下划线"/>
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="手机号码"
                            >
                                {getFieldDecorator('phone', {
                                    rules: [{required: true, message: '请输入您的手机号码!'}],
                                })(
                                    <Input  placeholder="请输入11位手机号码"/>
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="验证码"
                            >
                                <Row gutter={8}>
                                    <Col span={12}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{required: true, message: '请输入您收到的验证码!'}],
                                        })(
                                            <Input placeholder="请输入验证码"/>
                                        )}
                                    </Col>
                                    <Col span={12}>
                                        <Button>发送验证码</Button>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="设置密码"
                            >
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: '请输入您的密码!',
                                    }, {
                                        validator: this.checkConfirm,
                                    }],
                                })(
                                    <Input type="password" placeholder="8-20位，必须含有字母，数字"/>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="确认密码"
                            >
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: '请再次输入您的密码!',
                                    }, {
                                        validator: this.checkPassword,
                                    }],
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} placeholder="再输入一次密码"/>
                                )}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                                {getFieldDecorator('agreement', {
                                    valuePropName: 'checked',
                                })(
                                    <Checkbox>我已阅读并同意 <a href="">《用户协议》</a></Checkbox>
                                )}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">立即注册</Button>
                            </FormItem>
                        </Form>
                    </section>
                </div>
            </div>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create()(Register);

export default WrappedRegistrationForm;