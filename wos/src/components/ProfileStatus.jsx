import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    activeEditMode() {
        this.setState(
            {editMode: true});
    }
    deactiveEditMode() {
        this.setState(
            {editMode: false});
    }

    render() {

        return <div className='status'>
            {(this.state.editMode
                ? <div><input autoFocus={true} value={this.props.userStatus} onBlur={this.deactiveEditMode.bind(this)}/></div>
                : <div><span onClick={this.activeEditMode.bind(this)}>{this.props.userStatus}</span></div>)}
        </div>

    };
}

export default ProfileStatus;