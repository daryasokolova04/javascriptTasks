const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

for (var i = 0; i < names.length; i++) {
    list.insertAdjacentHTML('beforeend', `<p>${names[i]}</p>`);
}
