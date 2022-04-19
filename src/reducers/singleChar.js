const initialState = {
  singleChar: null,
  singleCharId: null,
  charLoadingStatus: 'none',
}

const charInfo = (state = initialState, action) => {
    switch (action.type) {
        //CHARS FETCHING
        case 'SINGLE_CHAR_FETCHING':
            return {
                ...state,
                charLoadingStatus: 'loading'
            }
        case 'SINGLE_CHAR_FETCHED':
            return {
                ...state,
                singleChar: action.payload,
                charLoadingStatus: 'idle',
            }
        case 'SINGLE_CHAR_FETCHING_ERROR':
            return {
                ...state,
                charLoadingStatus: 'error'
            }
      case 'SET_SINGLE_CHAR_ID':
            return {
              ...state,
              singleCharId: action.payload,
              charLoadingStatus: 'error'
            }

        default: return state
    }
}

export default charInfo;