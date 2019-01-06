import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import {
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  FacebookIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon
} from 'react-share';

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
              <h4 className="share-title">Share link</h4>
              <div className="share-div">
                <TwitterShareButton title={this.props.title} url={this.props.url} className="share-icon">
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton title={this.props.title} url={this.props.url} className="share-icon">
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <TelegramShareButton title={this.props.title} url={this.props.url} className="share-icon">
                  <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
                <FacebookShareButton url={this.props.url} className="share-icon">
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <GooglePlusShareButton url={this.props.url} className="share-icon">
                  <GooglePlusIcon size={32} round={true} />
                </GooglePlusShareButton>
                <LinkedinShareButton title={this.props.title} url={this.props.url} className="share-icon">
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <RedditShareButton title={this.props.title} url={this.props.url} className="share-icon">
                  <RedditIcon size={32} round={true} />
                </RedditShareButton>
                <EmailShareButton subject={this.props.title} url={this.props.url} className="share-icon">
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
              </div>
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
