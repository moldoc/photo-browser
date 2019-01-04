import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'

class PhotoListItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render () {
    return (
      <div>
        <div>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            bsSize="large"
            dialogClassName="photo-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={this.props.url} alt={this.props.title}/>
            </Modal.Body>
          </Modal>
        </div>
        <div className="photo-list-item" key={this.props.id}>
          <img src={this.props.thumbnailUrl} alt={this.props.id} className="image"/>
          <div className="overlay">
            <div className="title">
              {this.props.title}
            </div>
            <button
              onClick={this.handleShow}
              className="btn btn-light view-button"
            >
              View
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoListItem;
