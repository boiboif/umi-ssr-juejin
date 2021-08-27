import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const listData: any[] = [];
for (let i = 0; i < 23; i += 1) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const Recommend = () => {
  return (
    <div style={{ background: '#fff', padding: '0 10px 40px' }}>
      {' '}
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: () => {},
          pageSize: 10,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Recommend;
