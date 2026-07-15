export type Locale = "en" | "de";

export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
};

export type Service = {
  slug: "functional-safety" | "industrial-cybersecurity" | "mbse";
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  cardText: string;
  hero: string;
  cardImage: string;
  intro: string[];
  highlights: string[];
  sections: ContentSection[];
};

export type PageData = {
  kind: "home" | "solutions" | "service" | "about" | "contact" | "legal" | "privacy" | "not-found";
  locale: Locale;
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  service?: Service;
};

export const company = {
  name: "Sigmology GmbH",
  addressLine: "Im Ahorn 13",
  postalLine: "8125 Zollikerberg",
  country: "Switzerland",
  countryDe: "Schweiz",
  phoneDisplay: "+41 (0) 44 572 32 88",
  phoneHref: "tel:+41445723288",
  email: "info@sigmology.ch",
  emailHref: "mailto:info@sigmology.ch",
  linkedin: "https://www.linkedin.com/company/sigmologygmbh",
  registerNumber: "CHE-426.420.535",
  vatNumber: "CHE-426.420.535 MWST"
};

export const ui = {
  en: {
    languageName: "English",
    otherLanguage: "Deutsch",
    skip: "Skip to content",
    menu: "Menu",
    close: "Close menu",
    nav: [
      { label: "Home", path: "/" },
      { label: "Expertise", path: "/solutions/" },
      { label: "About", path: "/about/" },
      { label: "Contact", path: "/contact/" }
    ],
    contact: "Talk to us",
    services: "Our expertise",
    viewService: "Explore this service",
    allServices: "View all expertise",
    footerText: "Independent expertise for safe, secure and dependable industrial systems.",
    legal: "Legal notice",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
    linkedin: "Follow Sigmology on LinkedIn"
  },
  de: {
    languageName: "Deutsch",
    otherLanguage: "English",
    skip: "Zum Inhalt springen",
    menu: "Menü",
    close: "Menü schliessen",
    nav: [
      { label: "Start", path: "/de/" },
      { label: "Expertise", path: "/de/solutions/" },
      { label: "Über uns", path: "/de/about/" },
      { label: "Kontakt", path: "/de/contact/" }
    ],
    contact: "Gespräch vereinbaren",
    services: "Unsere Expertise",
    viewService: "Leistung entdecken",
    allServices: "Gesamte Expertise",
    footerText: "Unabhängige Expertise für sichere und zuverlässige industrielle Systeme.",
    legal: "Impressum",
    privacy: "Datenschutzerklärung",
    rights: "Alle Rechte vorbehalten.",
    linkedin: "Sigmology auf LinkedIn folgen"
  }
} satisfies Record<Locale, unknown>;

