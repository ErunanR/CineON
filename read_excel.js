import xlsx from 'xlsx';
import fs from 'fs';

const file1 = 'Cuanto Se va a gastar.xlsx';
const file2 = 'Tablas Generales.xlsx';

const outData = {};

function dumpSheet(filename) {
    outData[filename] = {};
    try {
        const workbook = xlsx.readFile(filename);
        workbook.SheetNames.forEach(sheetName => {
            const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "" });
            outData[filename][sheetName] = data;
        });
    } catch(e) {
        console.error(`Error reading ${filename}:`, e.message);
    }
}

dumpSheet(file1);
dumpSheet(file2);

fs.writeFileSync('excel_data.json', JSON.stringify(outData, null, 2));
