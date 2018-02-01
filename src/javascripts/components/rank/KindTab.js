

import React,{Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'
class KindTab extends Component {
	constructor(props){
		super(props)
        this.state = {
        	data:{
        		classOneGroup:[],
        		classId:'',
        	},
          	active: 0
        }
	}
	changecolor(index,classid){
        this.setState({
              active: index,
        })
        
        this.props.fillter_click(classid)
    }

	
	componentWillMount(){
		let that = this
		axios.get('/api/v3/product/category_list?store_id_list=3&class_id='+this.state.classId)
          .then(function ({data}) {
			    console.log(data.data.classOneGroup)
                //that.setState({data:data.data.classOneGroup}) 
                that.setState({data:data.data}) 
          })
	}

	render(){
		let {data} = this.state
        return (
             <ul className="kindtabul">
				{
					data.classOneGroup.map((item,index)=>{
					return <Link  key={index} className={index == this.state.active ? "active" : "kindtabli"}   onClick={()=>this.changecolor(index,item.id)}>
							<span>{item.name}</span>
						</Link>
              
           			})
                }
                
            </ul>

        )		
	}
	
}

export default KindTab
