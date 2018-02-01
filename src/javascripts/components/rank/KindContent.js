
import React,{Component} from 'react'
import {router,hashHistory} from 'react-router'
import axios from 'axios'
class KindContent extends Component {
    constructor(props){
        super(props)
        this.state={
        	data:{
        		class3Group:[],
        		class2Name:[],
        	},
        	classId:''
          
        }
        
    }

   componentWillReceiveProps(props){
   		this.getDataUp(props.classId)
   		console.log(props,this.props,'7777777')		
   }
   
   componentWillMount(){
		this.getDataUp(this.state.classId);
	}
    
    getDataUp(classId){
    	let that = this 
		axios.get('/api/v3/product/category_list?store_id_list=3&class_id='+classId)
        .then(function ({data}) {
			   	console.log(data:data.data.childrenList)
            	that.setState({data:data.data.childrenList[0]}) 
        })
    }
    
    gogoodlist(cuanindex,class2Id,id){
    	hashHistory.push({pathname:'goodlist',
    	 query:{ 
    	 	cuanindex:cuanindex,
            class2_id:class2Id,//class2_id为果园优选等大标题
            class3_id:id   //class3_id为某个确定商品id
        },  
    	  
    })
    }
    
    render(){
    	
    	console.log(this,1265757687)
    	
        let {data} = this.state
        
        return (
        <div className="KindContent">
		        {
		        	<h3>{data.class2Name.name}</h3>
		        		
		        }
		        <a href="#" className="all">全部<i className="fa fa-angle-right allicon"></i></a>
            	{   
            		
            		data.class3Group.map((item,index)=>{    	
                       return <dl key={item.id} onClick={()=>this.gogoodlist(index,item.class2Id,item.id)}><a><dt><img src={item.class_photo}/></dt><dd>{item.name}</dd></a></dl>
					
                })
            }
		</div>

        )
    }

}

export default KindContent