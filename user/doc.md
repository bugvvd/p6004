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
    "android": "react-native run-android --port=8081",
    "device": "adb reverse tcp:8081 tcp:8081",
    "ios": "react-native run-ios --port=8081",
    "start": "react-native start --port=8081"
  }
}
```

## Pending

sentry
