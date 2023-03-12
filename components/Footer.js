import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div>
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
            <Image
              src="/weixin.jpg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={72}
              height={72}
              priority
            />
          </li>
        </ul>
          
        <div className={styles.wbline}></div>
        <div className={styles.copyright}>
          <p>版权所有：贵州水陆源生态环境咨询有限公司    <a href="https://beian.miit.gov.cn" target="_blank" style={{color:'#0067BE'}}>黔ICP备18006237号-1</a></p>
          <span>地址:贵州省贵阳市观山湖区麒龙商务港1栋11楼</span>
        </div>
      </div>
    </div>
  )
}
