import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalImage from "react-modal-image";


class SelectedBeast extends React.Component {
  render() {
    console.log(this.props)
    return (
<Modal
show={this.props.showModal}
onHide={this.props.handleCloseModal}
>
<Modal.Header closeButton>
  <Modal.Title>
    {this.props.selectBeast}
    </Modal.Title>
</Modal.Header>
<Modal.Body>

 <ModalImage
small={this.props.image_url}
src={this.props.image_url}
large={this.props.image_url}

/> 

</Modal.Body>
</Modal>
  )}
  
};

export default SelectedBeast;