// ==UserScript==
// @name         磁力链增强工具箱（复制/队列/115离线/qB推送）
// @name:zh-CN   磁力链增强工具箱（复制/队列/115离线/qB推送）
// @author       wangzijian0@vip.qq.com (原版作者), XyNull (修改版)
// @description  支持BT4G/BTDigg/BTSOW/Nyaa/DMHY(動漫花園)/GY(观影)/SeedHub/LongWangBT(梦幻天堂·龙网)/YuHuaGe(雨花阁)/SOBT/CLB(磁力宝)/BTMulu(BT目录)/ØMagnet(无极磁链)/磁力帝等磁力搜索网站，可一键复制磁力链和推送到115网盘进行离线下载，支持打开磁力链，支持批量操作；支持一键复制当前页全部磁力链、累积队列复制（多次复制后一次粘贴全部）、通过 WebUI API 将单条或队列批量推送到 qBittorrent；另支持 ExHentai/E-Hentai 的 .torrent 种子一键推送到 qBittorrent（含画廊列表页 torrent 异步抓取、整页批量推送）；提供“菜单”和左下角悬浮按钮（设置/复制全部/队列/qB推送）（需已登录115会员账号才能推送离线任务成功，qBittorrent 需在设置中配置 WebUI 地址）
// @version      1.3.0.20261031
// @icon         data:image/gif;base64,R0lGODlhgAGAAZECAPr7/ERNVv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OTk5ODkxZS0wMWE2LTRlMTItYWM1Mi00YTIzMzI1MTViYjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkU2QTk5NkYxM0UzMTFFQzg5RkRCRTMwRTcyQUZCRjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkU2QTk5NkUxM0UzMTFFQzg5RkRCRTMwRTcyQUZCRjIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOTQyMDFlMi00OGRjLTQ3OTgtOTFlNi05ZjkyNzhjNTJlZTUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplMjk3YTUwZC00MTM4LWVmNDYtYTY3Ni1kZTkzNDU1ZjNmOTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRm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
// @include      *://*bt4gprx.com/*
// @include      *://*btdig.com/*
// @include      *://*btsow.*/*
// @include      *://*nyaa.si/*
// @include      *://*dmhy.*/*
// @include      *://*xn--wcv59z.*/*
// @include      *://*xn--74qz10cqsltibh40akss.*/*
// @include      *://*xn--10vr61a3xc5x3b.*/*
// @include      *://*xn--kivn76b41nnhi.*/*
// @include      *://*seedhub.*/*
// @include      *://*longwangbt.*/*
// @include      *://*yuhuage.*/*
// @include      *://*sobt*.*/*
// @include      *://*clb*.*/*
// @include      *://*btmulu.*/*
// @include      *://*cili.*/*
// @include      *://*mag.*/*
// @include      *://*wuji.*/*
// @include      *://*1122*.*/*
// @include      *://*cld130.*/*
// @include      *://exhentai.org/*
// @include      *://e-hentai.org/*
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @connect      115.com
// @connect      login.115.com
// @connect      exhentai.org
// @connect      e-hentai.org
// @connect      *
// @run-at       document-end
// @namespace    https://github.com/XyNull
// @license      MIT
// @copyright    原版 © wangzijian0@vip.qq.com；修改版 © 2026 XyNull
// @homepageURL  https://github.com/XyNull/magnet-link-toolkit
// @supportURL   https://github.com/XyNull/magnet-link-toolkit/issues
// @originalScript https://greasyfork.org/zh-CN/scripts/531685
// @downloadURL  https://raw.githubusercontent.com/XyNull/magnet-link-toolkit/main/magnet-link-toolkit.user.js
// @updateURL    https://raw.githubusercontent.com/XyNull/magnet-link-toolkit/main/magnet-link-toolkit.user.js
// ==/UserScript==
//
// ============================================================================
//  本脚本修改自：一键复制磁力链和推送到115离线
//    原作者   ：wangzijian0@vip.qq.com
//    原脚本   ：https://greasyfork.org/zh-CN/scripts/531685
//    原许可   ：MIT License
//
//  本修改版在原脚本基础上新增 / 调整（详见 README.md）：
//    1. 一键复制当前页全部磁力链（含异步抓取详情页磁力链）
//    2. 累积复制队列：多次复制后一次性粘贴全部（多条以换行分隔）
//    3. qBittorrent WebUI API 推送：单条推送 / 队列批量推送
//    4. 设置面板改为两级菜单分类（按钮显示 / qBittorrent / 115 网盘 / 磁力链获取 / 站点开关）
//    5. 左下角 4 个悬浮按钮统一支持拖动与位置记忆（可在设置中开关）
//
//  原脚本版权归原作者所有，本修改版同样以 MIT License 分发。
// ============================================================================

