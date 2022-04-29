export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Scan: undefined;
};

export type MainStackParamList = {
  MainDrawer: undefined;
  ChatRoom: {unitId: String};
  UnitDetail: {UnitId: String};
  Scan: undefined;
};

export type MainDrawerParamList = {
  Home: undefined;
  Setting: undefined;
};

export type HomeTabParamList = {
  Recent: undefined;
  Project: undefined;
}
