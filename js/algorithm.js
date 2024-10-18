document.addEventListener('DOMContentLoaded', () => {
    const stages = document.querySelectorAll('.stage');

    stages.forEach((stage, index) => {
        stage.addEventListener('click', () => {
            stage.classList.toggle('active');
            if (index === 0) {
                stage.style.backgroundColor = stage.classList.contains('active')? 'white' : '';
            } else {
                stage.style.backgroundColor = '';
            }
        });
    });

    // 初始状态下展开第一个阶段并设置背景为白色
    stages[0].classList.add('active');
    stages[0].style.backgroundColor = 'white';
});