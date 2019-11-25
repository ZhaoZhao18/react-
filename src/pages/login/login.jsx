import React, { Component } from 'react'
import './css/login.css'
import logo from './img/logo.png'
import { Form, Icon, Input, Button, message } from 'antd'
import 'antd/dist/antd.css'
import { reqLogin } from '../../api'
const { Item } = Form
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        const { username, password } = values
        reqLogin(username, password).then(response => console.log('成功了',response.data)).catch(err => console.log(err))
      } else {
        message.error('表单输入有误，请检查！')
      }
    });
  };
  pwdValidator = (rule, value, callback) => {
    if (!value) {
      callback('密码必须输入')
    } else if (value.length < 4) {
      callback('密码必须大于等于4位')
    } else if (value.length > 12) {
      callback('密码必须小于等于12位')
    } else if (!(/^\w+$/).test(value)) {
      callback('密码必须是字母、数字、下划线组成')
    } else {
      callback()
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login'>
        <header>
          <img src={logo} alt="logo" />
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: '用户名必须输入' },
                  { min: 4, message: '用户名必须大于等于4位' },
                  { max: 12, message: '用户名必须小于等于12位' },
                  { pattern: /^\w+$/, message: '用户名必须是英文、数字或下划线组成' }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Item>
            <Item>
              {getFieldDecorator('password', {
                rules: [{ validator: this.pwdValidator }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
          </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}
export default Form.create()(Login)