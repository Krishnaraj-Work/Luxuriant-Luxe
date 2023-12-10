import { Carousel, IconButton } from "@material-tailwind/react";
import { IconMoodSadFilled } from "@tabler/icons-react";

export function ProductCarousel(props) {
	const images = props.images;
	return (
		<Carousel
			className="rounded-xl"
			autoplay={true}
			autoplayDelay={2000}
			loop={true}
		>
			{images && images.length > 0 ? (
				images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`image ${index + 1}`}
						className="h-full w-full object-cover rounded-xl"
					/>
				))
			) : (
				<div className="flex justify-center h-32 min-h-16">
					<IconMoodSadFilled className="text-9xl" />
				</div>
			)}
		</Carousel>
	);
}
