document.querySelectorAll('.box').forEach(box => {
    const img = box.querySelector('img');
    const hoverSrc = box.getAttribute('data-hover-src');
    const defaultSrc = box.getAttribute('data-default-src');
    
    box.addEventListener('mouseover', () => {
        img.src = hoverSrc;
    });
    
    box.addEventListener('mouseout', () => {
        img.src = defaultSrc;
    });
});

document.getElementById('promotion1').addEventListener('click', function() {
    window.location.href = 'https://your-website.com/promotion1';
});

  // Thêm sự kiện click cho bản tin khuyến mãi 2
document.getElementById('promotion2').addEventListener('click', function() {
    window.location.href = 'https://your-website.com/promotion2';
});