export const services: Record<Locale, Service[]> = {
  en: [
    {
      slug: "functional-safety",
      title: "Functional Safety — IEC 61511",
      shortTitle: "Functional Safety",
      eyebrow: "Protecting people and assets",
      description: "Functional safety consulting, analysis, verification and training across the safety lifecycle.",
      cardText: "From hazard analysis and SIL assignment to verification and training.",
      hero: "functional-safety-hero.webp",
      cardImage: "functional-safety-card.webp",
      intro: [
        "Functional safety prevents hazardous events by ensuring that a process reaches or maintains a safe state when normal control is no longer sufficient.",
        "We support organisations throughout the IEC 61511 safety lifecycle—from hazard analysis and SIL assignment to safety requirements, verification and training. Our work is designed to integrate with existing engineering processes and give teams clear, defensible results."
      ],
      highlights: [
        "Functional safety management",
        "HAZOP and process hazard analysis",
        "SIL assignment and verification",
        "Safety requirements specifications",
        "LOPA, FMEA and fault-tree analysis",
        "IEC 61511 training"
      ],
      sections: [
        {
          title: "Functional safety management",
          paragraphs: [
            "IEC 61511 defines a lifecycle for safety instrumented systems, beginning with risk assessment and the allocation of safety functions and continuing through design, operation, modification and decommissioning.",
            "We help determine which lifecycle phases apply, define the activities and responsibilities for each phase, and establish practical governance that fits the organisation rather than competing with it."
          ]
        },
        {
          title: "Hazard analysis and SIL assignment",
          paragraphs: [
            "A HAZOP is a systematic method for identifying hazardous deviations in planned or existing processes. We prepare and facilitate focused workshops, document the results and help evaluate the identified risks using appropriate methods such as risk matrices, SIL risk graphs or LOPA.",
            "Where a safety instrumented function is required, we support the assignment of its Safety Integrity Level and provide a transparent rationale for the decision."
          ]
        },
        {
          title: "Safety requirements and SIL verification",
          paragraphs: [
            "A reliable safety function requires more than a SIL target. Its safe state, response time, architecture, proof-test interval and operating assumptions must all be specified clearly.",
            "Based on your design documentation, we verify the probability of failure and architectural constraints, assess the supporting reliability data and identify efficient ways to close any gaps."
          ],
          image: "sil-chart.webp",
          imageAlt: "Safety Integrity Level chart"
        },
        {
          title: "Training grounded in practice",
          paragraphs: [
            "Our IEC 61511 training is intended for plant designers and operators, project managers, process engineers, control-system developers and people with functional-safety responsibilities. The scope can be adapted to your team and project context."
          ],
          bullets: [
            "Functional safety standards and lifecycle",
            "HAZOP, LOPA and risk assessment",
            "SIL classification and safety requirements",
            "Design and verification of safety functions"
          ]
        }
      ]
    },
    {
      slug: "industrial-cybersecurity",
      title: "Industrial Cybersecurity — IEC 62443",
      shortTitle: "Industrial Cybersecurity",
      eyebrow: "Securing connected operations",
      description: "Risk assessment, security programmes and secure product development for industrial automation and control systems.",
      cardText: "Protecting industrial systems without losing sight of availability and safety.",
      hero: "cybersecurity-hero.webp",
      cardImage: "cybersecurity-card.webp",
      intro: [
        "Industrial cybersecurity protects hardware, software, networks and data while respecting the availability, reliability and safety priorities of operational technology.",
        "As IT and OT converge, cyber incidents can create operational, financial, environmental and safety consequences. IEC 62443 provides a structured framework for understanding these risks and selecting proportionate controls."
      ],
      highlights: [
        "IEC 62443 risk assessments",
        "Zones and conduits",
        "Security level assignment",
        "Cybersecurity management systems",
        "Secure development lifecycles",
        "Security requirements and countermeasures"
      ],
      sections: [
        {
          title: "Industrial cybersecurity risk assessment",
          paragraphs: [
            "We establish an understandable view of the system architecture, identify zones and conduits, and assign current and target security levels. This creates a common foundation for engineering, operations and management.",
            "Threat scenarios, vulnerabilities and existing countermeasures are then assessed to identify the assets and functions most at risk. The result is a documented risk picture and a prioritised set of recommendations."
          ]
        },
        {
          title: "An IACS security programme that can be sustained",
          paragraphs: [
            "A cybersecurity management system turns a one-off assessment into an ongoing capability. We help define roles, policies, training, incident processes, technical countermeasures and the metrics needed to monitor and improve performance.",
            "The objective is a programme that remains aligned with business and operational goals—not a parallel system of paperwork."
          ]
        },
        {
          title: "Secure product development",
          paragraphs: [
            "For suppliers of industrial components and systems, IEC 62443 provides process and technical requirements for secure product development. We help teams establish a secure development lifecycle, translate target security levels into actionable requirements and prepare evidence for assessment or certification."
          ]
        }
      ]
    },
    {
      slug: "mbse",
      title: "Model-Based Systems Engineering",
      shortTitle: "Model-Based Systems Engineering",
      eyebrow: "Making complexity understandable",
      description: "Practical MBSE and SysML expertise for architecture, analysis, verification and engineering automation.",
      cardText: "Connecting requirements, architecture, analysis and verification in one coherent model.",
      hero: "mbse-hero.webp",
      cardImage: "mbse-card.webp",
      intro: [
        "Model-Based Systems Engineering applies modelling throughout the system lifecycle to support requirements, architecture, analysis, verification and validation.",
        "A well-designed model replaces disconnected documents with a coherent source of engineering knowledge. It makes relationships visible, improves traceability and enables analyses that would otherwise depend on repetitive manual work."
      ],
      highlights: [
        "Systems modelling with SysML",
        "Architecture and requirements modelling",
        "Custom profiles and metamodels",
        "Cameo Systems Modeler consulting",
        "Plugin and automation development",
        "Model-based safety and security analysis"
      ],
      sections: [
        {
          title: "Models that serve engineering decisions",
          paragraphs: [
            "We help teams define modelling approaches that answer real engineering questions. This includes structuring requirements, system architecture, interfaces, behaviours, verification cases and analysis results so that the model remains useful and maintainable.",
            "Our focus is not modelling for its own sake. The model should reduce ambiguity, expose inconsistencies and support faster, better-informed decisions."
          ]
        },
        {
          title: "Profiles, plugins and automation",
          paragraphs: [
            "We have extensive experience with SysML and Cameo Systems Modeler, including custom profiles, metamodels and plugins. Tailored automation can turn repetitive analysis, reporting and consistency checks into reliable, repeatable workflows."
          ]
        },
        {
          title: "Connecting safety, security and systems engineering",
          paragraphs: [
            "Safety and cybersecurity analyses depend on the same underlying understanding of the system. MBSE provides the structure needed to connect hazards, threats, functions, components, requirements and verification evidence.",
            "This integrated perspective is central to Sigmology: one system model, used to understand risk across disciplines."
          ]
        }
      ]
    }
  ],
  de: []
};

