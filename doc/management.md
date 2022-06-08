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
  "name": "management",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android --port=8081",
    "clean": "cd android && ./gradlew clean && cd ..",
    "device": "adb reverse tcp:8081 tcp:8081",
    "dev:doc": "code ../doc/management.md",
    "eraseDefaultDB": "adb root && adb shell rm /data/data/com.management/files/default.realm",
    "getDefaultDB": "adb root && adb pull /data/data/com.management/files/default.realm && sudo chmod 777 default.realm",
    "ios": "react-native run-ios --port=8081",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "start": "react-native start --port=8081 --reset-cache",
    "start:ios": "react-native start --reset-cache",
    "test": "jest --watch-all --detectOpenHandles"
  },
  "dependencies": {
    "@react-navigation/drawer": "^6.4.1",
    "@react-navigation/material-top-tabs": "^6.2.1",
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/native-stack": "^6.6.2",
    "@react-navigation/stack": "^6.2.1",
    "patch-package": "^6.4.7",
    "react": "17.0.2",
    "react-native": "0.68.2",
    "react-native-gesture-handler": "^2.4.1",
    "react-native-pager-view": "^5.4.15",
    "react-native-paper": "^4.12.1",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "^4.2.5",
    "react-native-screens": "^3.13.1",
    "react-native-tab-view": "^3.1.1",
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


#### Tab Navigation
##### Top Tab

`@react-navigation/material-top-tabs`

wraps `react-native-tab-view`

`react-native-pager-view`

##### Buttom Tab


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

## Pending

### Hermes

[app crashed if Hermes enabled](https://github.com/facebook/hermes/issues/246), 2020 till now issue still open
- react-native `0.68.1`
- hermes-engin `0.11.0`
  > path: `user/node_modules/hermes-engine/package.json`

Also, per [modification](https://github.com/software-mansion-labs/reanimated-2-playground/pull/8/commits/71642dbe7bd96eb41df5b9f59d661ab15f6fc3f8) to `/android/app/src/main/java/com/user/MainApplication.java`, imports and calls has to be on or off collectively, otherwise build would fail.


### Sentry
