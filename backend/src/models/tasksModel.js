// todas as funções que interagem diretamente com o banco
const connection = require('./connection');

const getALL = async () => { //precisa esperar carregar tudo caraio, pq msm?
    const tasks = await connection.execute('SELECT * FROM tasks'); //retorna tudo da tebala tasks
    return tasks;
};

module.exports = {
    getALL
}