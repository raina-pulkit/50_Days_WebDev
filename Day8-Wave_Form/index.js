// console.log($(".form-panel label"))

$(".form-panel label").each((label, ind) => {
    ind.innerHTML = ind.innerText.split('').map((letter, ind) => `<span style = "transition-delay: ${ind*30}ms">${letter}</span>`).join('');
    // ind.html(`${ind.text().split('').map((letter, ind) => {
    //     `<span style = "transition-delay: ${ind*50}ms">${letter}</span>`
    // })}`)
});

