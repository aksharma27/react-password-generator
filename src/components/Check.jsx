import React from 'react'

const Check = (props) => {
    const { value, onChange } = props;

    return (
        <div>
            <input type="checkbox" onChange={onChange} checked={value} className='checkbox' />
        </div>
    )
}

export default Check
