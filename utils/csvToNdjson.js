const parse = require('csv-parse');
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function appendToFile(rowData) {
    const rowAsNdJson = `${JSON.stringify(rowData)}\n`
    fs.appendFileSync(path.join(__dirname, '../data/events.ndjson'), rowAsNdJson);
}

function readCsvFile() {
    fs.createReadStream(path.join(__dirname, '../data/events.csv'))
        .pipe(
            parse({
                delimiter: ',',
                columns: true,
                trim: true,
                skip_empty_lines: true,
                cast: true,
            })
        )
        .on('data', (row => {
            const rowData = {
                _type: 'event',
                _id: uuidv4(),
                eventDate: row.eventDate,
                event: row.event,
                details: row.details,
                active: row.active.toLowerCase() == 'true' ? true : false,
            };
            appendToFile(rowData);
        }))
        .on('error', error => console.log('An error occured:', error));
}

async function openAndTruncateNdjsonFile() {
    try {
        await fsPromises.open(path.join(__dirname, '../data/events.ndjson'), 'w');
        await fsPromises.truncate(path.join(__dirname, '../data/events.ndjson'), 0);
        readCsvFile();
    } catch { error => console.log(error) }
}

openAndTruncateNdjsonFile();
