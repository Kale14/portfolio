// projectsData.js
const projects = [


    //Part Hackathon1
    { title: "Sensoria",
        subtitle: "Barrierefreies Baseball-Erlebnis",
        description: "Der Sensoria wurde beim Google Cloud x MLB™ Hackathon entwickelt, um blinden Menschen ein interaktives und barrierefreies Spielerlebnis zu bieten. Das System nutzt Echtzeit-Spielereignisse, um über intuitive Vibrationsmuster und KI-generierte Audiozusammenfassungen ein Spielgefühl zu vermitteln – ganz ohne visuelle Reize",
        images: "",
        technologies: ["Google AI", "Google Cloud", "TensorFlow", "NLP", "React", "Firebase"],
        image: "/sensoria.jpg",
        status: "In Arbeit",
        date: "2025",
        challenges: [
            {
                text: "Vibrationsmuster mussten intuitiv verständlich sein",
                solution: "Durchführung von Usability-Tests mit blinden Personen, um eindeutige, leicht unterscheidbare Muster für verschiedene Spielereignisse zu entwickeln.",
            },
            {
                text: "Spielereignisse mussten in Echtzeit verarbeitet werden",
                solution: "Implementierung eines Filter- und Prioritätssystems, das irrelevante Daten ausblendet und nur entscheidende Spielmomente weiterleitet.",
            },
            {
                text: "Unterschiedliche Wahrnehmung von Vibrationen bei Nutzern",
                solution: "Anpassung der Vibrationsstärke basierend auf Nutzerfeedback und personalisierbare Einstellungen, um die Sensibilität individuell anzupassen.",
            },
            {
                text: "Ausfall von Echtzeit-Datenquellen",
                solution: "Implementierung eines Fallback-Mechanismus, der bei fehlenden Echtzeit-Daten auf alternative Datenquellen zurückgreift.",
            },
        ],
        github: "https://github.com/deinProjekt",
        demo: "https://deinProjekt.com"
    },



    //Part Bachelorarbeit
    {
        "title": "Bachelorarbeit",
        "subtitle": "KI-gestützter Chatbot zur Optimierung des Wissensmanagements in Unternehmen",
        "description": "Wissen effizient abrufen, statt lange zu suchen. Im Rahmen meiner Bachelorarbeit wurde ein KI-gestützter Chatbot entwickelt, der das Wissensmanagement in Unternehmen optimiert. Durch die Integration moderner Sprachmodelle wie GPT-2, Llama 2 und Mistral kann der Chatbot dynamisch auf Anfragen reagieren, kontextbezogene Informationen bereitstellen und kontinuierlich aktualisiert werden.",
        "images": "/baf2.jpg",
        "technologies": [
            "Django (MTV-Architektur)",
            "GPT-2",
            "Llama 2",
            "Mistral",
            "Q-LoRA",
            "Web-Scraping",
            "Automatisierte Datenpipeline",
            "Optuna"
        ],
        "image": "/chatbot2.jpg",
        "status": "Abgeschlossen",
        "date": "2024",
        "challenges": [
            {
                "text": "Modelle mussten mit begrenzten Ressourcen effizient trainiert werden",
                "solution": "Einsatz von Q-LoRA (Quantized LoRA) zur Speicher- und Rechenzeitoptimierung, um große Modelle auf begrenzter Hardware zu feintunen."
            },
            {
                "text": "Web-Scraping erzeugte unstrukturierte und redundante Daten",
                "solution": "Implementierung eines automatisierten Preprocessing-Workflows, um irrelevante Inhalte zu filtern und strukturierte Wissensbausteine zu generieren."
            },
            {
                "text": "Fehlende Kontextwahrung bei Konversationen",
                "solution": "Speicherung von Konversationsverläufen in einer temporären Datenbank, um den Kontext während einer Sitzung beizubehalten und präzisere Antworten zu generieren."
            },
            {
                "text": "Wissensbasis musste kontinuierlich aktualisiert werden",
                "solution": "Entwicklung einer Pipeline zur Integration neuer Informationen, damit der Chatbot mit aktuellen Daten arbeitet."
            },
            {
                "text": "Unterschiedliche Stärken und Schwächen der Modelle",
                "solution": "Durchführung eines Benchmarks anhand der Metriken F1-Score, Exact Match und Inference Time, um das optimale Modell für die Anwendung zu identifizieren."
            },
            {
                "text": "Hyperparameter-Optimierung für bestmögliche Ergebnisse",
                "solution": "Verwendung von Optuna für eine automatische Hyperparameter-Suche, um die beste Kombination aus Lernrate, Batchgröße und Epochenanzahl zu ermitteln."
            }
        ],
        "github": "https://github.com/deinProjekt",
        "demo": "https://deinProjekt.com"
    },


    //Part Hackathon2
    {
        "title": "UrbanGuide",
        "subtitle": "KI-gestützte App zur Stadterkundung mit Gebäudeerkennung und personalisierten Empfehlungen",
        "description": "Eine Stadt zu erkunden, sollte intuitiv und individuell sein. UrbanGuide kombiniert Gebäudeerkennung, personalisierte Empfehlungen und dynamische Tourplanung, um Sehenswürdigkeiten in Echtzeit zu identifizieren und interaktive Reiseerlebnisse zu schaffen. Durch die Integration von KI-gestützter Objekterkennung und Sprachmodellen bietet die App detaillierte Infos zu architektonischen Highlights und Sehenswürdigkeiten. Nutzer erhalten kontextbezogene Erklärungen in Echtzeit, die basierend auf erkannten Gebäuden generiert werden – alles in einer nutzerfreundlichen Oberfläche.",
        "images": "/urban3.jpg",
        "technologies": [
            "Google Gemini",
            "Google Maps API",
            "Google Cloud Functions",
            "Google Firestore",
            "Flutter",
        ],
        "image": "/Urbanguid.jpg",
        "status": "Abgeschlossen",
        "date": "2024",
        "challenges": [
            {
                "text": "Verbindungsabbrüche der Applikation bei Benutzer",
                "solution": "Implementierung eines Offline-Modus, der die zuletzt geladenen Tourdaten zwischenspeichert und eine reibungslose Nutzung ohne Internetverbindung ermöglicht."
            },
            {
                "text": "Hohe Latenzzeiten bei Gebäudeerkennung und Navigation",
                "solution": "Caching und Parallelisierung von API-Aufrufen, um die Ladezeiten für Karten und Sehenswürdigkeiten zu reduzieren."
            },
            {
                "text": "Verständliche Antworten für Touristen mit unterschiedlichem Vorwissen",
                "solution": "Anpassungsmöglichkeiten der generierten Antworten basierend auf dem Vorwissen der Nutzer, um Texte klar, informativ und zielgruppengerecht zu gestalten."
            },
            {
                "text": "Unterschiedliche Informationstiefen",
                "solution": "Einführung von dynamischen Info-Ebenen, bei denen Nutzer selbst entscheiden können, ob sie kurze Zusammenfassungen oder tiefgehende Details über ein Gebäude erhalten möchten."
            }
        ],
        "github": "https://github.com/deinProjekt",
        "demo": "https://deinProjekt.com"
    },



    //Digital Twin
    {
        "title": "Digital Twin",
        "subtitle": "Datengetriebene Lösung zur Optimierung von Windkraftanlagen",
        "description": "Wie kann man den Betrieb von Windkraftanlagen effizienter, kostensparender und zuverlässiger gestalten? Die Antwort: Ein digitaler Zwilling. In diesem Projekt habe ich eine intelligente, datengetriebene Lösung entwickelt, die Sensordaten in Echtzeit analysiert und Anomalien frühzeitig erkennt. Durch den Einsatz modernster Algorithmen ermöglicht das System eine vorausschauende Wartung und reduziert Ausfallzeiten– alles in einer interaktiven, leicht verständlichen Oberfläche.",
        "images": "/dti2.jpg",
        "technologies": [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "TensorFlow",
            "Flask",
            "CUSum_LoMST",
            "SAPUI5",
            "MySQL"
        ],
        "image": "/wind6.jpg",
        "status": "Abgeschlossen",
        "date": "2023",
        "challenges": [
            {
                "text": "Sensordaten in Echtzeit effizient verarbeiten",
                "solution": "Eine skalierbare Datenpipeline, die große Datenmengen aggregiert, filtert und vorbereitet, um Verzögerungen zu minimieren."
            },
            {
                "text": "Präzise Anomalieerkennung ohne Fehldiagnosen",
                "solution": "Einsatz eines hybriden Algorithmus (CUSum_LoMST), der feine Abweichungen erkennt und gezielt auf bevorstehende Wartungen hinweist."
            },
            {
                "text": "Verschiedene Stakeholder benötigten verständliche und handlungsorientierte Visualisierungen",
                "solution": "Entwicklung eines interaktiven Dashboards mit SAPUI5, das kritische Zustände visuell hervorhebt und klare Wartungsempfehlungen für das Management und das Wartungsteam bereitstellt."
            },
            {
                "text": "Fehlalarme durch verrauschte oder unvollständige Sensordaten",
                "solution": "Implementierung von Datenbereinigungs- und Glättungsverfahren zur Eliminierung fehlerhafter Messwerte und Vermeidung unnötiger Wartungseinsätze."
            },
            {
                "text": "Skalierbarkeit der Lösung bei steigender Datenmenge",
                "solution": "Durch eine modulare Architektur wurden alle Komponenten (Generator, Hydraulik, Getriebe, Gondel, Rotoblätter) eigenständig behandelt, sodass sie unabhängig skaliert und optimiert werden können. Dies ermöglicht eine effiziente Lastverteilung und Anpassung an wachsende Sensordatenmengen."
            }
        ],
        "github": "https://github.com/deinProjekt",
        "demo": "https://deinProjekt.com"
    },



    //Klassifizierung
    {
        "title": "Brückenschäden",
        "subtitle": "Klassifizierung von Brückenschäden mit maschinellem Lernen",
        "description": "Brückenschäden frühzeitig erkennen und gezielt beheben – bevor sie zur Gefahr werden. Dieses Projekt nutzt maschinelles Lernen zur automatisierten Schadensklassifikation, um die Effizienz von Wartungsprozessen zu steigern. Durch die Analyse von annotierten Bilddaten erkennt das Modell Risse, Abplatzungen und Korrosion mit hoher Präzision, priorisiert Instandhaltungsmaßnahmen und erhöht so die Sicherheit von Infrastrukturen.",
        "images": "/bruck3.jpg",
        "technologies": [
            "Convolutional Neural Networks (CNN)",
            "TensorFlow",
            "Keras",
            "Adam-Optimizer",
            "Cross-Entropy-Loss",
            "OpenCV",
            "NumPy",
            "Pandas",
            "Grid Search",
            "k-fache Cross-Validation"
        ],
        "image": "/brueck1.jpg",
        "status": "Abgeschlossen",
        "date": "2023",
        "challenges": [
            {
                "text": "Modell hatte Schwierigkeiten mit komplexen Schadensmustern",
                "solution": "Anpassung der CNN-Architektur mit zusätzlichen Convolutional-Schichten und Integration von Batch Normalization zur besseren Merkmalsextraktion."
            },
            {
                "text": "Datensatz enthielt zu wenige Beispiele für seltene Schäden",
                "solution": "Gezielte Datenaugmentation für unterrepräsentierte Schadenskategorien durch Rotation, Spiegelung und künstliche Generierung ähnlicher Strukturen."
            },
            {
                "text": "Falsche Klassifikationen bei überlappenden Schäden",
                "solution": "Verbesserung der Modellarchitektur durch Multi-Label-Klassifikation, um Fälle mit mehreren Schadensarten gleichzeitig zu berücksichtigen."
            }
        ],
        "github": "https://github.com/deinProjekt",
        "demo": "https://deinProjekt.com"
    }
    ,



    //Überwachung
    {
        "title": "Überwachungslösung",
        "subtitle": "KI-basierte DSGVO-Überwachungslösung",
        "description": "Datenschutz und Überwachung – ein scheinbarer Widerspruch. Dieses Projekt zeigt, dass beides vereinbar ist: Durch die Kombination aus künstlicher Intelligenz und Verschlüsselung entsteht ein sicheres, DSGVO-konformes Überwachungssystem. Personen- und Fahrzeugdaten werden in Echtzeit erkannt, anonymisiert und verschlüsselt gespeichert, bevor sie weiterverarbeitet werden. So bleiben sensible Informationen geschützt, während Betreiber dennoch wertvolle Einblicke in Bewegungsströme und sicherheitsrelevante Ereignisse erhalten.",
        "images": "/auto.jpg",
        "technologies": [
            "YOLO v5",
            "DeepSORT",
            "EDSR (Enhanced Deep Super-Resolution)",
            "AES-256",
            "SQL"
        ],
        "image": "/ueber.jpg",
        "status": "Abgeschlossen",
        "date": "2023",
        "challenges": [
            {
                "text": "KI erkannte keine deutschen Kennzeichen",
                "solution": "Das YOLO v5-Modell wurde mit einem eigenen Datensatz aus deutschen Kennzeichen nachtrainiert, um die Erkennungsgenauigkeit erheblich zu verbessern."
            },
            {
                "text": "Erkennung bei schlechten Lichtverhältnissen",
                "solution": "Implementierung dynamischer Kontrastanpassung und Low-Light-Enhancement, um auch bei schwacher Beleuchtung zuverlässige Ergebnisse zu liefern."
            },
            {
                "text": "Hohe Rechenlast durch Echtzeit-Analyse",
                "solution": "Modelloptimierung & Quantisierung, um die Berechnungen effizienter zu machen und die Verarbeitungsgeschwindigkeit zu maximieren."
            },
            {
                "text": "Verpixelte Bilder verhinderten eine klare Erkennung",
                "solution": "Nutzung des EDSR (Enhanced Deep Super-Resolution) Modells, um niedrig aufgelöste Bilder zu verbessern und die Lesbarkeit von Kennzeichen und Gesichtern deutlich zu erhöhen."
            },
            {
                "text": "Verfolgen von Personen und Fahrzeugen über mehrere Frames hinweg",
                "solution": "Implementierung von DeepSORT (Simple Online and Realtime Tracker), um eine stabile und präzise Nachverfolgung über mehrere Frames zu gewährleisten. Dadurch konnten Objekte konsistent identifiziert und Doppelzählungen sowie Fehlzuweisungen vermieden werden."
            },
            {
                "text": "Sicherstellung der DSGVO-konformen Speicherung sensibler Daten",
                "solution": "Implementierung von AES-256-Verschlüsselung, um personenbezogene Daten bereits vor der Speicherung zu anonymisieren. Dadurch wurde sichergestellt, dass sensible Informationen selbst bei unbefugtem Zugriff nicht lesbar sind und die Anforderungen der DSGVO vollständig erfüllt wurden."
            }
        ],
        "github": "https://github.com/deinProjekt",
        "demo": "https://deinProjekt.com"
    },


    //Gestenstreuerung
    {
        "title": "Gestensteuerung",
        "subtitle": "Steuerung eines PCs durch Handgesten mittels Computer Vision und maschinellem Lernen",
        "description": "Dieses Projekt entstand aus der Bequemlichkeit eines Informatikers und der Idee, durch Handgesten einen PC zu steuern. Durch eine Kombination aus Computer Vision und maschinellem Lernen erkennt das System verschiedene Handbewegungen und wandelt sie in PC-Befehle um. In Zukunft soll es sogar weitere smarte Anwendungen steuern können.",
        "images": "/hand_bbox.jpg",
        "technologies": [
            "Convolutional Neural Networks (CNN) m",
            "TensorFlow Lite",
            "OpenCV",
            "Sklearn",
            "Augmentationstechniken",
            "Raspberry Pi",
            "WebSockets"
        ],
        "image": "/gestensteurcnn.jpg",
        "status": "Abgeschlossen",
        "date": "2023",
        "challenges": [
            {
                "text": "Kommunikation zwischen Raspberry Pi und PC",
                "solution": "Die ursprüngliche Datenübertragung per HTTP war zu langsam für Echtzeitsteuerung. WebSockets ermöglichten eine bidirektionale, latenzarme Kommunikation zwischen Raspberry Pi und PC."
            },
            {
                "text": "Das System erkannte unerwünschte Handbewegungen als Befehle",
                "solution": "Einführung einer \"Aktivierungs-Geste\", die bewusst ausgeführt werden muss, bevor andere Gesten erkannt und umgesetzt werden."
            },
            {
                "text": "Unzuverlässige Gestenerkennung durch unterschiedliche Beleuchtungsverhältnisse",
                "solution": "Statt nur mit Bilddaten zu arbeiten, wurde ein hybrides Modell aus CNN und Keypoints entwicklet. Dadurch wird die Gestenerkennung robuster gegenüber Beleuchtung, Handgrößen und Perspektivwechseln."
            },
            {
                "text": "Zu hohe Rechenlast auf schwacher Hardware",
                "solution": "Das Modell wurde mit TensorFlow Lite quantisiert, um die Rechenlast zu verringern. Falls Keypoints eindeutig genug sind, wird die CNN-Verarbeitung übersprungen, um Leistung zu sparen. Dadurch wird sichergestellt, dass die Gestenerkennung auch auf Systemen wie einem Raspberry Pi in Echtzeit funktioniert."
            }
        ],
        "github": "https://github.com/deinProjekt",
        "demo": "https://deinProjekt.com"
    },


    //WhoIsDown
    {
        "title": "WhoIsDown",
        "subtitle": "Einfache Event-Organisation mit automatischen Erinnerungen und Echtzeit-Updates",
        "description": "Egal ob spontanes Treffen mit Freunden oder eine geplante Veranstaltung – WhoIsDown erleichtert die Organisation von Events. Die Plattform bietet eine einfache Teilnehmerkoordination, automatische Erinnerungen und Echtzeit-Updates, sodass keine Veranstaltung mehr im Chaos versinkt. Durch eine intuitive Benutzeroberfläche und smarte Automatisierung wird das Event-Management so einfach wie nie zuvor.",
        "images": "/wid1.jpg",
        "technologies": [
            "Vue",
            "Spring Boot",            "PostgreSQL",
            "JWT (Authentifizierung & Sicherheit)",
            "CRON-Jobs (Benachrichtigungen)",
            "Heroku"
        ],
        "image": "/events.jpg",
        "status": "Abgeschlossen",
        "date": "2022",
        "challenges": [
            {
                "text": "Erste Erfahrung mit skalierbarer Backend-Architektur",
                "solution": "Einarbeitung in RESTful API-Prinzipien, Trennung von Backend- und Frontend-Logik sowie die Nutzung von modularen Services, um das System langfristig wartbar und erweiterbar zu machen."
            },
            {
                "text": "Schwierigkeiten mit API-Fehlermanagement",
                "solution": "Einführung eines einheitlichen Fehlerhandling-Systems mit klaren API-Responses und Logging, um Debugging und Fehlerdiagnosen zu erleichtern."
            },
            {
                "text": "Unsicherheiten beim Deployment auf einer Cloud-Plattform",
                "solution": "Einarbeitung in Cloud-Hosting (Heroku), erste Erfahrung mit Deployment-Prozessen, Einrichtung von Umgebungsvariablen und Automatisierungsschritten für zukünftige Projekte."
            }
        ],
        "github": "https://github.com/deinProjekt",
        "demo": "https://deinProjekt.com"
    },
];

export default projects;
