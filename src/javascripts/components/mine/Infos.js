

import React,{Component} from 'react'
import {Link} from 'react-router'

class Infos extends Component {
	 constructor(props){
        super(props);
       
	}
    
	exit(){
       localStorage.removeItem('user_info')
	}
	render(){
		
		
		return (
			<div className="info">
				 <div className="info-header">
					 <Link to={'mine'}><i className="fa fa-angle-left back"></i></Link>
					 <div className="infos">个人信息</div>
				 </div>
				 <div className="kb"></div>
                 <div className="nickName">
					 <span>昵称</span>
					 <span>{JSON.parse(localStorage.user_info?localStorage.user_info:'[]')}</span>
				 </div>
				  <div className="nickName">
					 <span>会员管理</span>
					 <span><img src="https://wap.fruitday.com/content/images/me/old_v0.png" alt="" width="20" height="20"/></span>
				 </div>
				  <div className="nickName">
					 <span>性别</span>
					 <span>保密</span>
				 </div>
				  <div className="nickName">
					 <span>生日</span>
					 <span>保密</span>
				 </div>
				  <Link to={'address'}><div className="nickName">
					 <span>地址管理</span>
					  <i className="iconfont">&#xe615;</i>
				 </div>
				 </Link>
				 <div className="info-footer">
					 <Link to={'home'}><span onClick={this.exit.bind(this)}> 退出登录</span></Link>
				 </div>
			</div>
		)
		
	}
	
}

export default Infos



