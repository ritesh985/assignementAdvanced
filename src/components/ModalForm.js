import React, { Component } from 'react'

import {  Input, Form} from 'antd'


class ModalForm extends Component {
    state={nameInput:'',emailInput:'',phoneInput:'',websiteInput:''}

    
    render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
    this.props.ok(this.state.nameInput,this.state.emailInput,this.state.phoneInput, this.state.websiteInput);
    
    

    return (
        
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
           
            <Form.Item label="Name">
                {getFieldDecorator('name', {
                    initialValue :this.props.name,
                    rules: [
                    {
                        required: true,
                        message: 'This field is required',
                    },
                    ],
                })(<Input onChange={(e) => this.setState({nameInput: e.target.value})} />)}
            </Form.Item>

            <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                    initialValue :this.props.email,
                    rules: [{
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ],
                })(<Input onChange={(e) => this.setState({emailInput: e.target.value})} />)}
            </Form.Item>

            <Form.Item label="Phone">
                {getFieldDecorator('phone', {
                    initialValue :this.props.phone,
                    rules: [
                    {
                        required: true,
                        message: 'This field is required',
                    },
                    ],
                })(<Input onChange={(e) => this.setState({phoneInput: e.target.value})} />)}
                </Form.Item>

            <Form.Item label="Website">
                {getFieldDecorator('website', {
                    initialValue :this.props.website,
                    rules: [
                    {
                        required: true,
                        message: 'This field is required',
                    },
                    ],
                })(<Input onChange={(e) => this.setState({websiteInput: e.target.value})} />)}
            </Form.Item>
        </Form>
    );
  }
}

const WrappedLogin = Form.create()(ModalForm)

export default WrappedLogin;