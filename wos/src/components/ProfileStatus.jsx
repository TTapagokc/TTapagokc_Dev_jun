import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.userStatus,
    };

    activeEditMode() {
        this.setState(
            {editMode: true});
    }

    deactiveEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({status: this.props.userStatus})
        }
    }

    render() {

        return <div className='status'>
            {!this.state.editMode &&
            <div><span onClick={this.activeEditMode.bind(this)}>{this.props.userStatus || 'no status'}</span></div>}
            {this.state.editMode &&
            <div><input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                        onBlur={this.deactiveEditMode.bind(this)}/></div>}

        </div>

    };
}

export default ProfileStatus;