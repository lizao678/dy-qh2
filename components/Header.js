import React, { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'antd'
import styles from './Header.module.scss'
import Link from 'next/link'

export default function Header() {
  const items = [
    {
      label: <Link href='/'>首页</Link>,
      key: 'Home',
    },
    {
    //   label: '公司简介',
      label: <Link href='/Introduction'>公司简介</Link>,
      key: 'Introduction',
    },
    {
      label: '新闻中心',
      key: 'NewMenu',
      theme:'light',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    // {
    //   label: '业务范围',
    //   key: 'BusinessMenu',
    //   children: [
    //     {
    //       type: 'group',
    //       label: 'Item 1',
    //       children: [
    //         {
    //           label: 'Option 1',
    //           key: 'setting:1',
    //         },
    //         {
    //           label: 'Option 2',
    //           key: 'setting:2',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'group',
    //       label: 'Item 2',
    //       children: [
    //         {
    //           label: 'Option 3',
    //           key: 'setting:3',
    //         },
    //         {
    //           label: 'Option 4',
    //           key: 'setting:4',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: '成功案例',
    //   key: 'SubMenu',
    //   children: [
    //     {
    //       type: 'group',
    //       label: 'Item 1',
    //       children: [
    //         {
    //           label: 'Option 1',
    //           key: 'setting:1',
    //         },
    //         {
    //           label: 'Option 2',
    //           key: 'setting:2',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'group',
    //       label: 'Item 2',
    //       children: [
    //         {
    //           label: 'Option 3',
    //           key: 'setting:3',
    //         },
    //         {
    //           label: 'Option 4',
    //           key: 'setting:4',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: '政策法规',
    //   key: 'PoliciesMenu',
    //   children: [
    //     {
    //       type: 'group',
    //       label: 'Item 1',
    //       children: [
    //         {
    //           label: 'Option 1',
    //           key: 'setting:1',
    //         },
    //         {
    //           label: 'Option 2',
    //           key: 'setting:2',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'group',
    //       label: 'Item 2',
    //       children: [
    //         {
    //           label: 'Option 3',
    //           key: 'setting:3',
    //         },
    //         {
    //           label: 'Option 4',
    //           key: 'setting:4',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: '下载中心',
    //   key: 'DownloadMenu',
    //   children: [
    //     {
    //       type: 'group',
    //       label: 'Item 1',
    //       children: [
    //         {
    //           label: 'Option 1',
    //           key: 'setting:1',
    //         },
    //         {
    //           label: 'Option 2',
    //           key: 'setting:2',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'group',
    //       label: 'Item 2',
    //       children: [
    //         {
    //           label: 'Option 3',
    //           key: 'setting:3',
    //         },
    //         {
    //           label: 'Option 4',
    //           key: 'setting:4',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: '信息公示',
    //   key: 'PublicityMenu',
    //   children: [
    //     {
    //       type: 'group',
    //       label: 'Item 1',
    //       children: [
    //         {
    //           label: 'Option 1',
    //           key: 'setting:1',
    //         },
    //         {
    //           label: 'Option 2',
    //           key: 'setting:2',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'group',
    //       label: 'Item 2',
    //       children: [
    //         {
    //           label: 'Option 3',
    //           key: 'setting:3',
    //         },
    //         {
    //           label: 'Option 4',
    //           key: 'setting:4',
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  联系我们
        </a>
      ),
      key: 'Contact',
    },
  ]
  const [current, setCurrent] = useState('Home')
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <div className={styles.headHome}> 
      <div className={styles.headTop}>
        <div className={styles.flexTop}>
          <div>
            <i className='iconfont  icon-dianhua1'></i>
            <span>18685417929 </span>
            <i className='iconfont  icon-youxiang'></i>
            <span>1129422384@qq.com</span>
          </div>
          <div>
            <i className='iconfont  icon-shouye2'></i>
            <span>设为首页 </span>
            <i className='iconfont  icon-shoucang'></i>
            <span>加入收藏</span>
          </div>
        </div>
      </div>
      {/* logo */}
      <div className={styles.headLogo}>
        <div className={styles.w1200}>
          <Image
            src="/20190715033031884.png"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={500}
            height={76}
            priority
          />
        </div>
      </div>
      {/* nav */}
      <div className={styles.nav}>
        <div className={styles.w1200}>
          <Menu 
            className={styles.navMenu} 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={items}
            theme='dark'
          />
        </div>
      </div>
    </div>
  )
}