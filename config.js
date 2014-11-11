var config = {
  development: {
    server: {
      port: 3000,
    },
    database: {
      url: 'mongodb://localhost/express-react_dev'
    }
  },
  testing: {
    server: {
      port: 3001
    },
    database: {
      url: 'mongodb://localhost/express-react_test'
    }
  },
  production: {
    server: {
      port: 8083
    },
    database: {
      url: 'mongodb://localhost/express-react'
    }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
