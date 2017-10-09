const PROXY_CONFIG = [
  {
    context: [
      "/login",
      "/version",
      "/query",
      // "/i",
      // "/need",
      // "/to",
      "/proxy"
    ],
    target: "http://who.duckdns.org:8081",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
