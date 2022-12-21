import drawersJpg from "./assets/drawers.jpg";
import avatarMichelleJpg from "./assets/avatar-michelle.jpg";
import iconShareSvg from "./assets/icon-share.svg";
import iconFacebookSvg from "./assets/icon-facebook.svg";
import iconTwitterSvg from "./assets/icon-twitter.svg";
import iconPrinterest from "./assets/icon-pinterest.svg";
import { useState } from "react";

const Avatar = () => {
	return (
		<div className="flex">
			<img
				className="rounded-full h-full aspect-square mr-4 aria-hidden:"
				src={avatarMichelleJpg}
				alt=""
			/>
			<div className="flex flex-col p-1 justify-between h-full">
				<h2 className="text-Very_Dark_Grayish_Blue font-bold">
					Michelle Appleton
				</h2>
				<p className="text-Grayish_Blue">28 Jun 2020</p>
			</div>
		</div>
	);
};

const Share = () => {
	return (
		<div className="flex items-center " id="share">
			<h2 className="tracking-[0.75em] mr-4">SHARE</h2>
			<a href="#">
				<img src={iconFacebookSvg} alt="iconFacebook" />
			</a>
			<a href="#">
				<img src={iconTwitterSvg} alt="iconTwitter" />
			</a>
			<a href="#">
				<img src={iconPrinterest} alt="" />
			</a>
		</div>
	);
};

const Card = () => {
	const [shareActive, setShareActive] = useState(false);
	const handleOnClick = () => {
		const elem = document.getElementById("color");
		if (elem === null) return;
		if (shareActive) elem.classList.remove("shareActive");
		else elem.classList.add("shareActive");
		setShareActive(!shareActive);
	};
	return (
		<div
			className="w-4/5 h-4/5 min-w-[300px] max-w-[400px] max-h-[700px] bg-white rounded-lg flex flex-col 
        md:flex-row md:w-3/5 md:h-2/5 md:max-w-[800px] md:max-h-none md:min-w-[600px] md:min-h-[350px]"
		>
			<div className="w-full h-2/5 md:full md:h-full rounded-[inherit] md:rounded-r-none md:overflow-hidden">
				<img
					src={drawersJpg}
					alt=""
					className="w-full h-full rounded-t-lg md:relative md:left-6 md:rounded-t-none md:rounded-l-lg md:scale-125"
				/>
			</div>
			<div className="flex flex-col justify-between h-3/5 font-sans font-medium text-[13px] text-Desaturated_Dark_Blue md:h-full">
				<div className="mx-8 relative top-8">
					<h1 className="font-bold text-lg tracking-wider text-Very_Dark_Grayish_Blue">
						Shift the overall look and feel by adding these
						wonderful touches to furniture in your home
					</h1>

					<p className="tracking-wide relative top-4">
						Ever been in a room and felt like something was missing?
						Perhaps it felt slightly bare and uninviting. I’ve got
						some simple tips to help you make any room feel
						complete.
					</p>
				</div>
				<div id="color" className="transition-all">
					<div className="flex justify-between w-full h-12 px-8 my-4">
						{shareActive ? <Share /> : <Avatar />}
						<button
							type="button"
							id="shareBtn"
							className="flex justify-center items-center bg-Light_Grayish_Blue aspect-square rounded-full h-full"
							onClick={handleOnClick}
						>
							<img
								className="scale-125"
								src={iconShareSvg}
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
