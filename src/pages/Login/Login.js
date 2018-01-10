import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';
import Nav from 'components/Nav/Nav';
const FormItem = Form.Item;

class Login extends Component{
	 handleSubmit = (e) => {
   		e.preventDefault();
   		this.props.form.validateFields((err, values) => {
      	if (!err) {
        console.log('Received values of form: ', values);
      }
     });
  }

 render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div>
    <Nav/>
    <div className="loginClass">
    <div className="wrapper">
    <div className="body">
      <header className="headerOne">用户登录界面</header>
     <section className="form">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="/forgetpassword">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
      </section>
      </div>
      </div>
      </div>
      </div>
    );
  }

}


Login = Form.create()(Login);

export default Login;