import type { FC } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import type { loginModalState } from 'umi';
import { useDispatch, useSelector } from 'umi';
import './index.less';
import type { RootState } from '@/models/type';

const LoginModal: FC = () => {
  const { visible } = useSelector<RootState, loginModalState>(
    (state) => state.loginModal,
  );
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch({ type: 'loginModal/setVisible', payload: false });
  };

  const onFinish = (vals: any) => {
    localStorage.setItem('username', vals.username);
    window.location.reload();
  };

  return (
    <Modal
      title="登录"
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      width={400}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          username: 'bbf',
          password: '123456',
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
