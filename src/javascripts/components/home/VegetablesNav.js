
import React,{Component} from 'react'
import axios from 'axios'
class NewHot extends Component {
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
               that.setState({data:data.data.banner.mainBanners[13]}) 
          })
	}
    
    render(){
        let {data} = this.state
        return (
           
             <ul className="nav">
				 {
                     data.content.map((item)=>{
                         return <li key={item.banner_ad_id}>
                                   <img src={item.image} alt=""/>
                                   <div className="name">
                                       <i className="sp3" style={{background:item.banner_tag.length?'#ff8a65':''}}>{item.banner_tag}</i>
                                       <p>{item.title}</p>
                                      <p className="price">￥<span className="sp1">{item.price}</span><b>/</b><span className="sp2">{item.volume}</span><span className="jia">+</span></p>
                                   </div>
                                  
                                </li>
                        
                     })
                 }
                
            </ul>

        )
    }

}

export default NewHot