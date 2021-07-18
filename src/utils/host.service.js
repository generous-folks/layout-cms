class RequestHost {
  hostname;

  setHostname(host) {
    this.hostname = host;
  }
}

export const requestHost = new RequestHost();
