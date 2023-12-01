const fs = require('fs');
const csv = require('csv-parser');

const caminhoEntrada = '1.csv';

const tamanhoBloco = 4999;

let linhas = [];
let cabecalho = null;
let indiceArquivo = 1;

fs.createReadStream(caminhoEntrada)
  .pipe(csv({separator: ';'}))
  .on('data', (row) => {
    if (!cabecalho) {
      cabecalho = Object.keys(row);
    }
    linhas.push(row);

    if (linhas.length === tamanhoBloco) {
      const caminhoSaida = `output_${indiceArquivo}.csv`;

      const linhasCSV = [cabecalho, ...linhas].map((linha) => Object.values(linha).join(','));

      fs.writeFileSync(caminhoSaida, linhasCSV.join('\n'));

      linhas = [];
      indiceArquivo++;
    }
  })
  .on('end', () => {
    if (linhas.length > 0) {
      const caminhoSaida = `output_${indiceArquivo}.csv`;

      const linhasCSV = [cabecalho, ...linhas].map((linha) => Object.values(linha).join(','));

      fs.writeFileSync(caminhoSaida, linhasCSV.join('\n'));
    }

    console.log('Arquivos CSV gerados com sucesso!');
  });
