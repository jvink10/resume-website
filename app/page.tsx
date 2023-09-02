import ProjectSummary from '../components/ProjectSummary';

export default function Home() {
  	return (
		<main className="flex-grow bg-slate-700">
			<section>
				
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
