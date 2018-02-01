
import React,{Component} from 'react'
import axios from 'axios'
class Meat extends Component {
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
               that.setState({data:data.data.banner.mainBanners[21]}) 
          })
	}
    
    render(){
        let {data} = this.state
        return (
            <div>
                {
                  
                data.content.map((item)=>{
                         return  <div className="nanfei" key={item.banner_ad_id}><div className="msg"><img src={item.image} alt="" /> <div className="title"><h5>{item.title}</h5><p>{item.subtitle}</p><p className="price">￥<span className="sp1">{item.price}</span><b>/</b><span className="sp2">{item.volume}</span><span className="add">+</span></p></div></div></div>
                        
                     })
   
               }
            </div>
           
            
        )
    }

}

export default Meat