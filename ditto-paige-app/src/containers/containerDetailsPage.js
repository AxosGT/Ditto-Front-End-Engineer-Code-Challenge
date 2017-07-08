import { connect } from 'react-redux'
import DetailsPage from '../components/DetailsPage'
import { pageView } from '../actions/index'
import { setAppJSON } from '../actions/index'
import { setSize } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    activePageLoad: state.setAppJSON,
    activePage: state.pageView,
    activeSize: state.setSize
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangePage: (pageName)=>{
      dispatch(pageView(pageName))
    },
    onSetSize: (size)=>{
      dispatch(setSize(size))
    }   
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage)
