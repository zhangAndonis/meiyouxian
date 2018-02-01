

import React,{Component} from 'react'
import {Link} from 'react-router'

class KindSearch extends Component {
	constructor(props){
		super(props)
        this.state = {
        	
        }
	}
	
	render(){
        return (
            <div className="kindsearch">
					<input className="kindsearchtext" type="text" placeholder="奇异果"/>
					<i className="iconfont kindsearchicon">&#xe69a;</i>
			</div>

        )		
	}
	
}

export default KindSearch
