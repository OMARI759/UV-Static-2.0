// UV config

// L bare stealers, we use wisp ;) (I am here tooo)
//  ⠀⠀⠀       ⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠟⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣳⠖⠳⣄⡀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⡤⠒⠀⠂⡾⠉⠀⠀⠀⠀⠉⢳⡄⣄⡀⠀⠀
//  ⠀⠀⠀⢸⡥⠀⣀⡼⢁⠀⢰⡄⠀⡄⠀⠀⣧⠀⠙⡆⠀
//  ⠀⢀⣠⠼⠗⠚⠉⠠⠋⠀⠀⢷⣠⣧⠀⠀⠈⠳⢤⣇⠀
//  ⠀⣾⣟⠒⠦⣄⠀⠀⠀⣠⡴⠋⠁⢈⠛⢦⣄⣠⣴⣾⣷
//  ⢀⡟⠙⢶⣤⠬⠷⣼⡏⠉⠉⢩⡍⠹⠦⢤⣿⣤⣨⣿⠈
//  ⡾⣡⠆⠁⠀⠀⠀⢠⡀⠀⠀⠀⢱⡀⠀⠂⠙⠎⠻⡅⠀
//  ⢿⠁⠒⣤⠤⣤⣀⠀⢧⠀⠀⠀⣸⠃⠀⠀⠀⡶⣤⣽⠀
//  ⠈⠳⣴⡇⠀⠀⠈⠛⢦⣄⣠⠾⢿⣄⣀⣠⠾⣡⠞⠁⠀
//  ⠀⠀⠈⠉⠉⠉⠁⢧⢠⠟⣽⠀⢿⠀⢧⢰⡈⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠐⢫⠏⢸⠁⠀⠈⢳⠘⢧⣙⢦⠀⠀⠀

self.__uv$config = {
  prefix: "/active/uv/service/",
  wisp: "wss://wisp.mercury.net.in/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/active/uv/uv.handler.js",
  client: "/active/uv/uv.client.js",
  bundle: "/active/uv/uv.bundle.js",
  config: "/active/uv/uv.config.js",
  sw: "/active/uv/uv.sw.js",
};