services.de = [
  {
    ...services.en[0],
    title: "Funktionale Sicherheit — IEC 61511",
    shortTitle: "Funktionale Sicherheit",
    eyebrow: "Menschen und Anlagen schützen",
    description: "Beratung, Analyse, Verifikation und Schulung entlang des gesamten Sicherheitslebenszyklus.",
    cardText: "Von der Gefährdungsanalyse und SIL-Einstufung bis zur Verifikation und Schulung.",
    intro: [
      "Funktionale Sicherheit verhindert gefährliche Ereignisse, indem ein Prozess einen sicheren Zustand erreicht oder beibehält, wenn die normale Steuerung nicht mehr ausreicht.",
      "Wir begleiten Unternehmen entlang des Sicherheitslebenszyklus nach IEC 61511 – von der Gefährdungsanalyse und SIL-Einstufung über die Spezifikation der Sicherheitsanforderungen bis zur Verifikation und Schulung. Unsere Arbeit fügt sich in bestehende Engineering-Prozesse ein und liefert klare, belastbare Ergebnisse."
    ],
    highlights: [
      "Management der funktionalen Sicherheit",
      "HAZOP- und Prozessgefahrenanalysen",
      "SIL-Einstufung und SIL-Verifikation",
      "Spezifikation der Sicherheitsanforderungen",
      "LOPA, FMEA und Fehlerbaumanalyse",
      "Schulungen nach IEC 61511"
    ],
    sections: [
      {
        title: "Management der funktionalen Sicherheit",
        paragraphs: [
          "IEC 61511 definiert einen Lebenszyklus für sicherheitstechnische Systeme. Er beginnt mit der Risikobeurteilung und der Zuordnung von Sicherheitsfunktionen und umfasst Auslegung, Betrieb, Änderungen und Ausserbetriebnahme.",
          "Wir klären, welche Phasen anwendbar sind, definieren die jeweiligen Aufgaben und Verantwortlichkeiten und schaffen eine praxistaugliche Organisation, die zur bestehenden Unternehmensstruktur passt."
        ]
      },
      {
        title: "Gefährdungsanalyse und SIL-Einstufung",
        paragraphs: [
          "Eine HAZOP-Studie ist eine systematische Methode, um gefährliche Abweichungen in geplanten oder bestehenden Prozessen zu erkennen. Wir bereiten fokussierte Workshops vor, moderieren sie, dokumentieren die Ergebnisse und unterstützen die Bewertung mit geeigneten Methoden wie Risikomatrix, SIL-Risikograph oder LOPA.",
          "Ist eine sicherheitstechnische Funktion erforderlich, begleiten wir die Einstufung ihres Safety Integrity Level und sorgen für eine transparente, nachvollziehbare Begründung."
        ]
      },
      {
        title: "Sicherheitsanforderungen und SIL-Verifikation",
        paragraphs: [
          "Eine zuverlässige Sicherheitsfunktion braucht mehr als einen SIL-Zielwert. Sicherer Zustand, Reaktionszeit, Architektur, Prüfintervall und betriebliche Annahmen müssen eindeutig festgelegt sein.",
          "Auf Basis Ihrer Planungsunterlagen prüfen wir Ausfallwahrscheinlichkeit und Architekturvorgaben, beurteilen die verwendeten Zuverlässigkeitsdaten und zeigen effiziente Wege auf, um allfällige Lücken zu schliessen."
        ],
        image: "sil-chart.webp",
        imageAlt: "Darstellung der Safety Integrity Levels"
      },
      {
        title: "Schulungen mit Praxisbezug",
        paragraphs: [
          "Unsere Schulungen nach IEC 61511 richten sich an Anlagenplaner und -betreiber, Projektleitende, Prozessingenieurinnen und -ingenieure, Leittechnik-Fachpersonen sowie Verantwortliche für funktionale Sicherheit. Umfang und Vertiefung stimmen wir auf Ihr Team und Ihr Projekt ab."
        ],
        bullets: [
          "Normen und Sicherheitslebenszyklus",
          "HAZOP, LOPA und Risikobeurteilung",
          "SIL-Einstufung und Sicherheitsanforderungen",
          "Auslegung und Verifikation von Sicherheitsfunktionen"
        ]
      }
    ]
  },
  {
    ...services.en[1],
    title: "Industrielle Cybersicherheit — IEC 62443",
    shortTitle: "Industrielle Cybersicherheit",
    eyebrow: "Vernetzte Anlagen sicher betreiben",
    description: "Risikobeurteilung, Security-Programme und sichere Produktentwicklung für industrielle Automatisierungs- und Leitsysteme.",
    cardText: "Industrielle Systeme schützen, ohne Verfügbarkeit und Safety aus dem Blick zu verlieren.",
    intro: [
      "Industrielle Cybersicherheit schützt Hardware, Software, Netzwerke und Daten und berücksichtigt dabei die besonderen Anforderungen der Betriebstechnik an Verfügbarkeit, Zuverlässigkeit und Safety.",
      "Mit der zunehmenden Verbindung von IT und OT können Cybervorfälle betriebliche, finanzielle, ökologische und sicherheitsrelevante Folgen haben. IEC 62443 bietet einen strukturierten Rahmen, um diese Risiken zu verstehen und angemessene Schutzmassnahmen festzulegen."
    ],
    highlights: [
      "Risikobeurteilungen nach IEC 62443",
      "Zonen- und Conduit-Konzepte",
      "Festlegung von Security Levels",
      "Cybersecurity-Managementsysteme",
      "Sichere Entwicklungsprozesse",
      "Security-Anforderungen und Schutzmassnahmen"
    ],
    sections: [
      {
        title: "Risikobeurteilung für industrielle Cybersicherheit",
        paragraphs: [
          "Wir erarbeiten eine verständliche Sicht auf die Systemarchitektur, identifizieren Zonen und Conduits und legen aktuelle sowie angestrebte Security Levels fest. So entsteht eine gemeinsame Grundlage für Engineering, Betrieb und Management.",
          "Anschliessend bewerten wir Bedrohungsszenarien, Schwachstellen und bestehende Schutzmassnahmen. Das Ergebnis ist ein dokumentiertes Risikobild mit priorisierten Empfehlungen."
        ]
      },
      {
        title: "Ein tragfähiges IACS-Security-Programm",
        paragraphs: [
          "Ein Cybersecurity-Managementsystem entwickelt eine einmalige Beurteilung zu einer dauerhaften Fähigkeit weiter. Wir unterstützen bei Rollen, Richtlinien, Schulungen, Incident-Prozessen, technischen Massnahmen und Kennzahlen für die laufende Verbesserung.",
          "Ziel ist ein Programm, das mit den betrieblichen und wirtschaftlichen Zielen verbunden bleibt – kein paralleles System aus zusätzlicher Bürokratie."
        ]
      },
      {
        title: "Sichere Produktentwicklung",
        paragraphs: [
          "Für Anbieter industrieller Komponenten und Systeme definiert IEC 62443 Prozess- und Technik-Anforderungen an die sichere Produktentwicklung. Wir helfen Teams, einen Secure Development Lifecycle aufzubauen, Ziel-Security-Levels in konkrete Anforderungen zu übersetzen und Nachweise für Beurteilungen oder Zertifizierungen vorzubereiten."
        ]
      }
    ]
  },
  {
    ...services.en[2],
    title: "Modellbasierte Systementwicklung",
    shortTitle: "Modellbasierte Systementwicklung",
    eyebrow: "Komplexität verständlich machen",
    description: "Praktische MBSE- und SysML-Expertise für Architektur, Analyse, Verifikation und Engineering-Automatisierung.",
    cardText: "Anforderungen, Architektur, Analyse und Verifikation in einem konsistenten Modell verbinden.",
    intro: [
      "Model-Based Systems Engineering nutzt Modelle über den gesamten Systemlebenszyklus hinweg und unterstützt Anforderungen, Architektur, Analyse, Verifikation und Validierung.",
      "Ein gut aufgebautes Modell ersetzt voneinander getrennte Dokumente durch eine konsistente Quelle für Engineering-Wissen. Es macht Zusammenhänge sichtbar, verbessert die Nachverfolgbarkeit und ermöglicht Analysen, die sonst wiederholte manuelle Arbeit erfordern würden."
    ],
    highlights: [
      "Systemmodellierung mit SysML",
      "Architektur- und Anforderungsmodellierung",
      "Individuelle Profile und Metamodelle",
      "Beratung zu Cameo Systems Modeler",
      "Plugin- und Automatisierungsentwicklung",
      "Modellbasierte Safety- und Security-Analysen"
    ],
    sections: [
      {
        title: "Modelle für fundierte Engineering-Entscheide",
        paragraphs: [
          "Wir entwickeln mit Teams Modellierungsansätze, die konkrete Engineering-Fragen beantworten. Dazu strukturieren wir Anforderungen, Systemarchitektur, Schnittstellen, Verhalten, Verifikationsfälle und Analyseergebnisse so, dass das Modell nützlich und pflegbar bleibt.",
          "Modellierung ist für uns kein Selbstzweck. Das Modell soll Unklarheiten reduzieren, Widersprüche sichtbar machen und schnellere, besser begründete Entscheide ermöglichen."
        ]
      },
      {
        title: "Profile, Plugins und Automatisierung",
        paragraphs: [
          "Wir verfügen über umfassende Erfahrung mit SysML und Cameo Systems Modeler sowie mit individuellen Profilen, Metamodellen und Plugins. Massgeschneiderte Automatisierung macht wiederkehrende Analysen, Berichte und Konsistenzprüfungen zuverlässig reproduzierbar."
        ]
      },
      {
        title: "Safety, Security und Systems Engineering verbinden",
        paragraphs: [
          "Safety- und Cybersecurity-Analysen beruhen auf demselben Verständnis des Systems. MBSE schafft die Struktur, um Gefährdungen, Bedrohungen, Funktionen, Komponenten, Anforderungen und Verifikationsnachweise miteinander zu verknüpfen.",
          "Diese integrierte Sicht prägt Sigmology: ein Systemmodell, mit dem Risiken disziplinübergreifend verstanden werden."
        ]
      }
    ]
  }
];

