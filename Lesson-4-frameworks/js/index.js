const btn = document.getElementById('but')

btn.addEventListener('click', e => {
    const instance = basicLightbox.create(`
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`, {
        closable: true
    })
    instance.show();
})