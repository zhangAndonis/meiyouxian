
import React,{Component} from 'react'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import axios from 'axios'
class Banner extends Component {
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
               that.setState({data:data.data.banner.mainBanners[0]}) 
          })
	}
    

    componentDidUpdate(){
        new Swiper('.home-banner',{
            loop:true,
            autoplay:true,
            pagination:{el:'.swiper-pagination'}
        })
    }
    

    render(){
        let {data} = this.state
        return (
           
             <div className="swiper-container home-banner">
				 
                <div className="swiper-wrapper">
                       {
                        data.content.map(item=>(
                            <div className="swiper-slide" key={item.banner_ad_id}>
                                <img src={item.image} alt=""/>
                            </div>
                        ))
                    }   
                   
                </div>
                <div className="swiper-pagination banner-pagination"></div>
            </div>

        )
    }

}

export default Banner