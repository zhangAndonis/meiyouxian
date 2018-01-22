

import React,{Component} from 'react'

import Footer from '../footer'



class Rank extends Component {
	constructor(props){
		super(props)
      
	}

	
	
	render(){
	    let {pathname} = this.props.location
		return (
			<div>
				<Footer pathname={pathname}/>
					
			      会员
			</div>
		)
		
	}
	
}

export default Rank



