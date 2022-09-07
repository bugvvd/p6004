enum Code {
  Success = 0,
  Fail = 1,
}

export declare interface UserCredential {
  username: string;
  password: string;
}

declare interface ServiceResult {
  code: Code;
  message: string | null;
}

// Register
export interface RegisterServiceResult extends ServiceResult {
  data: {
    uid: string;
    token: string;
  } | null;
}

// Deregister

export declare interface DeregisterServiceResult extends ServiceResult {
  data: {
    isSuccessful: boolean;
  } | null;
}

// Login

export declare interface LoginServiceResult extends ServiceResult {
  data: {
    uid: string;
    token: string;
  } | null;
}

export declare interface GetServiceResult extends ServiceResult {}

export declare interface UserSchema extends UserCredential {
  uid: string;
}
