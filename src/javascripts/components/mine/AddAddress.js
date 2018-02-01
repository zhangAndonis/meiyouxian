

import React,{Component} from 'react'
import {Link} from 'react-router'

class Address extends Component {
	 constructor(props){
        super(props);
        this.state={
			userName:'',
			iphoneCode:'',
			address:'',
			mp:'',
			isDisable:false,
			ishhh:false,
			isadd:false,
			id:new Date(),
			arr:JSON.parse(localStorage.address_info?localStorage.address_info:'[]'),
			params:JSON.parse(localStorage.address_info?localStorage.address_info:'{}')
		}
	}
    changeUserName(e){
		this.setState({
			userName:e.target.value
		})
		if(e.target.value){
			this.state.ishhh = true;
		}
		else{
			this.state.ishhh = false;
		}

	}
	 changeIphone(e){
		this.setState({
			iphoneCode:e.target.value
		})
		var re = /^1[34578]\d{9}$/
    	if(re.test(e.target.value)){
			   this.state.isDisable = true
				 
    	}else{
    		   this.state.isDisable=false
		}

	}
	 changeAddress(e){
		this.setState({
			address:e.target.value
		})
        if(e.target.value){
			this.state.isadd = true;
		}
		else{
			this.state.isadd = false;
		}
	}
	 changeMp(e){
		this.setState({
			mp:e.target.value
		})

	}
	save(){
		this.state.params = {id:this.state.id,userName:this.state.userName,iphoneCode:this.state.iphoneCode,address:this.state.address,mp:this.state.mp}
		
		this.state.arr.push(this.state.params)
		localStorage.address_info = JSON.stringify(this.state.arr)
	}
	render(){
		console.log(this.state.isDisable)
		return (
			<div className="adress">
				<div className="address-header">
					<Link to={'address'}><span className="left"><i className="fa fa-angle-left back"></i></span></Link>
					<h2>新增收获地址</h2>
					<span className="right"></span>
				</div>
				<div className="address-con">
					<div className="add-name">
						<span>收货人</span>
						<input type="text" placeholder="收货人姓名" onChange={this.changeUserName.bind(this)}/>
					</div>
					<div className="add-name">
						<span>收货人手机</span>
						<input type="text" placeholder="手机号码"  onChange={this.changeIphone.bind(this)}/>
					</div>
					<div className="add-name">
						<span>收货地址</span>
						<input type="text" placeholder="地址"  onChange={this.changeAddress.bind(this)}/>
					</div>
					<div className="add-name">
						<span>门牌</span>
						<input type="text" placeholder="例：71号501室"  onChange={this.changeMp.bind(this)}/>
					</div>
					
				</div>
				<Link  onClick={this.save.bind(this)} to={'address'} className="add-save" style={{background:this.state.isDisable&&this.state.ishhh&&this.state.isadd?'#F93':''}}>保存并使用</Link>
			</div>
		)
		
	}
	
}

export default Address



