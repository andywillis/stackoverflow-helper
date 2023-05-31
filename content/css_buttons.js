const containers = document.getElementsByClassName('js-voting-container');

// eslint-disable-next-line no-restricted-syntax
for (const container of containers) {
	const voteup = container.getElementsByClassName('js-vote-up-btn')[0];
	const votedown = container.getElementsByClassName('js-vote-down-btn')[0];
	const votecount = container.getElementsByClassName('js-vote-count')[0];

	votecount.classList.remove('fc-theme-body-font');
	votecount.classList.remove('fw-bold');
	votecount.classList.remove('fs-subheading');
	votecount.classList.remove('py4');
	votecount.classList.remove('c-pointer');
	votecount.classList.add('fc-black-500');
	votecount.classList.add('fs-title');

	voteup.dataset.selectedClasses = 'fc-theme-primary';
	votedown.dataset.selectedClasses = 'fc-theme-primary';
	voteup.dataset.unselectedClasses = '';
	votedown.dataset.unselectedClasses = '';

	voteup.classList.remove('fc-black-700');
	votedown.classList.remove('fc-black-700');
	voteup.classList.remove('bc-black-100');
	votedown.classList.remove('bc-black-100');
	voteup.classList.remove('as-center');
	votedown.classList.remove('as-center');
	voteup.classList.remove('bar-pill');
	votedown.classList.remove('bar-pill');
	voteup.classList.add('s-btn__unset');
	votedown.classList.add('s-btn__unset');

	const voteupsvg = voteup.children[0];
	const votedownsvg = votedown.children[0];

	voteupsvg.classList.remove('iconArrowUp');
	voteupsvg.classList.add('iconArrowUpLg');
	votedownsvg.classList.remove('iconArrowUp');
	votedownsvg.classList.add('iconArrowUpLg');

	voteupsvg.setAttribute('width', '36');
	voteupsvg.setAttribute('height', '36');
	voteupsvg.setAttribute('viewBox', '0 0 36 36');
	votedownsvg.setAttribute('width', '36');
	votedownsvg.setAttribute('height', '36');
	votedownsvg.setAttribute('viewBox', '0 0 36 36');

	voteupsvg.children[0].setAttribute('d', 'M2 25h32L18 9 2 25Z');
	votedownsvg.children[0].setAttribute('d', 'M2 11h32L18 27 2 11Z');
}
