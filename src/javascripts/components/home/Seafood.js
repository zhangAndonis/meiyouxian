
import React,{Component} from 'react'
import axios from 'axios'
class Seafood extends Component {
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
               that.setState({data:data.data.banner.mainBanners[14]}) 
          })
	}
    
    render(){
        let {data} = this.state
        return (
           
             <div className="fruits">
				 {
                     data.content.map((item)=>{
                         return <img src={item.image} alt="" key={item.banner_ad_id}/>
                     })
                 }
                
            </div>

        )
    }

}

export default Seafood