
const randomString = async (length) => {
    if (!length);
    var result = '';
    var characters = 'OXPPD4EDEPDEPDELDPpxedePDEDEDKEdkdekdedldlelDL12234340504949KkfdelfemdABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    };
    if (result === '') return;
    else return result;
};
module.exports = randomString;