import type { MyRoute } from 'config/routes';
import type { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'umi';
import styles from './index.less';

interface Iprops {
  routes: MyRoute[];
}

/**
 * 
 * @param value 滚动距离
 * @returns 
 */
export const useHeaderNavStatus = (value = 300) => {
  const [status, setStatus] = useState<'init' | 'trans'>('init');
  const [scrollTop, setScrollTop] = useState(0);

  const scroll = useCallback(() => {
    const scrollTopTemp = document.documentElement.scrollTop;
    setScrollTop(scrollTopTemp);

    if (scrollTopTemp > scrollTop) {
      // 下滚
      if (scrollTopTemp > value) {
        setStatus('trans');
      } else {
        setStatus('init');
      }
    } else {
      // 上滚
      setStatus('init');
    }
  }, [scrollTop, value]);

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [scroll]);

  return status;
};

const NavBar: FC<Iprops> = (props) => {
  const navStatus = useHeaderNavStatus();
  const location = useLocation();

  return (
    <nav
      className={`${styles.navbar} ${navStatus === 'trans' ? styles.top : ''}`}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {props.routes.map((item) => {
          return (
            !item.hidden &&
            (item.path === '/recommend' ? (
              <NavLink
                activeClassName="navLink-active"
                key={item.path}
                to={item.path as string}
                isActive={() => {
                  if (
                    location.pathname === '/' ||
                    location.pathname === '/recommend'
                  ) {
                    return true;
                  }
                  return false;
                }}
              >
                {item.title}
              </NavLink>
            ) : (
              <NavLink
                activeClassName="navLink-active"
                key={item.path}
                to={item.path as string}
              >
                {item.title}
              </NavLink>
            ))
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
