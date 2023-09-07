import BrandImage from '../components/BrandImage';
import ProjectSummary from '../components/ProjectSummary';

export default function Home() {
  	return (
		<main className="flex-grow flex flex-col lg:flex-row justify-evenly bg-malibu-700">
			<section className="mx-8 my-auto py-8 text-center">
				<div className="pb-8">
					<BrandImage image="/brand/logo-transparent.png" imageWidth={400} imageHeight={153} />
				</div>
				<div className="mx-auto max-w-[512px] space-y-4">
					<p>Vink Web Development offers professional web development and design services, specialising in &apos;Crafting Digital Nests&apos; for individuals and businesses in Australia</p>
					<p>Led by Jordan Vink, a full stack web developer</p>
				</div>
			</section>
			<section className="mx-8 my-auto py-8">
				<div className="space-y-8">
					<ProjectSummary
						title="Myxos and Musings Book Sale"
						image="/work/myxos-and-musings/myxos-and-musings.jpg"
						imagePadding={false}
						imageWidth={512}
						imageHeight={192}
						summary="Developed the front end, back end, and payment system for the sale of the Myxos and Musings book."
						linkId="/work#myxos-and-musings" />
					<ProjectSummary
						title="Wamos Portugal Web Development Intern"
						image="/work/wamos-portugal/wamos-portugal.png"
						imagePadding={true}
						imageWidth={238}
						imageHeight={77}
						summary="Four month internship at Wamos Portugal, tasked with completing an internal security test and the rework of a data table interface."
						linkId="/work#wamos-portugal" />
				</div>
			</section>
		</main>
  	);
};
