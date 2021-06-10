const parse = require('csv-parse');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const csvData = [];
fs.createReadStream(path.join(__dirname, '../data/events.csv'))
    .pipe(
        parse({
            delimiter: ',',
            columns: true,
            // from_line: 1,
            // to_line: 2,
            trim: true,
            skip_empty_lines: true,
            cast: true,
        })
    )
    // each row being parsed is added to the csvData array
    .on('data', (row => {
        // console.log(row);
        const rowData = {
            _type: 'event',
            _id: uuidv4(),
            eventDate: row.eventDate,
            event: row.event,
            details: row.details,
            active: row.active,
        };
        csvData.push(rowData);
    }))
    // abort if there is an error
    .on('error', error => console.log('An error occured:', error))
    .on('end', async function () {
        try {
            // console.log(csvData);
            // write the csvData array to an .ndjson file
            fs.open(path.join(__dirname, '../data/events.ndjson'), 'w', function (err, f) {
                console.log('File was created and/or opened with write access!');
            });
        } catch { error => console.log(error) }
    });
