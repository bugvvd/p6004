describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  afterAll(async () => {
    await device.terminateApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render loginScreen', async () => {
    await expect(element(by.text('LOGIN'))).toBeVisible();
    await expect(element(by.text('REGISTER'))).toBeVisible();
  });

  it("should render RegisterScreen on pressing 'REGISTER' button", async () => {
    await element(by.text('REGISTER')).tap();
    await expect(element(by.text('REGISTER'))).toBeVisible();
    await expect(element(by.text('CONTACT'))).toBeVisible();
  });

  it("should render 'HOME' on pressing 'LOGIN' button", async () => {
    await element(by.text('LOGIN')).tap();
    await expect(element(by.text('LOGIN'))).not.toBeVisible();
    await expect(element(by.text('Home'))).toBeVisible();
  });

  it("should render MainStack/MainDrawer/HomeTab/RecentScreen on pressing 'LOGIN' button", async () => {});
});
