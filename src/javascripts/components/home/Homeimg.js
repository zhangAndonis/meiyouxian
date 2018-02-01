
import React,{Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'
class Homeimg extends Component {
    constructor(props){
        super(props)
        this.state={
           data:{
              content:[]

		   }
        }
        
    }
   componentWillMount(){
		
		let that = this
		axios.get('/api/v3/ad/homepage?connect_id=&type=0&lonlat=116.251514%2C40.116659&ad_code=110114&tab_id=')
          .then(function ({data}) {
               that.setState({data:data.data.banner.mainBanners[2]}) 
          })
	}
    
    render(){
        let {data} = this.state
        return (
           
             <div className="homeimg">
				 {
                     data.content.map((item)=>{
                         return <a href={item.target_url} key={item.banner_ad_id}><img src={item.image} alt="" /></a>
                     })
                 }
                
            </div>

        )
    }

}

export default Homeimg