import HeroAdsSlider from "./HeroAdsSlider";

export default function Hero() {
    return (
        <section className="relative overflow-hidden mb-12">
            <div className="container mx-auto px-4 relative z-10">
                <HeroAdsSlider />
            </div>

            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse -z-0"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000 -z-0"></div>
        </section>
    );
}
