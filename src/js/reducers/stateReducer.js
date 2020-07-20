import { handleActions } from 'redux-actions'
import { CHANGE_PRODUCT } from 'actions/stateAction'

const initialState = {}

export const currentState = handleActions(
	{
		[CHANGE_PRODUCT]: (state, action) => {
			return { ...state, ...action.payload }
		},
	},
	initialState
)