export const homeCopy = {
  en: {
    eyebrow: "Safety · Security · Systems",
    title: "Engineering confidence into complex industrial systems.",
    lead: "Sigmology combines functional safety, industrial cybersecurity and model-based systems engineering to help organisations understand risk, make sound decisions and deliver dependable systems.",
    primaryCta: "Explore our expertise",
    secondaryCta: "Talk to us",
    introTitle: "One view of risk—from analysis to verification",
    intro: "Safety, cybersecurity and systems engineering are deeply connected. We bring them together through practical methods, strong standards knowledge and models that make complexity understandable.",
    capabilitiesTitle: "How we help",
    capabilities: [
      "Hazard and operability analysis (HAZOP)",
      "Failure modes and effects analysis (FMEA)",
      "SIL assignment and verification",
      "Layers of protection analysis (LOPA)",
      "Industrial cybersecurity risk assessment",
      "Secure product development",
      "SysML consulting and training",
      "Custom modelling profiles and plugins"
    ],
    values: [
      { title: "Standards expertise", text: "Experienced support across IEC 61511, IEC 62443 and the methods that put them into practice." },
      { title: "Connected disciplines", text: "A coherent view of safety, cybersecurity and system architecture—without artificial boundaries." },
      { title: "Practical delivery", text: "Focused work, clear evidence and recommendations your engineering teams can use." }
    ],
    teamTitle: "A focused team for demanding work",
    teamText: "Sigmology is led by two specialists whose expertise spans safety, reliability, cybersecurity and model-based systems engineering.",
    ctaTitle: "Have a complex system or risk question?",
    ctaText: "Tell us what you are working on. We will quickly establish whether our expertise fits your needs."
  },
  de: {
    eyebrow: "Safety · Security · Systems",
    title: "Vertrauen in komplexe industrielle Systeme schaffen.",
    lead: "Sigmology verbindet funktionale Sicherheit, industrielle Cybersicherheit und modellbasierte Systementwicklung. So helfen wir Unternehmen, Risiken zu verstehen, fundierte Entscheide zu treffen und zuverlässige Systeme zu realisieren.",
    primaryCta: "Unsere Expertise",
    secondaryCta: "Kontakt aufnehmen",
    introTitle: "Eine gemeinsame Sicht auf Risiken – von der Analyse bis zur Verifikation",
    intro: "Safety, Cybersecurity und Systems Engineering sind eng miteinander verbunden. Wir führen diese Disziplinen mit praxiserprobten Methoden, fundierter Normenkenntnis und verständlichen Modellen zusammen.",
    capabilitiesTitle: "So unterstützen wir Sie",
    capabilities: [
      "Gefährdungs- und Betriebsfähigkeitsanalyse (HAZOP)",
      "Fehlermöglichkeits- und Einflussanalyse (FMEA)",
      "SIL-Einstufung und SIL-Verifikation",
      "Schutzschichtanalyse (LOPA)",
      "Risikobeurteilung für industrielle Cybersicherheit",
      "Sichere Produktentwicklung",
      "SysML-Beratung und -Schulung",
      "Individuelle Modellierungsprofile und Plugins"
    ],
    values: [
      { title: "Fundierte Normenkenntnis", text: "Erfahrene Unterstützung rund um IEC 61511, IEC 62443 und ihre praktische Umsetzung." },
      { title: "Vernetzte Disziplinen", text: "Eine konsistente Sicht auf Safety, Cybersecurity und Systemarchitektur – ohne künstliche Grenzen." },
      { title: "Konkrete Ergebnisse", text: "Fokussierte Arbeit, nachvollziehbare Nachweise und Empfehlungen, die Engineering-Teams direkt nutzen können." }
    ],
    teamTitle: "Ein fokussiertes Team für anspruchsvolle Aufgaben",
    teamText: "Sigmology wird von zwei Fachpersonen geführt, deren Expertise Safety, Zuverlässigkeit, Cybersicherheit und modellbasierte Systementwicklung verbindet.",
    ctaTitle: "Arbeiten Sie an einem komplexen System oder einer anspruchsvollen Risikofrage?",
    ctaText: "Schildern Sie uns Ihre Aufgabe. Wir klären rasch, ob unsere Expertise zu Ihrem Bedarf passt."
  }
};

