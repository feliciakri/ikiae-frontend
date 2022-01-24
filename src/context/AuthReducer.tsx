enum AuthActionKind {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCES = "LOGIN_SUCCES",
  LOGIN_FAILED = "LOGIN_FAILED",
}

interface ActionProps {
  type: AuthActionKind;
  payload: Object;
}
const AuthReducer = (state: any, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case AuthActionKind.LOGIN_START: {
      return {
        token: null,
        user: null,
        isLogged: false,
        isFetching: true,
        error: false,
      };
    }
    case AuthActionKind.LOGIN_SUCCES: {
      return {
        token: payload,
        user: null,
        isLogged: true,
        isFetching: false,
        error: false,
      };
    }
    case AuthActionKind.LOGIN_FAILED: {
      return {
        token: null,
        user: null,
        isLogged: false,
        isFetching: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
