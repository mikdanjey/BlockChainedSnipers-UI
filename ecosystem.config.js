module.exports = {
  apps: [
    {
      name: "BlockChainedSnipers UI p=3000",
      script: "yarn",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: "start",
      instances: 1,
      exec_mode: "fork",
      autorestart: false,
      watch: false,
      max_memory_restart: "4G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
