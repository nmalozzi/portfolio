import React, {useState} from "react";
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
			slide: number
		});
	}

	return (
		<ul>


			{projects.map(project => (
				<li key={project.title.replace(/ /g, "")} className={style.project}>
					<div className={style.details}>
						<h5>{project.title}</h5>
						<p className={"small"}>{project.description}</p>
						{project.images &&
							<div>
								{project.images.map((image, index) => (
									<button onClick={() => openLightboxOnSlide(index)}>
										<img src={image.url} alt={image.title}/>
									</button>
								))}


								<FsLightbox
									toggler={lightboxController.toggler}
									sources={project.images.map(image => (image.url))}
								/>
							</div>
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