export const aboutCopy = {
  en: {
    title: "About Sigmology",
    eyebrow: "Built around an integrated idea",
    description: "Sigmology brings safety, cybersecurity and systems engineering together to help industrial organisations manage complexity and risk.",
    heading: "Safety and security are two perspectives on the same system.",
    paragraphs: [
      "Both disciplines seek to understand uncertainty, quantify risk and protect what matters. Functional safety focuses on people, the environment and physical assets. Cybersecurity protects systems, operations, data and intellectual property. In connected industrial environments, the two can no longer be treated independently.",
      "We founded Sigmology to bring these perspectives together. Model-Based Systems Engineering provides the connective structure: a way to relate architecture, functions, hazards, threats, requirements and evidence in one coherent view.",
      "Our aim is straightforward—to help clients make complex engineering work clearer, more efficient and more defensible. We value long-term working relationships, direct communication and results that stand up to scrutiny."
    ],
    principlesTitle: "How we work",
    principles: [
      { title: "Independent judgement", text: "Advice shaped by the engineering problem, not by a product or platform sales target." },
      { title: "Depth over noise", text: "Small, experienced teams working directly on the details that determine the outcome." },
      { title: "Knowledge that remains", text: "Methods, models and evidence designed to strengthen your organisation after the engagement ends." }
    ],
    teamTitle: "Co-founders",
    nadjaRole: "Safety and Reliability Specialist",
    johnRole: "Cybersecurity and MBSE Specialist"
  },
  de: {
    title: "Über Sigmology",
    eyebrow: "Gegründet auf einer integrierten Idee",
    description: "Sigmology verbindet Safety, Cybersecurity und Systems Engineering, damit Industrieunternehmen Komplexität und Risiken beherrschen können.",
    heading: "Safety und Security sind zwei Perspektiven auf dasselbe System.",
    paragraphs: [
      "Beide Disziplinen befassen sich mit Unsicherheit, bewerten Risiken und schützen, was wesentlich ist. Funktionale Sicherheit richtet den Blick auf Menschen, Umwelt und Sachwerte. Cybersicherheit schützt Systeme, Betrieb, Daten und geistiges Eigentum. In vernetzten Industrieumgebungen lassen sich beide nicht mehr unabhängig voneinander betrachten.",
      "Wir haben Sigmology gegründet, um diese Perspektiven zusammenzuführen. Model-Based Systems Engineering schafft die verbindende Struktur: Architektur, Funktionen, Gefährdungen, Bedrohungen, Anforderungen und Nachweise werden in einer konsistenten Sicht miteinander verknüpft.",
      "Unser Ziel ist einfach: komplexe Engineering-Arbeit klarer, effizienter und belastbarer zu machen. Wir schätzen langfristige Zusammenarbeit, direkte Kommunikation und Ergebnisse, die einer kritischen Prüfung standhalten."
    ],
    principlesTitle: "So arbeiten wir",
    principles: [
      { title: "Unabhängiges Urteil", text: "Unsere Empfehlungen richten sich nach der Engineering-Aufgabe – nicht nach dem Verkaufsziel eines Produkts oder einer Plattform." },
      { title: "Substanz statt Lärm", text: "Kleine, erfahrene Teams arbeiten direkt an den Details, die für das Ergebnis entscheidend sind." },
      { title: "Wissen, das bleibt", text: "Methoden, Modelle und Nachweise, die Ihre Organisation auch nach Abschluss des Auftrags stärken." }
    ],
    teamTitle: "Gründerteam",
    nadjaRole: "Spezialistin für Safety und Zuverlässigkeit",
    johnRole: "Spezialist für Cybersicherheit und MBSE"
  }
};

