
(function () {
    let scale = 1 / window.devicePixelRatio;
    document.write(`<meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">`)
    let unit = window.innerWidth / 750;
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
})();
