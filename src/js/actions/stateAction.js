import { createAction } from 'redux-actions'
// import axios later
// import other common actions

const PREFIX = 'CurrentState.'

export const CHANGE_PRODUCT = PREFIX + 'CHANGE_PRODUCT'
export const changeProduct = createAction(CHANGE_PRODUCT)