export const contactCopy = {
  en: {
    title: "Contact",
    eyebrow: "A direct line to the people doing the work",
    description: "Contact Sigmology about functional safety, industrial cybersecurity or model-based systems engineering.",
    heading: "Let’s discuss your engineering challenge.",
    intro: "Whether you have a focused question or a larger programme in mind, contact us directly by email or telephone.",
    emailLabel: "Email",
    phoneLabel: "Telephone",
    addressLabel: "Address",
    linkedinText: "For articles and company updates, follow Sigmology on LinkedIn.",
    availability: "Monday to Friday, 09:00–17:00 CET"
  },
  de: {
    title: "Kontakt",
    eyebrow: "Direkter Kontakt mit den verantwortlichen Fachpersonen",
    description: "Kontaktieren Sie Sigmology zu funktionaler Sicherheit, industrieller Cybersicherheit oder modellbasierter Systementwicklung.",
    heading: "Sprechen wir über Ihre Engineering-Aufgabe.",
    intro: "Ob konkrete Fachfrage oder umfangreicheres Vorhaben: Kontaktieren Sie uns direkt per E-Mail oder Telefon.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    addressLabel: "Adresse",
    linkedinText: "Fachbeiträge und Neuigkeiten von Sigmology finden Sie auf LinkedIn.",
    availability: "Montag bis Freitag, 09:00–17:00 Uhr MEZ"
  }
};

