export type RegisterPayload = {
  username: string;
  password: string;
};

export type RegisterServiceResult = {
  username: string | null;
  token: string | null;
};

export type DeregisterPayload = {
  username: string;
  password: string;
};

export type DeregisterServiceResult = {
  isSuccessful: boolean;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginServiceResult = {
  username: string | null;
  token: string | null;
};

export type GetServiceResult = {};
