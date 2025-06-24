//Tue Jun 24 2025 13:17:06 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const C_NA = "142,140,142";
const C_UNL = "186,230,126";
const C_FAIL = "239,107,115";
const C_UNK = "92,207,230";
const ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36";
function handler() {
  const _0x3c4a56 = fetch("https://us1-prod-direct.discoveryplus.com/token?deviceId=d1a4a5d25212400d1e6985984604d740&realm=go&shortlived=true", {
    "headers": {
      "User-Agent": ua
    },
    "noRedir": true,
    "retry": 3,
    "timeout": 5000
  }) || {};
  const _0x2ecfcb = safeParse(_0x3c4a56.body);
  const _0x420c36 = JSON.stringify(_0x3c4a56);
  if (_0x420c36 == "{}") {
    return {
      "text": "N/A",
      "background": C_NA
    };
  } else if (!_0x2ecfcb.data.attributes.token) {
    {
      return {
        "text": "查询失败",
        "background": C_NA
      };
    }
  } else {
    const _0x566c8b = fetch("https://us1-prod-direct.discoveryplus.com/users/me", {
      "headers": {
        "User-Agent": ua
      },
      "cookies": {
        "_gcl_au": "1.1.858579665.1632206782",
        "_rdt_uuid": "1632206782474.6a9ad4f2-8ef7-4a49-9d60-e071bce45e88",
        "_scid": "d154b864-8b7e-4f46-90e0-8b56cff67d05",
        "_pin_unauth": "dWlkPU1qWTRNR1ZoTlRBdE1tSXdNaTAwTW1Nd0xUbGxORFV0WWpZMU0yVXdPV1l6WldFeQ",
        "_sctr": "1|1632153600000",
        "aam_fw": "aam%3D9354365%3Baam%3D9040990",
        "aam_uuid": "24382050115125439381416006538140778858",
        "st": _0x2ecfcb.data.attributes.token,
        "gi_ls": "0",
        "_uetvid": "a25161a01aa711ec92d47775379d5e4d",
        "AMCV_BC501253513148ED0A490D45%40AdobeOrg": "-1124106680%7CMCIDTS%7C18894%7CMCMID%7C24223296309793747161435877577673078228%7CMCAAMLH-1633011393%7C9%7CMCAAMB-1633011393%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1632413793s%7CNONE%7CvVersion%7C5.2.0",
        "ass": "19ef15da-95d6-4b1d-8fa2-e9e099c9cc38.1632408400.1632406594"
      },
      "noRedir": true,
      "retry": 3,
      "timeout": 5000
    }) || {};
    const _0x420c36 = JSON.stringify(_0x566c8b);
    const _0xd81f0 = safeParse(_0x566c8b.body) || {};
    const _0x134926 = get(_0xd81f0, "data.attributes.currentLocationTerritory");
    if (_0x134926 == "us") {
      return {
        "text": "解锁",
        "background": C_UNL
      };
    } else if (_0x134926 != "us") {
      return {
        "text": "失败",
        "background": C_FAIL
      };
    } else {
      {
        return {
          "text": "未知",
          "background": C_UNK
        };
      }
    }
  }
}