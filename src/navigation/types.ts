// src/navigation/types.ts
export type RootStackParamList = {
    Home: undefined;
    Restaurant: { id: string; name: string };
    Cart: undefined;
    Profile: undefined;
  };
  
  export type TabParamList = {
    HomeTab: undefined;
    CartTab: undefined;
    ProfileTab: undefined;
  };  