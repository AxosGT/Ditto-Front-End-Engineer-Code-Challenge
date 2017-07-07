import { connect } from 'react-redux'
//import { fbVote ,changeUser ,pageView } from '../actions/index'
import Home from '../components/Home'

const mapStateToProps = (state, ownProps) => {
  //console.log(state.nodeAddress);
  return {
    activeUser: state.userInfo.email,
    activeAddress: state.nodeAddress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChoseNum: (number,myAddress) => {
      dispatch(
        //fbVote(number,myAddress)
      );
    },
    onChangeUser: ()=>{
      dispatch(
        //changeUser()
      );
    },
    onChangePage: (pageName)=>{
      dispatch(
        //pageView(pageName)
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
