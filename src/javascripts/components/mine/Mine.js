

import React,{Component} from 'react'

import Footer from '../footer'



class Mine extends Component {
	constructor(props){
		super(props)
       
	}

	
	
	render(){
	    let {pathname} = this.props.location
		return (
			<div>
				<Footer pathname={pathname}/>
				我的
			</div>
		)
		
	}
	
}

export default Mine



