/* DaTouWang URL: www.datouwang.com */
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
    invert: false,
    },
    // autoHeight: true,
    pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 解析URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    // 如果有指定的页数参数，跳转到对应页
    if (page) {
        swiper.slideTo(parseInt(page));
    }
    swiper.emit('slideChange');
});

swiper.on('slideChange', function () {
    var currentIndex = swiper.realIndex; // 获取当前页面的索引

    // 移除之前设置的背景颜色类
    document.querySelector('.blog-slider').classList.remove('bg-zhusha', 'bg-zhese', 'bg-mituoseng', 'bg-guikongqueshi', 'bg-qingjinshi', 'bg-shiqing', 'bg-tonglv', 'bg-cihuang', 'bg-qiandan', 'bg-tanhei');

    // 根据当前页面的索引添加对应的背景颜色类
    if (currentIndex === 0) {
        document.querySelector('.blog-slider').classList.add('bg-zhusha');
    } else if (currentIndex === 1) {
        document.querySelector('.blog-slider').classList.add('bg-zhese');
    } else if (currentIndex === 2) {
        document.querySelector('.blog-slider').classList.add('bg-mituoseng');
    } else if (currentIndex === 3) {
        document.querySelector('.blog-slider').classList.add('bg-guikongqueshi');
    } else if (currentIndex === 4) {
        document.querySelector('.blog-slider').classList.add('bg-qingjinshi');
    } else if (currentIndex === 5) {
        document.querySelector('.blog-slider').classList.add('bg-cihuang');
    } else if (currentIndex === 6) {
        document.querySelector('.blog-slider').classList.add('bg-tonglv');
    } else if (currentIndex === 7) {
        document.querySelector('.blog-slider').classList.add('bg-shiqing');
    } else if (currentIndex === 8) {
        document.querySelector('.blog-slider').classList.add('bg-qiandan');
    } else if (currentIndex === 9) {
        document.querySelector('.blog-slider').classList.add('bg-tanhei');
    }

    // 可以根据需要设置更多页面的背景颜色类
});