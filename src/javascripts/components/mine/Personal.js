
import React,{Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'
import Footer from '../footer'
class Personal extends Component {
    constructor(props){
        super(props)
       
        
    }
  
    

    render(){
        
       
        return (
           <div className="personal">
             <div className="personal_header">
				<div className="avart-wrapper">
                    <div className="hy"><img src="https://wap.fruitday.com/content/images/me/old_v0.png" alt=""/></div>
                    <div className="user-info">
                        <Link to={'infos'}><p>{JSON.parse(localStorage.user_info?localStorage.user_info:'[]')}</p></Link>
                        <span>签到送好礼</span>
                    </div>
                    <div className="erm">
                        <a href="https://wap.fruitday.com/me/member-scan.html"><i className="iconfont">&#xe630;</i></a>
                        <span>会员码</span>
                    </div>
                </div>
               
            </div>
             <div className="nav1">
                    <ul>
                        <li><span>积分</span><b>0</b></li>
                        <li><span>余额</span><b>0</b></li>
                        <li><span>优惠券</span><b>3</b></li>
                        <li><span>礼品</span><b>0</b></li>
                    </ul>
            </div>
            <div className="indent">
                <Link>
                <div className="mine">
                     <i className="fa fa-file-text-o"></i>
                     <span>我的订单</span>
                </div>
                 
                  <div className="all">
                      <span>全部订单</span>
                      <i className="iconfont">&#xe615;</i>
                  </div>
                </Link>
            </div>
            <div className="nav2">
                <ul>
                    <li>
                        <i className="iconfont">&#xe609;</i>
                        <span>待付款</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe68e;</i>
                        <span>待发货</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe622;</i>
                        <span>待收货</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xf01c7;</i>
                        <span>待评价</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe629;</i>
                        <span>退换货</span>
                    </li>
                </ul>
            </div>
              <div className="indent">
                <Link>
                <div className="mine">
                     <i className="iconfont">&#xe64e;</i>
                     <span>会员中心</span>
                </div>
                 
                  <div className="all1">
                      <span>享等级特权</span>
                      <i className="iconfont">&#xe615;</i>
                  </div>
                </Link>
            </div>
             <div className="indent">
                <Link>
                <div className="mine">
                     <i className="iconfont">&#xe638;</i>
                     <span>企业购</span>
                </div>
                 
                  <div className="all1">
                      <span></span>
                      <i className="iconfont">&#xe615;</i>
                  </div>
                </Link>
            </div>
             <div className="indent">
                <Link>
                <div className="mine">
                     <i className="iconfont">&#xe61d;</i>
                     <span>在线客服</span>
                </div>
                 
                  <div className="all1">
                      <span></span>
                      <i className="iconfont">&#xe615;</i>
                  </div>
                </Link>
            </div>
           
            </div>
        )
    }

}

export default Personal