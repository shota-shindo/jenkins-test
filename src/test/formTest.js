const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

let driver;
const keyword = "テスト";

describe("入力フォーム デモ", () => {
	before(() => {
		driver = new Builder().forBrowser("chrome").build();
		process.on("unhandledRejection", console.dir);
	});

	after(() => {
		return driver.quit();
	});

	it("Google検索入力チェック その1", async () => {
		// テスト対象のページへアクセス
		await driver.get("https://www.google.com/search");

		await driver.findElement(By.name("q")).sendKeys(keyword, Key.RETURN);

		// エラーメッセージを取得して、エラー文言が正しいかチェックする
		const errorMessage = await driver.wait(until.titleContains(keyword), 1000);
		assert.equal(errorMessage, true);
	});

	// it("名前欄の必須入力チェック その2", async () => {
	// 	// テスト対象のページへアクセス
	// 	await driver.get("http://ics-drive.jp/sandbox/demo/demo.html");

	// 	// 名前を入力してSubmitする
	// 	await driver.findElement(By.id("name")).sendKeys("品川太郎");
	// 	await driver.findElement(By.id("submitButton")).click();

	// 	// エラーメッセージを取得して、エラー文言が空であるかチェックする
	// 	const errorMessage = await driver
	// 		.findElement(By.id("error_name"))
	// 		.getText();
	// 	assert.equal(errorMessage, "");
	// });
});
