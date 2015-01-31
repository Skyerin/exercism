var hamming = {
    compute: function (strand1, strand2) {
        
        if (strand1.length !== strand2.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        var difference = 0;

        for (var i = 0, l = strand1.length; i < l; i++) {
            if (strand1[i] !== strand2[i]) {
                difference++;
            }
        }

        return difference;
    }
};

module.exports = hamming;
