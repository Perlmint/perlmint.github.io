---
title: "RPI Wifi setup"
date: 2020-02-03T00:00:00+09:00
categories:
  - general
---

Show network devices

```bash
# ip link
```

Set wpa auth info

```bash
# wpa_passphrase $SSID $PASSWOD > /etc/wpa_supplicant/wpa_supplicant-$IFACE.conf
```

Turn on wireless device at boottime

```bash
# echo "auto-hotplug $IFACE\niface $IFACE inet dhcp" >> /etc/networks
```

Automatically start wpa_supplicant for specific interface

```bash
# systemctl enable wpa_supplicant@$IFACE
```

Set dhcp automatically (If doesn't work dhcp)

```bash
# echo "[Match]\nName=$IFACE\n\n[Network]\nDHCP=ipv4" > /etc/systemd/network/wlan0.network
```
