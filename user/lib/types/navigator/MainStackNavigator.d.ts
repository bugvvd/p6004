import {MainDrawerParamList} from './MainDrawerNavigator';

export type MainStackParamList = {
  ChatRoom: {unitId: string};
  MainDrawer: MainDrawerParamList;
  UnitDetail: {unitId: string};
  Scan: undefined;
};
