import { connect } from 'react-redux'
import { pageView } from '../actions/index'
import LoadPage from '../components/LoadPage'

const mapStateToProps = (state, ownProps) => {
  return {
    activeVote: state.userInfo.myVote,
    activeAddress: state.nodeAddress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangePage: (pageName)=>{
      dispatch(pageView(pageName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadPage)
