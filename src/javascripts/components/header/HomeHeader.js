

import React,{Component} from 'react'




class HomeHeader extends Component {
	constructor(props){
		super(props)
       
	}

	
	
	render(){
	   
		return (
            
            <div className="home-heade">
                <div className="position">
                    <div id="arri-time">
                        <img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png" title=""/>
                    </div>
                    <div id="map">沙河镇</div>
                    <i className="fa fa-caret-down down"></i> 
                </div>
                     <i className="iconfont">&#xe69a;</i> 
            </div>
           
			
		)
		
	}
	
}

export default HomeHeader