(function() {
    'use strict';

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const CONFIG = {
        notificationTimeout: isMobile ? 5000 : 3000,
        cookieRefreshInterval: 30 * 60 * 1000,
        retryDelay: 2000,
        maxRetries: 3,
        defaultTimeout: 8000,
        enableCopyButton: GM_getValue('enableCopyButton', true),
        enableOfflineButton: GM_getValue('enableOfflineButton', true),
        enableOpenButton: GM_getValue('enableOpenButton', true),
        enableQBButton: GM_getValue('enableQBButton', true),
        autoFetchEnabled: GM_getValue('autoFetchEnabled', true),
        autoFetchSites: {
            bt4g: GM_getValue('autoFetch_bt4g', false),
            seedhub: GM_getValue('autoFetch_seedhub', false),
            yuhuage: GM_getValue('autoFetch_yuhuage', true),
            cilimag: GM_getValue('autoFetch_cilimag', true)
        },
        siteEnabled: {
            bt4g: GM_getValue('site_bt4g', true),
            btdig: GM_getValue('site_btdig', true),
            btsow: GM_getValue('site_btsow', true),
            nyaa: GM_getValue('site_nyaa', true),
            dmhy: GM_getValue('site_dmhy', true),
            seedhub: GM_getValue('site_seedhub', true),
            longwangbt: GM_getValue('site_longwangbt', true),
            yuhuage: GM_getValue('site_yuhuage', true),
            sobt: GM_getValue('site_sobt', true),
            clb: GM_getValue('site_clb', true),
            btmulu: GM_getValue('site_btmulu', true),
            cili_family: GM_getValue('site_cili_family', true),
            gying_family: GM_getValue('site_gying_family', true),
            cilidi: GM_getValue('site_cilidi', true),
            exhentai: GM_getValue('site_exhentai', true)
        },
        enableFloatingSettingsBtn: GM_getValue('enableFloatingSettingsBtn', true),
        enableFloatingDrag: GM_getValue('enableFloatingDrag', true)
    };


  const DEFAULT_BUTTONS_ORDER = ['copy', 'offline', 'qb', 'open'];
  function getButtonsOrder() {
      try {
          const saved = GM_getValue('buttonsOrder');
          const allow = new Set(DEFAULT_BUTTONS_ORDER);
          let arr = null;
          if (Array.isArray(saved)) {
              arr = saved.filter(x => allow.has(x));
          } else if (typeof saved === 'string') {
              const parts = saved.split(/[|,\s]+/).filter(Boolean);
              arr = parts.filter(x => allow.has(x));
          }
          if (!arr || !arr.length) return DEFAULT_BUTTONS_ORDER.slice();
          // 补齐新增的按钮类型，保证脚本升级后新按钮也能显示
          DEFAULT_BUTTONS_ORDER.forEach(t => { if (!arr.includes(t)) arr.push(t); });
          return arr;
      } catch (_) {}
      return DEFAULT_BUTTONS_ORDER.slice();
  }
  function setButtonsOrder(order) {
      try { GM_setValue('buttonsOrder', Array.isArray(order) ? order : DEFAULT_BUTTONS_ORDER); } catch (_) {}
  }

    const SITES_LINKS = {
        bt4g: {
            sites: [
                { url: 'https://bt4gprx.com' }
            ]
        },
        btdig: {
            sites: [
                { url: 'https://btdig.com' }
            ]
        },
        btsow: {
            sites: [
                { url: 'https://btsow.com' }
            ]
        },
        nyaa: {
            sites: [
                { url: 'https://nyaa.si' }
            ]
        },
        dmhy: {
            sites: [
                { url: 'https://dmhy.org' }
            ]
        },
        gying_family: {
            sites: [
                { url: 'www.xn--wcv59z.com' },
                { url: 'www.xn--74qz10cqsltibh40akss.com' },
                { url: 'www.xn--10vr61a3xc5x3b.com' },
                { url: 'www.xn--kivn76b41nnhi.com' }
            ]
        },
        seedhub: {
            sites: [
                { url: 'https://www.seedhub.cc' },
                { url: 'https://www.seedhub.top' },
                { url: 'https://www.seedhub.icu' },
                { url: 'https://seedhub.pro', note: '移动可能不通' }
            ],
            publish: [
                { url: 'https://workflowy.com/s/ff4ac3a19545/tEvTraNzl9fk1fJA' }
            ]
        },
        longwangbt: {
            sites: [
                { url: 'http://www.longwangbt.com' }
            ]
        },
        yuhuage: {
            sites: [
                { url: 'https://www.yuhuage.cc' }
            ]
        },
        sobt: {
            sites: [
                { url: 'https://sobt.me' }
            ]
        },
        clb: {
            sites: [
                { url: 'https://clb.im' },
                { url: 'https://cilibao.app' },
                { url: 'https://cilibao.top' }
            ]
        },
        btmulu: {
            publish: [
                { url: 'https://cursor.vip/btmulu' }
            ]
        },
        cili_family: {
            publish: [
                { url: 'https://CiLi.st' },
                { url: 'https://cili404.com' }
            ]
        },
        cilidi: {
            sites: [
            ],
            publish: [
                { url: 'https://cilidi.cyou' },
                { url: 'https://cldcld.cyou' },
                { url: 'https://cldcld.top' },
                { url: 'https://cldcld.com' }
            ]
        },
        exhentai: {
            sites: [
                { url: 'https://exhentai.org' },
                { url: 'https://e-hentai.org', note: '表站，结构相同' }
            ]
        }
    };
    const processedElements = new WeakSet();
    function processElements(selector, processor, dataAttribute = 'buttonsAdded') {
        document.querySelectorAll(selector).forEach(element => {
            if (processedElements.has(element) || element.dataset[dataAttribute]) return;

            const result = processor(element);
            if (result !== false) {
                processedElements.add(element);
                element.dataset[dataAttribute] = 'true';
            }
        });
    }

    function handleCiLiDiSite() {
        document.querySelectorAll('.ssbox .sbar').forEach(sbar => {
            if (sbar.dataset.buttonsAdded) return;
            const magnetA = sbar.querySelector('a[href^="magnet:"]');
            if (!magnetA) return;

            const btnContainer = createButtonContainer({ marginRight: '6px' });
            const combinedBtn = createCombinedButtons(magnetA.href);
            btnContainer.appendChild(combinedBtn);

            const firstSpan = sbar.querySelector('span');
            if (firstSpan) {
                sbar.insertBefore(btnContainer, firstSpan);
            } else {
                sbar.insertBefore(btnContainer, sbar.firstChild);
            }
            sbar.dataset.buttonsAdded = true;
        });

        (() => {
            const ssboxes = Array.from(document.querySelectorAll('.tbox .ssbox, .ssbox'));
            if (!ssboxes.length) return;

            const target = ssboxes.find(box => box.querySelector('.content a[href^="magnet:"]'));
            if (!target) return;

            const h3 = target.querySelector('.title h3');
            if (!h3 || h3.dataset.buttonsAdded) return;

            const magnetA = target.querySelector('.content a[href^="magnet:"]');
            if (!magnetA) return;

            const btnContainer = createButtonContainer({ marginLeft: '8px' });
            const combinedBtn = createCombinedButtons(magnetA.href);
            btnContainer.appendChild(combinedBtn);
            h3.appendChild(btnContainer);
            h3.dataset.buttonsAdded = true;
        })();
    }

    function isAutoFetchEnabledFor(siteKey) {
        try {
            return !!(CONFIG.autoFetchEnabled && CONFIG.autoFetchSites && CONFIG.autoFetchSites[siteKey]);
        } catch (_) {
            return false;
        }
    }

    async function retryOperation(operation, maxRetries = CONFIG.maxRetries, onRetry = null) {
        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                return await operation(attempt);
            } catch (error) {
                console.error(`Operation failed (attempt ${attempt + 1}/${maxRetries + 1}):`, error);

                if (attempt === maxRetries) {
                    throw error;
                }

                if (onRetry) {
                    onRetry(attempt, maxRetries);
                }

                await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay * (attempt + 1)));
            }
        }
    }

    function setupRetryButton(button, retryFunction) {
        setButtonError(button, '获取失败，点击重试');
        button.style.cursor = 'pointer';
        button.addEventListener('click', () => {
            button.textContent = '重新获取中...';
            button.style.color = '#666';
            button.style.cursor = 'default';
            retryFunction().then(success => {
                if (!success) setButtonError(button, '获取失败');
            }).catch(error => {
                console.error('重试失败:', error);
                setButtonError(button, '重试失败');
            });
        });
    }

    const ERROR_CODES = {
        10008: '任务已存在，无需重复添加',
        911: '需要账号验证，请确保已登录115会员账号',
        990: '任务包含违规内容，无法添加',
        991: '服务器繁忙，请稍后再试',
        992: '离线下载配额已用完',
        993: '当前账号无权使用离线下载功能',
        994: '文件大小超过限制',
        995: '不支持的链接类型',
        996: '网络错误，请检查连接',
        997: '服务器内部错误',
        998: '请求超时',
        999: '未知错误'
    };

    function initializeScript() {
        addMenuCommands();
        setupMutationObserver();
        addActionButtons();
        ensureModalStyles();
        ensureFloatingSettingsButton();
        ensureFloatingCopyAllButton();
        ensureFloatingQueueButton();
        ensureFloatingQBButton();
    }

    function addMenuCommands() {
        const menuCommands = [
            {
                name: "打开设置面板",
                handler: () => openSettingsPanel()
            },
            {
                name: "检查115登录状态",
                handler: async () => {
                    try {
                        const isLoggedIn = await check115Login(true);
                        showNotification('115状态', isLoggedIn ? '已登录' : '未登录');

                        if (!isLoggedIn) {
                            setTimeout(() => {
                                if (confirm('需要登录115网盘，是否进入115网盘登录页面？')) {
                                    window.open("https://115.com/?mode=login", "_blank");
                                }
                            }, 500);
                        }
                    } catch (error) {
                        showNotification('检查失败', error.message);
                    }
                }
            },
            {
                name: "打开115网盘",
                handler: () => window.open("https://115.com/?cid=0&offset=0&mode=wangpan", "_blank")
            },
            {
                name: "复制当前页全部磁力链",
                handler: () => copyAllMagnets()
            },
            {
                name: "复制累积队列全部磁力链",
                handler: () => copyMagnetQueueToClipboard()
            },
            {
                name: "清空累积队列",
                handler: () => {
                    const count = getMagnetQueue().length;
                    clearMagnetQueue();
                    updateQueueBadge();
                    showNotification('队列已清空', count ? `已清空 ${count} 条磁力链` : '队列本来就是空的');
                }
            },
            {
                name: "推送累积队列到 qBittorrent",
                handler: () => pushMagnetQueueToQB()
            },
            {
                name: "推送本页全部 torrent 到 qBittorrent（ExHentai）",
                handler: () => exhPushAllTorrentsOnPage()
            },
            {
                name: "测试 qBittorrent 连接",
                handler: () => qbTestConnection()
            }
        ];

        menuCommands.forEach(({ name, handler }) => {
            GM_registerMenuCommand(name, handler);
        });
    }

    async function checkCookieRefresh() {
        try {
            await check115Login(true);
        } catch (error) {
            console.error('检查cookie刷新失败:', error);
        }
    }

    function setupMutationObserver() {
        let timeoutId;
        const observer = new MutationObserver(() => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                addActionButtons();
                ensureFloatingSettingsButton();
                ensureFloatingCopyAllButton();
                ensureFloatingQueueButton();
                ensureFloatingQBButton();
            }, 100);
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });

        return observer;
    }

    function addActionButtons() {
        const hostname = window.location.hostname;

        const siteHandlers = {
            'bt4gprx.com': handleBT4GSite,
            'btdig.com': handleBTDigSite,
            'nyaa.si': handleNyaaSite,
            'dmhy.org': handleDMHYSite,
            'seedhub': handleSeedhubSite
        };

        const patternHandlers = [
            { key: 'exhentai', pattern: /(^|\.)(exhentai|e-hentai)\.org$/, handler: handleExHentaiSite },
            { key: 'sobt', pattern: /sobt[^.]+\..+/, handler: handleSOBTSite },
            { key: 'clb', pattern: /clb[^.]+\..+/, handler: handleSOBTSite },
            { key: 'btsow', pattern: /(\.|^)btsow\./, handler: handleBtsowSite },
            { key: 'btmulu', pattern: /\.btmulu\./, handler: handleBTMULUSite },
            { key: 'cili_family', pattern: /cili|mag|wuji/, handler: handleCiliMagSite },
            { key: 'gying_family', pattern: /(xn--wcv59z|xn--74qz10cqsltibh40akss|xn--10vr61a3xc5x3b|xn--kivn76b41nnhi)\..+/, handler: handleGyingGygSite },
            { key: 'yuhuage', pattern: /yuhuage\..+/, handler: handleYuhuageSite },
            { key: 'longwangbt', pattern: /longwangbt\..+/, handler: handleLongwangbtSite },
            { key: 'cilidi', pattern: /1122|cld130/, handler: handleCiLiDiSite }
        ];

        const domainKeyMap = {
            'bt4gprx.com': 'bt4g',
            'btdig.com': 'btdig',
            'nyaa.si': 'nyaa',
            'dmhy.org': 'dmhy',
            'seedhub': 'seedhub'
        };
        for (const [domain, handler] of Object.entries(siteHandlers)) {
            if (hostname.includes(domain)) {
                const key = domainKeyMap[domain];
                if (!key || CONFIG.siteEnabled[key]) {
                    handler();
                }
                return;
            }
        }

        for (const { key, pattern, handler } of patternHandlers) {
            if (pattern.test(hostname)) {
                if (!key || CONFIG.siteEnabled[key]) {
                    handler();
                }
                return;
            }
        }
    }


    const ICONS = {
        copy: '<svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#000"/><g transform="scale(0.8) translate(3,3)"><path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6466 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.479 3.53087C19.5519 2.60383 18.2978 2.07799 16.9869 2.0666C15.6759 2.0552 14.4129 2.55916 13.47 3.46997L11.75 5.17997" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11C13.5705 10.4259 13.0226 9.9508 12.3934 9.60705C11.7642 9.26329 11.0684 9.05889 10.3533 9.00766C9.63816 8.95643 8.92037 9.05963 8.24861 9.3102C7.57685 9.56077 6.96684 9.95296 6.45996 10.46L3.45996 13.46C2.54915 14.403 2.04518 15.666 2.05659 16.977C2.068 18.288 2.59383 19.542 3.52087 20.4691C4.44791 21.3961 5.70198 21.922 7.01296 21.9334C8.32394 21.9448 9.58695 21.4408 10.53 20.53L12.24 18.82" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
        offline: '<img src="data:image/x-icon;base64,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" style="width:15px;height:15px;">',
        open: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#2563EB" stroke-width="2"/><path d="M3 12H21M12 3C14.501 6.738 15.922 10.592 16 12C15.922 13.408 14.501 17.262 12 21C9.499 17.262 8.078 13.408 8 12C8.078 10.592 9.499 6.738 12 3Z" stroke="#3B82F6" stroke-width="1.5"/></svg>',
        qb: '<svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#2F67AF"/><g transform="scale(0.6) translate(8,8)"><path d="M12 3v10m0 0l-4.2-4.2M12 13l4.2-4.2" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 18h14" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></g></svg>'
    };


    function createButtonContainer(options = {}) {
        const btnContainer = document.createElement(options.elementType || 'span');
        btnContainer.className = 'magnet-action-buttons';

        btnContainer.style.cssText = `
            display: inline-block;
            margin-right: ${options.marginRight || '5px'};
            margin-left: ${options.marginLeft || '0'};
            vertical-align: ${options.verticalAlign || 'middle'}
        `;

        if (options.customStyles) {
            Object.assign(btnContainer.style, options.customStyles);
        }

        return btnContainer;
    }

    async function fetchWithRetry(url, options = {}, maxRetries = CONFIG.maxRetries) {
        const normalizedUrl = /^https?:/.test(url) ? url : new URL(url, location.origin).href;

        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetch(normalizedUrl, {
                    credentials: 'omit',
                    ...options
                });

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                return await response.text();
            } catch (error) {
                console.error(`Fetch attempt ${attempt + 1}/${maxRetries + 1} failed for ${normalizedUrl}:`, error);

                if (attempt === maxRetries) {
                    throw error;
                }

                await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay * (attempt + 1)));
            }
        }
    }

    function createCombinedButtons(magnetLinkOrElement) {
        const combinedBtn = document.createElement('button');
        combinedBtn.className = 'magnet-combined-button';
        combinedBtn.style.display = 'inline-flex';
        combinedBtn.style.alignItems = 'center';
        combinedBtn.style.justifyContent = 'center';
        combinedBtn.style.backgroundColor = 'transparent';
        combinedBtn.style.border = '1px solid rgba(0,0,0,0.14)';
        combinedBtn.style.borderRadius = '3px';
        combinedBtn.style.padding = '2px';
        combinedBtn.style.fontSize = '12px';
        combinedBtn.style.cursor = 'pointer';
        combinedBtn.style.transition = 'all 0.15s ease-in-out';
        combinedBtn.style.userSelect = 'none';
        combinedBtn.style.boxSizing = 'border-box';
        combinedBtn.style.height = '26px';

        const titles = { copy: '复制磁力链', offline: '推送到115离线', open: '打开磁力链', qb: '推送到qBittorrent' };

        const createButtonPart = (type, icon) => {
            const part = document.createElement('span');
            part.className = `magnet-button-part ${type}-part`;
            part.style.cssText = 'padding:0 6px;color:#333;transition:all 0.15s ease-in-out;display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:22px;';
            part.innerHTML = icon;
            part.dataset.type = type;
            part.title = titles[type] || '操作';
            return part;
        };

        const order = getButtonsOrder();
        const buttonParts = [];
        for (const type of order) {
            if (type === 'copy' && CONFIG.enableCopyButton) buttonParts.push(createButtonPart('copy', ICONS.copy));
            if (type === 'offline' && CONFIG.enableOfflineButton) buttonParts.push(createButtonPart('offline', ICONS.offline));
            if (type === 'open' && CONFIG.enableOpenButton) buttonParts.push(createButtonPart('open', ICONS.open));
            if (type === 'qb' && CONFIG.enableQBButton) buttonParts.push(createButtonPart('qb', ICONS.qb));
        }

        if (buttonParts.length > 0) {
            if (buttonParts.length === 1) {
                buttonParts[0].style.borderRadius = '2px';
            } else {
                buttonParts[0].style.borderRadius = '2px 0 0 2px';
            }
            combinedBtn.appendChild(buttonParts[0]);

            for (let i = 1; i < buttonParts.length; i++) {
                const sep = document.createElement('span');
                sep.style.cssText = 'padding: 0 2px; color: #999;';
                sep.innerText = '|';
                combinedBtn.appendChild(sep);

                if (i === buttonParts.length - 1) {
                    buttonParts[i].style.borderRadius = '0 2px 2px 0';
                } else {
                    buttonParts[i].style.borderRadius = '0';
                }
                combinedBtn.appendChild(buttonParts[i]);
            }
        }

        const resolveMagnet = async () => {
            try {
                if (typeof magnetLinkOrElement === 'function') {
                    const res = await magnetLinkOrElement();
                    if (typeof res === 'string' && res.startsWith('magnet:')) return res;
                }
                if (typeof magnetLinkOrElement === 'string' && magnetLinkOrElement.startsWith('magnet:')) {
                    return magnetLinkOrElement;
                }
                const el = magnetLinkOrElement;
                if (el && el.nodeType === 1) {
                    const a1 = el.closest('a[href^="magnet:"]') || el.querySelector?.('a[href^="magnet:"]');
                    if (a1?.href?.startsWith('magnet:')) return a1.href;

                    {
                        const linkEl = el.closest('a') || (el.tagName === 'A' ? el : null);
                        const href = linkEl?.href || el.getAttribute?.('href') || '';
                        const m = href.match(/\/(?:torrent|detail)\/([a-f0-9]+)\.html(?:$|\?)/i);
                        if (m && m[1]) {
                            const name = (linkEl?.textContent || el.textContent || '').trim();
                            let magnet = `magnet:?xt=urn:btih:${m[1]}`;
                            if (name) magnet += `&dn=${encodeURIComponent(name)}`;
                            return magnet;
                        }
                        if (/\/magnet\//.test(href)) {
                            if (typeof fetchBT4GMagnetFromDetail === 'function') {
                                const mg = await fetchBT4GMagnetFromDetail(href);
                                if (mg) return mg;
                            }
                        }
                    }
                    const a2 = el.closest('a[href*="downloadtorrentfile.com/hash/"]') || el.querySelector?.('a[href*="downloadtorrentfile.com/hash/"]');
                    if (a2?.href) {
                        const m = a2.href.match(/hash\/([a-f0-9]{40})/i);
                        if (m) {
                            const nameMatch = a2.href.match(/[?&]name=([^&]+)/i);
                            let magnet = `magnet:?xt=urn:btih:${m[1]}`;
                            if (nameMatch?.[1]) magnet += `&dn=${nameMatch[1]}`;
                            return magnet;
                        }
                    }
                    if (/bt4g/.test(location.hostname) && el.closest('a')?.href) {
                        const href = el.closest('a').href;
                        if (typeof fetchBT4GMagnetFromDetail === 'function') {
                            const mg = await fetchBT4GMagnetFromDetail(href);
                            if (mg) return mg;
                        }
                    }
                }
            } catch (e) {
                console.warn('解析磁力失败', e);
            }
            return null;
        };
        combinedBtn.addEventListener('click', async (ev) => {
            const part = ev.target.closest?.('.magnet-button-part');
            if (!part) return;
            ev.preventDefault();
            ev.stopPropagation();
            const type = part.dataset.type;
            const magnetLink = await resolveMagnet();
            if (!magnetLink) {
                showNotification('未获取到磁力链', '请稍后重试或手动打开详情页');
                return;
            }
            if (type === 'copy') {
                await handleCopyAction(combinedBtn, magnetLink);
            } else if (type === 'offline') {
                await handleOfflineAction(combinedBtn, magnetLink);
            } else if (type === 'qb') {
                await handleQBAction(combinedBtn, magnetLink);
            } else if (type === 'open') {
                window.open(magnetLink, '_blank');
                showButtonFeedback(combinedBtn, 'open');
            }
        });

        return combinedBtn;
    }


    function applyButtonsOrderToExisting() {
        const order = getButtonsOrder();
        document.querySelectorAll('.magnet-combined-button').forEach(btn => {
            const partsMap = new Map();
            btn.querySelectorAll('.magnet-button-part').forEach(p => {
                const t = p.dataset.type;
                if (t) partsMap.set(t, p);
            });
            const existing = order.map(t => partsMap.get(t)).filter(Boolean);
            if (!existing.length) return;
            while (btn.firstChild) btn.removeChild(btn.firstChild);
            existing.forEach((part, idx) => {
                part.style.borderRadius = idx === 0 && existing.length === 1 ? '2px' : (idx === 0 ? '2px 0 0 2px' : (idx === existing.length - 1 ? '0 2px 2px 0' : '0'));
                if (idx > 0) {
                    const sep = document.createElement('span');
                    sep.style.cssText = 'padding: 0 2px; color: #999;';
                    sep.innerText = '|';
                    btn.appendChild(sep);
                }
                btn.appendChild(part);
            });
        });
    }


    async function handleCopyAction(btn, magnetLink) {
        try {
            let decodedMagnetLink = magnetLink;
            try {
                decodedMagnetLink = decodeURIComponent(magnetLink);
            } catch (e) {}

            GM_setClipboard(decodedMagnetLink, 'text');

            if (isMobile && navigator.clipboard?.writeText) {
                try {
                    await navigator.clipboard.writeText(decodedMagnetLink);
                } catch (clipboardError) {
                    console.log('使用navigator.clipboard失败:', clipboardError);
                }
            }

            // 同时追加到累积队列（跨页面持久），便于最后一次性粘贴全部磁力链
            const queueCount = pushToMagnetQueue(decodedMagnetLink);
            updateQueueBadge();

            showNotification(`已复制并加入队列（共${queueCount}条）`, decodedMagnetLink);
            showButtonFeedback(btn, 'copy');
        } catch (error) {
            showNotification('复制失败', `请手动复制: ${magnetLink}`);
        }
    }

    const SUCCESS_FEEDBACK_SVG = '<svg width="15" height="15" viewBox="0 0 14 14" style="display:inline-flex;align-items:center;justify-content:center;"><circle cx="7" cy="7" r="7" fill="#4caf50"/><polyline points="4,7 6,9 10,5" fill="none" stroke="#fff" stroke-width="1.5"/></svg>';

    function showButtonFeedback(btn, type = null) {
        const clickedPart = btn.classList.contains('magnet-combined-button')
            ? btn.querySelector(type ? `.magnet-button-part[data-type="${type}"]` : '.magnet-button-part')
            : btn;

        if (!clickedPart) return;

        const originalContent = clickedPart.innerHTML;
        clickedPart.style.cssText += 'min-height:22px;display:inline-flex;align-items:center;justify-content:center;';
        clickedPart.innerHTML = SUCCESS_FEEDBACK_SVG;
        btn.disabled = true;

        setTimeout(() => {
            clickedPart.innerHTML = originalContent;
            btn.disabled = false;
        }, 2000);
    }

    async function handleOfflineAction(btn, magnetLink) {
        await process115Offline(magnetLink);
        showButtonFeedback(btn, 'offline');
    }

    // ============ qBittorrent 推送（WebUI API v2） ============
    function qbGetConfig() {
        let url = '';
        try { url = String(GM_getValue('qbUrl', 'http://127.0.0.1:8080') || '').trim(); } catch (_) {}
        url = url.replace(/\/+$/, '');
        if (url && !/^https?:\/\//i.test(url)) url = 'http://' + url;
        let username = '', password = '', savePath = '', category = '', tags = '', paused = false;
        try {
            username = String(GM_getValue('qbUsername', '') || '').trim();
            password = String(GM_getValue('qbPassword', '') || '');
            savePath = String(GM_getValue('qbSavePath', '') || '').trim();
            category = String(GM_getValue('qbCategory', '') || '').trim();
            tags = String(GM_getValue('qbTags', '') || '').trim();
            paused = !!GM_getValue('qbPaused', false);
        } catch (_) {}
        return { url, username, password, savePath, category, tags, paused };
    }

    function qbExtractSid(responseHeaders) {
        if (!responseHeaders) return null;
        const m = String(responseHeaders).match(/set-cookie:\s*SID=([^;\s]+)/i);
        return m ? m[1] : null;
    }

    function qbRequest(opts) {
        return new Promise((resolve, reject) => {
            try {
                GM_xmlhttpRequest({
                    url: opts.url,
                    method: opts.method || 'POST',
                    data: opts.data,
                    headers: opts.headers || {},
                    timeout: opts.timeout || 15000,
                    anonymous: false,
                    onload: (res) => resolve(res),
                    onerror: () => reject(new Error('无法连接，请检查 qBittorrent 地址与端口')),
                    ontimeout: () => reject(new Error('请求超时，请确认 qBittorrent 正在运行'))
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    async function qbLogin(cfg) {
        // 未填写账号密码时跳过登录（依赖 qB 的“对本机免密”或浏览器已有会话）
        if (!cfg.username && !cfg.password) return null;
        const res = await qbRequest({
            url: cfg.url + '/api/v2/auth/login',
            method: 'POST',
            data: `username=${encodeURIComponent(cfg.username)}&password=${encodeURIComponent(cfg.password)}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': cfg.url + '/'
            }
        });
        const text = (res.responseText || '').trim();
        if (text === 'Ok.') return qbExtractSid(res.responseHeaders);
        if (text === 'Fails.') throw new Error('qB 登录失败：用户名或密码错误（连续失败会被临时封禁，请稍后再试）');
        if (res.status === 403) throw new Error('qB 登录被拒绝（403）：该 IP 可能已被临时封禁，请稍后再试');
        throw new Error('qB 登录异常：' + (text || ('HTTP ' + res.status)).slice(0, 100));
    }

    async function qbAddTorrents(magnets) {
        const list = (Array.isArray(magnets) ? magnets : [magnets])
            .map(m => (typeof m === 'string' ? m.trim() : ''))
            .filter(Boolean);
        if (!list.length) throw new Error('没有可推送的磁力链');

        const cfg = qbGetConfig();
        if (!cfg.url) throw new Error('请先在设置面板中配置 qBittorrent 地址');

        const sid = await qbLogin(cfg);

        const params = new URLSearchParams();
        params.set('urls', list.join('\n'));
        if (cfg.savePath) params.set('savepath', cfg.savePath);
        if (cfg.category) params.set('category', cfg.category);
        if (cfg.tags) params.set('tags', cfg.tags);
        if (cfg.paused) params.set('paused', 'true');

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Referer': cfg.url + '/'
        };
        if (sid) headers['Cookie'] = 'SID=' + sid;

        const res = await qbRequest({
            url: cfg.url + '/api/v2/torrents/add',
            method: 'POST',
            data: params.toString(),
            headers
        });

        if (res.status === 200) return list.length;
        if (res.status === 401) throw new Error('未授权（401）：请在设置中填写正确的用户名与密码');
        if (res.status === 403) throw new Error('被拒绝（403）：请检查用户名/密码，或该 IP 已被 qB 临时封禁');
        if (res.status === 415) throw new Error('磁力链无效（415）：qBittorrent 拒绝了该链接');
        if (res.status === 404) throw new Error('接口不存在（404）：请确认地址指向 qBittorrent WebUI 根路径');
        throw new Error(`推送失败（HTTP ${res.status}）`);
    }

    // ============ ExHentai / E-Hentai：.torrent 种子推送到 qBittorrent ============
    // 站点不提供磁力链，只提供种子文件：
    //   https://exhentai.org/torrent/{gid}/{hash}/{infohash}.torrent
    // qBittorrent 若在局域网内未必能直连站点，因此统一走
    // 「浏览器侧取到 .torrent 字节 → multipart 上传给 qB」的链路。
    const EXH_LINK_RE = /\/torrent\/[^?#\s"'<>]+\.torrent(?:[?#]|$)/i;
    const EXH_HOST_RE = /(^|\.)(exhentai\.org|e-hentai\.org)$/i;

    function exhIsTorrentLink(href) {
        return !!href && EXH_LINK_RE.test(String(href));
    }

    function exhSleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function exhFetchBinary(url, timeout = 25000) {
        return new Promise((resolve, reject) => {
            try {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url,
                    responseType: 'arraybuffer',
                    timeout,
                    anonymous: false,
                    onload: (res) => {
                        if (res.status >= 200 && res.status < 300 && res.response) resolve(res.response);
                        else reject(new Error(`获取 torrent 失败：HTTP ${res.status}`));
                    },
                    onerror: () => reject(new Error('获取 torrent 失败：网络错误（站点可能需要代理）')),
                    ontimeout: () => reject(new Error('获取 torrent 超时')),
                    onabort: () => reject(new Error('获取 torrent 被中止'))
                });
            } catch (e) { reject(e); }
        });
    }

    function exhFetchText(url, timeout = 25000) {
        return new Promise((resolve, reject) => {
            try {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url,
                    timeout,
                    anonymous: false,
                    onload: (res) => {
                        if (res.status >= 200 && res.status < 300) resolve(res.responseText || '');
                        else reject(new Error(`读取页面失败：HTTP ${res.status}`));
                    },
                    onerror: () => reject(new Error('读取页面失败：网络错误')),
                    ontimeout: () => reject(new Error('读取页面超时'))
                });
            } catch (e) { reject(e); }
        });
    }

    // 从 gallerytorrents.php 等页面的 HTML 中提取 .torrent 链接
    function exhParseTorrents(html) {
        const list = [];
        try {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            doc.querySelectorAll('a[href]').forEach(a => {
                const raw = a.getAttribute('href') || '';
                if (!raw) return;
                let abs;
                try { abs = new URL(raw, location.href).href; } catch (_) { return; }
                if (!exhIsTorrentLink(abs)) return;
                if (list.some(x => x.url === abs)) return;
                list.push({ url: abs, name: (a.textContent || '').trim() });
            });
        } catch (e) {
            console.warn('[ExHentai] 解析 torrent 链接失败', e);
        }
        return list;
    }

    function exhCollectPageTorrents() {
        const list = [];
        document.querySelectorAll('a[href]').forEach(a => {
            const href = a.href || '';
            if (!exhIsTorrentLink(href)) return;
            if (list.some(x => x.url === href)) return;
            list.push({ url: href, name: (a.textContent || '').trim() });
        });
        return list;
    }

    // 手工构造 multipart 作为兜底，规避个别脚本管理器对 FormData 透传异常
    function exhBuildMultipart(fields, fileName, fileBuffer) {
        const boundary = '----qBExh' + Date.now().toString(16) + Math.random().toString(16).slice(2, 10);
        const encoder = new TextEncoder();
        const chunks = [];
        Object.keys(fields).forEach(key => {
            const value = fields[key];
            if (value === undefined || value === null || value === '') return;
            chunks.push(encoder.encode(
                `--${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${value}\r\n`
            ));
        });
        chunks.push(encoder.encode(
            `--${boundary}\r\nContent-Disposition: form-data; name="torrents"; filename="${fileName}"\r\n` +
            `Content-Type: application/x-bittorrent\r\n\r\n`
        ));
        chunks.push(new Uint8Array(fileBuffer));
        chunks.push(encoder.encode(`\r\n--${boundary}--\r\n`));

        const total = chunks.reduce((sum, c) => sum + c.length, 0);
        const merged = new Uint8Array(total);
        let offset = 0;
        for (const c of chunks) { merged.set(c, offset); offset += c.length; }

        return {
            body: merged,
            contentType: `multipart/form-data; boundary=${boundary}`
        };
    }

    async function qbAddTorrentFiles(items) {
        const list = (Array.isArray(items) ? items : [items]).filter(x => x && x.url);
        if (!list.length) throw new Error('没有可推送的 torrent');

        const cfg = qbGetConfig();
        if (!cfg.url) throw new Error('请先在设置面板中配置 qBittorrent 地址');

        const sid = await qbLogin(cfg);
        const result = { ok: 0, failed: [] };

        for (const item of list) {
            const label = item.name || 'torrent';
            try {
                const buffer = await exhFetchBinary(item.url);

                const tail = String(item.url).split('/').pop() || 'upload.torrent';
                const safeName = tail.replace(/[^A-Za-z0-9._-]/g, '') || 'upload';
                const fileName = /\.torrent$/i.test(safeName) ? safeName : safeName + '.torrent';

                const fields = { savepath: cfg.savePath, category: cfg.category, tags: cfg.tags };
                if (cfg.paused) { fields.paused = 'true'; fields.stopped = 'true'; }

                const headers = { 'Referer': cfg.url + '/' };
                if (sid) headers['Cookie'] = 'SID=' + sid;

                const form = new FormData();
                form.append('torrents', new Blob([buffer], { type: 'application/x-bittorrent' }), fileName);
                Object.keys(fields).forEach(k => {
                    const v = fields[k];
                    if (v !== undefined && v !== null && v !== '') form.append(k, v);
                });

                let res = await qbRequest({
                    url: cfg.url + '/api/v2/torrents/add',
                    method: 'POST',
                    data: form,
                    headers,
                    timeout: 30000
                });

                // 兜底：FormData 未被正确处理时改用手工 multipart 重试一次
                if (res.status === 400 || res.status === 415) {
                    const mp = exhBuildMultipart(fields, fileName, buffer);
                    res = await qbRequest({
                        url: cfg.url + '/api/v2/torrents/add',
                        method: 'POST',
                        data: new Blob([mp.body], { type: mp.contentType }),
                        headers: Object.assign({}, headers, { 'Content-Type': mp.contentType }),
                        timeout: 30000
                    });
                }

                if (res.status === 200 || res.status === 202) {
                    result.ok++;
                } else if (res.status === 401) {
                    result.failed.push(`${label}：未授权 401（请检查用户名与密码）`);
                } else if (res.status === 403) {
                    result.failed.push(`${label}：被拒绝 403（IP 可能被临时封禁）`);
                } else if (res.status === 415) {
                    result.failed.push(`${label}：种子被拒绝 415`);
                } else {
                    result.failed.push(`${label}：HTTP ${res.status}`);
                }
            } catch (e) {
                result.failed.push(`${label}：${e.message}`);
            }
            if (list.length > 1) await exhSleep(150);
        }
        return result;
    }

    // 从条目所在行取画廊标题，仅用于提示文案
    function exhFindGalleryTitle(el) {
        try {
            const row = el.closest('tr');
            if (row) {
                const t = row.querySelector('.glink') || row.querySelector('a[href*="/g/"]');
                if (t && t.textContent.trim()) return t.textContent.trim();
            }
        } catch (_) {}
        return '';
    }

    function exhMakeSmallButton(title, onClick) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'exh-qb-btn';
        btn.title = title;
        btn.innerHTML = ICONS.qb;
        btn.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;margin:0 2px;padding:0;border:none;border-radius:3px;background:rgba(47,103,175,0.12);cursor:pointer;vertical-align:middle;opacity:.9;transition:background .15s ease;';
        btn.addEventListener('mouseenter', () => { btn.style.background = 'rgba(47,103,175,0.28)'; });
        btn.addEventListener('mouseleave', () => { btn.style.background = 'rgba(47,103,175,0.12)'; });
        btn.addEventListener('click', async (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            if (btn.dataset.busy === '1') return;
            btn.dataset.busy = '1';
            btn.style.opacity = '.45';
            try {
                await onClick(btn);
            } catch (e) {
                showNotification('操作失败', e.message);
            } finally {
                btn.dataset.busy = '0';
                btn.style.opacity = '.9';
            }
        });
        return btn;
    }

    function exhHandleTorrentLinks() {
        const anchors = Array.prototype.slice.call(document.querySelectorAll('a[href]'))
            .filter(a => exhIsTorrentLink(a.href || ''));

        anchors.forEach(a => {
            if (a.dataset.exhQbReady === '1') return;
            a.dataset.exhQbReady = '1';
            const title = (a.textContent || '').trim();

            const btn = exhMakeSmallButton(
                '推送到 qBittorrent' + (title ? `：${title}` : ''),
                async () => {
                    const noticeId = 'exh-qb-' + Math.random().toString(36).slice(2);
                    showNotification('qBittorrent', '正在获取种子并推送…', noticeId);
                    const r = await qbAddTorrentFiles([{ url: a.href, name: title }]);
                    if (r.ok) {
                        showNotification('已推送到 qBittorrent', title || '种子已提交', noticeId);
                        showButtonFeedback(btn);
                    } else {
                        showNotification('推送失败', r.failed.join('；'), noticeId);
                    }
                }
            );
            if (a.parentNode) a.parentNode.insertBefore(btn, a.nextSibling);
        });
    }

    function exhHandleGalleryLinks() {
        const links = Array.prototype.slice.call(document.querySelectorAll('a[href*="gallerytorrents.php"]'));

        links.forEach(a => {
            if (a.dataset.exhQbGallery === '1') return;
            a.dataset.exhQbGallery = '1';
            const title = exhFindGalleryTitle(a);

            const btn = exhMakeSmallButton(
                '抓取该画廊的种子并推送 qB' + (title ? `：${title}` : ''),
                async () => {
                    const noticeId = 'exh-gal-' + Math.random().toString(36).slice(2);
                    showNotification('ExHentai', '正在读取种子列表…', noticeId);

                    let list = [];
                    try {
                        const html = await exhFetchText(a.href);
                        list = exhParseTorrents(html);
                    } catch (e) {
                        showNotification('抓取失败', e.message, noticeId);
                        return;
                    }

                    if (!list.length) {
                        showNotification('没有可推送的种子', `${title || '该画廊'} 暂无 torrent`, noticeId);
                        return;
                    }

                    if (list.length > 1 && !confirm(`「${title || '该画廊'}」有 ${list.length} 个 torrent，全部推送到 qBittorrent？`)) {
                        return;
                    }

                    showNotification('qBittorrent', `正在推送 ${list.length} 个种子…`, noticeId);
                    const r = await qbAddTorrentFiles(list);
                    showNotification(
                        r.ok ? '已推送到 qBittorrent' : '推送失败',
                        r.ok
                            ? `成功 ${r.ok}/${list.length}` + (r.failed.length ? `，失败 ${r.failed.length}` : '')
                            : r.failed.join('；'),
                        noticeId
                    );
                }
            );
            if (a.parentNode) a.parentNode.insertBefore(btn, a.nextSibling);
        });
    }

    async function exhPushAllTorrentsOnPage() {
        if (!EXH_HOST_RE.test(location.hostname)) {
            showNotification('ExHentai 专用', '该操作仅在 exhentai.org / e-hentai.org 生效');
            return;
        }

        let list = exhCollectPageTorrents();

        if (!list.length) {
            const galLinks = Array.from(new Set(
                Array.prototype.slice.call(document.querySelectorAll('a[href*="gallerytorrents.php"]'))
                    .map(a => a.href)
            ));

            if (!galLinks.length) {
                showNotification('ExHentai', '当前页面没有种子链接，也没有画廊 torrent 入口');
                return;
            }
            if (!confirm(`当前页面没有直接的 .torrent 链接，是否逐个抓取 ${galLinks.length} 个画廊的种子列表后一起推送？\n\n注意：会连续请求 ${galLinks.length} 次站点，间隔 0.6 秒；请求过密可能触发站点临时限流。`)) return;

            const noticeId = 'exh-scan-' + Date.now();
            for (let i = 0; i < galLinks.length; i++) {
                showNotification('ExHentai', `正在抓取 ${i + 1}/${galLinks.length} 个画廊…`, noticeId);
                try {
                    const html = await exhFetchText(galLinks[i]);
                    exhParseTorrents(html).forEach(t => {
                        if (!list.some(x => x.url === t.url)) list.push(t);
                    });
                } catch (e) {
                    console.warn('[ExHentai] 抓取失败', galLinks[i], e);
                }
                await exhSleep(600);
            }
        }

        if (!list.length) {
            showNotification('ExHentai', '没有抓到任何 torrent');
            return;
        }
        if (!confirm(`共 ${list.length} 个 torrent，全部推送到 qBittorrent？`)) return;

        const noticeId = 'exh-push-' + Date.now();
        showNotification('qBittorrent', `正在推送 ${list.length} 个种子…`, noticeId);
        const r = await qbAddTorrentFiles(list);
        showNotification(
            r.ok ? '批量推送完成' : '批量推送失败',
            `成功 ${r.ok}/${list.length}` +
            (r.failed.length ? `；失败 ${r.failed.length} 个：${r.failed.slice(0, 3).join('；')}` : ''),
            noticeId
        );
    }

    function handleExHentaiSite() {
        try { exhHandleTorrentLinks(); } catch (e) { console.warn('[ExHentai] 注入种子按钮失败', e); }
        try { exhHandleGalleryLinks(); } catch (e) { console.warn('[ExHentai] 注入画廊按钮失败', e); }
    }

    async function qbTestConnection() {
        const cfg = qbGetConfig();
        if (!cfg.url) {
            showNotification('qB 测试失败', '请先填写 qBittorrent 地址');
            return false;
        }
        try {
            const sid = await qbLogin(cfg);
            const headers = { 'Referer': cfg.url + '/' };
            if (sid) headers['Cookie'] = 'SID=' + sid;
            const res = await qbRequest({ url: cfg.url + '/api/v2/app/version', method: 'GET', headers });
            if (res.status === 200) {
                const v = (res.responseText || '').trim();
                showNotification('qB 连接成功', `版本 ${v}${sid ? '（账号登录已通过）' : '（免密或浏览器会话）'}`);
                return true;
            }
            if (res.status === 401 || res.status === 403) {
                showNotification('qB 认证失败', `HTTP ${res.status}：请检查用户名与密码`);
                return false;
            }
            showNotification('qB 连接异常', `HTTP ${res.status}`);
            return false;
        } catch (error) {
            showNotification('qB 连接失败', error.message);
            return false;
        }
    }

    async function handleQBAction(btn, magnetLink) {
        const notificationId = Date.now();
        try {
            showNotification('qBittorrent', '正在推送到 qBittorrent...', notificationId);
            const count = await qbAddTorrents(magnetLink);
            showNotification('已推送到 qBittorrent', `成功提交 ${count} 个任务`);
            showButtonFeedback(btn, 'qb');
        } catch (error) {
            showNotification('qBittorrent 推送失败', error.message);
        }
    }

    function handleBT4GSite() {
        try {
            const searchForm = document.querySelector('form[action="/search"]');
            const searchInput = document.getElementById('search');
            if (searchForm && searchInput && !document.getElementById('bt4g-advanced-filter')) {
                const keywordMaps = {
                    resolution: {
                        'SD': ['480p', '480P', '480i', '480I', '576p', '576P', '576i', '576I', 'SD', 'VCD', 'DVD', 'SDTV'],
                        '720p': ['720p', '720P', 'HD'],
                        '1080p': ['1080p', '1080P', 'HD1080P', 'FHD', 'FullHD', 'Full HD', '1920x1080'],
                        '1080i': ['1080i', '1080I', 'FHD', 'FullHD', 'Full HD', '1920x1080i'],
                        '1440p': ['1440p', '1440P', '2k', '2K', 'QHD', 'QuadHD', 'Quad HD', '2560x1440'],
                        '4K/UHD': ['2160p', '2160P', '4K', '4k', 'UHD', 'UltraHD', '3840x2160', '4096x2160'],
                        '8K': ['4320p', '4320P', '8K', 'FUHD', 'FUHD', '7680x4320']
                    },
                    hdr: {
                        'HDR': ['HDR'],
                        'HDR10': ['HDR10'],
                        'HDR10+': ['HDR10+', 'HDR10Plus'],
                        'HLG': ['HLG'],
                        'HDR Vivid': ['HDR Vivid', 'HDR-Vivid', 'Vivid'],
                        'Dolby Vision': ['DV', 'DoVi', 'DolbyVision', 'Dolby Vision']
                    },
                    codec: {
                        'H264/AVC': ['H264', '264', 'AVC', 'h264', 'MPEG4AVC', 'x264'],
                        'MPEG-2': ['MPEG-2', 'MPEG2', 'H262', 'H.262'],
                        'MPEG-4': ['MPEG-4', 'MPEG4', 'DivX', 'Xvid', 'XviD'],
                        'MPEG-5/EVC': ['MPEG-5', 'MPEG5', 'EVC'],
                        'H265/HEVC': ['H265', '265', 'HEVC', 'x265', 'h265'],
                        'AV1': ['AV1'],
                        'VC-1': ['VC-1', 'VC1'],
                        'VP8': ['VP8'],
                        'VP9': ['VP9']
                    },
                    mediaType: {
                        'BD': ['BD', 'BLURAY', 'BLU', 'RAY', 'BDMV', 'BDREMUX', 'REMUX'],
                        'BDrip/BRrip': ['BDrip', 'BRrip', 'BDRip', 'BRRip', 'BluRayRip'],
                        'WEB-DL': ['WEBDL', 'WEB-DL'],
                        'WEB': ['WEB', 'WEBRIP', 'WEBRip'],
                        'HDTV': ['HDTV', 'TV'],
                        'TS': ['TS', 'TS源'],
                        'DVD': ['DVD', 'DVDRIP', 'DVDRip'],
                        'TC': ['TC', '枪版', '抢版']
                    },
                    audio: {
                        '杜比': ['Dolby', 'DolbyDigital', 'DD'],
                        '杜比全景声': ['Atmos', 'DolbyAtmos'],
                        'Dolby Digital Plus': ['DD+', 'DDP', 'E-AC-3', 'EAC3', 'DolbyDigitalPlus', 'Dolby Digital Plus'],
                        'DTS': ['DTS', 'DTSHD', 'DTSHDMA', 'DTSX'],
                        'TrueHD': ['TrueHD', 'TRUEHD', 'TrueHD2', 'TrueHD.2', 'TrueHD.2.0', 'TrueHD5', 'TrueHD.5.1', 'TrueHD.5.1','TrueHD7', 'TrueHD.7', 'TrueHD.7.1'],
                        '通用': ['AAC', 'AC3', 'AC-3', 'MP3', 'LPCM', 'PCM', 'FLAC', 'Opus', 'OPUS']
                    }
                };

                const isDarkMode = document.body.classList.contains('dark-mode') ||
                    document.documentElement.classList.contains('dark') ||
                    document.documentElement.getAttribute('data-bs-theme') === 'dark';

                const submitBtn = searchForm.querySelector('button[type="submit"], input[type="submit"]');
                const filterBtn = document.createElement('button');
                filterBtn.type = 'button';
                filterBtn.textContent = '筛选';
                filterBtn.className = 'btn btn-secondary btn-sm';
                if (searchInput?.parentNode) {
                    searchInput.parentNode.insertBefore(filterBtn, searchInput.nextSibling);
                } else if (submitBtn?.parentNode) {
                    submitBtn.parentNode.insertBefore(filterBtn, submitBtn);
                } else {
                    searchForm.appendChild(filterBtn);
                }
                try {
                    searchInput.style.borderTopRightRadius = '0';
                    searchInput.style.borderBottomRightRadius = '0';
                    searchInput.style.position = 'relative';
                    searchInput.style.zIndex = '1';
                    filterBtn.style.margin = '0';
                    filterBtn.style.borderRadius = '0';
                    filterBtn.style.borderLeftWidth = '0';
                    filterBtn.style.position = 'relative';
                    filterBtn.style.zIndex = '2';
                    if (submitBtn) {
                        submitBtn.style.marginLeft = '-1px';
                        submitBtn.style.borderTopLeftRadius = '0';
                        submitBtn.style.borderBottomLeftRadius = '0';
                        submitBtn.style.position = 'relative';
                        submitBtn.style.zIndex = '3';
                    }
                } catch (_) {}

                const panel = document.createElement('div');
                panel.id = 'bt4g-advanced-filter';
                panel.style.display = 'none';
                panel.className = 'advanced-search mb-3 mt-2';
                updateFixedAdvancedSearchStyle(panel, isDarkMode);
                searchForm.parentNode.insertBefore(panel, searchForm.nextSibling);

                try {
                    localStorage.removeItem('bt4g_advanced_settings');
                    localStorage.removeItem('bt4g_filter_open');
                    localStorage.removeItem('bt4g_original_query');
                } catch (_) {}

                if (!document.getElementById('bt4g-advanced-style')) {
                    const style = document.createElement('style');
                    style.id = 'bt4g-advanced-style';
                    style.textContent = `
                    #bt4g-advanced-filter { font-size: 12px; line-height: 1.45; border-left: 3px solid rgba(13,110,253,.35); position: relative; padding-right: 40px; }
                    #bt4g-advanced-filter .bt4g-filter-row { padding: 6px 0; border-top: 1px dashed rgba(108,117,125,.25); display:flex; align-items:flex-start; }
                    #bt4g-advanced-filter .bt4g-filter-row:first-child { border-top: none; }
                    #bt4g-advanced-filter .bt4g-filter-row:hover { background: rgba(108,117,125,.05); border-radius: 5px; padding-left: 4px; margin-left: -4px; }
                    #bt4g-advanced-filter label.btn { border-radius: 8px; padding: 2px 10px; line-height: 1.3; border-width:1px; transition: all .12s ease-in-out; }
                    #bt4g-advanced-filter label.btn:hover { filter: brightness(0.97); transform: translateY(-0.5px); }
                    #bt4g-advanced-filter label.btn:active { transform: translateY(0); filter: brightness(0.95); }
                    #bt4g-advanced-filter .btn-check:focus + label,
                    #bt4g-advanced-filter label.btn:focus { box-shadow: 0 0 0 .12rem rgba(13,110,253,.15) !important; }
                    #bt4g-advanced-filter .bt4g-filter-row > span { width: 64px; flex: 0 0 64px; display:block; }
                    #bt4g-advanced-filter .bt4g-filter-row > div { display:flex; flex-wrap:wrap; gap:3px; flex:1 1 auto; min-width:0; }

                    form[action="/search"] { position: relative; }
                    form[action="/search"] #autocomplete-list,
                    form[action="/search"] .autocomplete-items { position: absolute !important; top: 100% !important; left: 0; right: 0; z-index: 1061 !important; }
                    form[action="/search"] { display:block; width:100%; }
                    #bt4g-advanced-filter { display:block; width:100% !important; max-width:none !important; flex:0 0 100%; align-self:stretch; clear:both; }
                    body:not(.dark):not(.dark-mode) #bt4g-advanced-filter label.btn.btn-outline-dark { background: rgba(108,117,125,.06); border-color: rgba(108,117,125,.35); color:#212529; }
                    body.dark-mode #bt4g-advanced-filter label.btn.btn-outline-light,
                    html.dark #bt4g-advanced-filter label.btn.btn-outline-light { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.25); color:#e9ecef; }

                    #bt4g-advanced-filter .bt4g-resolution .btn-check:checked + label.btn { background:#0d6efd !important; border-color:#0d6efd !important; color:#fff !important; }
                    #bt4g-advanced-filter .bt4g-hdr .btn-check:checked + label.btn { background:#6f42c1 !important; border-color:#6f42c1 !important; color:#fff !important; }
                    #bt4g-advanced-filter .bt4g-codec .btn-check:checked + label.btn { background:#198754 !important; border-color:#198754 !important; color:#fff !important; }
                    #bt4g-advanced-filter .bt4g-mediaType .btn-check:checked + label.btn { background:#20c997 !important; border-color:#20c997 !important; color:#fff !important; }
                    #bt4g-advanced-filter .bt4g-audio .btn-check:checked + label.btn { background:#d63384 !important; border-color:#d63384 !important; color:#fff !important; }

                    #bt4g-advanced-filter .bt4g-filter-row input[value=""]:checked + label.btn { background:#000 !important; border-color:#000 !important; color:#fff !important; }

                    #bt4g-advanced-filter .bt4g-reset-icon { position:absolute; top:6px; right:6px; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; z-index:5; background: transparent; border: 1px solid rgba(108,117,125,.35); color:#6c757d; padding:0; }
                    #bt4g-advanced-filter .bt4g-reset-icon:hover { background: rgba(108,117,125,.08); color:#495057; }
                    #bt4g-advanced-filter .bt4g-reset-icon:active { transform: scale(0.97); }
                    #bt4g-advanced-filter .bt4g-reset-icon svg { width:14px; height:14px; display:block; }
                    html.dark #bt4g-advanced-filter .bt4g-reset-icon,
                    body.dark-mode #bt4g-advanced-filter .bt4g-reset-icon { border-color: rgba(255,255,255,.25); color:#ced4da; }
                    html.dark #bt4g-advanced-filter .bt4g-reset-icon:hover,
                    body.dark-mode #bt4g-advanced-filter .bt4g-reset-icon:hover { background: rgba(255,255,255,.08); color:#e9ecef; }

                    @keyframes bt4g-spin-left { to { transform: rotate(-360deg); } }
                    #bt4g-advanced-filter .bt4g-reset-icon.spinning svg { animation: bt4g-spin-left .6s ease; }

                    @media (max-width: 576px) {
                      #bt4g-advanced-filter .bt4g-filter-row { padding: 4px 0; flex-direction: column; align-items: stretch; }
                      #bt4g-advanced-filter .bt4g-filter-row > span { width: 100%; flex: 0 0 100%; margin-bottom: 4px; }
                      #bt4g-advanced-filter .bt4g-filter-row > div { gap: 3px; width: 100%; flex: 0 0 100%; }
                    }
                    `;
                    document.head.appendChild(style);
                }

                function createOptionRow(name, label, choices, isDark) {
                    const row = document.createElement('div');
                    row.style.cssText = 'display:flex;align-items:center;margin-bottom:6px;width:100%';
                    row.classList.add('bt4g-filter-row', `bt4g-${name}`);
                    const labelEl = document.createElement('span');
                    labelEl.textContent = label;
                    labelEl.style.cssText = 'width:64px;margin-right:6px;white-space:nowrap;font-weight:bold;font-size:12px;';
                    labelEl.style.color = isDark ? '#e9ecef' : '#212529';
                    row.appendChild(labelEl);
                    const group = document.createElement('div');
                    group.style.cssText = 'display:flex;flex-wrap:wrap;gap:3px;';
                    choices.forEach((choice, idx) => {
                        const id = `${name}_${idx}`;
                        const radio = document.createElement('input');
                        radio.type = 'radio';
                        radio.name = name;
                        radio.id = id;
                        radio.value = choice.value;
                        radio.className = 'btn-check';
                        radio.checked = idx === 0;
                        const optLabel = document.createElement('label');
                        optLabel.className = isDark ? 'btn btn-outline-light btn-sm' : 'btn btn-outline-dark btn-sm';
                        optLabel.htmlFor = id;
                        optLabel.textContent = choice.label;
                        group.appendChild(radio);
                        group.appendChild(optLabel);
                    });
                    row.appendChild(group);
                    return row;
                }

                function updateFixedAdvancedSearchStyle(element, isDark) {
                    const backgroundColor = isDark ? '#212529' : '#f8f9fa';
                    const textColor = isDark ? '#e9ecef' : '#212529';
                    const borderColor = isDark ? '#3e444a' : '#dee2e6';
                    const shadow = isDark ? '0 2px 8px rgba(0,0,0,.25)' : '0 2px 10px rgba(0,0,0,.06)';
                    element.style.cssText = `display:flex;flex-direction:column;width:100%;padding:8px 10px;background-color:${backgroundColor};color:${textColor};border:1px solid ${borderColor};border-radius:6px;margin-bottom:10px;box-shadow:${shadow};`;
                }

                function setRadioValue(name, value) {
                    const radios = panel.querySelectorAll(`input[name="${name}"]`);
                    let found = false;
                    radios.forEach(r => { if (r.value === value) { r.checked = true; found = true; } });
                    if (!found && radios.length) radios[0].checked = true;
                }

                panel.appendChild(createOptionRow('resolution', '分辨规格：', [
                    { value: '', label: '全部' },
                    { value: 'SD', label: 'DVD/VCD' },
                    { value: '720p', label: '720p' },
                    { value: '1080p', label: '1080p' },
                    { value: '1080i', label: '1080i' },
                    { value: '1440p', label: '2K/QHD' },
                    { value: '4K/UHD', label: '4K/UHD' },
                    { value: '8K', label: '8K/FUHD' }
                ], isDarkMode));

                panel.appendChild(createOptionRow('hdr', '高动态域：', [
                    { value: '', label: '全部' },
                    { value: 'HDR', label: 'HDR' },
                    { value: 'HDR10', label: 'HDR10' },
                    { value: 'HDR10+', label: 'HDR10+' },
                    { value: 'HLG', label: 'HLG' },
                    { value: 'HDR Vivid', label: 'HDR Vivid' },
                    { value: 'Dolby Vision', label: 'Dolby Vision/DV' }
                ], isDarkMode));

                panel.appendChild(createOptionRow('codec', '视频编码：', [
                    { value: '', label: '全部' },
                    { value: 'H264/AVC', label: 'H264/AVC/x264' },
                    { value: 'MPEG-2', label: 'MPEG-2' },
                    { value: 'MPEG-4', label: 'MPEG-4/DivX/Xvid' },
                    { value: 'MPEG-5/EVC', label: 'MPEG-5/EVC' },
                    { value: 'H265/HEVC', label: 'H265/HEVC/x265' },
                    { value: 'AV1', label: 'AV1' },
                    { value: 'VC-1', label: 'VC-1' },
                    { value: 'VP8', label: 'VP8' },
                    { value: 'VP9', label: 'VP9' }
                ], isDarkMode));

                panel.appendChild(createOptionRow('mediaType', '媒体类型：', [
                    { value: '', label: '全部' },
                    { value: 'BD', label: 'BD/蓝光/REMUX' },
                    { value: 'BDrip/BRrip', label: 'BDrip/BRrip' },
                    { value: 'WEB-DL', label: 'WEB-DL' },
                    { value: 'WEB', label: 'WEB/WEBRip' },
                    { value: 'HDTV', label: 'HDTV' },
                    { value: 'TS', label: 'TS' },
                    { value: 'DVD', label: 'DVD/DVDRip' },
                    { value: 'TC', label: 'TC' }
                ], isDarkMode));

                const audioChoices = [
                    { value: '', label: '全部' },
                    { value: '杜比', label: '杜比/Dolby' },
                    { value: '杜比全景声', label: '杜比全景声/Atmos' },
                    { value: 'Dolby Digital Plus', label: 'Dolby Digital Plus/DD+/E-AC-3' },
                    { value: 'DTS', label: 'DTS系列' },
                    { value: 'TrueHD', label: 'TrueHD' },
                    { value: '通用', label: '通用' }
                ];
                panel.appendChild(createOptionRow('audio', '音频类型：', audioChoices, isDarkMode));

                const resetBtn = document.createElement('button');
                resetBtn.type = 'button';
                resetBtn.className = 'bt4g-reset-icon';
                resetBtn.title = '重置';
                resetBtn.setAttribute('aria-label', '重置');
                resetBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <polyline points="1 4 1 10 7 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`;
                resetBtn.addEventListener('click', () => {
                    resetBtn.classList.add('spinning');
                    const onAnimEnd = () => {
                        resetBtn.classList.remove('spinning');
                        resetBtn.removeEventListener('animationend', onAnimEnd, true);
                    };
                    resetBtn.addEventListener('animationend', onAnimEnd, true);
                    setTimeout(() => resetBtn.classList.remove('spinning'), 800);
                    ['resolution','hdr','codec','mediaType','audio'].forEach(name => {
                        const first = panel.querySelector(`input[name="${name}"]`);
                        if (first) first.checked = true;
                    });
                    sessionStorage.setItem('bt4g_advanced_settings', JSON.stringify({resolution:'',hdr:'',codec:'',mediaType:'',audio:''}));
                });
                panel.appendChild(resetBtn);

                filterBtn.addEventListener('click', () => {
                    const opened = panel.style.display !== 'none';
                    panel.style.display = opened ? 'none' : 'block';
                    sessionStorage.setItem('bt4g_filter_open', opened ? 'false' : 'true');
                });

                const urlParams = new URLSearchParams(window.location.search);
                function storeAdvanced() {
                    const settings = {
                        resolution: panel.querySelector('input[name="resolution"]:checked')?.value || '',
                        hdr: panel.querySelector('input[name="hdr"]:checked')?.value || '',
                        codec: panel.querySelector('input[name="codec"]:checked')?.value || '',
                        mediaType: panel.querySelector('input[name="mediaType"]:checked')?.value || '',
                        audio: panel.querySelector('input[name="audio"]:checked')?.value || ''
                    };
                    sessionStorage.setItem('bt4g_advanced_settings', JSON.stringify(settings));
                }
                (function restoreAdvanced(){
                    try {
                        const s = JSON.parse(sessionStorage.getItem('bt4g_advanced_settings')) || {};
                        if (s.resolution) setRadioValue('resolution', s.resolution);
                        if (s.hdr) setRadioValue('hdr', s.hdr);
                        if (s.codec) setRadioValue('codec', s.codec);
                        if (s.mediaType) setRadioValue('mediaType', s.mediaType);
                        if (s.audio) setRadioValue('audio', s.audio);
                        const open = sessionStorage.getItem('bt4g_filter_open');
                        panel.style.display = open === 'true' ? 'block' : 'none';
                    } catch {}
                })();

                panel.addEventListener('change', (e) => {
                    if (e.target && e.target.matches('input[type="radio"]')) {
                        storeAdvanced();
                    }
                });

                function processSearch(e) {
                    if (e) e.preventDefault();
                    const baseQuery = searchInput.value.trim();
                    if (!baseQuery) { searchForm.submit(); return; }
                    const resolution = panel.querySelector('input[name="resolution"]:checked')?.value || '';
                    const hdr = panel.querySelector('input[name="hdr"]:checked')?.value || '';
                    const codec = panel.querySelector('input[name="codec"]:checked')?.value || '';
                    const mediaType = panel.querySelector('input[name="mediaType"]:checked')?.value || '';
                    const audio = panel.querySelector('input[name="audio"]:checked')?.value || '';
                    storeAdvanced();
                    const conds = [];
                    if (resolution && keywordMaps.resolution[resolution]) conds.push(`(${keywordMaps.resolution[resolution].join('|')})`);
                    if (hdr && keywordMaps.hdr[hdr]) conds.push(`(${keywordMaps.hdr[hdr].join('|')})`);
                    if (codec && keywordMaps.codec[codec]) conds.push(`(${keywordMaps.codec[codec].join('|')})`);
                    if (mediaType && keywordMaps.mediaType[mediaType]) conds.push(`(${keywordMaps.mediaType[mediaType].join('|')})`);
                    if (audio && keywordMaps.audio[audio]) conds.push(`(${keywordMaps.audio[audio].join('|')})`);
                    let finalQuery = baseQuery;
                    if (conds.length) finalQuery += ' ' + conds.join(' ');
                    sessionStorage.setItem('bt4g_original_query', baseQuery);
                    searchInput.value = finalQuery;
                    searchForm.submit();
                }
                searchForm.addEventListener('submit', processSearch, { capture: true });
                searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') processSearch(e); });

                if (new URLSearchParams(window.location.search).has('q')) {
                    const originalQuery = sessionStorage.getItem('bt4g_original_query');
                    if (originalQuery) setTimeout(() => { searchInput.value = originalQuery; }, 100);
                }
            }

            if (searchForm && searchInput) {
                const existingPanel = document.getElementById('bt4g-advanced-filter');
                if (existingPanel) {
                    const keywordMaps = {
                        resolution: { 'SD': ['480p','480P','480i','480I','576p','576P','576i','576I','SD','VCD','DVD','SDTV'], '720p': ['720p','720P','HD'], '1080p': ['1080p','1080P','HD1080P','FHD','FullHD','Full HD','1920x1080'], '1080i': ['1080i','1080I','FHD','FullHD','Full HD','1920x1080i'], '1440p': ['1440p','1440P','2k','2K','QHD','QuadHD','Quad HD','2560x1440'], '4K/UHD': ['2160p','2160P','4K','4k','UHD','UltraHD','3840x2160','4096x2160'], '8K': ['4320p','4320P','8K','FUHD','7680x4320'] },
                        hdr: { 'HDR': ['HDR'], 'HDR10': ['HDR10'], 'HDR10+': ['HDR10+','HDR10Plus'], 'HLG': ['HLG'], 'HDR Vivid': ['HDR Vivid','HDR-Vivid','Vivid'], 'Dolby Vision': ['DV','DoVi','DolbyVision','Dolby Vision'] },
                        codec: { 'H264/AVC': ['H264','264','AVC','h264','MPEG4AVC','x264'], 'MPEG-2': ['MPEG-2','MPEG2','H262','H.262'], 'MPEG-4': ['MPEG-4','MPEG4','DivX','Xvid','XviD'], 'MPEG-5/EVC': ['MPEG-5','MPEG5','EVC'], 'H265/HEVC': ['H265','265','HEVC','x265','h265'], 'AV1': ['AV1'], 'VC-1': ['VC-1','VC1'], 'VP8': ['VP8'], 'VP9': ['VP9'] },
                        mediaType: { 'BD': ['BD','BLURAY','BLU','RAY','BDMV','BDREMUX','REMUX'], 'BDrip/BRrip': ['BDrip','BRrip','BDRip','BRRip','BluRayRip'], 'WEB-DL': ['WEBDL','WEB-DL'], 'WEB': ['WEB','WEBRIP','WEBRip'], 'HDTV': ['HDTV','TV'], 'TS': ['TS','TS源'], 'DVD': ['DVD','DVDRIP','DVDRip'], 'TC': ['TC','枪版','抢版'] },
                        audio: { '杜比': ['Dolby','DolbyDigital','DD'], '杜比全景声': ['Atmos','DolbyAtmos'], 'Dolby Digital Plus': ['DD+','DDP','E-AC-3','EAC3','DolbyDigitalPlus','Dolby Digital Plus'], 'DTS': ['DTS','DTSHD','DTSHDMA','DTSX'], 'TrueHD': ['TrueHD','TRUEHD','TrueHD2','TrueHD.2','TrueHD.2.0','TrueHD5','TrueHD.5.1','TrueHD.5.1','TrueHD7','TrueHD.7','TrueHD.7.1'], '通用': ['AAC','AC3','AC-3','MP3','LPCM','PCM','FLAC','Opus','OPUS'] }
                    };

                    const filterToggleBtn = searchForm.querySelector('button.btn.btn-secondary.btn-sm');
                    if (filterToggleBtn) {
                        filterToggleBtn.addEventListener('click', () => {
                            existingPanel.style.display = existingPanel.style.display !== 'none' ? 'none' : 'flex';
                        });
                    }

                    existingPanel.addEventListener('change', (e) => {
                        if (e.target && e.target.matches('input[type="radio"]')) {
                            const settings = {
                                resolution: existingPanel.querySelector('input[name="resolution"]:checked')?.value || '',
                                hdr: existingPanel.querySelector('input[name="hdr"]:checked')?.value || '',
                                codec: existingPanel.querySelector('input[name="codec"]:checked')?.value || '',
                                mediaType: existingPanel.querySelector('input[name="mediaType"]:checked')?.value || '',
                                audio: existingPanel.querySelector('input[name="audio"]:checked')?.value || ''
                            };
                            sessionStorage.setItem('bt4g_advanced_settings', JSON.stringify(settings));
                        }
                    });

                    const resetIcon = existingPanel.querySelector('.bt4g-reset-icon');
                    if (resetIcon) {
                        resetIcon.addEventListener('click', () => {
                            ['resolution','hdr','codec','mediaType','audio'].forEach(name => {
                                const first = existingPanel.querySelector(`input[name="${name}"]`);
                                if (first) first.checked = true;
                            });
                            sessionStorage.setItem('bt4g_advanced_settings', JSON.stringify({resolution:'',hdr:'',codec:'',mediaType:'',audio:''}));
                        });
                    }

                    function processExistingSearch(e) {
                        if (e) e.preventDefault();
                        const baseQuery = searchInput.value.trim();
                        if (!baseQuery) { searchForm.submit(); return; }
                        const conds = [];
                        ['resolution','hdr','codec','mediaType','audio'].forEach(name => {
                            const v = existingPanel.querySelector(`input[name="${name}"]:checked`)?.value || '';
                            if (v && keywordMaps[name] && keywordMaps[name][v]) conds.push(`(${keywordMaps[name][v].join('|')})`);
                        });
                        let finalQuery = baseQuery;
                        if (conds.length) finalQuery += ' ' + conds.join(' ');
                        sessionStorage.setItem('bt4g_original_query', baseQuery);
                        searchInput.value = finalQuery;
                        searchForm.submit();
                    }
                    searchForm.addEventListener('submit', processExistingSearch, { capture: true });
                    searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') processExistingSearch(e); });

                    try {
                        const s = JSON.parse(sessionStorage.getItem('bt4g_advanced_settings')) || {};
                        Object.entries(s).forEach(([k, v]) => {
                            if (v) {
                                const r = existingPanel.querySelector(`input[name="${k}"][value="${v}"]`);
                                if (r) r.checked = true;
                            }
                        });
                        const open = sessionStorage.getItem('bt4g_filter_open');
                        existingPanel.style.display = open === 'true' ? 'flex' : 'none';
                    } catch {}

                    if (new URLSearchParams(window.location.search).has('q')) {
                        const originalQuery = sessionStorage.getItem('bt4g_original_query');
                        if (originalQuery) setTimeout(() => { searchInput.value = originalQuery; }, 100);
                    }
                }
            }
        } catch (err) { console.warn('BT4G 筛选面板初始化失败:', err); }

        processMagnetLinks({
            selectors: '.notion-list-item-title a[href^="/magnet/"], .result-item h5 > a[href^="/magnet/"]',
            containerStyles: { marginRight: '8px' },
            customProcessor: (titleA) => {
                const btnContainer = createButtonContainer({ marginRight: '8px' });
                titleA.parentNode.insertBefore(btnContainer, titleA);

                if (isAutoFetchEnabledFor('bt4g')) {
                    const loadingBtn = createLoadingButton();
                    btnContainer.appendChild(loadingBtn);
                    processBT4GMagnetLink(titleA, btnContainer).then(success => {
                        if (!success) {
                            setupRetryButton(loadingBtn, () =>
                                processBT4GMagnetLink(titleA, btnContainer, 2, 6000)
                            );
                        }
                    }).catch(error => {
                        console.error('BT4G处理失败:', error);
                        setButtonError(loadingBtn, '处理失败');
                    });
                } else {
                    const combinedBtn = createCombinedButtons(titleA);
                    btnContainer.appendChild(combinedBtn);
                }
            }
        });

        processElements('div.card-header', (headerEl) => {
            const card = headerEl.closest('.card') || document;
            const magnetBtn = card.querySelector('a[href*="downloadtorrentfile.com/hash/"]');
            if (!magnetBtn) return false;

            const btnContainer = createButtonContainer({ marginLeft: '8px' });
            const combinedBtn = createCombinedButtons(magnetBtn);
            btnContainer.appendChild(combinedBtn);
            headerEl.appendChild(btnContainer);
            return true;
        });

        processElements('.notion-btn-group', (btnGroup) => {
            const magnetBtn = btnGroup.querySelector('a[href*="downloadtorrentfile.com/hash/"]');
            if (!magnetBtn) return false;

            const btnContainer = createButtonContainer({ marginRight: '6px' });
            const combinedBtn = createCombinedButtons(magnetBtn);
            btnContainer.appendChild(combinedBtn);
            btnGroup.insertBefore(btnContainer, magnetBtn);
            return true;
        });
    }

    async function fetchBT4GMagnetFromDetail(detailHref) {
        try {
            const html = await fetchWithRetry(detailHref, { credentials: 'same-origin' });
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const magnetA = doc.querySelector('a.notion-btn.notion-btn-primary[href*="downloadtorrentfile.com/hash/"]') ||
                             doc.querySelector('a.btn.btn-primary.me-2[href*="downloadtorrentfile.com/hash/"]');
            if (magnetA) {
                const href = magnetA.href || magnetA.getAttribute('href') || '';
                const fullHref = href.startsWith('//') ? 'https:' + href : href;
                const hashMatch = fullHref.match(/hash\/([a-f0-9]{40})/i);
                if (hashMatch) {
                    const hash = hashMatch[1];
                    const nameMatch = fullHref.match(/[?&]name=([^&]+)/i);
                    let magnet = `magnet:?xt=urn:btih:${hash}`;
                    if (nameMatch?.[1]) magnet += `&dn=${decodeURIComponent(nameMatch[1])}`;
                    return magnet;
                }
            }

            const directMagnet = doc.querySelector('a[href^="magnet:"]');
            if (directMagnet?.href?.startsWith('magnet:')) return directMagnet.href;

            const magnetInput = doc.querySelector('input[value^="magnet:"]');
            if (magnetInput?.value?.startsWith('magnet:')) return magnetInput.value;

            const magnetEncoded = html.match(/magnet:%3[Ff]xt=urn:btih:([a-f0-9]{40})/i);
            if (magnetEncoded?.[1]) {
                const nameEl = doc.querySelector('h1');
                const name = nameEl?.textContent?.trim() || '';
                let magnet = `magnet:?xt=urn:btih:${magnetEncoded[1]}`;
                if (name) magnet += `&dn=${encodeURIComponent(name)}`;
                return magnet;
            }

            const magnetMatch = html.match(/magnet:\?xt=urn:btih:[a-f0-9]+[^"'\s>]*/i);
            if (magnetMatch?.[0]) return magnetMatch[0];

            return null;
        } catch (error) {
            console.error('Failed to fetch BT4G magnet:', error);
            return null;
        }
    }

    async function processBT4GMagnetLink(linkElement, btnContainer, maxRetries = CONFIG.maxRetries, timeout = CONFIG.defaultTimeout) {
        if (!linkElement?.href) return false;

        return await retryOperation(async (attempt) => {
            const magnetLink = await Promise.race([
                fetchBT4GMagnetFromDetail(linkElement.href),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('请求超时')), timeout)
                )
            ]);

            if (magnetLink) {
                btnContainer.innerHTML = '';
                btnContainer.appendChild(createCombinedButtons(magnetLink));
                return true;
            }
            throw new Error('未获取到磁力链');
        }, maxRetries, (attempt, maxRetries) => {
            const loadingBtn = btnContainer.querySelector('.magnet-loading-btn');
            if (loadingBtn) {
                loadingBtn.textContent = `重试中(${attempt + 1}/${maxRetries})...`;
            }
        });
    }

    function handleBtsowSite() {
        processMagnetLinks({
            selectors: '.row.data-row .file',
            containerStyles: { marginRight: '8px' },
            customProcessor: (titleLink) => {
                const magnetLink = extractBtsowMagnetLink(titleLink);
                if (!magnetLink) return;

                const btnContainer = createButtonContainer({ marginRight: '8px' });
                const combinedBtn = createCombinedButtons(magnetLink);
                btnContainer.appendChild(combinedBtn);
                titleLink.parentNode.insertBefore(btnContainer, titleLink);
            }
        });

        processMagnetLinks({
            selectors: 'textarea.magnet-link[readonly]',
            containerStyles: {
                elementType: 'div',
                marginLeft: '10px'
            },
            customProcessor: (textarea) => {
                const magnetLink = textarea.value.trim();
                if (!magnetLink?.startsWith('magnet:')) return;

                const btnContainer = createButtonContainer({
                    elementType: 'div',
                    marginLeft: '10px'
                });
                const combinedBtn = createCombinedButtons(magnetLink);
                btnContainer.appendChild(combinedBtn);
                textarea.parentNode.insertBefore(btnContainer, textarea.nextSibling);
            }
        });
    }


    function handleBTMULUSite() {
        processMagnetLinks({
            selectors: 'div[style="overflow: hidden;"] a[href^="/hash/"] h4',
            containerStyles: {
                customStyles: { margin: '0 8px' }
            },
            customProcessor: (titleElement) => {
                const titleLink = titleElement.closest('a[href^="/hash/"]');
                if (!titleLink) return;

                const labelElement = titleElement.querySelector('span.label');
                if (!labelElement) return;

                const hashMatch = titleLink.href.match(/\/hash\/([a-f0-9]{40})/i);
                if (!hashMatch) return;

                const hash = hashMatch[1];
                const titleText = titleElement.textContent.replace(/^\s*\w+\s*/, '').trim();
                const magnetLink = `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(titleText)}`;

                const btnContainer = createButtonContainer({
                    customStyles: { margin: '0 8px' }
                });
                const combinedBtn = createCombinedButtons(magnetLink);
                btnContainer.appendChild(combinedBtn);

                if (labelElement.nextSibling) {
                    titleElement.insertBefore(btnContainer, labelElement.nextSibling);
                } else {
                    titleElement.appendChild(btnContainer);
                }
            }
        });

        processElements('div.panel-heading > h3', (h3) => {
            const panel = h3.closest('.panel') || h3.parentElement;
            const magnetA = panel?.querySelector('div.media-body a[href^="magnet:"]');
            if (!magnetA || !magnetA.href) return false;

            const btnContainer = createButtonContainer({ marginLeft: '8px' });
            const combinedBtn = createCombinedButtons(magnetA.href);
            btnContainer.appendChild(combinedBtn);
            h3.appendChild(btnContainer);
            return true;
        });
    }

    function extractBtsowMagnetLink(element) {
        try {
            const hashMatch = element.href.match(/detail\/(\w+)/i);
            if (hashMatch && hashMatch[1]) {
                const titleText = element.textContent.trim();
                return `magnet:?xt=urn:btih:${hashMatch[1]}&dn=${encodeURIComponent(titleText)}`;
            }
            throw new Error('无法提取磁力链Hash');
        } catch (error) {
            return null;
        }
    }

    function handleSOBTSite() {
        processElements('h3 > a[href^="/torrent/"]', (titleLink) => {
            const btnContainer = createButtonContainer();
            const combinedBtn = createCombinedButtons(titleLink);
            btnContainer.appendChild(combinedBtn);
            titleLink.parentNode.insertBefore(btnContainer, titleLink);
            return true;
        });

        processElements('.item-title h3 > a[href^="/detail/"]', (titleLink) => {
            const btnContainer = createButtonContainer();
            const combinedBtn = createCombinedButtons(titleLink);
            btnContainer.appendChild(combinedBtn);
            titleLink.parentNode.insertBefore(btnContainer, titleLink);
            return true;
        });

        processElements('a.download[id="down-url"]', (openLinkBtn) => {
            const btnContainer = createButtonContainer({ marginRight: '8px' });
            const combinedBtn = createCombinedButtons(openLinkBtn.href);
            btnContainer.appendChild(combinedBtn);
            openLinkBtn.parentNode.insertBefore(btnContainer, openLinkBtn);
            return true;
        });
    }

    function handleBTDigSite() {
        processElements('.torrent_name > a', (titleLink) => {
            const resultDiv = titleLink.closest('.one_result');
            const magnetLink = resultDiv?.querySelector('.torrent_magnet a[href^="magnet:"]');
            if (!magnetLink) return false;

            const btnContainer = createButtonContainer({ marginRight: '10px' });
            const combinedBtn = createCombinedButtons(magnetLink);
            btnContainer.appendChild(combinedBtn);
            titleLink.parentNode.insertBefore(btnContainer, titleLink);
            return true;
        });

        processElements('table tr', (tr) => {
            const ths = tr.querySelectorAll('th');
            if (!ths || ths.length < 2) return false;

            const leftTh = ths[0];
            const leftText = (leftTh.textContent || '').replace(/\s+/g, ' ').trim();
            if (!/^Torrent\s*info$/i.test(leftText)) return false;

            const rightTh = ths[1];
            if (rightTh.dataset.buttonsAdded) return false;

            const pageMagnet = document.querySelector('a[href^="magnet:"]');
            const magnetHref = pageMagnet?.href;
            if (!magnetHref) return false;

            const btnContainer = createButtonContainer({ marginLeft: '8px' });
            btnContainer.style.display = 'inline-flex';
            btnContainer.style.verticalAlign = 'middle';
            btnContainer.style.float = 'left';

            const combinedBtn = createCombinedButtons(magnetHref);
            btnContainer.appendChild(combinedBtn);
            rightTh.appendChild(btnContainer);
            rightTh.dataset.buttonsAdded = true;
            return true;
        });
    }

    function handleNyaaSite() {
        processMagnetLinks({
            selectors: 'td.text-center a[href^="magnet:"]',
            containerStyles: {
                marginRight: '6px',
                customStyles: {
                    display: 'inline-flex',
                    alignItems: 'center'
                }
            },
            customProcessor: (magnetLink) => {
                const tr = magnetLink.closest('tr');
                const downloadBtn = tr?.querySelector("a[href^='/download/']");
                const btnContainer = createButtonContainer({
                    marginRight: '6px',
                    customStyles: {
                        display: 'inline-flex',
                        alignItems: 'center'
                    }
                });

                const combinedBtn = createCombinedButtons(magnetLink);
                btnContainer.appendChild(combinedBtn);

                if (downloadBtn) {
                    downloadBtn.parentNode.insertBefore(btnContainer, downloadBtn);
                } else {
                    magnetLink.parentNode.insertBefore(btnContainer, magnetLink.nextSibling);
                }
            }
        });

        processMagnetLinks({
            selectors: '.panel-footer .card-footer-item[href^="magnet:"]',
            containerStyles: { marginLeft: '10px' },
            insertPosition: 'after'
        });
    }

    function processMagnetLinks({ selectors, containerStyles = { marginLeft: '5px' }, insertPosition = 'after', customProcessor }) {
        if (!Array.isArray(selectors)) {
            selectors = [selectors];
        }

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                if (element.dataset.buttonsAdded) return;
                element.dataset.buttonsAdded = true;

                if (customProcessor && typeof customProcessor === 'function') {
                    customProcessor(element);
                    return;
                }

                const btnContainer = createButtonContainer(containerStyles);
                const combinedBtn = createCombinedButtons(element);
                btnContainer.appendChild(combinedBtn);

                if (insertPosition === 'before') {
                    element.parentNode.insertBefore(btnContainer, element);
                } else {
                    element.parentNode.insertBefore(btnContainer, element.nextSibling);
                }
            });
        });
    }

    function handleDMHYSite() {
        const magnetHeader = document.querySelector('#topic_list th:nth-child(4)');
        if (magnetHeader) {
            magnetHeader.style.width = '18%';
        }

        processMagnetLinks({
            selectors: 'a.download-arrow.arrow-magnet',
            containerStyles: { marginLeft: '5px' },
            insertPosition: 'before'
        });

        processMagnetLinks({
            selectors: ['#tabs-1 a.magnet', '#tabs-1 a#magnet2'],
            containerStyles: { marginLeft: '5px' },
            insertPosition: 'after'
        });
    }

    function handleGyingGygSite() {
        try {
            const dlWrapper = document.querySelector('div.down-link');
            const table = dlWrapper?.querySelector('table.bit_list');
            if (table) {
                try {
                    if (!table.dataset.gyStyled) {
                        table.style.tableLayout = 'auto';
                        const downloadTh = table.querySelector('thead th:nth-child(2)');
                        if (downloadTh && !downloadTh.dataset.gyStyled) {
                            downloadTh.style.width = 'auto';
                            downloadTh.style.whiteSpace = 'nowrap';
                            downloadTh.dataset.gyStyled = '1';
                        }
                        table.dataset.gyStyled = '1';
                    }
                } catch (_) {}

                table.querySelectorAll('tbody tr').forEach(tr => {
                    const downloadTd = tr.querySelector('td:nth-child(2)');
                    if (!downloadTd) return;

                    if (!downloadTd.dataset.gyStyled) {
                        downloadTd.style.whiteSpace = 'nowrap';
                        downloadTd.style.width = '1%';
                        downloadTd.dataset.gyStyled = '1';
                    }

                    const magnetA = downloadTd.querySelector('a[href^="magnet:"]');
                    if (!magnetA) return;

                    const containerBefore = magnetA.previousElementSibling;
                    if (containerBefore && containerBefore.classList?.contains('magnet-action-buttons')) {
                        magnetA.dataset.buttonsAdded = 'true';
                        return;
                    }

                    const existingContainer = downloadTd.querySelector('.magnet-action-buttons');
                    if (existingContainer) {
                        magnetA.parentNode.insertBefore(existingContainer, magnetA);
                        magnetA.dataset.buttonsAdded = 'true';
                        return;
                    }

                    const btnContainer = createButtonContainer({
                        marginRight: '8px',
                        customStyles: {
                            display: 'inline-flex',
                            alignItems: 'center'
                        }
                    });
                    const combinedBtn = createCombinedButtons(magnetA.href);
                    btnContainer.appendChild(combinedBtn);

                    magnetA.parentNode.insertBefore(btnContainer, magnetA);
                    magnetA.dataset.buttonsAdded = true;
                });
                return;
            }
        } catch (_) {}
    }

    async function extractMagnetLink(element) {
        try {
            if (typeof element === 'string') {
                return element.startsWith('magnet:') ? element : null;
            }

            const href = element?.href;
            if (!href) return null;

            if (href.startsWith('magnet:')) return href;

            const extractors = [
                { test: 'seedhub', handler: fetchSeedhubMagnetFromDetail },
                { test: '/magnet/', handler: fetchBT4GMagnetFromDetail },
                { test: '/torrent/', handler: (url) => {
                    const match = url.match(/\/torrent\/([a-f0-9]+)\.html$/i);
                    return match?.[1] ? `magnet:?xt=urn:btih:${match[1]}` : null;
                }},
                { test: '/detail/', handler: (url) => {
                    const match = url.match(/\/detail\/([a-f0-9]+)\.html$/i);
                    return match?.[1] ? `magnet:?xt=urn:btih:${match[1]}` : null;
                }},
                { test: 'downloadtorrentfile.com/hash/', handler: (url) => {
                    const hashMatch = url.match(/hash\/([a-f0-9]+)/i);
                    if (!hashMatch?.[1]) return null;
                    const nameMatch = url.match(/[?&]name=([^&]+)/i);
                    return `magnet:?xt=urn:btih:${hashMatch[1]}${nameMatch?.[1] ? `&dn=${nameMatch[1]}` : ''}`;
                }},
                { test: '/hash/', handler: (url) => {
                    const match = url.match(/\/hash\/([a-f0-9]+)\.html$/i);
                    return match?.[1] ? `magnet:?xt=urn:btih:${match[1]}` : null;
                }}
            ];

            for (const { test, handler } of extractors) {
                if (href.includes(test)) {
                    return await handler(href);
                }
            }

            return null;
        } catch (error) {
            showNotification('错误', error.message);
            return null;
        }
    }

async function check115Login(forceCheck = false) {
try {
const isValid = await validate115Cookies();
return isValid;
} catch (error) {
console.error('检查登录状态失败:', error);
return false;
}
}


function validate115Cookies() {
    return new Promise((resolve) => {
        GM_xmlhttpRequest({
            url: 'https://115.com/web/lixian/?ct=lixian&ac=task_lists&t=' + Date.now(),
            method: 'GET',
            anonymous: false,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Referer': 'https://115.com/web/lixian/'
            },
            onload: function(response) {
                try {
                    const finalUrl = (response.finalUrl || '').toLowerCase();
                    const status = response.status || 0;
                    const headers = response.responseHeaders || '';
                    const contentType = (/^content-type:\s*([^\n]+)/im.exec(headers)?.[1] || '').toLowerCase();
                    const text = response.responseText || '';

                    const redirectedToLogin = /login\.115\.com|passport\.115\.com|passportapi\.115\.com/.test(finalUrl);
                    if (redirectedToLogin) return resolve(false);

                    let json = null;
                    if (contentType.includes('application/json') || text.trim().startsWith('{')) {
                        try { json = JSON.parse(text); } catch (_) { json = null; }
                    }
                    if (json) {
                        const ok = (json.state === true) || (json.errno === 0) || (json.code === 0) || (json.data && json.data.state === true);
                        if (ok) return resolve(true);

                        return resolve(false);
                    }

                    const hasLoginHints = /登录|请先登录|账户|sign\s*in|login|passport\.115\.com|window\.location|top\.location/i.test(text);
                    if (hasLoginHints) return resolve(false);

                    if (status === 401 || status === 403) return resolve(false);

                    return resolve(false);
                } catch (_) {
                    return resolve(false);
                }
            },
            onerror: () => resolve(false)
        });
    });
}

async function process115Offline(magnetLink) {
    const notificationId = Date.now();

    try {
        showNotification('115离线', '正在检查登录状态...', notificationId);
        const isLoggedIn = await check115Login(true);
        if (!isLoggedIn) {
            throw new Error('请先登录115网盘');
        }

        showNotification('115离线', '正在提交离线任务...', notificationId);
        const result = await submit115OfflineTask(magnetLink);
        handleOfflineResult(result);

    } catch (error) {
        showNotification('115离线失败', error.message);

        if (error.message.includes('登录')) {
            setTimeout(() => {
                if (confirm('需要登录115网盘，是否进入115网盘登录页面？')) {
                    window.open('https://115.com/?mode=login', '_blank');
                }
            }, 500);
        }
    }
}

function submit115OfflineTask(magnetLink) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url: `https://115.com/web/lixian/?ct=lixian&ac=add_task_url&url=${encodeURIComponent(magnetLink)}`,
            method: 'GET',
            anonymous: false,
            headers: {
                'Referer': 'https://115.com/web/lixian/'
            },
            onload: function(response) {
                const result = tryParseJson(response.responseText);
                resolve(result);
            },
            onerror: function() {
                reject(new Error('提交离线任务失败'));
            }
        });
    });
}

