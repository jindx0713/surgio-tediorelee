{% import './snippet/direct_rules.tpl' as direct_rules %}
{% import './snippet/netflix_rules.tpl' as netflix_rules %}
{% import './snippet/youtube_rules.tpl' as youtube_rules %}
{% import './snippet/telegram_rules.tpl' as telegram_rules %}
{% import './snippet/alibaba_rules.tpl' as alibaba_rules %}
{% import './snippet/blocked_rules.tpl' as blocked_rules %}

#!MANAGED-CONFIG {{ downloadUrl }}

#Clash Config managed by TEDIORELEE

external-controller: 127.0.0.1:7892
port: 7890
socks-port: 7891

# Clash for Windows
cfw-bypass:
  - qq.com
  - music.163.com
  - '*.music.126.net'
  - localhost
  - 127.*
  - 10.*
  - 172.16.*
  - 172.17.*
  - 172.18.*
  - 172.19.*
  - 172.20.*
  - 172.21.*
  - 172.22.*
  - 172.23.*
  - 172.24.*
  - 172.25.*
  - 172.26.*
  - 172.27.*
  - 172.28.*
  - 172.29.*
  - 172.30.*
  - 172.31.*
  - 192.168.*
  - <local>
cfw-latency-timeout: 5000

{{ clashProxyConfig | yaml }}

Rule:
{{ alibaba_rules.main('DIRECT') | patchYamlArray }}
{{ netflix_rules.main('🎬 Netflix') | patchYamlArray }}
{{ youtube_rules.main('🌈 Youtube Primium') | patchYamlArray }}
{{ telegram_rules.main('🚀 Proxy') | patchYamlArray }}
{{ blocked_rules.main('🚀 Proxy') | patchYamlArray }}
{{ direct_rules.main('🌊 Domestic') | patchYamlArray }}
{{ remoteSnippets.Hijacking.main('REJECT') | patchYamlArray }}
{{ remoteSnippets.ForeignMedia.main('🚀 Proxy') | patchYamlArray }}
{{ remoteSnippets.Microsoft.main('🚀 Proxy') | patchYamlArray }}
{{ remoteSnippets.Steam.main('🚀 Proxy') | patchYamlArray }}
{{ remoteSnippets.Porn.main('🚀 Proxy') | patchYamlArray }}

# LAN
- DOMAIN-SUFFIX,local,DIRECT
- IP-CIDR,127.0.0.0/8,DIRECT
- IP-CIDR,172.16.0.0/12,DIRECT
- IP-CIDR,192.168.0.0/16,DIRECT
- IP-CIDR,10.0.0.0/8,DIRECT
- IP-CIDR,17.0.0.0/8,DIRECT
- IP-CIDR,100.64.0.0/10,DIRECT


# Final
- GEOIP,CN,DIRECT
- MATCH,🚀 Proxy
