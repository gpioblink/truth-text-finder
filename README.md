# truth-text-finder

DEMO: https://truth-text-finder.now.sh/

文字コードを再変換して、本当の文字コードを探します。

このアプリは、入力された文字を思いつく限りの文字コードに変換し、指定されたコーディックで再変換したものを表示できます。

例: 「銇堛倝銇勩仯」をGB2312としてバイナリにエンコードして、UTF-8で開くと「えらいっ」となります。

# 使っているもの

文字コードの変換には、[iconv-lite](https://github.com/ashtuchkin/iconv-lite)を使っています。めちゃくちゃ便利！

