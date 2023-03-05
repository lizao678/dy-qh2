import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Menu } from 'antd'
import { useState } from 'react'
import styles from '@/styles/Home.module.scss'
import { Carousel } from 'antd'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const items = [
    {
      label: '首页',
      key: 'Home',
    },
    {
      label: '公司简介',
      key: 'Introduction',
    },
    {
      label: '新闻中心',
      key: 'NewMenu',
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
    {
      label: '业务范围',
      key: 'BusinessMenu',
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
    {
      label: '成功案例',
      key: 'SubMenu',
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
    {
      label: '政策法规',
      key: 'PoliciesMenu',
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
    {
      label: '下载中心',
      key: 'DownloadMenu',
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
    {
      label: '信息公示',
      key: 'PublicityMenu',
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
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              联系我们
        </a>
      ),
      key: 'Contact',
    },
  ]
  const [current, setCurrent] = useState('mail')
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* 头部 start */}
        <div className={styles.headHome}>
          <div className={styles.headTop}>
            <div className={styles.flexTop}>
              <div>
                <i className='iconfont  icon-aixin'></i>
                <span>18685417929</span>
                <i className='iconfont  icon-aixin'></i>
                <span>1129422384@qq.com</span>
              </div>
              <div>
                <i className='iconfont  icon-aixin'></i>
                <span>设为首页</span>
                <i className='iconfont  icon-aixin'></i>
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

          {/* 轮播图 */}
          <div className={styles.textCenter}>
            <Carousel 
              className={styles.slides}
              arrows={true}
              prevArrow={<i className='iconfont  icon-aixin'></i>}
              nextArrow={<i className='iconfont  icon-aixin'></i>}
            //   autoplay 
            >
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
        {/* 头部 end */}
        
        {/* 成功案例 */}
        <div className={styles.category}>
            
        </div>
      </main>
    </>
  )
}
