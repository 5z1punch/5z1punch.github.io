#!/bin/bash
bash <(curl --connect-timeout 10 -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh || echo -e '\xff') || \
( echo "远程获取最新安装脚本失败，使用本地备份" && chmod +x install-release-bak.sh && ./install-release-bak.sh ) && \
sed -i 's|/usr/local/etc/v2ray/config.json|/usr/local/etc/v2ray/config.json\nEnvironment="V2RAY_VMESS_AEAD_FORCED=false"|' /etc/systemd/system/v2ray.service
systemctl daemon-reload
systemctl enable v2ray
systemctl start v2ray && \
echo v2ray started