const About = () => {
  return (
    <section id="despre" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="mb-6">
            Despre <span className="text-gradient">Mine</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sunt un dezvoltator full stack pasionat de crearea de experiențe web 
              excepționale. Cu o experiență solidă în dezvoltarea de aplicații moderne, 
              aduc idei la viață prin cod elegant și eficient.
            </p>
            <p>
              Specializarea mea include dezvoltarea de aplicații React cu TypeScript, 
              integrări API complexe, și implementarea de soluții scalabile în cloud. 
              Sunt mereu la curent cu cele mai noi tehnologii și best practices din industrie.
            </p>
            <p>
              Când nu scriu cod, îmi place să explorez noi framework-uri, să contribui la 
              proiecte open-source și să îmi împărtășesc cunoștințele cu comunitatea tech.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Ani experiență", value: "5+" },
            { label: "Proiecte finalizate", value: "50+" },
            { label: "Clienți mulțumiți", value: "30+" },
            { label: "Tehnologii", value: "20+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
