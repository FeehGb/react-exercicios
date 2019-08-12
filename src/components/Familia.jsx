import React from 'react'


export default props =>
    <div>
        {/* props.children */}
        {React.cloneElement(props.children,
            {...props}
        )}
            
        {/* React.cloneElement(props.children,
            {sobrenome: props.sobrenome}
            ) */}
    </div>