const reducer = (state = { value: '' }, action) => {
  if (action.type === 'CHANGE_VALUE') {
    return {
      ...state,
      ...{ value: action.value }
    };
  }
  return state;
};

export default reducer;
