import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';

const LoginForm = (props) => {

   const { style } = props
   const { login } = useUsers();

   const [email, setEmail] = useState('')
   const [pass, setPass] = useState('')
   return (
      <Form
         name="normal_login"
         style={style}
         className="login-form"
         action=''
         onFinish={() => login(email, pass)}
      >
         <Form.Item
            name="username"
            rules={[{ required: true, message: 'Por favor ingrese E-mail!' }]}
         >
            <Input 
            prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
         </Form.Item>
         <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor ingrese una contraseña!' }]}
         >
            <Input
               prefix={<LockOutlined className="site-form-item-icon"/>}
               type="password"
               placeholder="Contraseña"
               value={pass}
               onChange={(e) => setPass(e.target.value)}
            />
         </Form.Item>
         <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
               <Checkbox>Recuerdame</Checkbox>
            </Form.Item>
         </Form.Item>

         <Form.Item>
            <Button style={{ marginRight: 10 }} type="primary" htmlType="submit" className="login-form-button">
               Iniciar sesión
            </Button>
            O <Link to="/signup">Registrarse ahora!</Link>
         </Form.Item>
      </Form>
   )
}

LoginForm.propTypes = {
   style: PropTypes.any,
   submit: PropTypes.func,
   initialValues: PropTypes.object
}

LoginForm.defaultProps = {
   initialValues: {
      username: '',
      password: '',
      remember: true
   }
}

export default LoginForm
