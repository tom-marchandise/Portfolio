export interface Skills {
    skillName: string
    skillDescription: string
    extra?: string
}

export interface SkillBlock {
    title: string
    description: string
    skills: Skills[]
}

export const skills: SkillBlock[] = [
    {
        title: "Front-end",
        description: "Concevoir des interfaces utilisateur à la fois esthétiques, intuitives et techniquement performantes.", 
        skills: [
            {
                skillName: "Fondamentaux Web",
                skillDescription: "Je maîtrise parfaitement le trio <strong>HTML5</strong>, <strong>CSS3</strong> et <strong>JavaScript (ES6+)</strong>, avec une application systématique du <strong>\"responsive design\"</strong>." 
            },
            {
                skillName: "JavaScript & Frameworks", 
                skillDescription: "Je manipule le <strong>DOM</strong>, maîtrise la <strong>réactivité</strong>, les <strong>promesses asynchrones</strong> et la consommation d'<strong>API</strong>.", 
                extra: "Mon alternance m'a permis de développer une expertise sur <strong>TypeScript</strong> et <strong>Vue.js</strong> et son écosystème (<strong>Vue Router</strong>, <strong>Pinia</strong>...). Je suis également compétent sur <strong>React</strong>."
            },
            {
                skillName: "UI/UX & Intégration", 
                skillDescription: "J'ai une forte sensibilité <strong>UI/UX</strong> et l'habitude de designer des interfaces en <strong>\"Mobile First\"</strong>.",
                extra: "Côté conception j'ai une certaine expérience sur <strong>Figma</strong> et côté intégration, j'ai une expérience solide avec <strong>Tailwind CSS</strong> (utilisé sur ce site) et des librairies de composants comme <strong>Vuetify</strong>. Mon alternance m'a permis de renforcer mes compétences en <strong>SCSS</strong>. Je débute actuellement sur <strong>GSAP</strong> pour les animations."
            }
        ],
    },
    {
        title: "Back-end",
        description: "Concerne toute la logique 'côté serveur' : la gestion des données, la sécurité et la création des APIs qui alimentent le front-end.",
        skills: [
            {
                skillName: "Logique Serveur & PHP",
                skillDescription: "Je conçois et maintiens des <strong>applications web robustes</strong> et des <strong>APIs RESTful</strong>, principalement avec <strong>PHP</strong> et le framework <strong>Symfony</strong>.",
                extra: "J'ai également une bonne expérience sur <strong>Laravel</strong> et des notions sur <strong>.NET</strong> et <strong>Express.js</strong> (stack MERN), ce qui me permet de m'adapter à différents écosystèmes."
            },
            {
                skillName: "Gestion des données",
                skillDescription: "Je suis à l'aise avec la modélisation et l'interrogation de bases de données, aussi bien <strong>relationnelles</strong> (principalement <strong>MySQL</strong>) que <strong>NoSQL</strong> (principalement <strong>MongoDB</strong>).",
                extra: "J'utilise les <strong>ORMs</strong> associés, comme <strong>Doctrine</strong> (pour Symfony) ou <strong>Mongoose</strong> (pour MERN). Mon expérience inclut aussi <strong>PostgreSQL</strong> et <strong>SQLite</strong>."
            },
            {
                skillName: "Authentification & Sécurité",
                skillDescription: "Je mets en place des systèmes d'authentification sécurisés, en m'appuyant sur le composant <strong>Security de Symfony</strong> ou via des solutions basées sur <strong>JWT</strong> (JSON Web Tokens) pour les APIs.",
                extra: "Je porte une attention particulière à la <strong>validation des données</strong> (côté serveur) et aux principes de sécurité (prévention <strong>OWASP</strong>). J'ai aussi de bonnes notions de <strong>conteneurisation</strong> avec <strong>Docker</strong>."
            }
        ],
    },
    {
        title: "Qualité & Méthodologie", 
        description: "Des compétences essentielles pour garantir un code durable, testé et compréhensible par tous.", 
        skills: [
            {
                skillName: "Documentation",
                skillDescription: "Je rédige des documentations claires, adaptées aussi bien à un public <strong>technique</strong> (README, specs) qu'à un public <strong>non technique</strong> (guides utilisateur.ices)."
            },
            {
                skillName: "Tests Unitaires (TU)",
                skillDescription: "Je rédige des tests unitaires et d'intégration robustes pour <strong>garantir</strong> la non-régression du code et <strong>fiabiliser</strong> les fonctionnalités."
            },
            {
                skillName: "Tests manuels & Recette", 
                skillDescription: "Je teste systématiquement mes développements avant de les livrer (recette) pour traquer les effets de bord et m'assurer que l'expérience <strong>utilisateur.ice</strong> est conforme aux attentes."
            }
        ],
    },
    {
        title: "Compétences Humaines", 
        description: "La technique c'est bien. Pouvoir l'appliquer dans une ambiance agréable et fluide, c'est mieux.", 
        skills: [
            {
                skillName: "Curiosité & Proactivité",
                skillDescription: "Curieux de nature, j'ai une <strong>soif d'apprendre</strong> constante. Je n'hésite pas à poser les bonnes questions et à me <strong>remettre en question</strong> pour m'améliorer au quotidien."
            },
            {
                skillName: "Communication & Travail d'équipe",
                skillDescription: "Je sais expliquer <strong>clairement</strong> un problème technique et communiquer de manière constructive. J'aime aller vers les autres, que ce soit pour demander de l'aide ou en proposer.",
                extra: "J'ai l'habitude de collaborer activement avec les autres pôles (back-end, design, PO...) pour garantir la réussite des projets."
            },
            {
                skillName: "Autonomie & Analyse",
                skillDescription: "Je sais analyser un problème ou un ticket en profondeur. Je suis autonome dans mes recherches (documentation, forums) pour trouver la solution la plus efficace avant de demander de l'aide."
            },
        ],
    },
    {
        title: "Outils & Environnement", 
        description: "Les outils que je maîtrise pour travailler de manière efficace et collaborative.", 
        skills: [
            {
                skillName: "Git & GitHub",
                skillDescription: "Je maîtrise <strong>git</strong>, des commandes de base (commit, push...) aux concepts plus avancés (gestion des branches, merge, rebase, résolution de conflits).",
                extra: "J'utilise <strong>GitHub</strong> (ou GitLab) au quotidien pour la gestion de projet, l'ouverture de <strong>Pull Requests</strong> et la pratique des <strong>'code reviews'</strong>."
            },
            {
                skillName: "CLI & Éditeurs de code",
                skillDescription: "Je suis à l'aise avec la <strong>ligne de commande (CLI)</strong> pour naviguer et lancer des scripts. J'optimise mon environnement sur <strong>VS Code</strong> et <strong>PHPStorm</strong> (raccourcis, extensions) pour un maximum de productivité."
            },
            {
                skillName: "CI/CD & Déploiement",
                skillDescription: "J'ai une expérience concrète de la <strong>CI/CD</strong> acquise en alternance. J'ai notamment travaillé avec <strong>Docker</strong> pour la conteneurisation, <strong>Jenkins</strong> pour l'intégration continue et <strong>ArgoCD</strong> pour le déploiement sur <strong>Kubernetes</strong>."
            }
        ],
    },
]