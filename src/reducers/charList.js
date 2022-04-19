const initialState = {
  charList: [],
  charListLoadingStatus: 'none',
}

const charList = (state = initialState, action) => {
    switch (action.type) {
        //CHARS FETCHING
        case 'CHARS_FETCHING':
            return {
                ...state,
                charListLoadingStatus: 'loading'
            }
        case 'CHARS_FETCHED':
            return {
                ...state,
                charList: action.payload,
                charListLoadingStatus: 'idle',
            }
        case 'CHARS_FETCHING_ERROR':
            return {
                ...state,
                charListLoadingStatus: 'error'
            }

        default: return state
    }
}

export default charList;