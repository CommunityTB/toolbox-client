import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-service'

export default function PublicRoute({ component, ...props }) {
    const Component = component
    return (
        <Route
            {...props}
            render={publicComponentProps => {
                if (TokenService.hasAuthToken()) {
                    return <Redirect to={'/'} />
                }
                else {
                    return <Component {...publicComponentProps} />
                }
                
            }}
        />    
    )
} 