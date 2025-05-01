import React from 'react'

const ListItem = (props) => {
    const { itemName, handleClick } = props
    return (
        <li className='listItem' onClick={handleClick}>{itemName}</li>
    )
}

export default ListItem