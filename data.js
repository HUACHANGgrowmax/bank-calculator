// data.js
const banks = {
    ba: [
        { name: 'UOB', rate: 4.80 },
        { name: 'Agrobank', rate: 4.85 },
        { name: 'Maybank', rate: 5.13 },
        { name: 'MBSB', rate: 5.90 }
    ],
    od: [
        { name: 'Agrobank', rate: 7.50 },
        { name: 'Maybank', rate: 7.65 },
        { name: 'MBSB', rate: 7.75 }
    ]
};

// Sort banks by rate ascending
banks.ba.sort((a, b) => a.rate - b.rate);
banks.od.sort((a, b) => a.rate - b.rate);