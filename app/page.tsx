import BrandImage from '../components/BrandImage';
import ProjectSummary from '../components/ProjectSummary';

export default function Home() {
  	return (
		<main className="flex-grow bg-slate-700">
			<section className="px-8 pt-16 text-center">
				<div className="pb-8">
					<BrandImage image="/brand/logo-transparent.png" imageWidth={400} imageHeight={153} />
				</div>
				<div className="mx-auto w-[512px] space-y-4">
					<p>Vink Web Development is an Australian web development and design company focused on &apos;Crafting Digital Nests&apos;</p>
					<p>The company is run by Jordan Vink, a full stack web developer</p>
				</div>
			</section>
			<section className="px-8 py-16">
				<div className="mx-8 md:mx-16 lg:mx-32 mb-16 bg-gradient-to-r from-transparent via-white to-transparent py-px">
					<div className="py-4 w-full h-full bg-slate-700">
						<h1 className="text-center text-xl">Check Out What I Have Worked On Recently</h1>
					</div>
				</div>
				<div className="space-y-8">
					<ProjectSummary
						title="Myxos and Musings Book Sale"
						image="/work/myxos-and-musings/myxos-and-musings.jpg"
						imagePadding={false}
						imageWidth={512}
						imageHeight={192}
						summary="Managed pricing and design for the sale of the Myxos and Musings book."
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
