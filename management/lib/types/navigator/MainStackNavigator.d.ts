import {MainDrawerParamList} from '..';

export type MainStackParamList = {
  ChatRoom: {unitId: string};
  MainDrawer: MainDrawerParamList;
  ProjectDetail: {projectId: string};
  UnitDetail: {unitId: string};
  Scan: undefined;
};
