const emailTemplate = `
    <div>
        <h1>Hola, {{ name }}</h1>
        <p>Gracias por tu orden.</p>
        <p>Orden: {{ order }}</p>
    </div>
`;

module.exports = {
    emailTemplate
}