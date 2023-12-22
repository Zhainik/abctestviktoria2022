document.addEventListener('DOMContentLoaded', () => {
    let offsetWork = 0
    let offsetNpa = 0
    let offsetAlgorithm = 0
    let progress = 10.07
    const sliderLineWork = document.querySelector('.work-slider')
    const sliderLineNpa = document.querySelector('.npa-slider')
    const sliderAlgorithm = document.querySelector('.algorithm-cards')
    const progressBars = document.querySelectorAll('.down-progress-filled')

    document.querySelector('.work-buttom-left').addEventListener('click', () => {
        offsetWork = offsetWork + 419
        if (offsetWork > 1676) {
            offsetWork = 0
        }
        sliderLineWork.style.left = -offsetWork + 'px'
    })

    document.querySelector('.work-buttom-center').addEventListener('click', () => {
        offsetWork = offsetWork + 419
        if (offsetWork > 1676) {
            offsetWork = 0
        }
        sliderLineWork.style.left = -offsetWork + 'px'
    })

    document.querySelector('.work-buttom-right').addEventListener('click', () => {
        offsetWork = offsetWork - 419
        if (offsetWork < 0) {
            offsetWork = 1676
        }
        sliderLineWork.style.left = -offsetWork + 'px'
    })

    document.querySelector('.npa-buttom-left').addEventListener('click', () => {
        offsetNpa = offsetNpa + 312
        if (offsetNpa > 1905) {
            offsetNpa = 0
        }
        sliderLineNpa.style.left = -offsetNpa + 'px'
    })

    document.querySelector('.npa-buttom-center').addEventListener('click', () => {
        offsetNpa = offsetNpa + 312
        if (offsetNpa > 1905) {
            offsetNpa = 0
        }
        sliderLineNpa.style.left = -offsetNpa + 'px'
    })

    document.querySelector('.npa-buttom-right').addEventListener('click', () => {
        offsetNpa = offsetNpa - 312
        if (offsetNpa < 0) {
            offsetNpa = 1905
        }
        sliderLineNpa.style.left = -offsetNpa + 'px'
    })

    document.querySelector('.algorithm-left').addEventListener('click', () => {
        offsetAlgorithm = offsetAlgorithm + 1364
        if (offsetAlgorithm > 8184) {
            offsetAlgorithm = 0
        }
        sliderAlgorithm.style.left = -offsetAlgorithm + 'px'

        progress = progress + 10.07
        if (progress > 70.5) {
            progress = 10.07
        }
        progressBars.forEach((progressBar) => {
            progressBar.style.width = progress + 'rem';
        });
    })

    document.querySelector('.algorithm-right').addEventListener('click', () => {
        offsetAlgorithm = offsetAlgorithm - 1364
        if (offsetAlgorithm < 0) {
            offsetAlgorithm = 8184
        }
        sliderAlgorithm.style.left = -offsetAlgorithm + 'px'

        progress = progress - 10.07
        if (progress < 10.07) {
            progress = 70.5
        }
        progressBars.forEach((progressBar) => {
            progressBar.style.width = progress + 'rem';
        });
    })
})