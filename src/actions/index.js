const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
};
const _api = 'https://rickandmortyapi.com/api';

// CHAR LIST
export const fetchAllCharacters = (request, pageNum = 1) => (dispatch) => {
    dispatch(charsFetching());
    request(`${_api}/character?page=${pageNum}`, options)
        .then(data => dispatch(charsFetched(data)))
        .catch(() => dispatch(charsFetchingError()))
}

export const charsFetching = () => {
    return {
        type: 'CHARS_FETCHING'
    }
}

export const charsFetched = (chars) => {
    console.log(chars.results);
    return {
        type: 'CHARS_FETCHED',
        payload: chars
    }
}

export const charsFetchingError = () => {
    return {
        type: 'CHARS_FETCHING_ERROR'
    }
}


// SINGLE CHAR
export const fetchSingleharacters = (request, id) => (dispatch) => {
    dispatch(singleCharFetching());
    request(`${_api}/character/${id}`, options)
        .then(data => {
            // console.log(data);
            dispatch(singleCharFetched(data))
        })
        .catch(() => dispatch(singleCharFetchingError()))
}

export const singleCharFetching = () => {
    return {
        type: 'SINGLE_CHAR_FETCHING'
    }
}

export const singleCharFetched = (char) => {
    return {
        type: 'SINGLE_CHAR_FETCHED',
        payload: char
    }
}

export const singleCharFetchingError = () => {
    return {
        type: 'SINGLE_CHAR_FETCHING_ERROR'
    }
}

export const setSingleCharId = (id) => {
    return {
        type: 'SET_SINGLE_CHAR_ID',
        payload: id,
    }
}


// RANDOM CHAR
export const fetchRandomcharacters = (request, id) => (dispatch) => {
    dispatch(randomCharFetching());
    request(`${_api}/character/${id}`, options)
        .then(data => {
            console.log(data);
            dispatch(randomCharFetched(data))
        })
        .catch(() => dispatch(randomCharFetchingError()))
}

export const randomCharFetching = () => {
    return {
        type: 'RANDOM_CHAR_FETCHING'
    }
}

export const randomCharFetched = (char) => {
    return {
        type: 'RANDOM_CHAR_FETCHED',
        payload: char
    }
}

export const randomCharFetchingError = () => {
    return {
        type: 'RANDOM_CHAR_FETCHING_ERROR'
    }
}

export const setRandomCharId = (id) => {
    return {
        type: 'SET_RANDOM_CHAR_ID',
        payload: id,
    }
}