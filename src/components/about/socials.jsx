import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">


			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>
			<div className="social">
				<a
					href={"https://mail.google.com/"}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Send a Mail</div>
				</a>
			</div>
			<div className="social">
				<a
					// href={""}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faPhone}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Contact: 6302816551</div>
				</a>
			</div>




		</div>
	);
};

export default Socials;
