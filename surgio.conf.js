'use strict';

/**
 * 使用文档：https://surgio.royli.dev/
 */
module.exports = {
  artifacts: [
    /**
     * Surge
     */
    {
      name: 'SurgeV3.conf', // 新版 Surge
      template: 'surge_v3',
      provider: 'demo',
    },
    {
      name: 'Surge_simple.conf', // 旧版 Surge
      template: 'surge_simple',
      provider: 'subscribe_demo',
    },

    /**
     * Clash
     */
    {
      name: 'Clash.yml',
      template: 'clash',
      provider: 'shadowsocks',
      recipe: ['shadowsocks','v2rayn','ssrcloud','blinkload'],
      // Clash 配置才需要定义这个方法，文档待补充
      proxyGroupModifier(nodeList, filters) {
        return [
          {
            name: '🪐 URL Test',
            type: 'url-test',
          },
          {
            name: '🚀 Proxy',
            type: 'select',
          },
          {
            name: '🎬 Netflix',
            filter: filters.tediorelee_netflix,
            filter: filters.tediorelee_blinkload,
            type: 'select',
          },
          {
            name: '🌍 ForeignMedia',
            proxies: ['🚀 Proxy','🪐 URL Test'],
            type: 'select',
          },
          {
            name: '🌈 Youtube Primium',
            // proxies: ['🚀 Proxy', '🗾 Japan'],
            filter: filters.tediorelee_youtube,
            filter: filters.youtubePremiumFilter,
            type: 'select',
          },
          {
            name: '🌊 Domestic',
            proxies: ['DIRECT'],
            type: 'select',
          },
          {
            name: '🇺🇲',
            filter: filters.usFilter,
            type: 'select'
          },
          {
            name: '🇸🇬',
            filter: filters.singaporeFilter,
            type: 'select'
          },
          {
            name: '🇰🇷',
            filter: filters.koreaFilter,
            type: 'select'
          },
          {
            name: '🇯🇵',
            filter: filters.japanFilter,
            type: 'select'
          },
          {
            name: '🇭🇰',
            filter: filters.hkFilter,
            type: 'select'
          },
          {
            name: '🇨🇳',
            filter: filters.taiwanFilter,
            type: 'select'
          },
        ];
      },
    },

    /**
     * Quantumult
     */
    {
      name: 'Quantumult_rules.conf',
      template: 'quantumult_rules',
      provider: 'subscribe_demo',
    },
    {
      name: 'Quantumult.conf',
      template: 'quantumult',
      provider: 'subscribe_demo',
    },
    {
      // 给 Quantumult 提供订阅地址
      name: 'Shadowsocks_subscribe.conf',
      template: 'shadowsocks_subscribe',
      provider: 'subscribe_demo',
    },
  ],
  // urlBase: 'https://gist.githubusercontent.com/tediorelee/d72795c036ae4a4bc253b7a726205376/raw/', // 订阅地址的前缀部分，以 / 结尾
  urlBase: 'https://tediorelee.oss-cn-chengdu.aliyuncs.com/', // 订阅地址的前缀部分，以 / 结尾
  remoteSnippets: [
    {
      url: 'https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/Hijacking.list',
      name: 'Hijacking'
    },
    {
      url: 'https://raw.githubusercontent.com/tediorelee/personal-config/master/ForeignMedia.list',
      name: 'ForeignMedia'
    },
    {
      url: 'https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/microsoft.list',
      name: 'Microsoft'
    },
    {
      url: 'https://raw.githubusercontent.com/tediorelee/personal-config/master/Steam.list',
      name: 'Steam'
    },
    {
      url: 'https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/custom/pron.list',
      name: 'Porn'
    },
  ],
  upload: {
    prefix: '', 
    bucket: 'tediorelee',
    region: 'oss-cn-chengdu',
    accessKeyId: 'LTAI4FwJYLTkU5aEjUNgonFs',
    accessKeySecret: 'EGX8Z6QssijnB8Ubj98CeLxKNW4D7L',
  },
};

