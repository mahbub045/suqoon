import { Features } from "@/Data/Home/AboutSectionFeatures/AboutSectionFeatures";

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="my-auto animate-fade-in-right opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <p className="text-sm font-semibold tracking-wide uppercase mb-4 text-primary">
              ABOUT SUQOON
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Transforming Dreams <br />
              <span className="text-primary">Into Reality</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed pr-0 lg:pr-7 text-justify">
              SUQOON Real Estate is a premier land development company specializing in land share investments and comprehensive land development solutions. With years of experience, we've helped countless investors build their wealth through strategic property investments.
            </p>
            <p className="text-gray-600 text-base leading-relaxed pr-0 lg:pr-7 text-justify">
              Our commitment to transparency, quality, and customer satisfaction sets us apart. We believe in creating lasting value for our clients while building sustainable communities for the future.
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {Features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition-shadow animate-scale-in animate-delay-${index}`}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-justify leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;