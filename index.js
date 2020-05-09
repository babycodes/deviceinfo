const os = require("os");

let user_log = {};
let computerName, osPlatform, model, network, ipAddress;

function getIp() {
  let ipAddress;
  if (os.platform == "linux") {
    if (network.hasOwnProperty("wlp3s0")) {
      ipAddress = network.wlp3s0[0];
    } else if (network.hasOwnProperty("eth0")) {
      ipAddress = network.eth0[0];
    } else if (network.hasOwnProperty("wlan0")) {
      ipAddress = network.wlan0[0];
    }
  } else if (os.platform == "win32") {
    ipAddress = network.WiFi[1];
  } else if (os.platform == "android") {
    ipAddress = network.wlan0[0];
  }
  return ipAddress;
}

function getModel() {
  return os.platform == "linux" || os.platform == "win32"
    ? os.cpus()[0].model
    : "Unidentified Model";
}

function getDeviceInformation() {
  osPlatform = `${os.platform()} ${os.arch()}`;
  network = os.networkInterfaces();
  computerName = os.userInfo({ option: "utf8" }).username;

  model = getModel();
  ipAddress = getIp();

  user_log = {
    computerName,
    osPlatform,
    model,
    ipAddress: ipAddress.address,
    macAddress: ipAddress.mac
  };

  console.log(user_log);
}

getDeviceInformation();
console.log(os.cpus());
