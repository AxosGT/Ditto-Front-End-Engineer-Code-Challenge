import { connect } from 'react-redux'
import DetailsPage from '../components/DetailsPage'
import { pageView } from '../actions/index'
import { setAppJSON } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    activePageLoad: state.setAppJSON,
    activePage: state.pageView
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
)(DetailsPage)
