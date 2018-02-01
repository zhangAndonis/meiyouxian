

import React,{Component} from 'react'
import {Link} from 'react-router'
import {router,hashHistory} from 'react-router'
import axios from 'axios'
import { createHistory } from 'history'
const history = createHistory()
class GoodList extends Component {
	constructor(props){
		super(props);
        this.state = {
	 		navs:[
	              {id:1,text:'综合'},
	              {id:2,text:'销量'}
	            ],
			data:{
				brotherClass:[],
				fatherClass:[],
				productGroup:[],
			
			},
			active:this.props.location.query.cuanindex,
			activenav:0,
			item1:this.props.location.query.class3_id,
			item2:this.props.location.query.class2_id
        }
        
        this.goback = this.goback.bind(this)
	}
	goback(){
		history.goBack()
	}
	
	changecolor(index,item1,item2){
        this.setState({
            active: index,
            item1:item1,//为横向滚动条的种类id
            item2:item2 // 类似于果园优选等标题        
        })
        this.getData(item2,item1,1);
    }
	
	changecolornav(indexnav,item1,item2,navid){
        this.setState({
                activenav: indexnav
        })
        console.log(item1,4569999999);
        console.log(item2,4569999999);
        console.log(navid,4569999999);
        this.getData(item2,item1,navid);
    }
	
	componentWillMount(){
		let index=this.props.location.query.cuanindex;
		let class2_id=this.props.location.query.class2_id;
    	let class3_id=this.props.location.query.class3_id; 
		this.getData(class2_id,class3_id);
    }
	getData(class2_id,class3_id,navid){ //class2_id为果园优选等大标题 class3_id为某个确定商品id 例如奇异果，樱桃，苹果等
		let that = this;
		axios.get('/api/v3/product/sub_category_list?store_id_list=3&tms_region_type=1',{
			params:{
				class2_id:class2_id,
				class3_id:class3_id,
				sort_type:navid
			}
		})
      	.then(function ({data}){
			console.log(data:data.data,2222222222222)
          	that.setState({data:data.data}) 
      	})
	}
	
	render(){
		let {data} = this.state
        return (
        	<div className="list">
	        	<div className="goodlisthead">
		            <div className="goodlisttitle">
							<i className="fa fa-angle-left back" onClick={this.goback}></i>
							<span className="text">{data.fatherClass.name}</span>
							<i className="iconfont GoodListicon">&#xe69a;</i>
					</div>
					<div className="goodlistnav">
						<ul>
						{
							data.brotherClass.map((item,index)=>{    	
	                       		return <li key={item.id} className={index == this.state.active ? "active" : ""} onClick={()=>this.changecolor(index,item.id,data.fatherClass.id)}>{item.name}</li>
							})
						}
						</ul>
					</div>
					<div className="goodlistsort">
						<ul className="goodlistsortul">
							{
								this.state.navs.map((itemnav,indexnav)=>{    	
	                       			return <li key={itemnav.id} className={indexnav == this.state.activenav ? "active" : ""} onClick={()=>this.changecolornav(indexnav,this.state.item1,this.state.item2,itemnav.id)}>{itemnav.text}</li>
								})
							}
							<li className="goodlistsortli">价格
								<em className="sort-price">
									
								</em>
							</li>
						</ul>
					</div>
				</div>
				<div className="goodlistcontent">
					{
						data.productGroup.map((item)=>{    	
	                       	return <div className="goodlistitem" key={item.id}>
								<div className="goodlistitemimg">
									<img src={item.middle_photo}/>
								</div>
								<div className="goodlistiteminfo">
									<p className="goodlistiteminfotitle">{item.product_name}</p>
									<p className="goodlistiteminfointroduce">{item.product_desc}</p>
									<p className="goodlistiteminfoweight">{item.volume}</p>
									<p className="goodlistiteminfoprice">
										<span className="goodlistiteminfoprice-span0">¥</span>
										<span className="goodlistiteminfoprice-span1">{item.price}</span>
										<span className="goodlistiteminfoprice-span2">明日达</span>
										<span className="goodlistiteminfoprice-span3"><i className="fa fa-plus plus"></i></span>
									</p>
								</div>
							</div>
						})
					}
					
				</div>
			</div>

        )		
	}
	
}

export default GoodList
