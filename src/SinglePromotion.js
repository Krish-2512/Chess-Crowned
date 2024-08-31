import React from 'react';

const PromoteButton = ({ selectedPiece, onPromote, disabled }) => {
    const handlePromote = () => {
        if (selectedPiece && !disabled) {
            onPromote(selectedPiece);
        }
    };

    return (
        <button onClick={handlePromote} disabled={disabled}>
            Promote
        </button>
    );
};

export default PromoteButton;



