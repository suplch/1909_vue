let scale = 1 / window.devicePixelRatio;
document.write(`<meta name="viewport" content="width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no">`)

let unit = window.innerWidth / 750;

console.log(unit);

document.write(`
    <style>
        * {
            position: relative;
            margin: 0;
            padding: 0;
        }
        html, body {
            font-size: ${100 * unit}px;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
`);
