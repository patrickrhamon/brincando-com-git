$('body').on('#btn_somar','click', function() {
    let val_a = $('#val_a').val();
    let val_b = $('#val_b').val();
    calcular(val_a, val_b);
});

function calcular(a, b) {
    alert(a+b);
}