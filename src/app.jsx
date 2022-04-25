import React from 'react'
import { useStateProvider } from './store/context'

export const App = () => {
    const {state, setState} = useStateProvider()
    return (
        <div>
            {state.title}
            <button onClick={() => setState({title: 'not le div'})}>click me</button>
        </div>
    )
}