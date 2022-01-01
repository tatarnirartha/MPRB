module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/MPRB/'
  : '/'
}

module.exports = { 
  chainWebpack: config => { 
    config.plugin('html').tap(args => { 
      args[0].title = 'Monumen Perjuangan Rakyat Bali'; 
      return args; 
    }); 
  } 
}