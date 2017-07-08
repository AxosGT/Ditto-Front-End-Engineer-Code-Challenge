import { connect } from 'react-redux'
import { setAppJSON } from '../actions/index'
import { loadAppJSON } from '../actions/index'
import { pageView } from '../actions/index'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    activePageLoad: state.setAppJSON,
    activePage: state.pageView
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPageLode: (myPageView)=>{
      dispatch(loadAppJSON()),
      dispatch(pageView(myPageView));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
