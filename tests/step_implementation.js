/* globals gauge*/
"use strict";
// const path = require("path");
// const assert = require("assert");

const util = require("util");
const childProcess = require("child_process");
const exec = util.promisify(childProcess.exec);

async function runCommand(cmd) {
  try {
    let res = await exec(`${cmd}`);
    // console.debug(`cmd="${cmd}"`);
    // console.debug(`stdout="${res.stdout}"`);
    // console.debug(`stderr="${res.stderr}"`);
    if (res.stderr != "") {
      throw `標準エラーあり。cmd=${cmd}`;
    }
  } catch (error) {
    console.error("---- エラー発生 ----");
    console.error(error);
    throw `コマンド実行でエラーが発生しました。cmd="${cmd}"`;
  }
}

beforeSuite(async () => {
  // empty
});

afterSuite(async () => {
  // empty
});

step("TODOアプリを開く", async function () {
  const cmd = "echo 'TODOアプリを開く'";
  await runCommand(cmd);
});

step("すべてのタスクを削除する", async function () {
  const cmd = "echo 'すべてのタスクを削除する'";
  await runCommand(cmd);
});

step("タスク <item> を追加する", async (item) => {
  const cmd = `echo 'タスク ${item} を追加する'`;
  await runCommand(cmd);
});

step("<message> が表示されること", async function (message) {
  const cmd = `echo '${message} が表示されること'`;
  await runCommand(cmd);
});

step("複数のタスクを追加する <table>", async function (table) {
  for (var row of table.rows) {
    const cmd = `echo 'タスク ${row} を追加する'`;
    await runCommand(cmd);
  }
});

step("複数のタスクを完了にする <table>", async function (table) {
  for (var row of table.rows) {
    const cmd = `echo 'タスク ${row} を完了にする'`;
    await runCommand(cmd);
  }
});

step("<type> なタスクを閲覧する", async function (type) {
  const cmd = `echo '${type} なタスクを閲覧する'`;
  await runCommand(cmd);
});

step("下記のタスクが表示されること <table>", async function (table) {
  for (var row of table.rows) {
    const cmd = `echo 'タスク ${row} は表示されます'`;
    await runCommand(cmd);
  }
});

step("下記のタスクが表示されないこと <table>", async function (table) {
  for (var row of table.rows) {
    const cmd = `echo 'タスク ${row} は表示されません'`;
    await runCommand(cmd);
  }
});

step("何かしらの未実装のテスト", async function (table) {
  throw "テストステップが未実装です";
});
