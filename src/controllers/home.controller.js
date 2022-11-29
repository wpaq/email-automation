class HomeController {
  async index (req, res) {
    return res.status(200).render('index')
  }
}

export default new HomeController()
