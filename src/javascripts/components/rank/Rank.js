

import React,{Component} from 'react'
import KindTab from './KindTab'
import KindSearch from './KindSearch'
import KindContent from './KindContent'
import Footer from '../footer'



class Rank extends Component {
	constructor(props){
		super(props)
		this.state = {
			classId:""
		}
	}

	fillter_click(classId){
        this.setState({
          
              classId
        })
    }
	
	render(){
	    let {pathname} = this.props.location
		return (
			<div> 
				<KindSearch/>
				<KindTab fillter_click={this.fillter_click.bind(this)}/>
				<KindContent classId={this.state.classId}/>
				<Footer pathname={pathname}/>
			</div>
		)
		
	}
	
}

export default Rank



