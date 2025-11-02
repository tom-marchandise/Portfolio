export interface ProjectLink {
    github: string
    live?: string
}

export interface Project {
    id: number
    title: string
    shortDescription: string
    longDescription: string
    image: string
    stack: string[]
    links?: ProjectLink
    rncpSkills: string[]
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Tech Yard (Projet E-commerce)",
        shortDescription: "Site e-commerce full-stack (Nuxt, .NET) géré en méthodologie SCRUM.",
        longDescription: "Projet d'école le plus conséquent (1 mois et demi, équipe de 6), simulant la création d'un site e-commerce complet de A à Z. Nous avons développé l'interface client (catalogue, panier, achat) et un <strong>back-office admin</strong> complet (gestion des stocks, produits, commandes...).<br/><br/>En plus de mon rôle de développeur full-stack, j'ai agi en tant que <strong>Chef de Projet / SCRUM Master</strong>. J'étais responsable de l'organisation de l'équipe : animation des réunions (sprint planning, daily), <strong>création et assignation des tickets</strong>, et garant du respect de notre méthodologie <strong>SCRUM</strong> (sprints d'une semaine).",
        image: "/images/projects/e-commerce/e-commerce-admin2.png",
        stack: ["Nuxt.js", "Vue.js", "TypeScript", "C# .NET", "MySQL", "SCRUM"], 
        links: {
            github: "https://github.com/tom-marchandise/E-commerce" 
        },
        rncpSkills: [
            "Rédiger un Cahier Des Charges (CDC) en partant d’une expression de besoins",
            "Rédiger des spécifications techniques",
            "Déployer un environnement de travail (outils de versionnage, collaboration)",
            "Identifier les fonctionnalités à développer (structurer l’architecture)",
            "Développement du prototype de la solution web",
            "Intégration des différents éléments de la solution web",
            "Implémenter la partie “front-end” d’une solution web",
            "Implémenter la logique et la base de données (le “back-end”)",
            "Rédaction du code de la solution en transcrivant les fonctionnalités du Cahier des Charges",
            "Rédaction d'une documentation technique à destination des équipes parties prenantes",
            "Analyse de la qualité de l’ergonomie et de l’accessibilité de la solution"
        ]   
    },
    {
        id: 2,
        title: "Modernisation du back-office (alternance)",
        shortDescription: "Modernisation d'un back-office de CakePHP à Vue.js/Symfony.",
        longDescription: "Gros projet de mon entreprise d'alternance, il s'agissait du passage d'un monolithe en CakePHP à une <strong>SPA</strong> en Vue.js avec des <strong>microservices</strong> en Symfony. J'étais spécialisé en <strong>front-end</strong> et le contact avec les seniors m'a permis d'énormément gagner en compétences dans ce domaine. J'ai aussi eu mes premières expériences de code review et de <strong>déploiement sur différents environnements</strong> (dev, qa, staging...).<br/><br/>En plus des compétences de développeur, j'ai pu observer l'organisation d'une vraie équipe professionnelle et comment se passe le travail en entreprise. J'ai pu évoluer dans un environnement <strong>agile SCRUM</strong> et communiquer avec <strong>différents pôles</strong> (design, back-end, produit, QA, DevOps...).",
        image: "/images/projects/matawan/matawan-faresDetail.png",
        stack: ["Vue.js", "Typescript", "Vuetify", "API REST", "SCRUM", "GitHub"],
        rncpSkills: [
            "Déploiement d'une application web en utilisant un serveur",
            "Implémentation d'un plan de tests en concevant les différents tests unitaires et d’intégration",
            "Implémentation de la partie “front-end”",
            "Rédaction d'une documentation technique à destination des équipes parties prenantes",
            "Rédaction d'une documentation utilisateur pour apporter un support aux utilisateurs",
            "Monitoring du lancement d'une solution web, en recueillant les retours utilisateurs",
            "Identification des améliorations qualitatives et de performance d'une solution web",
            "Analyse de la qualité de l’ergonomie et de l’accessibilité de la solution",
            "Rédaction d'un document argumentatif en listant des propositions d'améliorations"
        ]
    },
    {
        id: 3,
        title: "Clone de Twitter (React / Laravel)",
        shortDescription: "Projet full-stack (React/Laravel) simulant les fonctionnalités de Twitter.",
        longDescription: "Premier grand projet full-stack de la formation (1 mois, équipe de 3). Nous avons construit un clone de Twitter en partant de zéro, avec <strong>React</strong> pour le front-end et <strong>PHP/Laravel</strong> pour l'API RESTful.<br/><br/>Ce fut notre première immersion dans les frameworks modernes. Ce défi m'a permis de développer des compétences fondamentales sur : la gestion d'état en <strong>React</strong>, la consommation d'API, et l'architecture MVC côté serveur avec <strong>Laravel</strong> (modélisation de BDD relationnelle, authentification).",
        image: "/images/projects/twitter-clone/timeline.png",
        stack: ["React", "Laravel", "PHP", "MariaDB", "API REST"],
        links: {
            github: "https://github.com/tom-marchandise/Twitter-Clone" 
        },
        rncpSkills: [
            "Identifier les fonctionnalités à développer (modélisation BDD)",
            "Implémenter la partie “front-end” d’une solution web",
            "Implémenter la logique et la base de données (le “back-end”)",
            "Intégrer les différents éléments de la solution web",
            "Implémenter des règles d’authentification",
            "Rédiger le code de la solution en transcrivant les fonctionnalités",
            "Rédaction d'une présentation pour présenter les choix techniques, les maquettes et le schéma de la solution web",
        ]
    },
    {
        id: 4,
        title: "PiePHP (Micro-Framework PHP)",
        shortDescription: "Création d'un framework PHP MVC de zéro (Routeur, ORM).",
        longDescription: "Projet d'architecture logicielle visant à recréer les fondations d'un micro-framework PHP moderne sur le modèle <strong>MVC</strong>. L'objectif était de comprendre le fonctionnement interne d'outils comme Symfony ou Laravel.<br/><br/>J'ai implémenté les composants clés en partant de zéro : un <strong>autoloader</strong> (PSR-4), un <strong>routeur</strong> pour gérer les requêtes, la structure des <strong>Contrôleurs</strong> et <strong>Modèles</strong>, la sécurisation (<code>.htaccess</code>) et les bases d'un <strong>ORM</strong> (Object-Relational Mapping) pour la communication avec la base de données.",
        image: "/images/projects/PiePHP/ORMcode.png",
        stack: ["PHP", "Architecture MVC", "Design Patterns", "ORM", "SQL"],
        links: {
            github: "https://github.com/tom-marchandise/PiePHP" 
        },
        rncpSkills: [
            "Identifier les fonctionnalités à développer (structurer l’architecture)",
            "Rédiger des spécifications techniques",
            "Implémenter la logique et la base de données (le “back-end”)",
            "Rédiger une documentation technique",
            "Rédaction d'une présentation pour présenter les choix techniques, les maquettes et le schéma de la solution web"
        ]
    },
    {
        id: 5,
        title: "Land Explorer (App iOS)",
        shortDescription: "App iOS (SwiftUI) de randonnée avec météo, boussole et gyroscope.",
        longDescription: "Application mobile <strong>native iOS</strong> de découverte de randonnées, développée en <strong>Swift</strong> avec <strong>SwiftUI</strong>. L'application utilise la <strong>géolocalisation</strong> de l'utilisateur pour interroger simultanément trois APIs : une pour les chemins de randonnée, une pour le <strong>reverse geocoding</strong> (afficher le nom du lieu) et une pour la <strong>météo</strong> (actuelle et prévisions).<br/><br/>Elle intègre également les fonctionnalités matérielles du téléphone, avec une <strong>boussole</strong> (indiquant le nord géographique) et un <strong>gyroscope</strong> (affichant l'inclinaison de l'appareil).",
        image: "/images/projects/land-explorer/land-explorer-home.png", 
        stack: ["Swift", "SwiftUI", "iOS", "API REST", "Géolocalisation", "CoreMotion"],
        links: {
            github: "https://github.com/tom-marchandise/Land-Explorer" 
        },
        rncpSkills: [
        "Implémenter la partie “front-end” d’une solution web",
        "Intégrer les différents éléments de la solution web",
        "Rédiger le code de la solution en transcrivant les fonctionnalités",
        "Identifier les fonctionnalités à développer, en modélisant les divers éléments"
        ]
    },
]