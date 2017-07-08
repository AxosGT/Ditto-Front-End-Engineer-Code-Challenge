import { connect } from 'react-redux'
import { pageView } from '../actions/index'
import { setAppJSON } from '../actions/index'
import Selector from '../components/Selector'

const mapStateToProps = (state, ownProps) => {
  return {
    activePageLoad: state.setAppJSON,
    activePage: state.pageView
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangePage: (pageID)=>{
      dispatch(pageView(pageID))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector)
