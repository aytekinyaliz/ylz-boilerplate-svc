export default () => {
  const config = {
    mongoUrl: process.env.MONGO_URL,
    microservicePort: process.env.MICROSERVICE_PORT,
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
    serviceName: process.env.SERVICE_NAME
    // database: {
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT, 10) || 5432
    // }
  };
  console.log(":::CONFIGURATION:::", config);

  return config;
};
