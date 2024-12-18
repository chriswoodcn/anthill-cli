import os from "node:os";

export function isWindows() {
  return os.platform() === "win32";
}

export function isMac() {
  return os.platform() === "darwin";
}

export function isLinux() {
  return os.platform() === "linux";
}

export function isUnix() {
  return isMac() || isLinux();
}


