import React from 'react';
import ReactDOM from 'react-dom';

const portalDiv = document.getElementById('modal');

interface Props{
  onClick: () => void
}

const ConfirmDelete = ({ onClick }: Props) => {
  return portalDiv ? ReactDOM.createPortal(
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirmation</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Etes vous sûr de vouloir continuer?</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary"data-dismiss="modal" onClick={onClick}>OK</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
        </div>
      </div>
    </div>
    , portalDiv) : null
}

export { ConfirmDelete }