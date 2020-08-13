import React from "react";
import classes from "../../classes/NewPageModal.module.css";
import ReactDOM from "react-dom";

class NewPageModal extends React.Component {
  componentWillMount() {
    this.root = document.createElement("div");
    document.body.appendChild(this.root);
    console.log('modalItem', this.props)
  }
  componentWillUnmount() {
    document.body.removeChild(this.root);
  }
  // onClose = () => {
  //   this.props.modalIsOpened.preventDefault(false);
  //   console.log('modal is opened', this.props.modalIsOpened)
  // };
  

  render() {
    return ReactDOM.createPortal(
      <div className={classes.modal}>
        <div className={classes.modalDialog}>
          <div className={classes.modalContent}>
            <div className={classes.modalImage}>
              <img
                src={`http://gallery.dev.webant.ru/media/${this.props.modalItem.image}`}
              ></img>
            </div>
            <div className={classes.modalName}>
              {this.props.modalItem.name}
            </div>
            <div className={classes.modalDiscription}>
              <p>
              {this.props.modalItem.description}
              </p>
            </div>
            {/* <button onClick={() => this.props.closeModalAC()}>Close</button> */}
          </div>
        </div>
        {this.props.children}
      </div>,
      this.root
    );
  }
}
export default NewPageModal;
