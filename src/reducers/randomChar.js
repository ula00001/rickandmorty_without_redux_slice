const initialState = {
  randomChar: null,
  randomCharId: 1,
  randomCharLoadingStatus: 'none',
}

const randomChar = (state = initialState, action) => {
    switch (action.type) {
        //CHARS FETCHING
        case 'RANDOM_CHAR_FETCHING':
            return {
                ...state,
                randomCharLoadingStatus: 'loading'
            }
        case 'RANDOM_CHAR_FETCHED':
            return {
                ...state,
                randomChar: action.payload,
                randomCharLoadingStatus: 'idle',
            }
        case 'RANDOM_CHAR_FETCHING_ERROR':
            return {
                ...state,
                randomCharLoadingStatus: 'error'
            }
      case 'SET_RANDOM_CHAR_ID':
            return {
              ...state,
              randomCharId: action.payload,
              randomCharLoadingStatus: 'error'
            }

        default: return state
    }
}

export default randomChar;