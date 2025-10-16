import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export default function NewsGhanaNaturalResources() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl mb-2">Ghana government reaffirms commitment to safe, sustainable management of natural resources</CardTitle>
            <CardDescription className="mb-2 text-slate-600">October 16, 2025 | Source: GNA</CardDescription>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent>
            <p className="mb-4">Alhaji Yusif Sulemana, the Deputy Minister of Lands and Natural Resources, has reaffirmed government’s commitment to the safe and sustainable management of Ghana’s natural resources. The government will ensure a balance between industrial development and environmental protection.</p>
            <p className="mb-4">He spoke at the opening of a five-day International symposium on Naturally Occurring Radioactive Material (NORM XI) in Accra, themed: <b>“Broadening Optimisation in Industrial Processes Involving NORM: A Focus on Sustainability in Extractive Industries.”</b></p>
            <p className="mb-4">The symposium provides a platform for industry, technical, scientific, academia, and regulatory bodies involved in the management of NORM to discuss current issues and share scientific and technical knowledge. Ghana is the second African country, after Morocco, to host this prestigious global event, reflecting its growing reputation as a hub for scientific excellence, environmental stewardship, and radiation safety in Africa.</p>
            <p className="mb-4">Sulemana highlighted the importance of natural resources to economic and industrial growth, emphasizing that extraction and processing must be guided by strict safety and sustainability measures to prevent overexploitation. He noted that NORM is prevalent in several sectors in Ghana, including mining, oil and gas, fertilizer production, cement manufacturing, water treatment, and scrap metal recycling. These sectors contribute significantly to national development, but their by-products can contain radionuclides that pose occupational and environmental risks if not properly managed.</p>
            <p className="mb-4">The Deputy Minister described the symposium as a vital platform for collaboration among scientists, regulators, industry practitioners, and policymakers to share knowledge, strengthen regulatory frameworks, and build technical capacity for effective and sustainable management of NORM. He encouraged participants to engage actively, exchange ideas, and develop actionable strategies that integrate scientific research, policy, and industrial practice to enhance radiation protection and promote sustainable industry operations.</p>
            <p className="mb-4">He assured of Ghana’s continued collaboration with international partners, particularly the International Atomic Energy Agency (IAEA), to strengthen national capacity in radiation safety and environmental management. "As a government, we remain firmly committed to supporting your research, innovation, and regulation in this field. We will continue to build partnerships that ensure the benefits of industrial development are achieved without compromising the health of our people or the integrity of our environment," he said.</p>
            <Separator className="my-4" />
            <h3 className="text-xl font-semibold mb-2">Symposium Highlights</h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700">
              <li>Ghana hosts NORM XI, the first time in Sub-Saharan Africa</li>
              <li>Focus on sustainability, safety, and innovation in extractive industries</li>
              <li>Collaboration among scientists, regulators, and industry</li>
              <li>Emphasis on regulatory harmonisation and best practices</li>
            </ul>
            <p className="mb-4">Professor Samuel Dampare, President of NORM XI, noted that the NORM symposia have evolved into a globally coordinated framework addressing regulation, safety, sustainability, and innovation. He emphasized the importance of experience sharing, regulatory harmonisation, and best practices in occupational protection, environmental monitoring, remediation, and stakeholder engagement.</p>
            <p className="mb-4">"May we be driven by the understanding that in broadening optimisation, we stand not only for efficiency, but also responsibility, stewardship, and shared progress. Every optimised process brings us closer to a world where industry and the environment thrive together," he said.</p>
          </CardContent>
        </Card>
        <a href="https://www.ghanabusinessnews.com/2025/10/16/ghana-government-reaffirms-commitment-to-safe-sustainable-management-of-natural-resources/" target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 hover:text-blue-800 font-medium">Read the full article on Ghana Business News</a>
      </div>
    </div>
  );
}
