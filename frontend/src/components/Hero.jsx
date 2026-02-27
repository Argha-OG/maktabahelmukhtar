import HeroAdsSlider from "./HeroAdsSlider";
import { ArrowRight } from "lucide-react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations('Navbar'); // Or appropriate translation namespace

    return (
        <>
            <section className="relative bg-scholarly-blue-950 text-white py-24 overflow-hidden min-h-[90vh] flex items-center">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] z-0 opacity-20"></div>
                <img
                    alt="Islamic Manuscript Library"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay"
                    src="https://images.unsplash.com/photo-1584285406059-009cff98124b?q=80&w=2070&auto=format&fit=crop"
                />

                <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center mt-10">
                    <div className="space-y-6">
                        <div className="inline-block border border-gold-500 px-3 py-1 rounded-full text-xs text-gold-500 font-medium tracking-widest uppercase mb-2">
                            Since 2011
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
                            Preserving <span className="text-gold-500 italic">Knowledge</span>, <br /> Spreading Light
                        </h2>
                        <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
                            Maktabah El Mukhtar is a premier Islamic institution dedicated to writing, editing, and publishing scholarly works. We bridge tradition with modernity.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/books" className="bg-gold-500 text-scholarly-blue-950 px-8 py-3 rounded-md font-semibold hover:bg-white transition-all flex items-center gap-2">
                                Browse Collection
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/services" className="border border-white/30 text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-all">
                                Our Services
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl relative overflow-hidden group hover:bg-white/15 transition-all duration-500">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-serif mb-6 text-gold-500 border-b border-white/10 pb-4">Vision & Mission</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                    Vision
                                </h4>
                                <p className="text-blue-100 text-sm">To be a leading beacon of authentic Islamic scholarship, nurturing intellect through the written word.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                    Mission
                                </h4>
                                <ul className="text-blue-100 text-sm list-disc pl-5 space-y-1">
                                    <li>Publish high-quality academic and spiritual texts.</li>
                                    <li>Provide professional editing and writing services.</li>
                                    <li>Facilitate easy access to knowledge globally.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Render the original Ads Slider below the hero so admin ads still show */}
            <section className="bg-sand-50 pt-10">
                <div className="container mx-auto px-4 relative z-10">
                    <HeroAdsSlider />
                </div>
            </section>
        </>
    );
}
