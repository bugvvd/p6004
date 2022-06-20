const {sleep} = require('../utils/sleep');

const waitToNavigate = duration =>
  new Promise(resolve => setTimeout(() => resolve(), duration));

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  afterAll(async () => {
    await device.terminateApp();
  });
  afterEach(async () => {
    await device.reloadReactNative();
  });
  beforeEach(async () => {
    await sleep(2000);
  });

  it("should render RegisterScreen on pressing 'REGISTER' button", async () => {
    // await sleep(1000);
    await element(by.text('REGISTER')).tap();
    await expect(element(by.text('REGISTER'))).toBeVisible();
    await expect(element(by.text('CONTACT'))).toBeVisible();
    await expect(element(by.id('register-username'))).toBeVisible();
    await element(by.id('register-username')).typeText('admin');
    await expect(element(by.id('register-password'))).toBeVisible();
    await element(by.id('register-password')).typeText('12345');
    await expect(element(by.id('register-confirm-password'))).toBeVisible();
    await element(by.id('register-confirm-password')).typeText('12345');

    await element(by.id('header-back')).tap();
    await expect(element(by.text('LOGIN'))).toBeVisible();
    await expect(element(by.text('REGISTER'))).toBeVisible();
  });

  it("should login to MainStack/MainDrawer/HomeTab/RecentScreen on pressing 'LOGIN' button", async () => {
    // await sleep(1000);
    await expect(element(by.text('LOGIN'))).toBeVisible();
    await expect(element(by.text('REGISTER'))).toBeVisible();
    await element(by.id('login-username')).typeText('admin');
    await element(by.id('login-password')).typeText('12345\n');
    await expect(element(by.text('LOGIN'))).toBeVisible();
    await element(by.text('LOGIN')).tap();
    await expect(element(by.id('drawer-icon'))).toBeVisible();
    await element(by.id('drawer-icon')).tap();
    await expect(element(by.text('Setting'))).toBeVisible();
  });

  it("should logout on pressing 'Lougout'/'YES' button", async () => {
    // await sleep(1000);
    await element(by.text('LOGIN')).tap();
    await expect(element(by.id('drawer-icon'))).toBeVisible();
    await element(by.id('drawer-icon')).tap();
    await element(by.text('Setting')).tap();
    await element(by.text('Logout')).tap();
    await element(by.text('YES')).tap();
    await expect(element(by.text('LOGIN'))).toBeVisible();
    await expect(element(by.text('REGISTER'))).toBeVisible();
  });

  it("should navigate to UnitDetailScreen on pressing unit card", async () => {
    // await sleep(1000);
    await element(by.text('LOGIN')).tap();
    await element(by.id('l_1')).tap();
    await expect(element(by.text('MHY-1-102'))).toBeVisible();
  });
});
