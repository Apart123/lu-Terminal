/**
 * 默认配置
 * @author luying
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
    password: "13120199525ly",
    host: "localhost",
    port: 3306,
  },
  // 百度翻译配置（https://fanyi-api.baidu.com/）
  baiduFanYiConfig: {
    appid: "",
    key: "",
  },
};
