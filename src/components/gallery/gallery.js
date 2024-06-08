import React, {useState} from "react";
import FsLightbox from "fslightbox-react";
import PropTypes from "prop-types"
import * as style from "./gallery.module.scss"

const Gallery = ({images}) => {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number + 1
		});
	}

	return (
		<div className={style.gallery}>
			{images.map((image, index) => (
				<button key={index} className={style.thumb} onClick={() => openLightboxOnSlide(index)}>
					<img src={"../../portfolio/" + image.url} alt={image.description}/>
				</button>
			))}
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={images.map(image => ("../../portfolio/" + image.url))}
				captions={images.map(image => (image.description))}
				slide={lightboxController.slide}
				disableBackgroundClose={true}
			/>
		</div>
	)
}

Gallery.propTypes = {
	images: PropTypes.array.isRequired,
}

export default Gallery
