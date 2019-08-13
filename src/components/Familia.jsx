import React from 'react' 
import  {filhosComProps}  from "./utils/Utils"

export default props =>
    <div>
        {/* props.children */}
        
        {filhosComProps(props)}
        
        
        
        {/* React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props})
        }) */}

        {/*React.cloneElement(props.children,
            {...props}
        )*/} 
            
        {/* React.cloneElement(props.children,
            {sobrenome: props.sobrenome}
            ) */}
    </div>