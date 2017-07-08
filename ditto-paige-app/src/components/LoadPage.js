import React, { Component } from 'react';
import Button from './button'
//import '../myCss/rePage.css'


class LoadPage extends Component {

    render() {
      return (
        <div>
          {/* {this.props.activePageLoad.map((n)=>
              <Button
                onClick={(e)=>
                  {e.preventDefault();
                  this.props.onChoseNum(n,this.props.activeAddress);
                  this.props.onChangePage('rePage')}
                }
                buttonDis={'/eyewear-selector'+ n.images.frontal}
                key={n.id}
              />
          )} */}
        </div>



        // <div className='rePage'>
        //   <h1>Vote! {this.props.activeVote}</h1>
        //   <Button
        //     onClick={(e)=>{e.preventDefault(); this.props.onChangePage('home')}}
        //     buttonDis={'Reset vote'}
        //   />
        // </div>
      );
    }
}

export default LoadPage;
