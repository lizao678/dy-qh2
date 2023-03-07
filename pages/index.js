import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Carousel,Menu,Card, Button } from 'antd'
import { useState } from 'react'
import styles from '@/styles/Home.module.scss'

const { Meta } = Card


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
          <h4>成功案例</h4>
          <div className={styles.w1200}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </div>

        {/* 关于我们 */}
        <div className={styles.about}>
          <div className={styles.w1200}>
            <div className={styles.aboutLeft}>
              <h4>关于我们</h4>
              <p>
                业务范围：
                贵州水陆源生态环境咨询有限公司成立于2016年，提供环境影响评价、生物多样性和生态调查监测、河湖生态修复、各类生态敏感区影响评价（自然保护区、水产种质资源保护区、风景名胜区、湿地公园等）、水资源保护等全域生态解决方案和科技集成业务，服务部门涵盖水利水电、能源交通、环保、农业、林业、旅游等众多行业。
                专业方向：
                专业方向涵盖环境工程、植物学、渔业、水文水资源、地理信息系统等学科。
                合作单位：
                与四川大学、贵州大学、云南大学、贵州民族大学等高校和科研单位建立了长期的合作平台，为生态环境部、农业农村部、水利部等部委提供生态环境...
              </p>
              <Button className={styles.aboutBtn}>查看更多{'>>'}</Button>
            </div>
          </div>
        </div>

        {/* 信息公式 */}
        <div className={styles.cim}>
          <h4>信息公式</h4>
          <div className={styles.w1200}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </div>

        {/* 联系我们 */}
        <div className={styles.guestbook}>
          <div className={styles.w1200 }>
            <h4>联系我们</h4>
            <div className={styles.guestbookLeft}>
              <div>
                <h5>贵州水陆源生态环境咨询有限公司</h5>
                <p>电子邮箱：1129422384@qq.com</p>
                <p>联系电话：18685417929</p>
                <p>联系地址：贵州省贵阳市观山湖区麒龙商务港1栋11楼</p>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className={styles.footer}>
          <ul className={styles.footerS}>
            <li>
              <h1>公司简介</h1>
              <a href="http://www.shuiluyuan.cn/list-2-1.html"title="公司介绍">公司介绍</a>
              <a href="http://www.shuiluyuan.cn/list-3-1.html"title="企业文化">企业文化</a>
              <a href="http://www.shuiluyuan.cn/list-4-1.html"title="技术团队">技术团队</a>
              <a href="http://www.shuiluyuan.cn/list-24-1.html"title="主营业务">主营业务</a>
            </li>
            <li>
              <h1>资讯交流</h1>
              <a href="http://www.shuiluyuan.cn/index.php?m=content&c=index&a=lists&catid=5"title="新闻中心">新闻中心</a>
              <a href="http://www.shuiluyuan.cn/list-6-1.html"title="政策法规">政策法规</a>
              <a href="http://www.shuiluyuan.cn/list-14-1.html"title="技术交流">技术交流</a>
            </li>
            <li>
              <h1>其他</h1>
              <a href=""title="">新闻中心</a>
              <a href="http://www.shuiluyuan.cn/hpgs/"title="信息公示">政策法规</a>
              <a href="http://www.shuiluyuan.cn/list-16-1.html"title="合作机构">技术交流</a>
              <a href="http://www.shuiluyuan.cn/list-17-1.html"title="联系我们">新闻中心</a>
            </li>
            <li>
              <h1>扫描关注</h1>
              <img src="../public/weixin.jpg"/>
            </li>
          </ul>
          
          <div className={styles.wbline}></div>
          <div className={styles.copyright}>
            <p>版权所有：贵州水陆源生态环境咨询有限公司    <a href="https://beian.miit.gov.cn" target="_blank" style={{color:'#0067BE'}}>黔ICP备18006237号-1</a></p>
            <span>地址:贵州省贵阳市观山湖区麒龙商务港1栋11楼</span>
          </div>
        </div>
      </main>
    </>
  )
}
