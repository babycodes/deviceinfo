const os = require("os");

let user_log = {};
let userOperator,
  computerName,
  osPlatform,
  model,
  network,
  ipWireless,
  ipLan,
  macAddress;

userOperator = "pengguna";
osPlatform = `${os.platform()} ${os.arch()}`;
network = os.networkInterfaces();
computerName = os.userInfo({ option: "utf8" }).username;

os.platform == "linux" || os.platform == "win32"
  ? (model = os.cpus()[0].model)
  : (model = undefined);

if (os.platform == "linux") {
  if (network.hasOwnProperty("wlp3s0")) {
    ipWireless = network.wlp3s0[0];
  } else if (network.hasOwnProperty("eth0")) {
    ipWireless = network.eth0[0];
  }
} else if (os.platform == "win32") {
  ipWireless = network.eth0[0];
} else if (os.platform == "android") {
  ipWireless = network.wlan0[0];
}

ipLan = network.lo[0].address;
macAddress = ipWireless.mac;
user_log = {
  computerName,
  osPlatform,
  model,
  ipWireless: ipWireless.address,
  ipLan,
  macAddress,
};

console.log(user_log);
console.log("platform : " + process.platform);
console.log(os.cpus());
console.log(os.networkInterfaces());
