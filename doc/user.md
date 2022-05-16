# dev doc

## dev env

Always refer to doc, always

- [reactnative.dev](https://reactnative.dev/docs/environment-setup)
- [react-native.cn](https://www.react-native.cn/docs/next/environment-setup)

```shell
npx react-native init user
```

## npm/yarn script

`package.json`

```json
{
  "scripts": {
    "android": "react-native run-android --port=8082",
    "clean": "cd android && ./gradlew clean && cd ..",
    "dev:doc": "code ../doc/user.md",
    "ios": "react-native run-ios --port=8082",
    "start": "react-native start --port=8082",
    "test": "jest",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "device": "adb reverse tcp:8082 tcp:8082",
    "getDefaultDB": "adb root && adb pull /data/data/com.user/files/default.realm && sudo chmod 777 default.realm",
    "eraseDefaultDB": "adb root && adb shell rm /data/data/com.user/files/default.realm"
  }
}
```

## dependencies

| Package                      | Version   | Doc                                                                                      | Ref | Remarks                                                                                                                                                         |
| ---------------------------- | --------- | ---------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `react-native-reanimated`    | `^2.8.0`  | [doc](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) |     | [bable plugin](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation#babel-plugin) has to be listed last. Hermes (crash) was a problem. But it is ok now.|
| `react-native-vision-camera` | `^2.13.2` | [doc](https://mrousavy.com/react-native-vision-camera/docs/guides)                       |     | `react-native-camera` deprecated.                                                                                                                               |
|                              |           |                                                                                          |     |                                                                                                                                                                 |
|                              |           |                                                                                          |     |                                                                                                                                                                 |

## devDependencies

| Package                  | Version  | Doc                                                                                                                                                                                       | Ref | Remarks |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------- |
| `react-native-code-push` | `^7.0.4` | [Android](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-android.md) [IOS](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-ios.md) |     |         |
|                          |          |                                                                                                                                                                                           |     |         |

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

Current setup suffice for bare react-native `snapshot` test, check [Jest: Snapshot Test](https://jestjs.io/docs/tutorial-react-native#snapshot-test)

### Code Transformation

- [Jest: Code Transformation](https://jestjs.io/docs/code-transformation#typescript-with-type-checking)
  Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers.

Jest supports this via the `transform` configuration option.

### Test React Native

#### Test App

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

#### Test Navigator

#### Test Screen

### Test Redux

## CI/CD


## Pending

### Hermes

[app crashed if Hermes enabled](https://github.com/facebook/hermes/issues/246), 2020 till now issue still open

- react-native `0.68.1`
- hermes-engin `0.11.0`
  > path: `user/node_modules/hermes-engine/package.json`

Also, per [modification](https://github.com/software-mansion-labs/reanimated-2-playground/pull/8/commits/71642dbe7bd96eb41df5b9f59d661ab15f6fc3f8) to `/android/app/src/main/java/com/user/MainApplication.java`, imports and calls has to be on or off collectively, otherwise build would fail.

### Sentry
