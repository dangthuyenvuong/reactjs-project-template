import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { action } from 'redux/reducers/counterReducer'

export default function Home() {

    const counter = useSelector(state => state.counter)

    const dispatch = useDispatch()
    return (
        <div style={{ margin: '100px auto', textAlign: 'center' }}>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(action.decrement())}>-</button>
            <button onClick={() => dispatch(action.increment())}>+</button>
        </div>
    )
}
