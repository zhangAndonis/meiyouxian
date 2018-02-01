

import React,{Component} from 'react'
import axios from 'axios'
import Footer from '../footer'
import HomeHeader from '../header/HomeHeader'
import Banner from './Banner'
import Homeimg from './Homeimg'
import Rank from './Rank'
import Fruit from './Fruit'
import Goddess from './Goddess'
import NanFei from './NanFei'
import Newproduct from './Newproduct'
import Handpick from './Handpick'
import NewHot from './NewHot'
import Popularity from './Popularity'
import Populary from './Populary'
import Jingxuan from './Jingxuan'
import Vegetables from './Vegetables'
import VegetablesNav from './VegetablesNav'
import Seafood from './Seafood'
import SeafoodNav from './SeafoodNav'
import Meat from './Meat'
import MeatNav from './MeatNav'
import Handwork from './Handwork'
import HandworkNav from './HandworkNav'
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
				 <Newproduct/> 
				 {/* <NanFei/>  */}
				 {/* <NewHot/>  */}
				{/* <Jingxuan/> */}
				<Vegetables/>
				<VegetablesNav/>
				<Seafood/>
				<SeafoodNav/>
			    <Meat/>
				<MeatNav/>
				<Handwork/>
				<HandworkNav/>
                <Popularity/>
				<Populary/> 
				 <Footer pathname={pathname}/>  
				
			</div>
		)
		
	}
	
}

export default Home



