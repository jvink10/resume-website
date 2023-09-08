import BrandImage from '../components/BrandImage';
import WorkCard from '../components/WorkCard';
import AboutCard from '../components/AboutCard';
import HeadingBox from '../components/HeadingBox';

export default function Home() {
  	return (
		<main className="flex-grow bg-malibu-900">
			<section className="flex flex-col lg:flex-row justify-evenly my-16">
				<div className="mx-8 my-auto py-8 text-center">
					<div className="pb-8">
						<BrandImage image="/brand/logo-transparent.png" imageWidth={400} imageHeight={153} />
					</div>
					<div className="mx-auto max-w-[512px] space-y-4">
						<p>Vink Web Development offers professional web development and design services, specialising in &apos;Crafting Digital Nests&apos; for individuals and businesses in Australia</p>
						<p>Led by Jordan Vink, a full stack web developer</p>
					</div>
				</div>
				<div className="mx-8 my-auto py-8">
					<div className="space-y-8">
						<WorkCard
							title="Myxos and Musings Book Sale"
							image="/work/myxos-and-musings/myxos-and-musings.jpg"
							imagePadding={false}
							imageWidth={512}
							imageHeight={192}
							summary="Developed the front end, back end, and payment system for the sale of the Myxos and Musings book."
							linkId="/work#myxos-and-musings" />
						<WorkCard
							title="Wamos Portugal Web Development Intern"
							image="/work/wamos-portugal/wamos-portugal.png"
							imagePadding={true}
							imageWidth={238}
							imageHeight={77}
							summary="Four month internship at Wamos Portugal, tasked with completing an internal security test and the rework of a data table interface."
							linkId="/work#wamos-portugal" />
					</div>
				</div>
			</section>
			<section className="my-16 py-16 bg-white">
				<div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start space-y-16 lg:space-y-0">
					<div>
						<AboutCard
							title="Education"
							summary="Find out about what steps Jordan has taken to get here."
							linkId="/about#background" />
					</div>
					<div>
						<AboutCard
							title="Future Plans"
							summary="See his plans for how to push his skills further."
							linkId="/about#improvement" />
					</div>
					<div>
						<AboutCard
							title="Interests"
							summary="Interested in what Jordan does in his spare time?"
							linkId="/about#interests" />
					</div>
				</div>
			</section>
		</main>
  	);
};
