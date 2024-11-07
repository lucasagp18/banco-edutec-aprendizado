const app = require('./app');
require('dotenv').config();  //ja executa em todos ta
 
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`o servidor esta rodando na porta ${PORT}`));
