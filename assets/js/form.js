function showPass(e) {
	let itself = e.target;
	let state = itself.dataset.state;
	let target = itself.dataset.target;
	let el = document.querySelector(target);


	let shown = itself.querySelector('.eye-shown');
	let hidden = itself.querySelector('.eye-hidden');

	if(state == 'hidden') {
		shown.classList.remove('active');
		hidden.classList.add('active');
		el.setAttribute('type', 'text');
		itself.setAttribute('data-state', 'shown');
	} else if(state == 'shown') {
		shown.classList.add('active');
		hidden.classList.remove('active');
		el.setAttribute('type', 'password');
		itself.setAttribute('data-state', 'hidden');
	}

}
