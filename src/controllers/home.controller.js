class HomeController {
  async index(req, res) {
    try {
      return res.status(200).render('index')
    } catch (err) {
      return res.status(500).json({
        error: err
      })
    }
  }
}

export default new HomeController()
