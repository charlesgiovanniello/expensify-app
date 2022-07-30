//Higer order component (HOC) React component that renders another component

import React from 'react'
import ReactDOM from "react-dom/client";
const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) =>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>Please dont share this info</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

// requireAuthentication

const requireAuthentication = (WrappedComponent) =>{
    return(props)=>(
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ):(
                <p>You are not authenticated</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.createRoot(document.getElementById('app')).render(<AuthInfo info="This is the detail." isAuthenticated={false}/>);