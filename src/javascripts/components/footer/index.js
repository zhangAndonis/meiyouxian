

import React,{Component} from 'react'
import {Link} from 'react-router'

class Footer extends Component {
	constructor(props){
		super(props)
        this.state = {
            navs:[
                {id:1,text:'首页',icon:'\ue699',path:'/home'},
                {id:2,text:'分类',icon:'\ue605',path:'/ranking'},
                {id:3,text:'购物车',icon:'\ue726',path:'/car'},
                {id:4,text:'我的果园',icon:'\ue8a0',path:'/mine'},
            ]
        }
	}


	render(){
        let {navs} = this.state
        let {pathname} = this.props
		return (
			<footer className="footer">
                
				{
                    navs.map((item)=>(
                       
                       <Link className={pathname==item.path?'active':''} to={item.path} key={item.id}>
                            <i className="iconfont"  >{item.icon}</i>
                            <span >{item.text}</span>
                        </Link>
                    ))
                }
			</footer>
		)
		
	}
	
}

export default Footer
