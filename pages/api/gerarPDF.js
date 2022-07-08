const ejs = require('ejs');
const path = require('path');
const pdf = require('html-pdf');
const pupp = require('puppeteer');

export default async function gerarPDF(req, res) {
	
	const filePath = path.join(__dirname, "../../../../", "public", "pdf.ejs");

	const browser = await pupp.launch();
	const page = await browser.newPage();

	await page.goto("http://localhost:3000/api/geraArquivo", {
		waitUntil: "networkidle0" 
	});


	const pdf = await page.pdf({
		printBackground: true,
		format: 'Letter',
		margin: {
			top: "20px",
			bottom: "20px",
			left: "20px",
			right: "20px"
		}
	})

	await browser.close();

	res.setHeader("Content-Type", "application/pdf");

	res.send(pdf)

}