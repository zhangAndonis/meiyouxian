

import React,{Component} from 'react'
import axios from 'axios'
import Footer from '../footer'
import HomeHeader from '../header/HomeHeader'
import Banner from './Banner'
import Homeimg from './Homeimg'
import Rank from './Rank'
import Fruit from './Fruit'
import Goddess from './Goddess'
import Handpick from './Handpick'
class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			data:{
                
			}
		}
       
	}
    
	
	
	render(){
		let {pathname} = this.props.location
		let {data} = this.state
		return (
			<div>
			    <HomeHeader/>
			    <Banner/>
				<div className="img"><img src="https://imgjd6.fruitday.com/images/2017-04-05/9a80964bf0201b57e8e9a4a382205fd7.png" alt=""/></div>
				<Homeimg/>
				<Rank/>
				<Fruit/>
				<Goddess/>
				<Handpick/>
				 <Footer pathname={pathname}/> 
				
			</div>
		)
		
	}
	
}

export default Home



