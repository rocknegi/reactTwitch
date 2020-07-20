import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

import Modal from '../Modal'
import history from '../../history';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderAction() {
        const { id } = this.props.match.params
        console.log(id)
        return (
            <>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are your sure you want to delete this stream?'
        }
        return `Are your sure you want to delete this stream with title : ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                actions={this.renderAction()}
                title="Delete Stream"
                content={this.renderContent()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);