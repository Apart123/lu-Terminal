/**
 * 默认配置
 */
module.exports = {
  redisConfig: {
    host: "localhost",
    port: "6379",
    password: "123456",
    db: 2,
  },
  // MySQL 配置
  dbConfig: {
    database: "luindex",
    username: "root",
    password: "123456",
    host: "localhost",
    port: 3306,
  },
  // 百度翻译配置（https://fanyi-api.baidu.com/）
  baiduFanYiConfig: {
    appid: "",
    key: "",
  },
};
