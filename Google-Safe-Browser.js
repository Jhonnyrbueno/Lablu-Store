document.addEventListener('DOMContentLoaded', function() {
    var section = document.querySelector('.holder-footer-section.section-2');
    if (section) {
        var link = document.createElement('a');
        link.title = 'Safe Browsing Google';
        link.href = 'https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fwww.lablustore.com.br';
        link.target = '_blank';
        link.style.position = 'relative';
        link.style.display = 'inline-block';
        link.style.width = '32px'; /* Largura da imagem */
        link.style.height = '32px'; /* Altura da imagem */
        link.style.backgroundImage = 'url("https://s3.sa-east-1.amazonaws.com/king-assets.yampi.me/dooki/6659cb1d3aed6/6659cb1d3aedc.png")';
        link.style.backgroundSize = 'contain';
        link.style.backgroundRepeat = 'no-repeat';
        link.style.marginLeft = '10px'; /* Ajuste a margem conforme necessário */
        section.appendChild(link);
    }
});
