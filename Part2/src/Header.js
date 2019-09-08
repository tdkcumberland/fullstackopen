import React from 'react';

const Header = ({header, id}) => {
    console.log("HeaderID", id)

    return (
        <>
            <h1>
                {header}
            </h1>
        </>
    )
}

export default Header;