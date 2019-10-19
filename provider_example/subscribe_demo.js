'use strict';

module.exports = {
  url: 'https://tgbot.lbyczf.com/surge2sswin?url=https://raw.githubusercontent.com/lhie1/Surge/master/Surge.conf',
  type: 'shadowsocks_json_subscribe',
  udpRelay: true, // 定义所有的节点都支持 udpRelay
  // 定义哪些节点支持 Netflix，你也可以挑选出几个常用的节点
  netflixFilter(nodeConfig) {
    const name = nodeConfig.nodeName.toLowerCase();
    return [
      'hk',
    ].some(key => name.includes(key.toLowerCase()));
  },
};
