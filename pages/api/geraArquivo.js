const ejs = require('ejs');
const path = require('path');
const pdf = require('html-pdf');
const pupp = require('puppeteer');

export default async function gerarArquivo(req, res) {
	
	const filePath = path.join(__dirname, "../../../../", "public", "pdf.ejs");

	const Pessoa = {
		nome: "Artur",
		data: "25/02/02",
	};

	ejs.renderFile(filePath, {Pessoa}, async (err, html) => {

		//Verifica se há erro no arquivo
		if(err){
			res.send("Erro na leitura do arquivo");
		}

		res.send(html)
	}) 

}