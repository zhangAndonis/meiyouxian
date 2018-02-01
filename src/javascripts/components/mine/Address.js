

import React,{Component} from 'react'
import {Link} from 'react-router'

class Address extends Component {
	 constructor(props){
        super(props);
        this.state={
        	data:JSON.parse(localStorage.address_info?localStorage.address_info:'[]')
        }
       
	}
//  componentDidUpdate(){
//  	this.state.data = 
//  }
//	
	render(){
		
		
		return (
			<div className="adress">
				<div className="address-header">
					<Link to={'infos'}><span className="left"><i className="fa fa-angle-left back"></i></span></Link>
					<h2>地址管理</h2>
					<Link to={'addaddress'}><span className="right"><i className="iconfont">&#xe65b;</i></span></Link>
				</div>
				<div>
					<ul>
						{
							this.state.data?this.state.data.map((item,i)=>{
							 return <li className="address_ino" key={i}><span className="name">{item.userName}</span><span>{item.iphoneCode}</span><p>{item.address}</p><i className="iconfont">&#xe639;</i></li> 
						}):''
							}
					</ul>
					
				</div>
			</div>
		)
		
	}
	
}

export default Address



