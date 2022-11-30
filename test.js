const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
let mocha = require('mocha');
let describe = mocha.describe;

describe('1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('1', async function() {
    await driver.get("https://green-n-react-js-vsrpp-7w74jwrr9wrcpg7j-3000.preview.app.github.dev/logIn")
    await driver.manage().window().setRect({ width: 1936, height: 1056 })
    await driver.findElement(By.id(":r3:")).click()
    await driver.findElement(By.id(":r3:")).sendKeys("1@gmail.com")
    await driver.findElement(By.id(":r5:")).click()
    await driver.findElement(By.id(":r5:")).sendKeys("222222")
    await driver.findElement(By.id(":r5:")).sendKeys(Key.ENTER)
    {
      const element = await driver.findElement(By.css(".MuiButton-textPrimary"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButton-textPrimary")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    assert(await driver.switchTo().alert().getText() == "User not found")
    await driver.findElement(By.id(":r5:")).click()
    await driver.findElement(By.id(":r5:")).sendKeys("111111")
    await driver.findElement(By.css(".MuiButton-textPrimary")).click()
    await driver.findElement(By.id("userName")).click()
    await driver.findElement(By.id("userName")).sendKeys("we")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("wdawd")
    await driver.findElement(By.id("emali")).click()
    await driver.findElement(By.id("emali")).sendKeys("romunuk@gmail.com")
    await driver.findElement(By.css(".MuiButton-contained")).click()
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)")).click()
    {
      const element = await driver.findElement(By.css(".MuiButton-text:nth-child(3)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButton-text:nth-child(3)")).click()
    await driver.findElement(By.css(".MuiButton-text:nth-child(3)")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("html")).click()
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)")).click()
    {
      const element = await driver.findElement(By.id("outlined-basic"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("outlined-basic-label"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css(".MuiFormControl-root")).click()
    {
      const element = await driver.findElement(By.css(".MuiButton-text:nth-child(3)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButton-text:nth-child(3)")).click()
    await driver.findElement(By.css(".MuiButton-text:nth-child(3)")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)")).click()
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(9)")).click()
    {
      const element = await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButtonBase-root:nth-child(2)")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id(":r7:")).click()
    await driver.findElement(By.id(":r7:")).sendKeys("+375333615623")
    await driver.findElement(By.id(":r9:")).click()
    await driver.findElement(By.id(":r9:")).sendKeys("wdawd")
    {
      const element = await driver.findElement(By.css(".MuiButton-textPrimary"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiButton-textPrimary")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    assert(await driver.switchTo().alert().getText() == "User not found")
  })
})