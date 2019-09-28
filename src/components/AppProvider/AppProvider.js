import React, { Component } from 'react';

export const AppContext = React.createContext()

class AppProvider extends Component {

    state = {
        error: null
    }


    render() {
        
        return (
            <AppContext.Provider
                value = {{
                    state: {
                        ...this.state
                        // passes state to other components
                    },
                    actions: {
                        // Functions go here
                    },
                }}>    
                {this.props.children}    
            </AppContext.Provider>
        )
    }
}

export default AppProvider