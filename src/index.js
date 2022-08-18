import './css/styles.css';

import "simplelightbox/dist/simple-lightbox.min.css";


import { refs } from './refs'
import { getPictures, getMorePictures } from './getImg'


refs.btnLoadMore.classList.add("visually-hidden")

refs.form.addEventListener('submit', getPictures)


refs.gallery.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.nodeName !== "IMG") { return }
})


