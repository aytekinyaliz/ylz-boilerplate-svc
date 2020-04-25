export default () => {
  const config = {
    mongoUrl: process.env.MONGO_URL,
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
    redisUrl: process.env.REDIS_URL,
    serviceName: process.env.SERVICE_NAME,
    tcpHost: process.env.TCP_HOST,
    tcpPort: process.env.TCP_PORT
  };
  console.log(":::CONFIGURATION:::", config);

  return config;
};
