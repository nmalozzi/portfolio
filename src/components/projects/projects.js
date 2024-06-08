import React, {useState} from "react";
import Gallery from "../gallery/gallery";
import FsLightbox from "fslightbox-react";
import PropTypes from "prop-types"
import * as style from "./projects.module.scss"

const Projects = ({projects}) => {
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
		<ul>
			{projects.map((project, index) => (
				<li key={project.title.replace(/ /g, "") + index} className={style.project}>
					<div className={style.details}>
						<h5>{project.title}</h5>
						<p className={"small"}>{project.description}</p>
						{project.images &&
							<Gallery
								images={project.images}
							/>
						}
					</div>
				</li>
			))}
		</ul>
	)
}

Projects.propTypes = {
	projects: PropTypes.array.isRequired,
}

export default Projects
