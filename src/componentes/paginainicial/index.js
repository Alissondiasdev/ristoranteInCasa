import { ScheduleOutlined, HomeOutlined, UsergroupAddOutlined, DollarOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout, Menu, theme } from 'antd';
import { UseHistory } from 'react-router-dom';
import '../paginainicial/paginainicial.css';
import Logo from '../../assets/logo.png';
import React from 'react';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Página Inicial',
  },
  {
    key: 'cadastro',
    icon: <ScheduleOutlined />,
    label: 'Cadastro',
    children: [
      {
        icon: <UsergroupAddOutlined />,
        key: 'cliente',
        label: 'Cliente',
      },
      {
        icon: <DollarOutlined />,
        key: 'produto',
        label: 'Produto',
        onClick: function handleClick({ item, key, keyPath, domEvent }) {
          
          alert('oi')
          
        },
      },
    ],
  },
];


const PaginaInicial = (props) => {
 
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <div className="divlogo">
          <img className="logo" src={Logo} alt="logo" />
        </div>
      </Header>

      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {props.children}
           
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PaginaInicial;