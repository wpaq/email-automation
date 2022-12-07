import path from 'path'

const handlebarConfig = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: path.resolve('./src/views'),
    defaultLayout: false
  },
  viewPath: path.resolve('./src/views/emails/default'),
  extName: '.handlebars'
}

export default handlebarConfig