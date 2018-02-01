

import React,{Component} from 'react'

import Footer from '../footer'
import Login from './Login'
import Personal from './Personal'

class Mine extends Component {
	 constructor(props){
        super(props);
        this.state={
			users:[]
		}
	}
    
	
	componentDidMount(){
		
	}
	
	
	render(){
	  let {pathname} = this.props.location
	  let s =JSON.parse(localStorage.user_info?localStorage.user_info:'[]') 
		console.log(s)
		
		return (
			<div className="mine">
				    
                    {s.length>0?<Personal style={{display:'none' }}> </Personal>:<Login/>}   
				   
				 <Footer pathname={pathname}/> 
			</div>
		)
		
	}
	
}

export default Mine



