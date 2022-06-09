# dev doc

## dev env

Always refer to doc, always

- [reactnative.dev](https://reactnative.dev/docs/environment-setup)
- [react-native.cn](https://www.react-native.cn/docs/next/environment-setup)

```shell
npx react-native init user
```

## dependencies

```json
{
  "name": "user",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "device:android": "adb reverse tcp:8082 tcp:8082",
    "start:android": "react-native start --port=8082 --reset-cache",
    "android": "react-native run-android --port=8082",
    "start:ios": "react-native start --reset-cache",
    "ios": "react-native run-ios",
    "dev:doc": "code ../doc/user.md",
    "clean": "cd android && ./gradlew clean && cd ..",
    "test": "jest --watch-all --detectOpenHandles",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "getDefaultDB": "adb root && adb pull /data/data/com.user/files/default.realm && sudo chmod 777 default.realm",
    "eraseDefaultDB": "adb root && adb shell rm /data/data/com.user/files/default.realm"
  },
  "dependencies": {
    "@react-navigation/drawer": "^6.4.1",
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/native-stack": "^6.6.2",
    "@react-navigation/stack": "^6.2.1",
    "react": "17.0.2",
    "react-native": "0.68.2",
    "react-native-gesture-handler": "^2.4.1",
    "react-native-paper": "^4.12.1",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "^4.2.5",
    "react-native-screens": "^3.13.1",
    "react-native-vector-icons": "^9.1.0"
  },
  "devDependencies": {
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "@testing-library/jest-native": "^4.0.4",
    "@testing-library/react-native": "^9.1.0",
    "@types/jest": "^27.5.1",
    "@types/react-native": "^0.67.7",
    "@types/react-test-renderer": "^18.0.0",
    "babel-jest": "^28.0.3",
    "eslint": "^7.32.0",
    "jest": "^27.0.0",
    "metro-react-native-babel-preset": "^0.67.0",
    "react-test-renderer": "17.0.2",
    "ts-jest": "^28.0.2",
    "typescript": "^4.6.4"
  },
  "resolutions": {
    "@types/react": "^17"
  }
}
```


### Navigation
`@react-navigation/native`
- `^6.0.10` 
- [doc](https://reactnavigation.org/docs/getting-started)
- auto link for rn > 0.60 

`react-native-screens`
`react-native-safe-area-context`

#### Stack Navigation

#### Drawer Navigation

`@react-navigation/drawer`
`react-native-gesture-handler`
`react-native-reanimated`
- `^2.8.0`  
- [doc](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) 
- [bable plugin](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation#babel-plugin) has to be listed last. Hermes (crash) was a problem. But it is ok now. 

### UI
`react-native-paper`
`react-native-vector-icons`

### Utilities
`react-native-vision-camera` 
- `^2.13.2` 
- [doc](https://mrousavy.com/react-native-vision-camera/docs/guides) 
- `react-native-camera` deprecated.




## devDependencies

### CI/CD
`react-native-code-push`
- `^7.0.4`
- [Android](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-android.md) [IOS](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-ios.md) 

```shell
yarn
npx react-native link
```

## Android Config

### Permissions

`/android/app/src/main/AndroidManifest.xml`

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.user">
  <!-- General purpose pemissions -->
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.CALL_PHONE" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <!-- react-native-push-notification -->
  <uses-permission android:name="android.permission.VIBRATE" />
  <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
  <uses-permission android:name="android.permission.ACCESS_NOTIFICATION_POLICY" />
  <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
</manifest>
```

### Application

`/android/app/src/main/AndroidManifest.xml`

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.user">
<!--  -->
<application android:usesCleartextTraffic="true" android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="false" android:theme="@style/AppTheme">
    <activity android:name=".MainActivity" android:label="@string/app_name" android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode" android:launchMode="singleTask" android:windowSoftInputMode="adjustResize" android:screenOrientation="portrait">

      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>

    <!-- react-native-push-notification -->
    <!-- Change the value to true to enable pop-up for in foreground on receiving remote notifications (for prevent duplicating while showing local notifications set this to false) -->
    <meta-data android:name="com.dieam.reactnativepushnotification.notification_foreground" android:value="false" />
    <!-- Change the resource name to your App's accent color - or any other color you want -->
    <meta-data android:name="com.dieam.reactnativepushnotification.notification_color" android:resource="@color/white" /> <!-- or @android:color/{name} to use a standard color -->

    <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationActions" />
    <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationPublisher" />
    <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationBootEventReceiver">
      <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
        <action android:name="android.intent.action.QUICKBOOT_POWERON" />
        <action android:name="com.htc.intent.action.QUICKBOOT_POWERON" />
      </intent-filter>
    </receiver>

    <service android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService" android:exported="false">
      <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
      </intent-filter>
    </service>

  </application>
</manifest>

```

Package permissions

## IOS Config

For now we have to accept that all the tricks attempting to load more than one debug app on the same IOS simulator has failed.
We can only run **ONE** IOS simulator and **ONE** app at a time on only port **8081**.

cocoapod
Fix cocapod time out issue, please refer to [CocoaPods 换源](https://www.jianshu.com/p/68a3bc2a41fc)

```shell
cd ~/.cocoapods/repos
pod repo remove master
# tuna
git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master
```

`user/ios/Podfile`

```ruby
# top
source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
```

## Development

### Redux

**unsubscription from store**

[redux thunk: Modern React Redux Toolkit - Login & User Registration Tutorial and Example](https://cloudnweb.dev/2021/02/modern-react-redux-tutotials-redux-toolkit-login-user-registration/)
[Redux Toolkit: createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk#overview)

`createAsyncThunk` parameters
- type value: string
- a payloadCreator callback
- and an options object.

return value
- 

#### RTK Query data fetching API 
[Redux Toolkit: RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)

#### Typing

Typed Redux Hooks is a `react-redux` thing: [redux: Define Typed hooks](https://redux.js.org/usage/usage-with-typescript#define-typed-hooks)

#### Best Practice

1. [multiple actions/dispatches](https://stackoverflow.com/q/48172819/18748524)
Dispatching multiple actions in a row should be avoided with redux. You have dispatch(setData(data)); dispatch(setLoading(false)); which will trigger 2 store changes and 2 renders. If you combine that into a single action, and set the loading state to false for that action, then you'll only have 1 re-render in your app.

2. [test async](https://stackoverflow.com/a/48227479/18748524)
For async action creators using Redux Thunk or other middleware, it's best to completely mock the Redux store for tests. You can apply the middleware to a mock store


## TypeScript

- [reactnative.dev](https://reactnative.dev/docs/typescript)
- [react-native.cn](https://www.react-native.cn/docs/typescript)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)

### TypeScript && React Native

### TypeScript && React Navigation

### TypeScript && Jest

#### Typing [...]

## Testing: Jest

unit test
integration test
e2e test
concurrent test?

ref

- [如何自动化测试 React Native 项目 (上篇) - 核心思想与 E2E 自动化](https://blog.csdn.net/muyu114/article/details/122565053?spm=1001.2014.3001.5501)
- [如何自动化测试 React Native 项目 (下篇) - 单元测试](https://blog.csdn.net/muyu114/article/details/122565441)

### Setup

[doc](https://jestjs.io/docs/tutorial-react-native)
`npx react-native init <projectName>` generates `jest` field in `package.json`, while I prefer to decouple jest config in another file `jest.config.js`. Jest configuration can be in either `package.json` or `jest.config.js`. But NOT BOTH.
`package.json`

```json
{
  "scripts": {
-    "test": "jest"
  },
-  "jest": {
-    "preset": "react-native"
-  }
}
```

`jest.config.js`

```js
module.exports = {
  preset: "react-native",
};
```

Current setup suffice for bare rea  ct-native `snapshot` test, check [Jest: Snapshot Test](https://jestjs.io/docs/tutorial-react-native#snapshot-test)

### Code Transformation

- [Jest: Code Transformation](https://jestjs.io/docs/code-transformation#typescript-with-type-checking)
  Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers.
- [Jest: transformIgnorePatterns](https://stackoverflow.com/questions/52569447/how-to-mock-react-navigations-navigation-prop-for-unit-tests-with-typescript-in)

`jest.config.js`
```js
module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./jest/setup.js'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native(-community)?|@?react-navigation)',
  ],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './jest/setup/fileTransformer.js',
  },
};

```

Jest supports this via the `transform` configuration option.



### Caveats

The difference between `it` and `test` is almost just semtical.

### Test React Native
- [ref entrance: Testing React Native Apps](https://jestjs.io/docs/tutorial-react-native#modulenamemapper)
#### Test App

#### Test UI Component

- [@testing-library/jest-native](https://www.npmjs.com/package/@testing-library/jest-native)
- [tutorial: Using Jest and Testing Library with React Native Part V: Styles Testing](https://keyholesoftware.com/2020/11/30/using-jest-and-testing-library-with-react-native-part-v-styles-testing/)

### Test React Navigation

- [React Navigation: Testing with Jest](https://reactnavigation.org/docs/testing/)
  > for `setupFiles` field in `jest.config.js`: testing only for Stack Navigator, `./node_modules/react-native-gesture-handler/jestSetup.js` suffices. But testing Drawer Navigator or other navigator requires an additional setup step for mocking the `react-native-reanimated` library.

use a setup file to couple all requirement for jest test,

`/jest/setup.js`

```js
import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
```

`jest.config.js`

```js
module.exports = {
  preset: "react-native",
  setupFiles: ["./jest-setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)",
  ],
};
```

clear mock `mockImplementation` which set a new return value for the mock
- `mockFn.mockClear()`: will remove all stored information about calling the mock
- `mockFn.mockRestore()`: same above plus removing the mocked return values


#### Test Navigator
- [React Native School: Setup Jest Tests with React Navigation](https://www.reactnativeschool.com/setup-jest-tests-with-react-navigation) some inspiration on navigator and screen test
- [opt out props type checking](https://stackoverflow.com/questions/52569447/how-to-mock-react-navigations-navigation-prop-for-unit-tests-with-typescript-in)

#### Test Screen

- [ReactNativeSchool/testing-screen-react-native-example](https://github.com/ReactNativeSchool/testing-screen-react-native-example/blob/main/src/screens/__tests__/SignIn.test.js) has some pretty standard screen test: customized hooks, fetch mocking and `flushMicrotasksQueue`

### Test Redux

- [Writing Tests](https://redux.js.org/usage/writing-tests)
- [redux-mock-store](https://github.com/reduxjs/redux-mock-store)
- [best ref: Intro to Confidently Testing Redux Applications with Jest & TypeScript](https://egghead.io/lessons/jest-adding-jest-with-typescript-support-to-a-vite-application)

#### dependencies
```shell
# npm i jest blablabla
```

#### configuration

When simply running 
```shell
npm run test -- --coverage --watchAll
```
Press `p -[suitName]` for specific suites to watch
Jest coverage only infer what pieces of codes it should compare against for coverage report. To tell jest to look cover only `ts,tsx,js,jsx` files but not `.d.ts` files, we need to specifiy it in `jest.config.js`
```js
module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
};
```
coverage report in browser,
```shell
open coverage/lcov-report/index.html
```


#### Basic Guidlines

##### Test isolated redux slice
0. use `it.todo` or `test.todo` to list tests to be written.
```ts
describe('loginSlice mock', () => {})
```

1. Test for Redux Reducer
testing `reducer` is just testing pure function.
```ts
describe('loginSlice mock', () => {})
```
`action` action returns a plain object`{type: "someType", payload: somePayload}`
`reducer(initialState, action)` -> `result` result is the new state, or we'd better just name it `newState`
`expect(result).toEqual(newState)`
100 % coverage is not the end game.
One shoud consider testing senarios such as 
- empty type (returning nothing but initialstate)
- idempotent (dupication of actions should return the same state), etc.

2. Test for Redux Selector
<!-- TODO: add implementation detail -->
- plain selector
- memorized selector
- memorized selector derived from multiple reducers

memorized selector `preparedSelector(state: Rootstate)` is basically a state getter generated by `createSelector`. But I think unless there is necessity to prepare heavy computing selector, most of selectors can be done with `useSelector` hook.
One shoud consider testing senarios such as 
- empty type (returning nothing but initialstate)
- idempotent (same state won't get recomputed), etc.

3. Test for Redux Thunk
`createAsyncThunk(type, payloadCreator)`
- with mock dispatch
- with mock store

mocking api helper with `jest.mock` or `jest.SpyOn`, do remember to use `mockFn.mockRestore` in clearing mocks.

- with real store: `getStoreWithState`
```ts
export const reducer = {
  loginState: loginStateReducer,
};
/* nomal store */
export const store = configureStore({
  reducer,
});
/* dynamically configure store with preloadedState for testing purpose */
// refer to configureStore.ts source code for more
export const getStoreWithState = (preloadedState?: RootState) => {
  return configureStore({reducer, preloadedState});
};
```

- getStateWithItems
`stateWithItem` => `await store.dispatch(thunk action)` => `newState` to be expected


4. test components connected with redux store
set util function
- wrap `Provider` in `renderWithContext`
- return ad-hoc state from `getStateWithItem()`
spyon -> mockresolvedValueOnce

##### Test component connected with redux

## CI/CD

## Pending

### Hermes

[app crashed if Hermes enabled](https://github.com/facebook/hermes/issues/246), 2020 till now issue still open

- react-native `0.68.1`
- hermes-engin `0.11.0`
  > path: `user/node_modules/hermes-engine/package.json`

Also, per [modification](https://github.com/software-mansion-labs/reanimated-2-playground/pull/8/commits/71642dbe7bd96eb41df5b9f59d661ab15f6fc3f8) to `/android/app/src/main/java/com/user/MainApplication.java`, imports and calls has to be on or off collectively, otherwise build would fail.

### Sentry
