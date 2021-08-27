import type { MyRoute } from 'config/routes';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useDispatch, useLocation } from 'umi';
import { useHeaderNavStatus } from '../NavBar';
import styles from './index.less';
import { Button, Dropdown, Menu, Avatar } from 'antd';
import { useAuthPush } from '@/hooks';
import { DownOutlined } from '@ant-design/icons';

interface Iprops {
  routes: MyRoute[];
}

const Header: FC<Iprops> = (props) => {
  const headerStatus = useHeaderNavStatus();
  const location = useLocation();
  const dispatch = useDispatch();
  const authPush = useAuthPush();
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('username') || '');
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const usernameMenu = (
    <Menu>
      <Menu.Item key="logout">
        <a target="_blank" rel="noopener noreferrer" onClick={logout}>
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );

  const writeAritleMenu = (
    <Menu>
      <Menu.Item key="logout">
        <a target="_blank" rel="noopener noreferrer">
          发布沸点
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      className={`${styles.headerWrap} ${
        headerStatus === 'trans' ? '' : styles.visible
      }`}
    >
      <div className={styles.container}>
        <div>
          <img
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/dcec27cc6ece0eb5bb217e62e6bec104.svg"
            alt=""
            style={{ marginRight: 26, cursor: 'pointer' }}
            onClick={() => {
              window.location.href = '/';
            }}
          />

          {[...props.routes]
            .filter((item) => !item.hidden)
            .sort((a, b) => a.order || 0 - (b.order || 0))
            .map((item) => {
              return item.path === '/' ? (
                <NavLink
                  key={item.path}
                  activeClassName="navLink-active"
                  to={'/'}
                  isActive={() =>
                    item.routes
                      ?.map((v) => v.path)
                      ?.includes(location.pathname) as boolean
                  }
                >
                  {item.title}
                </NavLink>
              ) : (
                <NavLink
                  key={item.path}
                  activeClassName="navLink-active"
                  to={item.path as string}
                >
                  {item.title}
                </NavLink>
              );
            })}
        </div>

        <div className={styles.buttonWrap}>
          <Button type="primary" onClick={() => authPush('/creator')}>
            创作者中心
          </Button>

          <Dropdown overlay={writeAritleMenu}>
            <Button type="primary" onClick={() => authPush('/writeArticle')}>
              写文章 <DownOutlined />
            </Button>
          </Dropdown>

          {username ? (
            <div className={styles.userWrap}>
              <Dropdown overlay={usernameMenu}>
                <div>
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    style={{ verticalAlign: 'bottom' }}
                  ></Avatar>
                  {username}
                </div>
              </Dropdown>
            </div>
          ) : (
            <Button
              type="primary"
              ghost
              onClick={() =>
                dispatch({ type: 'loginModal/setVisible', payload: true })
              }
            >
              登录
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
