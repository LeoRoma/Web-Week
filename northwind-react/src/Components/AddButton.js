import React from 'react';

const AddButton = (props) => {
    return(
        <div className="add-button">
            <button onClick={() => props.handleShowChange()}>Add New Customer</button>
        </div>
    )
}

export default AddButton;