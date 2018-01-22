

import React,{Component} from 'react'

import Footer from '../footer'



class Car extends Component {
	constructor(props){
		super(props)
       
	}

	
	
	render(){
	    let {pathname} = this.props.location
		return (
			<div>
				<Footer pathname={pathname}/>
					
				购物车
			</div>
		)
		
	}
	
}

export default Car



