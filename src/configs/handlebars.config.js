import path from 'path'

const HandlebarConfig = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: path.resolve('./src/views'),
    defaultLayout: false
  },
  viewPath: path.resolve('./src/views/emails/default'),
  extName: '.handlebars'
}

export default HandlebarConfig