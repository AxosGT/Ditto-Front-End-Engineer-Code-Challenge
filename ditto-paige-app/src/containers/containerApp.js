import { connect } from 'react-redux'
import { pageLoad } from '../actions/index'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    activePageLoad: state.pageLoad,
    activePage: state.pageView
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPageLode: (myData)=>{
      dispatch(pageLoad(myData));
      dispatch(pageLoad(myData));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
