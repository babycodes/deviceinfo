const os = require("os");

let user_log = {};
let userOperator, osPlatform, model, network, ipWireless, ipLan, macAddress;

userOperator = "pengguna";
model = os.cpus()[1].model;
osPlatform = `${os.platform()} ${os.arch()}`;
network = os.networkInterfaces();

if (os.platform == "linux") {
  ipWireless = network.wlp3s0[0];
} else {
  ipWireless = network.eth0[0];
}

ipLan = network.lo[0].address;
macAddress = ipWireless.mac;

user_log = {
  osPlatform,
  model,
  ipWireless: ipWireless.address,
  ipLan,
  macAddress,
};

console.log(user_log);
console.log("platform : " + process.platform);
console.log(os.networkInterfaces());
