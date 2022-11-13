const generateHtml = async (content, path) => {
    if (!content && !path) return;
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CTP</title>
</head>

<body onload="window.location.href = '${path}'">
    <script>
    alert("${content}");
    </script>
</body>
</html>`;
    return html;
};
module.exports = generateHtml;