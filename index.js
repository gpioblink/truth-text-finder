const iconv = require('iconv-lite');
const codecList = [
    "utf8", "ucs2", "utf16le", "ascii", "binary", "base64", "hex", "UTF-16BE", "UTF-16",
    "Shift_JIS", "Windows-31j", "Windows932", "EUC-JP", "GB2312", "GBK", "GB18030", "Windows936", "EUC-CN", "KS_C_5601", "Windows949", "EUC-KR", "Big5", "Big5-HKSCS", "Windows950",
    "874", "1250", "1251", "1252", "1253", "1254", "1255", "1256", "1257", "1258",
    "ISO-8859-1", "ISO-8859-2", "ISO-8859-3", "ISO-8859-4", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8", 
    "ISO-8859-9", "ISO-8859-10", "ISO-8859-11", "ISO-8859-13", "ISO-8859-14", "ISO-8859-15", "ISO-8859-16",
    "437", "737", "775", "808", "850", "852", "855", "856", "857", "858", "860", "861", "862", "863", "864", "865", "866", "869", "922", "1046", "1124", "1125", "1129", "1133", "1161", "1162", "1163",
    "maccroatian", "maccyrillic", "macgreek", "maciceland", "macroman", "macromania", "macthai", "macturkish", "macukraine", "maccenteuro", "macintosh",
    "koi8-r", "koi8-u", "koi8-ru", "koi8-t",
    "armscii8", "rk1048", "tcvn", "georgianacademy", "georgianps", "pt154", "viscii", "iso646cn", "iso646jp", "hproman8", "tis620"
];

// コンボボックスにコーディックを追加

const combo = document.getElementById("codec");
for(let codec of codecList) {
  // option要素を動的に作成
  var option = document.createElement("option");
  option.value = codec;
  option.innerText = codec;
  // コンボボックスにoption要素を追加
  combo.appendChild(option);
}

window.Convert = function(){
    const input = document.getElementById("input").value;
    const el = document.getElementById("output");
    const ocodec = combo.value;
    let result = `===== 「${input}」の変換結果 (再変換先:${ocodec}) =====\n`;

    for(let codec of codecList) {
        // Check if encoding is supported
        // console.log(iconv.encodingExists(codec), codec);
        // Convert from js string to an encoded buffer.
        const buf = iconv.encode(input, codec)
        // Convert from an encoded buffer to js string.
        const str = iconv.decode(buf, ocodec);
        result += `${codec}:->>\t ${str}\n`;
    }

    el.value = result;
}
