import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  };
  onStatusChange = (e) =>{
    this.setState({status:e.currentTarget.value})
  }
  activateEditMode = () =>{
    this.setState({ 
        editMode:true,
        status: this.props.status
     })
 }
 deactivateEditMode = () =>{
    this.setState({ 
        editMode:false
     });
    this.props.updateStatus(this.state.status)
}

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick ={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onChange ={this.onStatusChange}  autoFocus={true} onBlurCapture ={this.deactivateEditMode} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
