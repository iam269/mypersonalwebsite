import { certifications } from "@/data/certifications";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certificari" className="section-container">
      <div className="mb-12">
        <Badge variant="outline" className="mb-4 text-primary border-primary/30">
          <Award className="w-3 h-3 mr-1" />
          Certificări
        </Badge>
        <h2 className="mb-4">
          Certificări <span className="text-gradient">Profesionale</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Certificări și diplome obținute pentru a-mi valida cunoștințele și competențele tehnice.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <Card
            key={cert.id}
            className="card-hover border-border/50 bg-card/50 backdrop-blur-sm group"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-muted rounded-lg p-3">
                <img
                  src={cert.logo}
                  alt={`${cert.institution} logo`}
                  className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {cert.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-2">
                {cert.institution}
              </p>
              
              <Badge variant="secondary" className="mb-4 text-xs">
                {cert.date}
              </Badge>
              
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Vezi certificat
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