export const legalCopy = {
  en: {
    title: "Legal notice",
    description: "Legal information and company details for Sigmology GmbH.",
    companyDetails: "Company details",
    register: "Commercial register number",
    registerOffice: "Commercial Register Office of the Canton of Zurich",
    vat: "VAT number",
    disclaimerTitle: "Disclaimer",
    disclaimer: "We take care to keep the information on this website accurate and current. Nevertheless, Sigmology GmbH cannot guarantee that all content is complete, correct or continuously available. To the extent permitted by law, liability for material or immaterial damage arising from access to, use of, or inability to use this website is excluded.",
    linksTitle: "External links",
    links: "This website contains links to third-party websites. Their content and availability are outside our control. Responsibility for those websites rests with their respective operators.",
    copyrightTitle: "Copyright",
    copyright: "Unless otherwise stated, texts, images and other content on this website are owned by Sigmology GmbH or used with the permission of the respective rights holder. Reproduction or other use requires prior written permission."
  },
  de: {
    title: "Impressum",
    description: "Rechtliche Angaben und Unternehmensinformationen der Sigmology GmbH.",
    companyDetails: "Unternehmensangaben",
    register: "Handelsregisternummer",
    registerOffice: "Handelsregisteramt des Kantons Zürich",
    vat: "Mehrwertsteuernummer",
    disclaimerTitle: "Haftungsausschluss",
    disclaimer: "Wir achten darauf, die Informationen auf dieser Website korrekt und aktuell zu halten. Die Sigmology GmbH kann jedoch nicht gewährleisten, dass sämtliche Inhalte vollständig, richtig oder jederzeit verfügbar sind. Soweit gesetzlich zulässig, ist die Haftung für materielle oder immaterielle Schäden ausgeschlossen, die aus dem Zugriff auf diese Website, ihrer Nutzung oder der fehlenden Nutzungsmöglichkeit entstehen.",
    linksTitle: "Externe Links",
    links: "Diese Website enthält Links zu Websites Dritter. Deren Inhalte und Verfügbarkeit liegen ausserhalb unseres Einflussbereichs. Für diese Websites sind die jeweiligen Betreiber verantwortlich.",
    copyrightTitle: "Urheberrecht",
    copyright: "Sofern nicht anders angegeben, gehören Texte, Bilder und weitere Inhalte dieser Website der Sigmology GmbH oder werden mit Zustimmung der jeweiligen Rechteinhaber verwendet. Eine Vervielfältigung oder anderweitige Nutzung bedarf der vorgängigen schriftlichen Zustimmung."
  }
};

export const privacyCopy = {
  en: {
    title: "Privacy policy",
    description: "Information about how Sigmology GmbH handles personal data on this website.",
    intro: "This privacy policy explains what personal data may be processed when you visit this website or contact Sigmology GmbH. It reflects the deliberately limited, static nature of this website.",
    sections: [
      { title: "Controller", paragraphs: ["Sigmology GmbH, Im Ahorn 13, 8125 Zollikerberg, Switzerland, is responsible for data processing in connection with this website. Privacy enquiries can be sent to info@sigmology.ch."] },
      { title: "Website hosting", paragraphs: ["This website is hosted by GitHub Pages, a service provided by GitHub, Inc. When the site is accessed, technical information such as IP address, browser type, operating system, referring page and time of access may be processed in server logs for security and reliable operation.", "Further information is available in GitHub’s Privacy Statement. We do not receive a visitor-level copy of these logs."] },
      { title: "Contacting us", paragraphs: ["If you contact us by email or telephone, we process the information you provide in order to respond to your enquiry and, where relevant, to prepare or perform a business relationship. We retain correspondence only for as long as necessary for these purposes and for applicable legal record-keeping obligations."] },
      { title: "Cookies and analytics", paragraphs: ["Sigmology does not use analytics, advertising technologies, newsletter tracking or first-party cookies on this website. The site does not contain a contact form or embedded third-party media."] },
      { title: "External links", paragraphs: ["Links to LinkedIn and other external websites open services operated by third parties. Data is transmitted to those services only when you follow a link. Their own privacy policies then apply."] },
      { title: "Your rights", paragraphs: ["Subject to applicable law, you may request information about personal data we process about you and ask for inaccurate data to be corrected or data to be deleted or restricted. You may also object to certain processing. Please contact us using the details above."] },
      { title: "Security and changes", paragraphs: ["We use appropriate organisational and technical measures to protect personal data. We may update this policy when the website, our processing practices or applicable requirements change.", "Last updated: 15 July 2026."] }
    ]
  },
  de: {
    title: "Datenschutzerklärung",
    description: "Informationen zur Bearbeitung personenbezogener Daten durch die Sigmology GmbH auf dieser Website.",
    intro: "Diese Datenschutzerklärung erläutert, welche Personendaten beim Besuch dieser Website oder bei der Kontaktaufnahme mit der Sigmology GmbH bearbeitet werden können. Sie entspricht dem bewusst schlanken, statischen Aufbau dieser Website.",
    sections: [
      { title: "Verantwortliche Stelle", paragraphs: ["Für die Datenbearbeitung im Zusammenhang mit dieser Website ist die Sigmology GmbH, Im Ahorn 13, 8125 Zollikerberg, Schweiz, verantwortlich. Fragen zum Datenschutz können Sie an info@sigmology.ch richten."] },
      { title: "Hosting der Website", paragraphs: ["Diese Website wird über GitHub Pages gehostet, einen Dienst der GitHub, Inc. Beim Aufruf können technische Angaben wie IP-Adresse, Browsertyp, Betriebssystem, verweisende Seite und Zeitpunkt des Zugriffs in Serverprotokollen bearbeitet werden, um Sicherheit und zuverlässigen Betrieb zu gewährleisten.", "Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub. Wir erhalten keine besucherbezogene Kopie dieser Protokolle."] },
      { title: "Kontaktaufnahme", paragraphs: ["Wenn Sie uns per E-Mail oder Telefon kontaktieren, bearbeiten wir die von Ihnen mitgeteilten Angaben, um Ihre Anfrage zu beantworten und gegebenenfalls eine Geschäftsbeziehung vorzubereiten oder durchzuführen. Wir bewahren Korrespondenz nur so lange auf, wie dies für diese Zwecke und aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist."] },
      { title: "Cookies und Analyse", paragraphs: ["Sigmology verwendet auf dieser Website keine Analyse- oder Werbetechnologien, kein Newsletter-Tracking und keine eigenen Cookies. Die Website enthält weder ein Kontaktformular noch eingebettete Medien von Drittanbietern."] },
      { title: "Externe Links", paragraphs: ["Links zu LinkedIn und anderen externen Websites führen zu Diensten, die von Dritten betrieben werden. Daten werden erst an diese Dienste übermittelt, wenn Sie einem Link folgen. Ab diesem Zeitpunkt gelten die Datenschutzerklärungen der jeweiligen Anbieter."] },
      { title: "Ihre Rechte", paragraphs: ["Im Rahmen des anwendbaren Rechts können Sie Auskunft über die zu Ihrer Person bearbeiteten Daten verlangen sowie unrichtige Daten berichtigen oder Daten löschen beziehungsweise deren Bearbeitung einschränken lassen. Gegen bestimmte Bearbeitungen können Sie Widerspruch erheben. Kontaktieren Sie uns dazu über die oben genannten Angaben."] },
      { title: "Sicherheit und Änderungen", paragraphs: ["Wir treffen angemessene organisatorische und technische Massnahmen zum Schutz von Personendaten. Wir können diese Erklärung anpassen, wenn sich die Website, unsere Datenbearbeitung oder die anwendbaren Anforderungen ändern.", "Letzte Aktualisierung: 15. Juli 2026."] }
    ]
  }
};

