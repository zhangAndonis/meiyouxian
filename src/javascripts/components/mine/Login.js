
import React,{Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            iphone: '',
            iphoneCode: '',
			isDisable:false,
			isLight:false,
			isLoginlight:false
        }
        
    }
    changeIphone(e){
	    this.setState({
            iphone: e.target.value
		});
		var re = /^1[34578]\d{9}$/
    	if(re.test(e.target.value)){
			//   localStorage.user_info = JSON.stringify(e.target.value)
    		   this.state.isDisable = true
    	}else{
    		   this.state.isDisable=false
		}
		
	}
    changeIphoneCode(e){
       
        this.setState({
            iphoneCode:  e.target.value
		})
		if(e.target.value == document.getElementsByClassName('code1')[0].innerHTML){
			
			this.state.isLight=true
			this.state.isLoginlight=true
		}
		else{
			this.state.isLight=false
			this.state.isLoginlight=false
		}
		
	}
    handler(){
		
	}
    getYanZhengMa(){
		var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
		var str = "";
		for(var i = 0;i < 5; i ++){
			var c = parseInt(Math.random()*arr.length);
				str += arr[c];
			}
			document.getElementsByClassName('code1')[0].innerHTML = str
			// return str

			
	}    
    login(){
        localStorage.user_info = JSON.stringify(document.getElementById('iphone').value)
        console.log(document.getElementById('iphone').value)
	}
    render(){
         let {iphone,iphoneCode} = this.state
        return (
            <div className="h1">
					<div className="mine-header">
						<i className="fa fa-angle-left back"></i>
						<div className="text">手机号快速登录</div>
					</div>
					<div className="from">
                        <div className="txt">
							<i className="fa fa-mobile icon1" ></i>
							 <input type="text" name="iphone"  onChange={this.changeIphone.bind(this)} id="iphone"/> 
							 <span className="code" onClick={this.state.isDisable?this.getYanZhengMa:""} style={{background:this.state.isDisable?"#F93":"#bfbfbf"}}>获取验证码</span>
						</div>
						<div className="txt">
							<i className="fa fa-key icon"></i>
							<input type="text" placeholder="随机验证码" name="iphoneCode"  onChange={this.changeIphoneCode.bind(this)}/>
							<i className="fa fa-lightbulb-o" style={{marginLeft:30,fontSize:20,color:this.state.isLight?'green':'#666'}}></i>
							<span className="code1" ></span>
						</div>
						<p className="tips">首次用手机号登录将自动为您注册，并有豪礼相送。</p>   
						{
							this.state.isLoginlight?<Link to={'/mine'}><button onClick={this.login} className="login-box" style={{background:'#F93'}} >登录</button></Link>:<button className="login-box" >登录</button>
						}
						
						<div className="zhdl">
							<a href="">账号密码登录</a>
							<a href="">未收到验证码?</a>
						</div>
					    </div>
						
				</div>

        )
    }

}

export default Login