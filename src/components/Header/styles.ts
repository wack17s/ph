const cxs = require('cxs');

export default {
    box: cxs({
        width: '20px',
        height: '20px',
        float: 'left',
        fontSize: '10px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    boxColor: (color: number = 1) => cxs({
        backgroundColor: `#42${color}6f4`
    }),
    fuckButton: cxs({
        position: 'fixed',
        top: '45%',
        left: '45%',
        width: '10%',
        height: '10%'
    })
};
