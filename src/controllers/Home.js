import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Pietro',
      sobrenome: 'Ricardo',
      email: 'email@email.com',
      idade: 342,
      peso: 3002,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
