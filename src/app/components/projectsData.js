// projectsData.js
const projects = [


    //Part Hackathon1
    { title: "Sensoria ",
        date: "2025",
        duration: "3 Monate",
        company: "Google",
        status: "In Arbeit",
        description: "Prototyp für Barrierefreiheit beim Baseball.",
        details: `Der <span class="highlight">Prototype</span> wurde im Rahmen des <span class="highlight">Google Cloud x MLB™ Hackathons – Building with Gemini Models</span> entwickelt, um <span class="highlight">blinden Menschen</span> ein <span class="highlight">barrierefreies Baseballerlebnis</span> zu ermöglichen. Der Prototyp kombiniert <span class="highlight">Vibrationsmuster</span> zur <span class="highlight">Echtzeit-Übertragung</span> von <span class="highlight">Spielereignissen</span> mit einer <span class="highlight">verständlichen Audiozusammenfassung</span> der <span class="highlight">Highlights</span> nach Spielende.  

Für die Umsetzung wurden <span class="highlight">Echtzeit-Spielereignisse</span> wie <span class="highlight">Würfe</span>, <span class="highlight">Treffer</span> und <span class="highlight">Spielerbewegungen</span> durch <span class="highlight">Google AI-Tools</span> analysiert und in <span class="highlight">priorisierte Kategorien</span> eingeteilt. Wichtige Ereignisse wurden durch <span class="highlight">spezifische Vibrationsmuster</span> vermittelt – von <span class="highlight">kurzen Impulsen</span> für einfache Aktionen bis hin zu <span class="highlight">intensiveren Signalen</span> für bedeutende Momente wie Home Runs. Eine <span class="highlight">NLP-basierte Audiozusammenfassung</span> stellte sicher, dass <span class="highlight">Nutzer</span> nach dem Spiel eine <span class="highlight">verständliche Rückschau</span> der wichtigsten <span class="highlight">Szenen</span> erhielten.  

Die <span class="highlight">Entwicklung</span> basierte auf einer <span class="highlight">Nutzerbefragung</span>, um die <span class="highlight">Anforderungen blinder Menschen</span> gezielt zu berücksichtigen. Anschließende <span class="highlight">Usability-Tests</span> überprüften die <span class="highlight">Intuitivität der Vibrationsmuster</span> und die <span class="highlight">Verständlichkeit der Audiodaten</span>, wobei <span class="highlight">iteratives Feedback</span> zur <span class="highlight">Optimierung des Systems</span> genutzt wurde.  
                  `,
        image: "/baseball.webp",
        imagep: "/highway.png" },


    //Part Bachelorarbeit
    { title: "Bachelorarbeit",
        date: "2024",
        duration: "3 Monate",
        company: "HTW",
        status: "Abgeschlossen",
        description: "Another amazing project.",
        details: `Die Bachelorarbeit widmete sich der <span class="highlight">Entwicklung eines Chatbot-Prototyps</span> zur <span class="highlight">Optimierung des Wissensmanagements in Unternehmen</span>. Ziel war es, den <span class="highlight">Zugang zu Informationen</span> durch <span class="highlight">KI-gestützte Technologien</span> effizienter zu gestalten und moderne <span class="highlight">Sprachmodelle</span> wie <span class="highlight">GPT-2, Llama 2</span> und <span class="highlight">Mistral</span> gezielt einzusetzen.
        
Als <span class="highlight">Datenbasis</span> dienten <span class="highlight">Webseiteninhalte</span> und <span class="highlight">PDF-Dokumente</span> der Hochschule für Technik und Wirtschaft Berlin, die durch <span class="highlight">Web-Scraping</span> extrahiert, manuell überarbeitet und in <span class="highlight">Frage-Antwort-Paare</span> umgewandelt wurden. Für die Umsetzung wurde das <span class="highlight">Django-Framework</span> genutzt, während die <span class="highlight">Integration der Sprachmodelle</span> durch <span class="highlight">Feintuning</span> mit <span class="highlight">(Q)-LoRA</span> erfolgte, um sie an spezifische Anwendungsfälle anzupassen. Eine <span class="highlight">Pipeline</span> gewährleistete eine <span class="highlight">kontinuierliche Aktualisierung</span> der Wissensbasis. <span class="highlight">Hyperparameter-Optimierungen</span> durch <span class="highlight">Grid Search</span> und <span class="highlight">Random Search</span> verbesserten die <span class="highlight">Modellperformance</span>.

Beim <span class="highlight">Benchmarking</span> wurden <span class="highlight">GPT-2, Llama 2</span> und <span class="highlight">Mistral</span> anhand von <span class="highlight">F1-Score, Exact Match</span> und <span class="highlight">Inference </span> verglichen. Während <span class="highlight">GPT-2 bei kleineren Datenmengen</span> solide Ergebnisse lieferte, überzeugte <span class="highlight">Llama 2</span> durch ein <span class="highlight">ausgewogenes Verhältnis von Genauigkeit und Effizienz</span>. <span class="highlight">Mistral</span> schnitt mit der <span class="highlight">besten Performance</span> in Bezug auf <span class="highlight">Geschwindigkeit und Präzision</span> ab. Abschließend wurde der <span class="highlight">Chatbot</span> in einer <span class="highlight">simulierten Umgebung</span> getestet, um <span class="highlight">Benutzerfreundlichkeit</span> und <span class="highlight">Leistungsfähigkeit</span> zu evaluieren.
                 `,
        image: "/chatbot.webp",
        imagep: "/highway.webp" },


    //Part Hackathon2
    { title: "UrbanGuide",
        date: "2024",
        duration: "2 Monate",
        company: "Google",
        status: "Abgeschlossen",
        description: "Another one.",
        details: `Im Rahmen eines Google AI Hackathon wurde UrbanGuide entwickelt, eine Web-App, die <span class="highlight">Touristen</span> ermöglicht, ihre <span class="highlight">Reiseerlebnisse</span> zu <span class="highlight">personalisieren</span> und <span class="highlight">Sehenswürdigkeiten interaktiv</span> zu <span class="highlight">entdecken</span>. Mithilfe von <span class="highlight">Gebäudeerkennung</span> und <span class="highlight">dynamischer Tourplanung</span> bietet die App detaillierte Informationen zu <span class="highlight">architektonischen Highlights</span>. Die Kombination aus Echtzeit-Routenanpassung und benutzerfreundlicher Navigation schafft ein modernes Werkzeug für Reisende.
        
Für die Entwicklung der App wurden verschiedene Datenquellen und Technologien integriert, um ein dynamisches und benutzerfreundliches Erlebnis zu schaffen. <span class="highlight">Standortdaten</span> von der <span class="highlight">Google Maps API</span> ermöglichten präzise Geolokalisierung und <span class="highlight">Navigation</span>, während <span class="highlight">visuelle Erkennungsdaten</span> durch <span class="highlight">Google Gemini</span> <span class="highlight">detaillierte Informationen</span> zu Sehenswürdigkeiten lieferten. <span class="highlight">Nutzerpräferenzen und -historien</span> wurden in der <span class="highlight">Google Firestore-Datenbank</span> gespeichert, um <span class="highlight">personalisierte Empfehlungen</span> zu generieren. Verkehrs- und Wetterdaten sorgten für dynamische Touranpassungen.

Die <span class="highlight">Architektur</span> der App basierte auf einer skalierbaren <span class="highlight">Cloud-Infrastruktur</span>, umgesetzt mit Google Cloud-Diensten. <span class="highlight">Serverlose Funktionen</span> über <span class="highlight">Google Cloud Functions</span> sorgten für eine reibungslose Verarbeitung von Anfragen und eine synchrone Kommunikation zwischen den Systemkomponenten. Für das <span class="highlight">Frontend</span> wurde ein responsives Design mit <span class="highlight">Flutter</span> entwickelt, das interaktive Karten und Wegbeschreibungen einband. Die <span class="highlight">Gebäudeerkennung</span> durch Google Gemini wurde optimiert, um <span class="highlight">Metadaten</span> automatisch mit <span class="highlight">kulturellen und historischen Informationen</span> zu verknüpfen.
                  `,
        image: "/urbann.webp",
        imagep: "/highway.webp" },



    //Digital Twin
    { title: "Digital Twin",
        date: "2023",
        duration: "8 Monate",
        company: "PwC",
        status: "Abgeschlossen",
        description: "Digital Twin für Energiewirtschaft",
        details: `Das Ziel des Projekts war die Entwicklung eines <span class="highlight">digitalen Zwillings</span> für <span class="highlight">Windkraftanlagen</span>, um Betriebs- und Wartungsprozesse zu optimieren. Der digitale Zwilling ermöglichte die kontinuierliche <span class="highlight">Überwachung</span> von Sensordaten in <span class="highlight">Echtzeit</span> sowie die frühzeitige <span class="highlight">Identifikation von Anomalien</span>. Dies trug zur Reduzierung von Wartungskosten, einer gesteigerten Anlagenverfügbarkeit und einer verbesserten Entscheidungsgrundlage für Betreiber bei.

Das Projekt basierte auf Sensordaten von Windkraftanlagen, einschließlich Temperatur, Vibration, Rotorendrehzahl, Energieproduktion und Wetterbedingungen. Eine entwickelte <span class="highlight">Datenpipeline</span> ermöglichte die <span class="highlight">Erfassung, Filterung und Bereitstellung</span> der Daten in Echtzeit. Zusätzlich wurden historische Daten zur Modellkalibrierung und Validierung integriert, um die Vorhersagegenauigkeit zu optimieren. Um die <span class="highlight">Analysequalität</span> zu gewährleisten, kamen <span class="highlight">Methoden</span> wie <span class="highlight">Datenbereinigung, Normalisierung und Feature-Engineering</span> zum Einsatz.

Dabei erfolgte eine Analyse der Stakeholder- Anforderungen, um Ziele zu definieren. Anschließend wurde eine skalierbare Datenpipeline entwickelt, die Sensordaten aus verschiedenen Quellen in Echtzeit aggregierte und aufbereitete. Der hybride <span class="highlight">CUSum_LoMST-Algorithmus</span>, der plötzliche <span class="highlight">Abweichungen und langfristige Trends identifiziert</span>, wurde implementiert, um <span class="highlight">Wartungsbedarf vorherzusagen</span>. Ein <span class="highlight">interaktives Dashboard</span> auf Basis von <span class="highlight">SAPUI5</span> ermöglichte eine visuelle Darstellung der Daten, wodurch potenzielle Störungen und Wartungsbedarfe schnell erkennbar wurden. Abschließend durchlief das System <span class="highlight">Tests</span> mit <span class="highlight">realen und simulierten Daten</span>.
                  `,
        image: "/windturbine.webp",
        imagep: "/highway.webp" },



    //Klassifizierung
    { title: "Brückenschäden",
        date: "2023",
        duration: "2 Monate",
        company: "PWC",
        status: "Abgeschlossen",
        description: "Klassifizierung von Brückenschäden mit CNN-Modell",
        details: `Das Ziel des Projekts war die Entwicklung eines <span class="highlight">maschinellen Lernmodells</span> zur <span class="highlight">Klassifikation</span> von <span class="highlight">Brückenschäden</span>. Dieses Modell unterstützt die Instandhaltung durch <span class="highlight">Erkennung und Priorisierung von Schäden</span>, wodurch <span class="highlight">Wartungsprozesse optimiert</span> und die Sicherheit von Infrastrukturen erhöht werden konnten.
        
Das Projekt basierte auf annotierten Bilddaten, die gezielt <span class="highlight">Schadensarten wie Risse, Abplatzungen und Korrosion</span> abbildeten. Für eine hohe <span class="highlight">Trainingsqualität</span> wurden die Bilddaten vorverarbeitet, indem sie <span class="highlight">skaliert, normalisiert</span> und durch <span class="highlight">Augmentationstechniken</span> wie <span class="highlight">Rotation und Spiegelung</span> erweitert wurden. Die Daten wurden anschließend in Trainings-, Validierungs- und Testsets aufgeteilt, um die Modellleistung zu optimieren und Überanpassungen zu vermeiden.

Eine <span class="highlight">Pipeline</span>, implementiert mit <span class="highlight">TensorFlow und Keras</span>, strukturierte die Schritte von der <span class="highlight">Datenvorbereitung</span> bis zur <span class="highlight">Evaluierung</span>. Ein angepasstes <span class="highlight">Convolutional Neural Network (CNN)</span> bildete die Grundlage für die Schadenskategorisierung. Die <span class="highlight">Architektur</span> kombinierte leistungsstarke <span class="highlight">Convolutional- und Pooling-Schichten</span> mit Methoden wie Dropout und Batch Normalization, um die Modellstabilität und Generalisierbarkeit zu erhöhen. Der <span class="highlight">Trainingsprozess</span> setzte auf <span class="highlight">optimierte Algorithmen (Adam-Optimizer, Cross-Entropy-Loss-Funktion, Early Stopping Mechanismus)</span>, während gezieltes <span class="highlight">Hyperparameter-Tuning<span> eine präzise Feinabstimmung ermöglichte. Das finale Modell wurde anhand von <span class="highlight">Testdaten</span> bewertet, wobei <span class="highlight">Fehleranalysen</span> genutzt wurden, um <span class="highlight">Schwachstellen</span> zu identifizieren und die Ergebnisse zu verfeinern. Dieses iterative Vorgehen gewährleistete eine verlässliche und anwendungsorientierte Lösung.                  `,
        image: "/bridge.webp",
        imagep: "/highway.webp" },



    //Überwachung
    { title: "Überwachungslösung",
        date: "2023",
        duration: "6 Monate",
        company: "PWC",
        status: "Abgeschlossen",
        description: "KI-basierte DSGVO-Überwachungslösung",
        details: `Das Ziel des Projekts war die Entwicklung einer <span class="highlight">datenschutzkonformen Überwachungslösung</span>, die <span class="highlight">Personen- und Fahrzeugdaten</span> erkennt, anonymisiert und sicher speichert. Die Lösung kombiniert <span class="highlight">KI-gestützte Objekterkennung mit Verschlüsselungstechniken</span>, um gleichzeitig die gesetzlichen Anforderungen der <span class="highlight">DSGVO</span> zu erfüllen und eine <span class="highlight">effektive Überwachung</span> zu gewährleisten.
  
Das Projekt wurde in mehreren Schritten realisiert: Zunächst wurden DSGVO-konforme Datenschutzmaßnahmen und Anforderungen an die KI-Modelle definiert. Für die <span class="highlight">Objekterkennung</span> wurde <span class="highlight">YOLO v5</span> integriert, das mithilfe eines  Datensatzes für die <span class="highlight">Erkennung von Fahrzeugkennzeichen feinabgestimmt (fine-tuned)</span>. <span class="highlight">DeepSORT</span> ermöglichte die <span class="highlight">Nachverfolgung und Bewegungsanalyse</span> erkannter Objekte. <span class="highlight">Algorithmen</span> zur <span class="highlight">Anonymisierung</span> sensibler Informationen wie <span class="highlight">Gesichter und Kennzeichen</span> wurden entwickelt und implementiert. Die <span class="highlight">verschlüsselte Speicherung</span> anonymisierter Daten erfolgte mithilfe des <span class="highlight">AES-Standards</span>. Abschließend wurden <span class="highlight">Modellgenauigkeit</span> mit <span class="highlight">realen und simulierten Daten getestet</span> und optimiert.
 `,
        image: "/seccam2.webp",
        imagep: "/highway.webp"},


    //Gestenstreuerung
    { title: "Gestensteuerung",
        date: "2022",
        duration: "1 Monate",
        company: "Privat",
        status: "Abgeschlossen",
        description: "A web application made to compare genetic maps.",
        details: `Das Projekt zielte darauf ab ein <span class="highlight">System zur berührungslosen Steuerung von PCs mittels Handgesten</span> das auf einem <span class="highlight">Raspberry Pi</span> implementiert wurde. Mithilfe von <span class="highlight">Computer-Vision-Technologien</span> und <span class="highlight">Gestenerkennung</span> ermöglichte es eine <span class="highlight">intuitive Interaktion</span> mit Computern ohne physische Eingaben.
        
Zur Entwicklung wurde ein <span class="highlight">Gesten-Datensatz</span> erstellt, der durch <span class="highlight">Annotation</span> und <span class="highlight">Augmentationstechniken</span> wie Rotation und Skalierung erweitert wurde. Echtzeit-Bilddaten von Handbewegungen wurden erfasst, vorverarbeitet und für das Training des Modells vorbereitet.

Das Modell basierte auf einem <span class="highlight">Convolutional Neural Network (CNN)</span> mit <span class="highlight">TensorFlow Lite</span>, speziell angepasst für <span class="highlight">ressourcenarme Hardware</span>. Durch <span class="highlight">reduzierte Eingangsauflösung, Quantisierung</span> und den Einsatz von <span class="highlight">Dropout</span> und <span class="highlight">Batch</span> wurde eine <span class="highlight">hohe Erkennungsgenauigkeit</span> bei <span class="highlight">schnellen Inferenzzeiten</span> erreicht. Die <span class="highlight">Steuerungslogik</span> verband <span class="highlight">erkannte Gesten</span> mit <span class="highlight">PC-Interaktionen</span> wie <span class="highlight">Mausbewegung, Klicks</span> und <span class="highlight">Scrollen</span>, wobei <span class="highlight">OpenCV</span> für die <span class="highlight">Bildverarbeitung</span> und <span class="highlight">WebSocket</span> für die <span class="highlight">PC-Kommunikation</span> genutzt wurden.
                  `,
        image: "/gestenprojekt.webp",
        imagep: "/highway.webp" },


    //WhoIsDown
    { title: "WhoIsDown",
        date: "2021",
        duration: "6 Monate",
        company: "HTW",
        status: "Abgeschlossen",
        description: "Last project.",
        details: `WhoIsDown ist eine Event-Webapplikation, die es Benutzern ermöglicht, <span class="highlight">Aktivitäten und Veranstaltungen</span> einfach zu <span class="highlight">organisieren</span> und Teilnehmer zu koordinieren. Die Plattform richtet sich an Gruppen, die spontane oder geplante Treffen effizient planen möchten und bietet Funktionen wie <span class="highlight">Veranstaltungsmanagement, Teilnehmerübersicht und automatische </span>.
        
Das Backend der Webapplikation wurde entwickelt, um eine effiziente Verwaltung von Nutzerdaten, Veranstaltungsinformationen und Interaktionen zu ermöglichen. <span class="highlight">Nutzerprofile, Veranstaltungsdetails und Rückmeldungen</span> wurden in einer <span class="highlight">relationalen Datenbank (PostgreSQL)</span> strukturiert gespeichert, während automatische Benachrichtigungen und Erinnerungen dynamisch auf Basis der Eventdaten erstellt wurden.

Die skalierbare <span class="highlight">Backend-Architektur</span> basierte auf <span class="highlight">RESTful APIs</span>, die unter anderem Benutzerregistrierung, Event-Management und Teilnehmerverwaltung ermöglichten. Zur <span class="highlight">Authentifizierung wurde JWT</span> eingesetzt, während serverseitige Validierungen und Fehlerbehandlungen die Sicherheit und Stabilität der APIs gewährleisteten. Eine optimierte Datenbankstruktur mit Fremdschlüsseln und Constraints sorgte für Datenintegrität und schnelle Abfragen. Für <span class="highlight">Benachrichtigungen</span> wurde eine Logik mit <span class="highlight">CRON-Jobs</span> implementiert, die zeitgesteuerte Erinnerungen automatisiert versendete. Abschließend wurde <span class="highlight">CI/CD (Continuous Integration/Continuous Deployment)-Prozesse</span> integriert, um eine <span class="highlight">automatisierte Bereitstellung</span> und <span class="highlight">regelmäßige Tests</span> zu gewährleisten.             `,
        image: "/whoisdown.webp",
        imagep: "/highway.webp" },
];

export default projects;
