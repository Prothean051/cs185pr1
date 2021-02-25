import React, { Component } from 'react';
import Textdata from './text';
import Imagedata from './image';
import Videodata from './video';
import Tabledata from './table';
import Emaildata from './email';
import './style.css'

class Body extends Component {
    render(){
        var displaycontent = ()=>{
            var activetab = this.props.activetab;
            if(activetab==1){
                return <Textdata/>
            }
            else if(activetab==2){
                return <Imagedata/>
            }
            else if(activetab==3){
                return <Videodata/>
            }
            else if(activetab==4){
                return <Tabledata/>
            }
            else if(activetab==5){
                return <Emaildata/>
            }
        }
        return(displaycontent())
    }
}
export default Body;