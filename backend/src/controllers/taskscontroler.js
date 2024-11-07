const getALL = (req, res) => {
 return res.status(200).json({ message: 'foi tudo da rota ja' });
};

module.exports = {
    getALL
};