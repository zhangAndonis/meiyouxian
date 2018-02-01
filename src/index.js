import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './javascripts/App';
import Home from './javascripts/components/home/Home'
import Rank from './javascripts/components/rank/Rank'
import Car from './javascripts/components/car/Car'
import Mine from './javascripts/components/mine/Mine'
import Infos from './javascripts/components/mine/Infos'
import Address from './javascripts/components/mine/Address'
import AddAddress from './javascripts/components/mine/AddAddress'
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'


ReactDOM.render(
	
		<Router history={hashHistory}>
			<Route path="/" component={App}>
			    <IndexRedirect to="home"/>
				<Route path="home" component={Home}/>
				<Route path="ranking" component={Rank}/>
				<Route path="car" component={Car}/>
				<Route path="mine" component={Mine}/>
				<Route path="infos" component={Infos}/>
				<Route path="address" component={Address}/> 
				<Route path="addaddress" component={AddAddress}/>
				<Redirect from="*" to="home"/> 
		    </Route>
        </Router>
    
       ,
    document.getElementById('root'));
registerServiceWorker();
