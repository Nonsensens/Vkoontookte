import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import { AuthRedirect } from '../../HOC/AuthRedirect';
import { compose } from 'redux';
let mapStateToProps = (state) =>{
    return {
        
    }
}
const DialogsContainer = compose(connect(mapStateToProps), AuthRedirect)(Dialogs)

export default DialogsContainer 