const routeDefinitions: Array<{ kind: PageData["kind"]; en: string; de: string; serviceSlug?: Service["slug"] }> = [
  { kind: "home", en: "/", de: "/de/" },
  { kind: "solutions", en: "/solutions/", de: "/de/solutions/" },
  { kind: "service", en: "/solutions/functional-safety/", de: "/de/solutions/functional-safety/", serviceSlug: "functional-safety" },
  { kind: "service", en: "/solutions/industrial-cybersecurity/", de: "/de/solutions/industrial-cybersecurity/", serviceSlug: "industrial-cybersecurity" },
  { kind: "service", en: "/solutions/mbse/", de: "/de/solutions/mbse/", serviceSlug: "mbse" },
  { kind: "about", en: "/about/", de: "/de/about/" },
  { kind: "contact", en: "/contact/", de: "/de/contact/" },
  { kind: "legal", en: "/legal-notice/", de: "/de/legal-notice/" },
  { kind: "privacy", en: "/privacy-policy/", de: "/de/privacy-policy/" }
];

export const pages: PageData[] = routeDefinitions.flatMap((route) => (["en", "de"] as Locale[]).map((locale) => {
  const alternateLocale: Locale = locale === "en" ? "de" : "en";
  const path = route[locale];
  const alternatePath = route[alternateLocale];
  const service = route.serviceSlug ? services[locale].find((item) => item.slug === route.serviceSlug) : undefined;

  let title = "Sigmology";
  let description = locale === "en"
    ? "Functional safety, industrial cybersecurity and model-based systems engineering expertise."
    : "Expertise für funktionale Sicherheit, industrielle Cybersicherheit und modellbasierte Systementwicklung.";

  if (route.kind === "solutions") {
    title = locale === "en" ? "Expertise" : "Expertise";
    description = locale === "en"
      ? "Explore Sigmology services in functional safety, industrial cybersecurity and model-based systems engineering."
      : "Entdecken Sie die Sigmology-Expertise in funktionaler Sicherheit, industrieller Cybersicherheit und modellbasierter Systementwicklung.";
  } else if (route.kind === "service" && service) {
    title = service.title;
    description = service.description;
  } else if (route.kind === "about") {
    title = aboutCopy[locale].title;
    description = aboutCopy[locale].description;
  } else if (route.kind === "contact") {
    title = contactCopy[locale].title;
    description = contactCopy[locale].description;
  } else if (route.kind === "legal") {
    title = legalCopy[locale].title;
    description = legalCopy[locale].description;
  } else if (route.kind === "privacy") {
    title = privacyCopy[locale].title;
    description = privacyCopy[locale].description;
  } else if (route.kind === "home") {
    title = locale === "en" ? "Functional Safety, Cybersecurity & MBSE" : "Funktionale Sicherheit, Cybersicherheit & MBSE";
    description = homeCopy[locale].lead;
  }

  return { kind: route.kind, locale, path, alternatePath, title, description, service };
}));

export function getPage(path: string): PageData | undefined {
  const normalized = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  return pages.find((page) => page.path === normalized);
}
