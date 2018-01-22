

import React,{Component} from 'react'

import Footer from '../footer'



class Home extends Component {
	constructor(props){
		super(props)
       
	}

	
	
	render(){
	    let {pathname} = this.props.location
		return (
			<div>
				<Footer pathname={pathname}/>
					
				首页
			</div>
		)
		
	}
	
}

export default Home



