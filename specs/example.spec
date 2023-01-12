# TODOアプリの仕様テスト

これは実行可能な仕様ファイルです。
このファイルはマークダウン構文に従います。
このファイルの各見出しは、シナリオを示しています。
すべての箇条書きはステップを示します。

この仕様ファイルの実行方法
	npm test

シナリオの外にもステップを書けます。
この場所に書くステップは「Contexts Step」（xUnit系でのSetUpに該当）です。
* TODOアプリを開く

## タスク数が表示されること
* タスク "first task" を追加する
* "1 item left" が表示されること
* タスク "second task" を追加する
* "2 items left" が表示されること

## アクティブなタスクのみがリストされること
* 複数のタスクを追加する

   |description|
   |-----------|
   |first task |
   |second task|
   |third task |
   |fourth task|
   |fifth task |

* 複数のタスクを完了にする

   |description|
   |-----------|
   |second task|
   |fifth task |
* "Active" なタスクを閲覧する
* 下記のタスクが表示されること

   |description|
   |-----------|
   |first task |
   |third task |
   |fourth task|
* 下記のタスクが表示されないこと

   |description|
   |-----------|
   |second task|
   |fifth task |

下記はシナリオの終了ごとに呼ばれる処理
（xUnit系でのTearDownに該当）
___
* すべてのタスクを削除する
