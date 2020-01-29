const booleanFalse = {
  type: 'change boolean',
  newBoolean: false
};

const booleanTrue = {
  type: 'change boolean',
  newBoolean: true
};

const booleanReducer = (oldBoolean = null, action) => {
  if (action.type === 'change boolean') {
    return action.newBoolean;
  } else {
    return oldBoolean;
  }
};

const themeLight = {
  type: "change theme",
  newTheme: "light"
};

const themeDark = {
  type: "change theme",
  newTheme: "dark"
};

const themeRed = {
  type: "change theme",
  newTheme: "red"
};

const themeReducer = (oldTheme = null, action) => {
  if (action.type === "change theme") {
    return action.newTheme;
  } else {
    return oldTheme;
  }
};

const combineReducers = (allReducers) => {
  return
};

// module.exports = {booleanFalse, booleanTrue, booleanReducer, themeDark, themeLight, themeRed, themeReducer};