function tryParseJson(text) {
    try {
        return JSON.parse(text);
    } catch (e) {
        return null;
    }
}

function handleOfflineResult(result) {
    if (!result) {
        showNotification('115离线失败', '接口返回为空或解析失败');
        return;
    }

    const success = result.state === true || result.errno === 0 || result.code === 0;
    const message = result.message || result.msg || result.error || result.errmsg || result?.data?.errmsg || '';

    const err = Number.isFinite(result.errno) ? result.errno : (Number.isFinite(result.code) ? result.code : null);
    const rawText = typeof result === 'string' ? result : JSON.stringify(result);
    const txt = [message, rawText].filter(Boolean).join(' ');

    const duplicateMsgRe = /(已存在|已经存在|已添加|重复|已提交过|exist|exists|already)/i;
    const duplicateFlag = !!(
        duplicateMsgRe.test(txt) ||
        result?.data?.exists === true ||
        result?.exists === true ||
        [911, 10008, 10009, 10010].includes(err)
    );

    if (duplicateFlag) {
        showNotification('115离线', '任务已存在');
        return;
    }

    if (success) {
        showNotification('115离线成功', message || '任务已提交');
    } else {
        const text = message || rawText;
        showNotification('115离线失败', text);
    }
}

    function showNotification(title, text, id = null) {
        if (id) {
            const existing = document.getElementById(`notification-${id}`);
            if (existing) existing.remove();
        }

        const container = document.createElement('div');
        container.className = 'custom-notification';
        container.id = id ? `notification-${id}` : `notification-${Date.now()}`;

        Object.assign(container.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '12px 16px',
            background: 'rgba(255, 255, 255, 0.95)',
            color: '#333',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: '2147483647',
            maxWidth: '300px',
            wordWrap: 'break-word',
            opacity: '0',
            transform: 'translateY(20px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer'
        });

        const titleEl = document.createElement('div');
        titleEl.textContent = title;
        Object.assign(titleEl.style, {
            fontWeight: 'bold',
            marginBottom: '4px'
        });

        const textEl = document.createElement('div');
        try {
            textEl.textContent = (text?.includes('%') || text?.includes('magnet:'))
                ? decodeURIComponent(text) : text;
        } catch (e) {
            textEl.textContent = text;
        }
        textEl.style.fontSize = '14px';

        container.append(titleEl, textEl);
        document.body.appendChild(container);

        requestAnimationFrame(() => {
            Object.assign(container.style, {
                opacity: '1',
                transform: 'translateY(0)'
            });
        });

        const removeNotification = () => {
            Object.assign(container.style, {
                opacity: '0',
                transform: 'translateY(20px)'
            });
            setTimeout(() => container.remove(), 300);
        };

        const timeoutId = setTimeout(removeNotification, CONFIG.notificationTimeout);
        container.addEventListener('click', () => {
            clearTimeout(timeoutId);
            removeNotification();
        });
    }

    function ensureModalStyles() {
        if (document.getElementById('magnet-script-modal-styles')) return;
        const style = document.createElement('style');
        style.id = 'magnet-script-modal-styles';
        style.textContent = `
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.08);z-index:10000;display:flex;align-items:center;justify-content:center;padding:16px}
        .modal-content{background:#fff;color:#333;border-radius:10px;box-shadow:0 12px 40px rgba(0,0,0,.08);width:880px;max-width:96vw;padding:16px 18px;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
        .modal-header{display:flex;align-items:center;justify-content:space-between;margin:0;padding:0;min-height:32px}
        .modal-header-colored{background:linear-gradient(90deg, rgba(66,133,244,.12), rgba(66,133,244,0));padding:2px 8px;border-radius:4px;margin:0 0 1px;display:flex;align-items:center;min-height:inherit}
        .modal-title{margin:0;font-size:18px;font-weight:700;color:#333;line-height:1;padding:2px 0}
        .modal-header-help{font-size:12px;color:#666;margin-left:8px;line-height:1}
        .modal-desc{font-size:12px;color:#666;margin-bottom:12px}
        .modal-section-title{font-weight:600;margin:12px 0 6px;padding:6px 10px;background:rgba(66,133,244,.08);border-left:3px solid #4285f4;border-radius:4px;color:#333;font-size:14px;display:flex;align-items:center;min-height:32px;line-height:1.2}
        .modal-section-header{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:32px;padding:2px 0}
        .vip-badge{display:inline-flex;align-items:center;gap:6px;margin-left:10px;padding:0 8px;height:18px;line-height:16px;font-size:11px;border-radius:999px;white-space:nowrap;border:1px solid #e5e7eb;color:#374151;background:#f9fafb}
        .vip-badge .dot{width:6px;height:6px;border-radius:50%;background:#9ca3af}
        /* VIP 渐变金 */
        .vip-badge.vip{color:#7c2d12;background:linear-gradient(90deg,#fde68a,#ffc10778,#fcd34d);border-color:#f59e0b}
        .vip-badge.vip .dot{background:#f59e0b}
        /* 未登录浅红 */
        .vip-badge.not-logged{color:#991b1b;background:#fef2f2;border-color:#fecaca}
        .vip-badge.not-logged .dot{background:#ef4444}
        /* 原石/原始/非会员浅灰 */
        .vip-badge.non-vip{color:#374151;background:#f3f4f6;border-color:#e5e7eb}
        .vip-badge.non-vip .dot{background:#9ca3af}
        .vip-badge .vip-action{appearance:none;border:none;background:transparent;color:#b45309;cursor:pointer;padding:0 0 0 6px;margin:0;border-left:1px solid #fcd34d;font-size:11px;line-height:16px}
        .vip-badge .vip-action:hover{color:#92400e}
        .modal-form-group{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:8px 0}
        .modal-label{min-width:160px;font-size:13px;color:#555}
        .modal-form-texts{display:flex;flex-direction:column;gap:4px;flex:1}
        .modal-help{font-size:12px;color:#999}
        .modal-control{margin-left:auto}
        .modal-indent{margin-left:20px}
        .modal-row-center{display:flex;justify-content:center;align-items:center;gap:12px;margin:8px 0}
        .modal-two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start}
        .modal-three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
        .modal-four-col{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
        .modal-tile{display:flex;align-items:center;justify-content:space-between;background:#f8f9fb;border:1px solid #eee;border-radius:8px;padding:8px 10px}
        .modal-tile-label{font-size:13px;color:#555}
        .modal-tip{font-size:12px;color:#8a6d3b;margin-bottom:8px;background:#fff6e5;border:1px solid #ffe5b7;border-radius:6px;padding:8px 10px;text-align:center}
        .modal-input{width:auto}
        .modal-btn{padding:8px 12px;font-size:13px;border:none;border-radius:6px;cursor:pointer}
        .modal-btn-primary{background:#4285f4;color:#fff}
        .modal-btn-primary:hover{background:#3367d6}
        .modal-btn-secondary{background:#f5f5f5;color:#333}
        .modal-btn-secondary:hover{background:#eaeaea}
        .modal-btn-success{background:#16a34a;color:#fff}
        .modal-btn-success:hover{background:#15803d}
        .modal-btn-danger{background:#ef4444;color:#fff}
        .modal-btn-danger:hover{background:#dc2626}
        .modal-btn-warning{background:#f59e0b;color:#fff}
        .modal-btn-warning:hover{background:#d97706}
        .modal-footer{display:flex;justify-content:flex-end;gap:10px;margin-top:12px}
        .toggle{position:relative;display:inline-block;width:44px;height:24px;vertical-align:middle}
        .toggle input{opacity:0;width:0;height:0;position:absolute}
        .toggle-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#e5e7eb;transition:.2s ease;border-radius:9999px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}
        .toggle-slider:before{content:"";position:absolute;height:18px;width:18px;left:3px;top:3px;background:#fff;border-radius:50%;transition:.2s ease;box-shadow:0 1px 2px rgba(0,0,0,.25)}
        .toggle input:checked + .toggle-slider{background:#4285f4}
        .toggle input:checked + .toggle-slider:before{transform:translateX(20px)}
        .toggle-disabled .toggle-slider{opacity:.55;cursor:not-allowed}
        .floating-settings-btn{position:fixed;left:18px;bottom:18px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);color:#333;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.15), inset 0 0 0 1px rgba(0,0,0,.06);cursor:grab;user-select:none;z-index:10000;transition:background .2s ease, box-shadow .2s ease, transform .1s ease}
        .floating-settings-btn:hover{background:rgba(255,255,255,.78);box-shadow:0 10px 28px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.08)}
        .floating-settings-btn.dragging{cursor:grabbing;opacity:.95;transform:scale(.98)}
        /* ===== 一二级菜单设置面板 ===== */
        .settings-shell{display:grid;grid-template-columns:136px 1fr;gap:16px;margin-top:10px;align-items:start}
        .settings-nav{display:flex;flex-direction:column;gap:4px;border-right:1px solid #eef0f3;padding-right:12px}
        .settings-nav-item{appearance:none;border:none;background:transparent;text-align:left;padding:9px 10px;border-radius:6px;font-size:13px;color:#444;cursor:pointer;display:flex;align-items:center;gap:8px;font-family:inherit;transition:background .15s ease,color .15s ease}
        .settings-nav-item:hover{background:#f3f4f6}
        .settings-nav-item:focus-visible{outline:none;box-shadow:0 0 0 2px rgba(66,133,244,.35)}
        .settings-nav-item.active{background:rgba(66,133,244,.12);color:#1a73e8;font-weight:600}
        .settings-nav-item .nav-dot{width:6px;height:6px;border-radius:50%;background:#d1d5db;flex:0 0 auto}
        .settings-nav-item.active .nav-dot{background:#4285f4}
        .settings-panes{min-height:300px;max-height:58vh;overflow-y:auto;padding-right:8px}
        .settings-pane{display:none}
        .settings-pane.active{display:block}
        .settings-pane > .modal-section-title:first-child,
        .settings-pane > div:first-child > .modal-section-title:first-child{margin-top:0}
        `;
        document.head.appendChild(style);
    }

    // ============ 悬浮按钮位置管理与拖动 ============
    const FLOATING_BTNS_POS_KEY = 'floatingBtnsPos';

    function getFloatingBtnsPos() {
        try {
            const p = GM_getValue(FLOATING_BTNS_POS_KEY, null);
            return (p && typeof p === 'object') ? p : {};
        } catch (_) { return {}; }
    }

    function getFloatingBtnPos(key) {
        const all = getFloatingBtnsPos();
        if (all[key] && typeof all[key].left === 'number' && typeof all[key].top === 'number') {
            return all[key];
        }
        // 兼容旧版本仅存设置按钮位置的键
        if (key === 'settings') {
            try {
                const legacy = GM_getValue('floatingBtnPos', null);
                if (legacy && typeof legacy.left === 'number' && typeof legacy.top === 'number') return legacy;
            } catch (_) {}
        }
        return null;
    }

    function setFloatingBtnPos(key, left, top) {
        try {
            const all = getFloatingBtnsPos();
            all[key] = { left, top };
            GM_setValue(FLOATING_BTNS_POS_KEY, all);
        } catch (_) {}
    }

    function clearFloatingBtnsPos() {
        try {
            GM_setValue(FLOATING_BTNS_POS_KEY, {});
            GM_setValue('floatingBtnPos', null);
        } catch (_) {}
    }

    function isFloatingDragEnabled() {
        try { return !!GM_getValue('enableFloatingDrag', true); } catch (_) { return true; }
    }

    // 应用已保存的位置（限制在可视区域内）
    function applyFloatingBtnPos(btn, key) {
        const pos = getFloatingBtnPos(key);
        if (!pos) return;
        try {
            const size = 44;
            const maxX = Math.max(0, window.innerWidth - size);
            const maxY = Math.max(0, window.innerHeight - size);
            btn.style.left = Math.min(Math.max(0, pos.left), maxX) + 'px';
            btn.style.top = Math.min(Math.max(0, pos.top), maxY) + 'px';
            btn.style.right = 'auto';
            btn.style.bottom = 'auto';
        } catch (_) {}
    }

    // 让悬浮按钮可拖动（受“允许拖动悬浮按钮”开关控制），拖动后自动记住位置
    function makeFloatingBtnDraggable(btn, key) {
        let suppressClick = false;

        // 用 document 捕获阶段拦截，确保拖动结束后的 click 不会触发按钮动作
        // （qB 推送等动作有副作用，必须避免拖完误触）
        document.addEventListener('click', (e) => {
            if (suppressClick && (e.target === btn || btn.contains(e.target))) {
                e.stopPropagation();
                e.preventDefault();
                suppressClick = false;
            }
        }, true);

        btn.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            if (!isFloatingDragEnabled()) return; // 开关关闭时固定不可拖动
            e.preventDefault();

            const rect = btn.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;
            const startX = e.clientX;
            const startY = e.clientY;
            let moved = false;

            btn.classList.add('dragging');

            const onMove = (ev) => {
                if (!moved && (Math.abs(ev.clientX - startX) > 3 || Math.abs(ev.clientY - startY) > 3)) {
                    moved = true;
                }
                const x = Math.min(Math.max(0, ev.clientX - offsetX), window.innerWidth - rect.width);
                const y = Math.min(Math.max(0, ev.clientY - offsetY), window.innerHeight - rect.height);
                btn.style.left = x + 'px';
                btn.style.top = y + 'px';
                btn.style.right = 'auto';
                btn.style.bottom = 'auto';
            };

            const onUp = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                btn.classList.remove('dragging');
                if (moved) {
                    suppressClick = true;
                    setTimeout(() => { suppressClick = false; }, 0);
                    const left = parseFloat(btn.style.left || '0');
                    const top = parseFloat(btn.style.top || '0');
                    setFloatingBtnPos(key, left, top);
                }
            };

            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });
    }

    function ensureFloatingSettingsButton() {
        const existing = document.getElementById('magnet-floating-settings-btn');
        if (!CONFIG.enableFloatingSettingsBtn) {
            if (existing) existing.remove();
            return;
        }
        if (existing) return;

        const btn = document.createElement('div');
        btn.id = 'magnet-floating-settings-btn';
        btn.className = 'floating-settings-btn';
        btn.title = '设置';
        btn.textContent = '⚙️';
        btn.style.lineHeight = '44px';
        btn.style.fontSize = '18px';

        applyFloatingBtnPos(btn, 'settings');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openSettingsPanel({ suppress115Toast: true });
        });

        makeFloatingBtnDraggable(btn, 'settings');

        document.body.appendChild(btn);
    }

    // ============ 累积复制队列（多次复制 → 一次粘贴全部） ============
    const MAGNET_QUEUE_KEY = 'magnetCopyQueue';
    const MAGNET_QUEUE_MAX = 300;

    function getMagnetQueue() {
        try {
            const q = GM_getValue(MAGNET_QUEUE_KEY, []);
            return Array.isArray(q) ? q : [];
        } catch (_) { return []; }
    }

    function pushToMagnetQueue(magnet) {
        try {
            if (!magnet || typeof magnet !== 'string') return getMagnetQueue().length;
            // 兼容多行文本：按行拆分后逐条加入
            const items = magnet.split('\n').map(s => s.trim()).filter(Boolean);
            if (!items.length) return getMagnetQueue().length;
            const q = getMagnetQueue();
            items.forEach(l => {
                if (!q.includes(l)) q.push(l);
            });
            if (q.length > MAGNET_QUEUE_MAX) q.splice(0, q.length - MAGNET_QUEUE_MAX);
            GM_setValue(MAGNET_QUEUE_KEY, q);
            return q.length;
        } catch (_) { return getMagnetQueue().length; }
    }

    function clearMagnetQueue() {
        try { GM_setValue(MAGNET_QUEUE_KEY, []); } catch (_) {}
    }

    async function copyMagnetQueueToClipboard() {
        const q = getMagnetQueue();
        if (!q.length) {
            showNotification('队列为空', '请先点击资源旁的"复制磁力链"按钮逐条加入队列');
            return false;
        }
        const text = q.join('\n');
        try {
            GM_setClipboard(text, 'text');
            if (isMobile && navigator.clipboard?.writeText) {
                try { await navigator.clipboard.writeText(text); } catch (clipboardError) {
                    console.log('使用navigator.clipboard失败:', clipboardError);
                }
            }
            const count = q.length;
            clearMagnetQueue();
            updateQueueBadge();
            showNotification('已复制队列全部磁力链', `共 ${count} 条（换行分隔），队列已清空`);
            return true;
        } catch (error) {
            showNotification('复制失败', `请手动复制: ${error.message}`);
            return false;
        }
    }

    async function pushMagnetQueueToQB() {
        const q = getMagnetQueue();
        if (!q.length) {
            showNotification('队列为空', '请先点击资源旁的"复制磁力链"按钮逐条加入队列');
            return false;
        }
        const notificationId = Date.now();
        try {
            showNotification('qBittorrent', `正在推送队列 ${q.length} 条...`, notificationId);
            const count = await qbAddTorrents(q);
            clearMagnetQueue();
            updateQueueBadge();
            showNotification('已推送队列到 qBittorrent', `成功提交 ${count} 个任务，队列已清空`);
            return true;
        } catch (error) {
            showNotification('qBittorrent 推送失败', error.message);
            return false;
        }
    }

    const QUEUE_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="4" cy="6" r="1.5" fill="currentColor"/><circle cx="4" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="18" r="1.5" fill="currentColor"/></svg>';

    function updateQueueBadge() {
        const count = getMagnetQueue().length;
        ['magnet-floating-queue-btn', 'magnet-floating-qb-btn'].forEach(id => {
            const btn = document.getElementById(id);
            if (!btn) return;
            let badge = btn.querySelector('.queue-badge');
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'queue-badge';
                badge.style.cssText = 'position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;line-height:18px;border-radius:9px;background:#f44336;color:#fff;font-size:11px;font-weight:700;text-align:center;padding:0 4px;box-sizing:border-box;font-family:system-ui,-apple-system,sans-serif';
                btn.appendChild(badge);
            }
            badge.textContent = count > 99 ? '99+' : String(count);
            badge.style.display = count ? 'block' : 'none';
        });
    }

    function ensureFloatingQueueButton() {
        const existing = document.getElementById('magnet-floating-queue-btn');
        if (existing) { updateQueueBadge(); return; }

        const btn = document.createElement('div');
        btn.id = 'magnet-floating-queue-btn';
        btn.title = '复制队列：单击=复制队列全部磁力链（换行分隔），双击=清空队列';
        btn.innerHTML = QUEUE_ICON;
        btn.style.cssText = 'position:fixed;left:18px;bottom:122px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);color:#333;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.15), inset 0 0 0 1px rgba(0,0,0,.06);cursor:pointer;user-select:none;z-index:10000;transition:background .2s ease, box-shadow .2s ease, transform .1s ease';

        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'rgba(255,255,255,.78)';
            btn.style.boxShadow = '0 10px 28px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.08)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'rgba(255,255,255,.6)';
            btn.style.boxShadow = '0 8px 24px rgba(0,0,0,.15), inset 0 0 0 1px rgba(0,0,0,.06)';
        });

        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            await copyMagnetQueueToClipboard();
        });

        btn.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            const count = getMagnetQueue().length;
            clearMagnetQueue();
            updateQueueBadge();
            showNotification('队列已清空', count ? `已清空 ${count} 条磁力链` : '队列本来就是空的');
        });

        applyFloatingBtnPos(btn, 'queue');
        makeFloatingBtnDraggable(btn, 'queue');
        document.body.appendChild(btn);
        updateQueueBadge();
    }

    const QB_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#2F67AF"/><g transform="scale(0.6) translate(8,8)"><path d="M12 3v10m0 0l-4.2-4.2M12 13l4.2-4.2" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 18h14" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></g></svg>';

    function ensureFloatingQBButton() {
        const existing = document.getElementById('magnet-floating-qb-btn');
        if (existing) { updateQueueBadge(); return; }

        const btn = document.createElement('div');
        btn.id = 'magnet-floating-qb-btn';
        btn.className = 'floating-qb-btn';
        btn.title = '推送队列到 qBittorrent（将队列中全部磁力链提交为任务）';
        btn.innerHTML = QB_ICON;
        btn.style.cssText = 'position:fixed;left:18px;bottom:174px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);color:#333;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.15), inset 0 0 0 1px rgba(0,0,0,.06);cursor:pointer;user-select:none;z-index:10000;transition:background .2s ease, box-shadow .2s ease, transform .1s ease';

        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'rgba(255,255,255,.78)';
            btn.style.boxShadow = '0 10px 28px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.08)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'rgba(255,255,255,.6)';
            btn.style.boxShadow = '0 8px 24px rgba(0,0,0,.15), inset 0 0 0 1px rgba(0,0,0,.06)';
        });

        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const original = btn.innerHTML;
            btn.innerHTML = '<span style="font-size:11px;color:#2F67AF;line-height:44px">推送中...</span>';
            const success = await pushMagnetQueueToQB();
            if (success) {
                btn.innerHTML = '<span style="font-size:16px;color:#4caf50">✓</span>';
                setTimeout(() => { btn.innerHTML = original; }, 1500);
            } else {
                btn.innerHTML = original;
            }
            updateQueueBadge();
        });

        applyFloatingBtnPos(btn, 'qb');
        makeFloatingBtnDraggable(btn, 'qb');
        document.body.appendChild(btn);
        updateQueueBadge();
    }

    // ============ 一键复制当前页面全部磁力链 ============
    function addMagnetToMap(magnets, link) {
        // 返回 true 表示新增/替换成功，false 表示忽略
        if (!link || typeof link !== 'string') return false;
        let l = link.trim();
        if (!l) return false;
        try { l = decodeURIComponent(l); } catch (_) {}
        l = l.replace(/[.,;，。；、]+$/, '').trim();
        if (!l.toLowerCase().startsWith('magnet:')) return false;
        // 以 btih hash 为去重键（不同格式指向同一资源时保留更完整的链接）
        const hashMatch = l.match(/xt=urn:btih:([a-zA-Z0-9]+)/i);
        const key = hashMatch ? hashMatch[1].toLowerCase() : l;
        if (magnets.has(key)) {
            // 旧值已带 dn 或新值不带 dn → 保留旧值；否则用更完整的新值替换
            const existing = magnets.get(key);
            if (existing.includes('&dn=') || !l.includes('&dn=')) return false;
            magnets.set(key, l);
            return true;
        }
        magnets.set(key, l);
        return true;
    }

    function collectAllMagnets() {
        const magnets = new Map(); // key: btih hash(小写) 或原链接，value: 完整磁力链
        const addMagnet = (link) => addMagnetToMap(magnets, link);

        // 1. 页面上所有磁力链接
        document.querySelectorAll('a[href^="magnet:"]').forEach(a => addMagnet(a.href));

        // 2. 输入框 / 文本域中的磁力链（可能多行）
        document.querySelectorAll('input[value^="magnet:"], textarea').forEach(el => {
            const v = el.value || '';
            if (v.toLowerCase().startsWith('magnet:')) {
                addMagnet(v);
            } else {
                (v.match(/magnet:\?xt=urn:btih:[a-zA-Z0-9]+[^\s"'<>]*/gi) || []).forEach(addMagnet);
            }
        });

        // 3. data 属性中内嵌的磁力链
        document.querySelectorAll('[data-magnet], [data-magnet-link], [data-href*="magnet:"]').forEach(el => {
            const v = el.getAttribute('data-magnet') || el.getAttribute('data-magnet-link') || el.getAttribute('data-href') || '';
            addMagnet(v);
        });

        // 4. 通过 hash / torrent / detail 链接构造磁力链（覆盖 BT4G / btsow / yuhuage / SOBT / CLB / BTMulu 等站点）
        document.querySelectorAll('a[href*="/hash/"], a[href*="hash="], a[href*="downloadtorrentfile.com/hash/"], a[href*="/torrent/"], a[href*="/detail/"]').forEach(a => {
            const href = a.href || a.getAttribute('href') || '';
            let hash = null;
            let m = href.match(/(?:hash\/|hash=|torrent\/|detail\/)([a-f0-9]{40})/i);
            if (m) hash = m[1];
            if (!hash) {
                m = href.match(/(?:hash\/|hash=|torrent\/|detail\/)([a-z2-7]{32})/i);
                if (m) hash = m[1];
            }
            if (hash) {
                let magnet = `magnet:?xt=urn:btih:${hash}`;
                const nameMatch = href.match(/[?&]name=([^&]+)/i);
                if (nameMatch?.[1]) {
                    try { magnet += `&dn=${decodeURIComponent(nameMatch[1])}`; } catch (_) {}
                }
                addMagnet(magnet);
            }
        });

        // 5. 兜底：全文文本扫描（去重由 Map 保证）
        const textMatches = (document.body.innerText || '').match(/magnet:\?xt=urn:btih:[a-zA-Z0-9]+[^\s"'<>]*/gi) || [];
        textMatches.forEach(addMagnet);

        return magnets;
    }

    // 收集需要异步抓取详情页的入口链接（与各站点处理器使用相同的选择器与抓取函数）
    function collectDetailPageEntries() {
        const entries = [];
        const seen = new Set();
        const hostname = window.location.hostname;

        const add = (els, fetcher) => {
            els.forEach(el => {
                const href = el.href || el.getAttribute('href') || '';
                if (!href || href.startsWith('magnet:')) return; // 直链交给 DOM 收集
                let url;
                try { url = new URL(href, location.origin).href; } catch (_) { return; }
                if (seen.has(url)) return;
                seen.add(url);
                entries.push({ href: url, fetcher });
            });
        };

        if (hostname.includes('bt4gprx.com')) {
            add(document.querySelectorAll('.notion-list-item-title a[href^="/magnet/"], .result-item h5 > a[href^="/magnet/"]'), fetchBT4GMagnetFromDetail);
        } else if (hostname.includes('seedhub')) {
            add(document.querySelectorAll('.seeds a'), fetchSeedhubMagnetFromDetail);
        } else if (/yuhuage\..+/.test(hostname)) {
            add(document.querySelectorAll('.search-item .item-title h3 > a[href^="/hash/"]'), fetchYuhuageMagnetFromDetail);
        } else if (/cili|mag|wuji/.test(hostname)) {
            add(document.querySelectorAll('table.table.table-hover.file-list tbody tr td a[href^="/"]'), fetchMagnetFromDetailPage);
        }
        return entries;
    }

    // 并发抓取详情页磁力链（限流，避免打爆站点）
    async function fetchDetailMagnetsConcurrently(entries, concurrency = 4) {
        const results = [];
        let failed = 0;
        let idx = 0;
        const workers = Array.from({ length: Math.min(concurrency, entries.length) }, async () => {
            while (idx < entries.length) {
                const entry = entries[idx++];
                try {
                    const magnet = await Promise.race([
                        entry.fetcher(entry.href),
                        new Promise((_, reject) => setTimeout(() => reject(new Error('请求超时')), CONFIG.defaultTimeout))
                    ]);
                    if (magnet && typeof magnet === 'string' && magnet.toLowerCase().startsWith('magnet:')) {
                        results.push(magnet);
                    } else {
                        failed++;
                    }
                } catch (error) {
                    console.warn('详情页抓取失败:', entry.href, error);
                    failed++;
                }
            }
        });
        await Promise.all(workers);
        return { results, failed };
    }

    async function copyAllMagnets() {
        // 第一步：收集页面上已有的直链
        const magnets = collectAllMagnets();
        const directCount = magnets.size;

        // 第二步：异步抓取详情页磁力链（BT4G / SeedHub / 雨花阁 / CiliMag 等站点）
        let fetchedNew = 0;
        let fetchFailed = 0;
        const entries = collectDetailPageEntries();
        if (entries.length) {
            const { results, failed } = await fetchDetailMagnetsConcurrently(entries);
            fetchFailed = failed;
            results.forEach(magnet => {
                if (addMagnetToMap(magnets, magnet)) fetchedNew++;
            });
        }

        const total = magnets.size;
        if (!total) {
            showNotification('未找到磁力链', '当前页面未发现磁力链');
            return false;
        }

        const text = Array.from(magnets.values()).join('\n');
        try {
            GM_setClipboard(text, 'text');
            if (isMobile && navigator.clipboard?.writeText) {
                try { await navigator.clipboard.writeText(text); } catch (clipboardError) {
                    console.log('使用navigator.clipboard失败:', clipboardError);
                }
            }
            // 同时追加到累积队列，便于跨页面多次复制后一次粘贴全部
            const magnetsList = Array.from(magnets.values());
            magnetsList.forEach(m => pushToMagnetQueue(m));
            updateQueueBadge();
            let detailText = `共 ${total} 条已复制到剪贴板（队列共 ${getMagnetQueue().length} 条）`;
            if (fetchedNew > 0) detailText += `（异步抓取新增 ${fetchedNew} 条）`;
            if (directCount === 0) detailText = `异步抓取到 ${total} 条，已复制到剪贴板（队列共 ${getMagnetQueue().length} 条）`;
            if (fetchFailed > 0) detailText += `，${fetchFailed} 条详情页获取失败`;
            showNotification('已复制全部磁力链', detailText);
            return true;
        } catch (error) {
            showNotification('复制失败', `请手动复制: ${error.message}`);
            return false;
        }
    }

    const COPY_ALL_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    function ensureFloatingCopyAllButton() {
        const existing = document.getElementById('magnet-floating-copyall-btn');
        if (existing) return;

        const btn = document.createElement('div');
        btn.id = 'magnet-floating-copyall-btn';
        btn.className = 'floating-copyall-btn';
        btn.title = '一键复制当前页面全部磁力链';
        btn.innerHTML = COPY_ALL_ICON;
        btn.style.cssText = 'position:fixed;left:18px;bottom:70px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);color:#333;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.15), inset 0 0 0 1px rgba(0,0,0,.06);cursor:pointer;user-select:none;z-index:10000;transition:background .2s ease, box-shadow .2s ease, transform .1s ease';

        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'rgba(255,255,255,.78)';
            btn.style.boxShadow = '0 10px 28px rgba(0,0,0,.18), inset 0 0 0 1px rgba(0,0,0,.08)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'rgba(255,255,255,.6)';
            btn.style.boxShadow = '0 8px 24px rgba(0,0,0,.15), inset 0 0 0 1px rgba(0,0,0,.06)';
        });

        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const original = btn.innerHTML;
            btn.innerHTML = '<span style="font-size:11px;color:#4285f4;line-height:44px">获取中...</span>';
            const success = await copyAllMagnets();
            if (success) {
                btn.innerHTML = '<span style="font-size:16px;color:#4caf50">✓</span>';
                setTimeout(() => { btn.innerHTML = original; }, 1500);
            } else {
                btn.innerHTML = original;
            }
        });

        applyFloatingBtnPos(btn, 'copyall');
        makeFloatingBtnDraggable(btn, 'copyall');
        document.body.appendChild(btn);
    }

    function openSettingsPanel(options = {}) {
        const suppress115Toast = !!options.suppress115Toast;
        const existing = document.getElementById('magnet-script-settings-overlay');
        if (existing) existing.remove();

        ensureModalStyles();

        const overlay = document.createElement('div');
        overlay.id = 'magnet-script-settings-overlay';
        overlay.className = 'modal-overlay';

        const panel = document.createElement('div');
        panel.className = 'modal-content';
        if (!document.getElementById('magnet-close-style')) {
            const style = document.createElement('style');
            style.id = 'magnet-close-style';
            style.textContent = `
                .modal-close-btn {
                    appearance: none;
                    background: rgba(66,133,244, .15);
                    color: #4285f4;
                    border: none;
                    width: 28px; height: 28px;
                    padding: 0; margin: 0;
                    border-radius: 999px;
                    display: inline-flex; align-items: center; justify-content: center;
                    border: none;
                }
                .modal-close-btn:hover { background: rgba(66,133,244, .25); }
                .modal-close-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(66,133,244,.35); }
                .modal-close-icon { width: 16px; height: 16px; display: inline-block; transition: transform .35s ease; }
                .modal-close-btn:hover .modal-close-icon { transform: rotate(180deg); }
            `;
            document.head.appendChild(style);
        }

        const header = document.createElement('div');
        header.className = 'modal-header modal-header-colored';
        const titleEl = document.createElement('h3');
        titleEl.className = 'modal-title';
        titleEl.textContent = '设置';
        const headerRight = document.createElement('div');
        headerRight.style.marginLeft = 'auto';
        const btnCloseX = document.createElement('button');
        btnCloseX.type = 'button';
        btnCloseX.title = '关闭';
        btnCloseX.className = 'modal-close-btn';
        btnCloseX.innerHTML = `
            <svg class="modal-close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        btnCloseX.addEventListener('click', () => overlay.remove());
        headerRight.appendChild(btnCloseX);
        header.append(titleEl, headerRight);

        const section = (title) => {
            const s = document.createElement('div');
            const t = document.createElement('div');
            t.textContent = title;
            t.className = 'modal-section-title';
            s.appendChild(t);
            return s;
        };

        const row = (labelText, inputEl, helpText = '') => {
            const r = document.createElement('div');
            r.className = 'modal-form-group';
            const texts = document.createElement('div');
            texts.className = 'modal-form-texts';
            const l = document.createElement('label');
            l.textContent = labelText;
            l.className = 'modal-label';
            texts.appendChild(l);
            if (helpText) {
                const h = document.createElement('div');
                h.textContent = helpText;
                h.className = 'modal-help';
                texts.appendChild(h);
            }
            r.appendChild(texts);
            inputEl.classList?.add('modal-input', 'modal-control');
            r.appendChild(inputEl);
            return r;
        };

        const mkSwitch = (checked, onChange) => {
            const wrapper = document.createElement('label');
            wrapper.className = 'toggle';
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = !!checked;
            input.addEventListener('change', () => onChange(!!input.checked));
            const slider = document.createElement('span');
            slider.className = 'toggle-slider';
            wrapper.append(input, slider);
            Object.defineProperty(wrapper, 'disabled', {
                get() { return input.disabled; },
                set(v) { input.disabled = !!v; wrapper.classList.toggle('toggle-disabled', !!v); }
            });
            return wrapper;
        };

        const sec115 = section('115功能');
        const sec115TitleEl = sec115.querySelector?.('.modal-section-title');
        if (sec115TitleEl) {
            sec115TitleEl.classList.add('modal-section-header');
            sec115TitleEl.style.padding = '4px 8px';
            const vipBadge = document.createElement('span');
            vipBadge.className = 'vip-badge';
            vipBadge.innerHTML = '<span class="dot"></span><span class="text">VIP 信息加载中...</span>';
            sec115TitleEl.appendChild(vipBadge);

            const applyBadgeStatus = (status) => {
                vipBadge.classList.remove('vip', 'not-logged', 'non-vip');
                if (status) vipBadge.classList.add(status);
            };
            const setVipBadge = (txt, opts = {}) => {
                const { withLoginBtn = false, status = null } = opts;
                const t = vipBadge.querySelector('.text');
                if (t) t.textContent = txt;
                applyBadgeStatus(status);
                const oldBtn = vipBadge.querySelector('.vip-action');
                if (oldBtn) oldBtn.remove();
                if (withLoginBtn) {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'vip-action';
                    btn.textContent = '去登录';
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        window.open('https://115.com/?mode=login', '_blank');
                    });
                    vipBadge.appendChild(btn);
                }
            };

            const CACHE_TTL = 10 * 60 * 1000;
            const readCache = (key) => { try { return GM_getValue(key, null); } catch (_) { return null; } };
            const writeCache = (key, data) => { try { GM_setValue(key, { t: Date.now(), data }); } catch (_) {} };
            const useCacheValid = (key) => {
                const c = readCache(key);
                return c && (Date.now() - (c.t || 0) < CACHE_TTL) ? c.data : null;
            };

            let latestVip = null;
            let vipFetched = false;
            let latestQuota = null;

            const updateBadge = () => {
                const okVip = latestVip && latestVip.state === true;
                const lvName = okVip ? (latestVip?.data?.user_limit?.level_name || '') : '';
                const quotaOk = latestQuota && typeof latestQuota.surplus !== 'undefined' && typeof latestQuota.count !== 'undefined';
                const isNonVip = lvName && /原石|原始|非会员/i.test(lvName);
                const statusClass = !lvName ? null : (isNonVip ? 'non-vip' : 'vip');

                if (!vipFetched) {
                    setVipBadge('VIP 信息加载中...');
                    return;
                }

                if (!okVip && !lvName) {
                    setVipBadge('未登录或无权限', { withLoginBtn: true, status: 'not-logged' });
                    return;
                }

                if (quotaOk) {
                    const text = (lvName ? `等级：${lvName}，` : '') + `离线额度：${latestQuota.surplus}/${latestQuota.count}`;
                    setVipBadge(text, { status: statusClass });
                } else if (lvName) {
                    setVipBadge(`等级：${lvName}`, { status: statusClass });
                } else {
                    setVipBadge('未登录或无权限', { withLoginBtn: true, status: 'not-logged' });
                }
            };

            const fetchVip = (bypassCache = false) => {
                if (!bypassCache) {
                    const cached = useCacheValid('vip_info_cache_v2');
                    if (cached) { latestVip = cached; updateBadge(); }
                }
                GM_xmlhttpRequest({
                    url: 'https://webapi.115.com/user/vip_limit?feature=2',
                    method: 'GET',
                    anonymous: false,
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Referer': 'https://115.com/web/lixian/'
                    },
                    onload: function (resp) {
                        try {
                            latestVip = JSON.parse(resp.responseText || 'null');
                            vipFetched = true;
                            writeCache('vip_info_cache_v2', latestVip);
                            updateBadge();
                        } catch (_) {
                            vipFetched = true;
                            updateBadge();
                        }
                    },
                    onerror: function () { vipFetched = true; updateBadge(); }
                });
            };

            const fetchQuota = (bypassCache = false) => {
                if (!bypassCache) {
                    const cached = useCacheValid('vip_quota_cache_v1');
                    if (cached) { latestQuota = cached; updateBadge(); }
                }
                GM_xmlhttpRequest({
                    url: 'https://115.com/web/lixian/?ct=lixian&ac=get_quota_package_info',
                    method: 'GET',
                    anonymous: false,
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Referer': 'https://115.com/web/lixian/'
                    },
                    onload: function (resp) {
                        try {
                            const json = JSON.parse(resp.responseText || 'null');
                            const data = {
                                surplus: Number(json?.surplus ?? json?.package?.["1"]?.surplus ?? 0),
                                count: Number(json?.count ?? json?.package?.["1"]?.count ?? 0),
                                used: Number(json?.used ?? json?.package?.["1"]?.used ?? 0),
                            };
                            latestQuota = data;
                            writeCache('vip_quota_cache_v1', data);
                            updateBadge();
                        } catch (_) {
                            updateBadge();
                        }
                    },
                    onerror: function () { updateBadge(); }
                });
            };

            fetchVip(false);
            fetchQuota(false);

            const origCheck = check115AndUpdate;
            const bindRefresh = () => {
                if (typeof check115AndUpdate === 'function' && check115AndUpdate !== origCheck) return;
                if (typeof check115AndUpdate === 'function') {
                    const wrapped = async (notify = true) => {
                        const res = await origCheck(notify);
                        fetchVip(true);
                        fetchQuota(true);
                        return res;
                    };
                    window.check115AndUpdate = wrapped;
                } else {
                    setTimeout(bindRefresh, 50);
                }
            };
            bindRefresh();
        }

        const statusBtn = document.createElement('button');
        statusBtn.textContent = '检测115登录状态';
        statusBtn.className = 'modal-btn modal-btn-secondary';
        const setStatus = (type) => {
            statusBtn.className = 'modal-btn';
            switch (type) {
                case 'checking':
                    statusBtn.classList.add('modal-btn-warning');
                    statusBtn.textContent = '检测中...';
                    break;
                case 'ok':
                    statusBtn.classList.add('modal-btn-success');
                    statusBtn.textContent = '账号已登录';
                    break;
                case 'no':
                    statusBtn.classList.add('modal-btn-danger');
                    statusBtn.textContent = '当前浏览器未登录';
                    break;
                default:
                    statusBtn.classList.add('modal-btn-warning');
                    statusBtn.textContent = '检测异常';
            }
        };
        async function check115AndUpdate(notify = true) {
            try {
                setStatus('checking');
                const ok = await check115Login(true);
                setStatus(ok ? 'ok' : 'no');
                if (notify) showNotification('115状态', ok ? '已登录' : '未登录');
            } catch (e) {
                console.error(e);
                setStatus('error');
                if (notify) showNotification('115状态', '检测异常');
            }
        }
        window.check115AndUpdate = check115AndUpdate;
        statusBtn.addEventListener('click', () => window.check115AndUpdate(true));
        const btnOpen115 = document.createElement('button');
        btnOpen115.textContent = '打开115网盘';
        btnOpen115.className = 'modal-btn modal-btn-primary';
        btnOpen115.addEventListener('click', () => window.open('https://115.com/?cid=0&offset=0&mode=wangpan', '_blank'));
        const row115 = document.createElement('div');
        row115.className = 'modal-row-center';
        row115.append(statusBtn, btnOpen115);
        sec115.appendChild(row115);
        setTimeout(() => window.check115AndUpdate(!suppress115Toast), 100);

        const secButtons = section('按钮显示');
        const btnsTitleEl = secButtons.querySelector?.('.modal-section-title');
        if (btnsTitleEl) {
            btnsTitleEl.classList.add('modal-section-header');
            btnsTitleEl.style.padding = '4px 8px';
            const btnsTip = document.createElement('span');
            btnsTip.className = 'modal-tip';
            btnsTip.style.margin = '0 0 0 10px';
            btnsTip.style.padding = '0 6px';
            btnsTip.style.fontSize = '11px';
            btnsTip.style.lineHeight = '16px';
            btnsTip.style.height = '18px';
            btnsTip.style.display = 'inline-flex';
            btnsTip.style.alignItems = 'center';
            btnsTip.style.boxSizing = 'border-box';
            btnsTip.textContent = '提示：可通过拖拽右侧四项调整顺序；开关控制子按钮显示/隐藏，变更将即时应用到页面。';
            btnsTitleEl.appendChild(btnsTip);
        }
        const swCopy = mkSwitch(CONFIG.enableCopyButton, (v) => { CONFIG.enableCopyButton = v; GM_setValue('enableCopyButton', v); showNotification('设置已保存', v ? '已启用“复制”按钮' : '已禁用“复制”按钮'); addActionButtons(); });
        const swOffline = mkSwitch(CONFIG.enableOfflineButton, (v) => { CONFIG.enableOfflineButton = v; GM_setValue('enableOfflineButton', v); showNotification('设置已保存', v ? '已启用“离线”按钮' : '已禁用“离线”按钮'); addActionButtons(); });
        const swOpen = mkSwitch(CONFIG.enableOpenButton, (v) => { CONFIG.enableOpenButton = v; GM_setValue('enableOpenButton', v); showNotification('设置已保存', v ? '已启用“打开”按钮' : '已禁用“打开”按钮'); addActionButtons(); });
        const swQB = mkSwitch(CONFIG.enableQBButton, (v) => { CONFIG.enableQBButton = v; GM_setValue('enableQBButton', v); showNotification('设置已保存', v ? '已启用“qB推送”按钮' : '已禁用“qB推送”按钮'); addActionButtons(); });
        const btnGrid = document.createElement('div');
        btnGrid.className = 'modal-four-col';
        const makeBtnTile = (label, sw) => {
            const item = document.createElement('div');
            item.className = 'modal-tile';
            const name = document.createElement('span');
            name.className = 'modal-tile-label';
            name.textContent = label;
            const right = document.createElement('div');
            right.appendChild(sw);
            item.append(name, right);
            return item;
        };
        const tileCopy = makeBtnTile('复制按钮', swCopy); tileCopy.dataset.type = 'copy'; tileCopy.draggable = true;
        const tileOffline = makeBtnTile('离线按钮', swOffline); tileOffline.dataset.type = 'offline'; tileOffline.draggable = true;
        const tileOpen = makeBtnTile('打开按钮', swOpen); tileOpen.dataset.type = 'open'; tileOpen.draggable = true;
        const tileQB = makeBtnTile('qB按钮', swQB); tileQB.dataset.type = 'qb'; tileQB.draggable = true;

        const tilesMap = { copy: tileCopy, offline: tileOffline, open: tileOpen, qb: tileQB };
        const renderTilesByOrder = () => {
            btnGrid.innerHTML = '';
            const ord = getButtonsOrder();
            ord.forEach(t => { const el = tilesMap[t]; if (el) btnGrid.appendChild(el); });
        };
        renderTilesByOrder();

        let draggingEl = null;
        btnGrid.addEventListener('dragstart', (e) => {
            const tile = e.target.closest('.modal-tile');
            if (!tile) return;
            draggingEl = tile;
            e.dataTransfer.effectAllowed = 'move';
            try { e.dataTransfer.setData('text/plain', tile.dataset.type || ''); } catch (_) {}
            tile.style.opacity = '0.6';
        });
        btnGrid.addEventListener('dragend', () => {
            if (draggingEl) draggingEl.style.opacity = '';
            draggingEl = null;
            const newOrder = Array.from(btnGrid.querySelectorAll('.modal-tile')).map(el => el.dataset.type).filter(Boolean);
            if (newOrder.length) {
                setButtonsOrder(newOrder);
                applyButtonsOrderToExisting();
            }
        });
        btnGrid.addEventListener('dragover', (e) => {
            e.preventDefault();
            const tile = e.target.closest('.modal-tile');
            if (!tile || !draggingEl || tile === draggingEl) return;
            const rect = tile.getBoundingClientRect();
            const before = (e.clientY - rect.top) < rect.height / 2;
            btnGrid.insertBefore(draggingEl, before ? tile : tile.nextSibling);
        });

        secButtons.appendChild(btnGrid);
        applyButtonsOrderToExisting();

        // ===== qBittorrent 推送配置 =====
        const secQB = section('qBittorrent 推送');
        const qbTitleEl = secQB.querySelector?.('.modal-section-title');
        if (qbTitleEl) {
            qbTitleEl.classList.add('modal-section-header');
            qbTitleEl.style.padding = '4px 8px';
            const qbTip = document.createElement('span');
            qbTip.className = 'modal-tip';
            qbTip.style.cssText = 'margin:0 0 0 10px;padding:0 6px;font-size:11px;line-height:16px;height:18px;display:inline-flex;align-items:center;box-sizing:border-box;';
            qbTip.textContent = '提示：需在 qBittorrent「选项 → Web UI」中启用 Web 用户界面；若已勾选“对本机免密登录”，账号密码可留空。';
            qbTitleEl.appendChild(qbTip);
        }

        const mkTextInput = (value, placeholder, onSave, type = 'text') => {
            const input = document.createElement('input');
            input.type = type;
            input.value = value || '';
            input.placeholder = placeholder || '';
            input.autocomplete = 'off';
            input.style.cssText = 'width:230px;padding:6px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;box-sizing:border-box;';
            input.addEventListener('change', () => { onSave(input.value); });
            return input;
        };

        const qbUrlInput = mkTextInput(GM_getValue('qbUrl', 'http://127.0.0.1:8080'), 'http://127.0.0.1:8080', (v) => {
            GM_setValue('qbUrl', String(v || '').trim());
            showNotification('设置已保存', 'qBittorrent 地址已保存');
        });
        const qbUserInput = mkTextInput(GM_getValue('qbUsername', ''), 'admin', (v) => {
            GM_setValue('qbUsername', String(v || '').trim());
            showNotification('设置已保存', 'qBittorrent 用户名已保存');
        });
        const qbPassInput = mkTextInput(GM_getValue('qbPassword', ''), '留空则使用免密/浏览器会话', (v) => {
            GM_setValue('qbPassword', String(v || ''));
            showNotification('设置已保存', 'qBittorrent 密码已保存');
        }, 'password');
        const qbSavePathInput = mkTextInput(GM_getValue('qbSavePath', ''), '留空使用默认下载目录', (v) => {
            GM_setValue('qbSavePath', String(v || '').trim());
            showNotification('设置已保存', '保存路径已保存');
        });
        const qbCategoryInput = mkTextInput(GM_getValue('qbCategory', ''), '可选，如 movies', (v) => {
            GM_setValue('qbCategory', String(v || '').trim());
            showNotification('设置已保存', '分类已保存');
        });
        const qbTagsInput = mkTextInput(GM_getValue('qbTags', ''), '可选，多个用逗号分隔', (v) => {
            GM_setValue('qbTags', String(v || '').trim());
            showNotification('设置已保存', '标签已保存');
        });
        const swQBPaused = mkSwitch(!!GM_getValue('qbPaused', false), (v) => {
            GM_setValue('qbPaused', v);
            showNotification('设置已保存', v ? '推送后任务将暂停（不自动开始）' : '推送后任务将自动开始');
        });

        const qbTestRow = document.createElement('div');
        qbTestRow.className = 'modal-form-group';
        qbTestRow.style.justifyContent = 'center';
        const qbTestBtn = document.createElement('button');
        qbTestBtn.type = 'button';
        qbTestBtn.className = 'modal-btn modal-btn-primary';
        qbTestBtn.textContent = '测试连接';
        qbTestBtn.addEventListener('click', () => qbTestConnection());
        qbTestRow.appendChild(qbTestBtn);

        secQB.appendChild(row('WebUI 地址', qbUrlInput, '例如 http://127.0.0.1:8080'));
        secQB.appendChild(row('用户名', qbUserInput, '默认 admin；开启“对本机免密”后可留空'));
        secQB.appendChild(row('密码', qbPassInput, '留空则跳过登录，直接使用浏览器已有会话'));
        secQB.appendChild(row('保存路径', qbSavePathInput, '可选，指定下载目录（需 qB 有写入权限）'));
        secQB.appendChild(row('分类', qbCategoryInput, '可选，自动归类到指定分类'));
        secQB.appendChild(row('标签', qbTagsInput, '可选，自动打标签'));
        secQB.appendChild(row('推送后暂停任务', swQBPaused, '开启后不自动开始下载，便于批量审核'));
        secQB.appendChild(qbTestRow);

        const secFloat = section('悬浮按钮');
        const swFloat = mkSwitch(CONFIG.enableFloatingSettingsBtn, (v) => {
            CONFIG.enableFloatingSettingsBtn = v;
            GM_setValue('enableFloatingSettingsBtn', v);
            showNotification('设置已保存', v ? '已启用悬浮设置按钮' : '已关闭悬浮设置按钮');
            ensureFloatingSettingsButton();
        });
        secFloat.appendChild(row('启用左下角悬浮设置按钮', swFloat, '点击打开“设置”面板'));

        const swDrag = mkSwitch(CONFIG.enableFloatingDrag, (v) => {
            CONFIG.enableFloatingDrag = v;
            GM_setValue('enableFloatingDrag', v);
            showNotification('设置已保存', v ? '已开启：4 个悬浮按钮均可拖动' : '已关闭：悬浮按钮固定在当前位置');
        });
        secFloat.appendChild(row('允许拖动悬浮按钮', swDrag, '开启后“设置/复制全部/队列/qB推送”4 个按钮均可拖动，位置自动记忆；关闭则固定在当前位置'));

        const resetPosRow = document.createElement('div');
        resetPosRow.className = 'modal-form-group';
        resetPosRow.style.justifyContent = 'center';
        const resetPosBtn = document.createElement('button');
        resetPosBtn.type = 'button';
        resetPosBtn.className = 'modal-btn modal-btn-secondary';
        resetPosBtn.textContent = '重置悬浮按钮位置';
        resetPosBtn.addEventListener('click', () => {
            clearFloatingBtnsPos();
            const defaultBottoms = {
                'magnet-floating-settings-btn': 18,
                'magnet-floating-copyall-btn': 70,
                'magnet-floating-queue-btn': 122,
                'magnet-floating-qb-btn': 174
            };
            Object.entries(defaultBottoms).forEach(([id, bottom]) => {
                const el = document.getElementById(id);
                if (!el) return;
                el.style.left = '18px';
                el.style.right = 'auto';
                el.style.bottom = bottom + 'px';
                el.style.top = 'auto';
            });
            showNotification('已重置位置', '4 个悬浮按钮已恢复默认位置');
        });
        resetPosRow.appendChild(resetPosBtn);
        secFloat.appendChild(resetPosRow);

        const secAuto = document.createElement('div');
        const secAutoHeader = document.createElement('div');
        secAutoHeader.className = 'modal-section-title modal-section-header';
        const secAutoTitle = document.createElement('span');
        secAutoTitle.textContent = '自动异步获取磁力链';
        secAutoHeader.appendChild(secAutoTitle);
        secAutoHeader.style.padding = '4px 8px';
        const riskTip = document.createElement('span');
        riskTip.textContent = '提示：自动异步获取可能触发部分站点风控，按需开启。';
        riskTip.className = 'modal-tip';
        riskTip.style.margin = '0 0 0 10px';
        riskTip.style.padding = '0 6px';
        riskTip.style.fontSize = '11px';
        riskTip.style.lineHeight = '16px';
        riskTip.style.height = '18px';
        riskTip.style.display = 'inline-flex';
        riskTip.style.alignItems = 'center';
        riskTip.style.boxSizing = 'border-box';
        secAutoHeader.appendChild(riskTip);

        const masterSwitch = mkSwitch(CONFIG.autoFetchEnabled, (v) => {
            CONFIG.autoFetchEnabled = v; GM_setValue('autoFetchEnabled', v);
            showNotification('设置已保存', v ? '已开启自动异步获取' : '已关闭自动异步获取');
            [swBt4g, swSeedhub, swYhg, swCmg].forEach(sw => sw.disabled = !v);
            addActionButtons();
        });
        secAutoHeader.appendChild(masterSwitch);
        secAuto.appendChild(secAutoHeader);

        const swBt4g = mkSwitch(CONFIG.autoFetchSites.bt4g, (v) => {
            CONFIG.autoFetchSites.bt4g = v; GM_setValue('autoFetch_bt4g', v); addActionButtons();
        });
        const swSeedhub = mkSwitch(CONFIG.autoFetchSites.seedhub, (v) => {
            CONFIG.autoFetchSites.seedhub = v; GM_setValue('autoFetch_seedhub', v); addActionButtons();
        });
        const swYhg = mkSwitch(CONFIG.autoFetchSites.yuhuage, (v) => {
            CONFIG.autoFetchSites.yuhuage = v; GM_setValue('autoFetch_yuhuage', v); addActionButtons();
        });
        const swCmg = mkSwitch(CONFIG.autoFetchSites.cilimag, (v) => {
            CONFIG.autoFetchSites.cilimag = v; GM_setValue('autoFetch_cilimag', v); addActionButtons();
        });

        [swBt4g, swSeedhub, swYhg, swCmg].forEach(sw => sw.disabled = !CONFIG.autoFetchEnabled);

        const grid = document.createElement('div');
        grid.className = 'modal-four-col';

        const makeTile = (label, sw) => {
            const item = document.createElement('div');
            item.className = 'modal-tile';
            const name = document.createElement('span');
            name.className = 'modal-tile-label';
            const m = label.match(/^(.*)\((.*)\)$/);
            if (m) {
                let left = (m[1] || '').trim();
                let inside = (m[2] || '').trim();
                const hasCn = (s) => /[\u4e00-\u9fff]/.test(s);
                if (!hasCn(left) && hasCn(inside)) {
                    [left, inside] = [inside, left];
                }
                name.innerHTML = `${left}<br><span style="font-size:12px;color:#9CA3AF">(${inside})</span>`;
            } else {
                name.textContent = label;
            }
            const right = document.createElement('div');
            right.appendChild(sw);
            item.append(name, right);
            return item;
        };

        grid.append(
            makeTile('BT4G', swBt4g),
            makeTile('SeedHub', swSeedhub),
            makeTile('雨花阁(YuHuaGe)', swYhg),
            makeTile('ØMagnet(无极磁链)', swCmg)
        );
        secAuto.appendChild(grid);

        const secSites = section('网站规则');
        const sitesTitleEl = secSites.querySelector?.('.modal-section-title');
        if (sitesTitleEl) {
            sitesTitleEl.classList.add('modal-section-header');
            sitesTitleEl.style.padding = '4px 8px';
        }
        const sitesTip = document.createElement('span');
        sitesTip.className = 'modal-tip';
        sitesTip.style.margin = '0 0 0 10px';
        sitesTip.style.padding = '0 6px';
        sitesTip.style.fontSize = '11px';
        sitesTip.style.lineHeight = '16px';
        sitesTip.style.height = '18px';
        sitesTip.style.display = 'inline-flex';
        sitesTip.style.alignItems = 'center';
        sitesTip.style.boxSizing = 'border-box';
        sitesTip.textContent = '测速提示：频繁测速请求可能导致站点风控，建议合理使用测速，必要时放慢操作节奏。';
        const sitesHeader = secSites.querySelector?.('.modal-section-title') || secSites;
        sitesHeader.appendChild(sitesTip);

        const siteGrid = document.createElement('div');
        siteGrid.className = 'modal-four-col';

        if (!document.getElementById('magnet-site-links-icon-style')) {
            const style = document.createElement('style');
            style.id = 'magnet-site-links-icon-style';
            style.textContent = `
                .site-link-icon {\n\
                    background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M2 12h20'/%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3C/svg%3E");\n\
                    background-repeat: no-repeat;\n\
                    background-size: contain;\n\
                    width: 14px;\n\
                    height: 14px;\n\
                    display: inline-block;\n\
                    vertical-align: -2px;\n\
                }\n\
                .modal-btn:hover .site-link-icon {\n\
                    background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%234caf50' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M2 12h20'/%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3C/svg%3E");\n\
                }\n            `;
            document.head.appendChild(style);
        }

        const showLinksPopover = (triggerEl, links) => {
            document.querySelectorAll('.site-links-popover').forEach(p => p.remove());
            const pop = document.createElement('div');
            pop.className = 'site-links-popover';
            pop.style.cssText = `
                position: absolute;
                z-index: 100000;
                max-width: 420px;
                padding: 10px;
                background: #111;
                color: #ddd;
                border-radius: 6px;
                box-shadow: 0 8px 20px rgba(0,0,0,.5);
                line-height: 1.6;
            `;
            const list = document.createElement('div');
            const tests = [];
            const mkGroup = (title, arr, isPublish) => {
                if (!arr || !arr.length) return;
                const h = document.createElement('div');
                h.textContent = title;
                h.style.cssText = 'font-size:12px; color:#E5E7EB; background:#1f2937; text-align:center; padding:4px 8px; border-radius:4px; margin:8px 0 6px; border:1px solid #374151;';
                list.appendChild(h);
                arr.forEach((item, i) => {
                    const row = document.createElement('div');
                    row.style.cssText = 'display:flex; align-items:center; gap:8px; padding:2px 0;';
                    const idx = document.createElement('span');
                    idx.textContent = String(i + 1);
                    idx.style.cssText = 'flex:0 0 auto; width:18px; height:18px; display:inline-flex; align-items:center; justify-content:center; border-radius:50%; background:#334155; color:#E5E7EB; font-size:12px; border:1px solid #475569;';
                    const a = document.createElement('a');
                    a.href = item.url.startsWith('http') ? item.url : ('https://' + item.url.replace(/^\/+/, ''));
                    a.textContent = item.url + (item.note ? `（${item.note}）` : '');
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.style.cssText = `
                        flex: 1 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
                        color:${isPublish ? '#F59E0B' : '#60A5FA'}; text-decoration:none;
                    `;
                    const badge = document.createElement('span');
                    badge.textContent = '测速中…';
                    badge.style.cssText = 'flex:0 0 auto; font-size:12px; color:#9CA3AF; border:1px solid #374151; padding:0 6px; border-radius:10px;';
                    row.appendChild(idx);
                    row.appendChild(a);
                    row.appendChild(badge);
                    list.appendChild(row);
                    tests.push(() => new Promise((resolve) => {
                        try {
                            const start = performance.now();
                            GM_xmlhttpRequest({
                                url: a.href,
                                method: 'GET',
                                headers: { 'Cache-Control': 'no-cache' },
                                timeout: 3000,
                                anonymous: true,
                                onload: () => {
                                    const ms = Math.max(1, Math.round(performance.now() - start));
                                    badge.textContent = ms + 'ms';
                                    if (ms < 500) {
                                        badge.style.color = '#10B981';
                                        badge.style.borderColor = '#065F46';
                                    } else if (ms < 1500) {
                                        badge.style.color = '#F59E0B';
                                        badge.style.borderColor = '#92400E';
                                    } else {
                                        badge.style.color = '#EF4444';
                                        badge.style.borderColor = '#7F1D1D';
                                    }
                                    resolve();
                                },
                                onerror: () => {
                                    badge.textContent = 'ERR';
                                    badge.style.color = '#EF4444';
                                    badge.style.borderColor = '#7F1D1D';
                                    resolve();
                                },
                                ontimeout: () => {
                                    badge.textContent = 'ERR';
                                    badge.style.color = '#EF4444';
                                    badge.style.borderColor = '#7F1D1D';
                                    resolve();
                                }
                            });
                        } catch (_) {
                            badge.textContent = 'ERR';
                            badge.style.color = '#EF4444';
                            badge.style.borderColor = '#7F1D1D';
                            resolve();
                        }
                    }));
                });
            };
            mkGroup('站点', links.sites || [], false);
            mkGroup('发布页', links.publish || [], true);
            if (!list.children.length) {
                list.textContent = '暂无收录地址';
                list.style.color = '#888';
            }
            pop.appendChild(list);
            (async () => {
                for (const job of tests) {
                    try { await job(); } catch (_) { /* ignore */ }
                }
            })();
            document.body.appendChild(pop);
            const rect = triggerEl.getBoundingClientRect();
            pop.style.top = `${rect.bottom + window.scrollY + 6}px`;
            pop.style.left = `${Math.min(rect.left + window.scrollX, window.scrollX + window.innerWidth - pop.offsetWidth - 12)}px`;
            const close = (e) => {
                if (!pop.contains(e.target) && e.target !== triggerEl) {
                    pop.remove();
                    document.removeEventListener('mousedown', close, true);
                    window.removeEventListener('scroll', close, true);
                    window.removeEventListener('resize', close, true);
                }
            };
            document.addEventListener('mousedown', close, true);
            window.addEventListener('scroll', close, true);
            window.addEventListener('resize', close, true);
        };

        const addSiteTile = (label, key, gmKey) => {
            const sw = mkSwitch(!!CONFIG.siteEnabled[key], (v) => {
                CONFIG.siteEnabled[key] = v;
                GM_setValue(gmKey, v);
                showNotification('站点规则', `${label}已${v ? '启用' : '禁用'}`);
                addActionButtons();
            });
            const item = document.createElement('div');
            item.className = 'modal-tile';
            const name = document.createElement('span');
            name.className = 'modal-tile-label';
            const m = label.match(/^(.*)\((.*)\)$/);
            if (m) {
                let left = (m[1] || '').trim();
                let inside = (m[2] || '').trim();
                const hasCn = (s) => /[\u4e00-\u9fff]/.test(s);
                if (!hasCn(left) && hasCn(inside)) {
                    [left, inside] = [inside, left];
                }
                name.innerHTML = `${left}<br><span style="font-size:12px;color:#9CA3AF">(${inside})</span>`;
            } else {
                name.textContent = label;
            }
            const right = document.createElement('div');
            right.style.display = 'flex';
            right.style.alignItems = 'center';
            right.style.gap = '6px';
            const linkBtn = document.createElement('button');
            linkBtn.innerHTML = '<span class="site-link-icon"></span>';
            linkBtn.className = 'modal-btn';
            linkBtn.style.cssText = 'padding:2px 6px;font-size:12px;background:transparent;color:#6B7280;border:none;border-radius:4px;';
            linkBtn.title = '地址';
            linkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const links = SITES_LINKS[key] || {};
                showLinksPopover(linkBtn, links);
            });
            right.appendChild(linkBtn);
            right.appendChild(sw);
            item.append(name, right);
            siteGrid.appendChild(item);
        };

        addSiteTile('BT4G', 'bt4g', 'site_bt4g');
        addSiteTile('BTDigg', 'btdig', 'site_btdig');
        addSiteTile('BTSOW', 'btsow', 'site_btsow');
        addSiteTile('Nyaa', 'nyaa', 'site_nyaa');
        addSiteTile('動漫花園(DMHY)', 'dmhy', 'site_dmhy');
        addSiteTile('观影', 'gying_family', 'site_gying_family');
        addSiteTile('SeedHub', 'seedhub', 'site_seedhub');
        addSiteTile('梦幻天堂·龙网(LongWangBT)', 'longwangbt', 'site_longwangbt');
        addSiteTile('雨花阁(YuHuaGe)', 'yuhuage', 'site_yuhuage');
        addSiteTile('SOBT', 'sobt', 'site_sobt');
        addSiteTile('CLB(磁力宝)', 'clb', 'site_clb');
        addSiteTile('BT目录(BTMulu)', 'btmulu', 'site_btmulu');
        addSiteTile('ØMagnet(无极磁链)', 'cili_family', 'site_cili_family');
        addSiteTile('磁力帝', 'cilidi', 'site_cilidi');
        addSiteTile('ExHentai(种子→qB)', 'exhentai', 'site_exhentai');

        secSites.appendChild(siteGrid);


        // ===== 一二级菜单：左侧分类导航 + 右侧内容区 =====
        const paneDefs = [
            { id: 'buttons', label: '按钮显示', sections: [secButtons, secFloat] },
            { id: 'qb', label: 'qBittorrent', sections: [secQB] },
            { id: 'p115', label: '115 网盘', sections: [sec115] },
            { id: 'auto', label: '磁力链获取', sections: [secAuto] },
            { id: 'sites', label: '站点开关', sections: [secSites] }
        ];

        const shell = document.createElement('div');
        shell.className = 'settings-shell';
        const nav = document.createElement('div');
        nav.className = 'settings-nav';
        const panes = document.createElement('div');
        panes.className = 'settings-panes';

        const setActivePane = (paneId) => {
            nav.querySelectorAll('.settings-nav-item').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.pane === paneId);
            });
            panes.querySelectorAll('.settings-pane').forEach(p => {
                p.classList.toggle('active', p.dataset.pane === paneId);
            });
            try { GM_setValue('settingsActivePane', paneId); } catch (_) {}
        };

        paneDefs.forEach(def => {
            const navBtn = document.createElement('button');
            navBtn.type = 'button';
            navBtn.className = 'settings-nav-item';
            navBtn.dataset.pane = def.id;
            const dot = document.createElement('span');
            dot.className = 'nav-dot';
            const navLabel = document.createElement('span');
            navLabel.textContent = def.label;
            navBtn.append(dot, navLabel);
            navBtn.addEventListener('click', () => setActivePane(def.id));
            nav.appendChild(navBtn);

            const pane = document.createElement('div');
            pane.className = 'settings-pane';
            pane.dataset.pane = def.id;
            def.sections.forEach(sec => pane.appendChild(sec));
            panes.appendChild(pane);
        });

        shell.append(nav, panes);

        let initialPane = 'buttons';
        try {
            const savedPane = GM_getValue('settingsActivePane', '');
            if (savedPane && paneDefs.some(d => d.id === savedPane)) initialPane = savedPane;
        } catch (_) {}
        setActivePane(initialPane);

        panel.append(header, shell);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);
    }

    function handleSeedhubSite() {
        processElements('.seeds a', (linkElement) => {
            const btnContainer = createButtonContainer({
                marginRight: '8px',
                customStyles: {
                    display: 'inline-block',
                    verticalAlign: 'middle'
                }
            });

            if (isAutoFetchEnabledFor('seedhub')) {
                const loadingBtn = createLoadingButton();
                btnContainer.appendChild(loadingBtn);
                processSeedhubMagnetLink(linkElement, btnContainer).then(success => {
                    if (!success) {
                        setupRetryButton(loadingBtn, () =>
                            processSeedhubMagnetLink(linkElement, btnContainer, 2, 6000)
                        );
                    }
                }).catch(error => {
                    console.error('SeedHub处理失败:', error);
                    setButtonError(loadingBtn, '处理失败');
                });
            } else {
                const combinedBtn = createCombinedButtons(async () => {
                    if (linkElement?.href?.startsWith('magnet:')) return linkElement.href;
                    return await fetchSeedhubMagnetFromDetail(linkElement.href);
                });
                btnContainer.appendChild(combinedBtn);
            }
            linkElement.parentNode.insertBefore(btnContainer, linkElement);
            return true;
        });
    }

    async function processSeedhubMagnetLink(linkElement, btnContainer, maxRetries = CONFIG.maxRetries, timeout = CONFIG.defaultTimeout) {
        if (!linkElement?.href) return false;

        return await retryOperation(async (attempt) => {
            const magnetLink = await Promise.race([
                fetchSeedhubMagnetFromDetail(linkElement.href),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('请求超时')), timeout)
                )
            ]);

            if (magnetLink) {
                btnContainer.innerHTML = '';
                btnContainer.appendChild(createCombinedButtons(magnetLink));
                return true;
            }
            throw new Error('未获取到磁力链');
        }, maxRetries, (attempt, maxRetries) => {
            const loadingBtn = btnContainer.querySelector('.magnet-loading-btn');
            if (loadingBtn) {
                loadingBtn.textContent = `重试中(${attempt + 1}/${maxRetries})...`;
            }
        });
    }

    function handleYuhuageSite() {
        processElements('.search-item .item-title h3 > a[href^="/hash/"]', (titleLink) => {
            const btnContainer = createButtonContainer({ marginRight: '8px' });
            titleLink.parentNode.insertBefore(btnContainer, titleLink);

            if (isAutoFetchEnabledFor('yuhuage')) {
                const loadingBtn = createLoadingButton();
                btnContainer.appendChild(loadingBtn);
                processYuhuageMagnetLink(titleLink, btnContainer).then(success => {
                    if (!success) {
                        setupRetryButton(loadingBtn, () =>
                            processYuhuageMagnetLink(titleLink, btnContainer, 2, 6000)
                        );
                    }
                }).catch(error => {
                    console.error('Yuhuage处理失败:', error);
                    setButtonError(loadingBtn, '处理失败');
                });
            } else {
                const combinedBtn = createCombinedButtons(async () => {
                    return await fetchYuhuageMagnetFromDetail(titleLink.href);
                });
                btnContainer.appendChild(combinedBtn);
            }
            return true;
        }, 'yuhuageButtonsAdded');

        processElements('.detail-panel .panel-header', (panelHeader) => {
            const magnetIcon = panelHeader.querySelector('i.fa.fa-magnet');
            if (!magnetIcon) return false;

            const panelBody = panelHeader.nextElementSibling;
            const magnetLink = panelBody?.querySelector('a.download[href^="magnet:"]');
            if (!magnetLink) return false;

            const btnContainer = createButtonContainer({
                marginLeft: '10px',
                customStyles: {
                    display: 'inline-flex',
                    alignItems: 'center'
                }
            });

            const combinedBtn = createCombinedButtons(magnetLink.href);
            btnContainer.appendChild(combinedBtn);
            panelHeader.appendChild(btnContainer);
            return true;
        }, 'yuhuagePanelProcessed');
    }

    async function fetchSeedhubMagnetFromDetail(detailHref) {
        try {
            const html = await fetchWithRetry(detailHref);

            const encodedMatch = html.match(/data = "([a-zA-Z0-9]+)"/);
            if (encodedMatch?.[1]) {
                const magnetLink = atob(encodedMatch[1]);
                if (magnetLink?.startsWith('magnet:')) {
                    return magnetLink;
                }
            }

            return null;
        } catch (error) {
            console.error('获取Seedhub磁力链失败:', error);
            return null;
        }
    }

    async function fetchYuhuageMagnetFromDetail(detailHref) {
        try {
            const html = await fetchWithRetry(detailHref);
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const magnetLink = doc.querySelector('.detail-panel .panel-body a.download[href^="magnet:"]');
            if (magnetLink?.href) {
                return magnetLink.href.trim();
            }

            const magnetMatch = html.match(/magnet:\?xt=urn:btih:[a-f0-9]+[^"'>\s]*/i);
            if (magnetMatch?.[0]) {
                return magnetMatch[0].trim();
            }

            return null;
        } catch (error) {
            console.error('获取Yuhuage磁力链失败:', error);
            return null;
        }
    }

    async function processYuhuageMagnetLink(linkElement, btnContainer, maxRetries = CONFIG.maxRetries, timeout = CONFIG.defaultTimeout) {
        if (!linkElement?.href) return false;

        return await retryOperation(async (attempt) => {
            const magnetLink = await Promise.race([
                fetchYuhuageMagnetFromDetail(linkElement.href),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('请求超时')), timeout)
                )
            ]);

            if (magnetLink) {
                btnContainer.innerHTML = '';
                btnContainer.appendChild(createCombinedButtons(magnetLink));
                return true;
            }
            throw new Error('未获取到磁力链');
        }, maxRetries, (attempt, maxRetries) => {
            const loadingBtn = btnContainer.querySelector('.magnet-loading-btn');
            if (loadingBtn) {
                loadingBtn.textContent = `重试中(${attempt + 1}/${maxRetries})...`;
            }
        });
    }

    function createLoadingButton() {
        const loadingBtn = document.createElement('span');
        loadingBtn.className = 'magnet-loading-btn';
        loadingBtn.textContent = '获取中...';
        loadingBtn.style.cssText = 'font-size:12px;color:#666;padding:2px 6px;border:1px solid rgba(0,0,0,0.14);border-radius:4px;background-color:transparent;';
        return loadingBtn;
    }

    function setButtonError(button, message = '获取失败') {
        if (!button) return;
        button.textContent = message;
        button.style.color = '#ff4d4f';
    }

    async function processMagnetLink(linkElement, btnContainer, maxRetries = CONFIG.maxRetries, timeout = CONFIG.defaultTimeout) {
        if (!linkElement?.href) return false;

        return await retryOperation(async (attempt) => {
            const magnetLink = await Promise.race([
                fetchMagnetFromDetailPage(linkElement.href),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('请求超时')), timeout)
                )
            ]);

            if (magnetLink) {
                btnContainer.innerHTML = '';
                btnContainer.appendChild(createCombinedButtons(magnetLink));
                return true;
            }
            throw new Error('未获取到磁力链');
        }, maxRetries, (attempt, maxRetries) => {
            const loadingBtn = btnContainer.querySelector('.magnet-loading-btn');
            if (loadingBtn) {
                loadingBtn.textContent = `重试中(${attempt + 1}/${maxRetries})...`;
            }
        });
    }

    function handleCiliMagSite() {
        processElements('table.table.table-hover.file-list tbody tr', (row) => {
            const linkElement = row.querySelector('td a[href^="/"]');
            if (!linkElement) return false;

            const btnContainer = createButtonContainer({ marginRight: '8px' });
            linkElement.parentNode.insertBefore(btnContainer, linkElement);

            if (isAutoFetchEnabledFor('cilimag')) {
                const loadingBtn = createLoadingButton();
                btnContainer.appendChild(loadingBtn);
                processMagnetLink(linkElement, btnContainer).then(success => {
                    if (!success) {
                        setupRetryButton(loadingBtn, () =>
                            processMagnetLink(linkElement, btnContainer, 2, 6000)
                        );
                    }
                }).catch(error => {
                    console.error('CiliMag处理失败:', error);
                    setButtonError(loadingBtn, '处理失败');
                });
            } else {
                const combinedBtn = createCombinedButtons(async () => {
                    return await fetchMagnetFromDetailPage(linkElement.href);
                });
                btnContainer.appendChild(combinedBtn);
            }
            return true;
        }, 'ciliMagProcessed');

        processElements('div.input-group.magnet-box', (magnetBox) => {
            const magnetInput = magnetBox.querySelector('input[id="input-magnet"][value^="magnet:"]');
            const addonElement = magnetBox.querySelector('.input-group-addon');

            if (!magnetInput?.value.trim() || !addonElement) return false;

            if (addonElement.classList.contains('magnet-prefix')) {
                addonElement.style.padding = '2px 5px';
            }

            const btnContainer = createButtonContainer({
                marginLeft: '5px',
                customStyles: { display: 'inline-flex', alignItems: 'center' }
            });

            const combinedBtn = createCombinedButtons(magnetInput.value.trim());
            btnContainer.appendChild(combinedBtn);
            addonElement.appendChild(btnContainer);
            return true;
        }, 'magnetBoxProcessed');
    }

    async function fetchMagnetFromDetailPage(detailHref) {
        try {
            const html = await fetchWithRetry(detailHref, {
                headers: { 'User-Agent': navigator.userAgent }
            });

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const magnetInput = doc.querySelector('input[id="input-magnet"][value^="magnet:"]');
            if (magnetInput?.value) {
                return magnetInput.value.trim();
            }

            const magnetLink = doc.querySelector('a[href^="magnet:"]');
            if (magnetLink?.href) {
                return magnetLink.href.trim();
            }

            const magnetMatch = html.match(/magnet:\?xt=urn:btih:[a-f0-9]+[^"'>]+/i);
            if (magnetMatch?.[0]) {
                return magnetMatch[0].trim();
            }

            return null;
        } catch (error) {
            console.error('从详情页获取磁力链失败:', error);
            return null;
        }
    }

    function handleLongwangbtSite() {
        processElements('td.text_left a[href^="show.php?hash="]', (titleLink) => {
            const hashMatch = titleLink.href.match(/hash=([a-f0-9]{40})/i);
            if (!hashMatch) return false;

            const hash = hashMatch[1];
            const titleText = titleLink.textContent.trim();
            const magnetLink = `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(titleText)}`;

            const btnContainer = createButtonContainer({ marginRight: '8px' });
            const combinedBtn = createCombinedButtons(magnetLink);
            btnContainer.appendChild(combinedBtn);
            titleLink.parentNode.insertBefore(btnContainer, titleLink);
            return true;
        });
    }

    initializeScript();
})();
