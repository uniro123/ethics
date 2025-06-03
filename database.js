const ethicsDatabase = {
    philosophers: [
        {
            name: "Immanuel Kant",
            category: "philosophers",
            period: "18th Century",
            mainIdeas: ["Categorical Imperative", "Deontological Ethics", "Duty-based Ethics"],
            description: "German philosopher who developed the concept of the categorical imperative and deontological ethics.",
            keyWorks: ["Critique of Pure Reason", "Groundwork of the Metaphysics of Morals"]
        },
        {
            name: "Aristotle",
            category: "philosophers",
            period: "Ancient Greece",
            mainIdeas: ["Virtue Ethics", "Golden Mean", "Eudaimonia"],
            description: "Ancient Greek philosopher who developed virtue ethics and the concept of eudaimonia (human flourishing).",
            keyWorks: ["Nicomachean Ethics", "Politics"]
        },
        {
            name: "John Stuart Mill",
            category: "philosophers",
            period: "19th Century",
            mainIdeas: ["Utilitarianism", "Harm Principle", "Individual Liberty"],
            description: "British philosopher and economist who developed utilitarianism and advocated for individual rights.",
            keyWorks: ["On Liberty", "Utilitarianism"]
        },
        {
            name: "Plato",
            category: "philosophers",
            period: "Ancient Greece",
            mainIdeas: ["Theory of Forms", "Justice", "Philosopher King"],
            description: "Ancient Greek philosopher who founded the Academy in Athens and wrote extensively on ethics, politics, and metaphysics.",
            keyWorks: ["The Republic", "Symposium", "Apology"]
        },
        {
            name: "Friedrich Nietzsche",
            category: "philosophers",
            period: "19th Century",
            mainIdeas: ["Will to Power", "Eternal Recurrence", "Master-Slave Morality"],
            description: "German philosopher known for his radical critique of traditional morality and religion.",
            keyWorks: ["Thus Spoke Zarathustra", "Beyond Good and Evil"]
        },
        {
            name: "Simone de Beauvoir",
            category: "philosophers",
            period: "20th Century",
            mainIdeas: ["Feminist Ethics", "Existential Freedom", "Gender as Social Construction"],
            description: "French philosopher who made significant contributions to feminist theory and existentialism.",
            keyWorks: ["The Second Sex", "The Ethics of Ambiguity"]
        },
        {
            name: "Peter Singer",
            category: "philosophers",
            period: "Contemporary",
            mainIdeas: ["Animal Liberation", "Effective Altruism", "Global Ethics"],
            description: "Australian philosopher known for his work on animal rights and effective altruism.",
            keyWorks: ["Animal Liberation", "Practical Ethics"]
        },
        {
            name: "Judith Jarvis Thomson",
            category: "philosophers",
            period: "20th Century",
            mainIdeas: ["Moral Permissibility", "Rights Theory", "Thought Experiments"],
            description: "American philosopher best known for her defense of abortion rights using famous thought experiments like the 'Violinist analogy.'",
            keyWorks: ["A Defense of Abortion", "The Realm of Rights"]
        },
        {
            name: "Alasdair MacIntyre",
            category: "philosophers",
            period: "Contemporary",
            mainIdeas: ["Virtue Ethics Revival", "Narrative Ethics", "Tradition-based Morality"],
            description: "Scottish philosopher known for his work in ethics and political philosophy, especially the revival of Aristotelian virtue ethics.",
            keyWorks: ["After Virtue", "Whose Justice? Which Rationality?"]
        },
        {
            name: "Saint Thomas Aquinas",
            category: "philosophers",
            period: "13th Century",
            mainIdeas: ["Natural Law", "Virtue Ethics", "Divine Command Theory"],
            description: "Medieval Catholic philosopher and theologian who integrated Aristotelian philosophy with Christian doctrine, emphasizing reason and natural law in moral decision-making.",
            keyWorks: ["Summa Theologica", "Summa Contra Gentiles"]
        }
        
        
    ],
    concepts: [
        {
            name: "Utilitarianism",
            category: "concepts",
            definition: "The ethical theory that the most moral choice is the one that maximizes utility (usually defined as happiness or well-being) for the greatest number of people.",
            keyThinkers: ["Jeremy Bentham", "John Stuart Mill"],
            relatedConcepts: ["Consequentialism", "Hedonism", "Greatest Happiness Principle"]
        },
        {
            name: "Categorical Imperative",
            category: "concepts",
            definition: "A fundamental principle of ethics that states one should only act according to rules that could become universal laws.",
            keyThinkers: ["Immanuel Kant"],
            relatedConcepts: ["Deontological Ethics", "Moral Duty", "Universal Law"]
        },
        {
            name: "Virtue Ethics",
            category: "concepts",
            definition: "An approach to ethics that emphasizes the virtues or moral character, rather than actions or their consequences.",
            keyThinkers: ["Aristotle", "Alasdair MacIntyre"],
            relatedConcepts: ["Character", "Eudaimonia", "Golden Mean"]
        },
        {
            name: "Moral Relativism",
            category: "concepts",
            definition: "The view that moral truths are relative to particular cultures or individuals.",
            keyThinkers: ["Ruth Benedict", "Gilbert Harman"],
            relatedConcepts: ["Cultural Relativism", "Moral Subjectivism", "Ethical Pluralism"]
        },
        {
            name: "Free Will",
            category: "concepts",
            definition: "The idea that individuals have the ability to make choices freely and are morally responsible for their actions.",
            keyThinkers: ["William James", "Jean-Paul Sartre"],
            relatedConcepts: ["Determinism", "Moral Responsibility", "Agency"]
        },
        {
            name: "Social Justice",
            category: "concepts",
            definition: "The fair and just relation between the individual and society, measured by the distribution of wealth, opportunities, and privileges.",
            keyThinkers: ["John Rawls", "Martha Nussbaum"],
            relatedConcepts: ["Equality", "Fairness", "Distribution of Resources"]
        },
        {
            name: "Moral Luck",
            category: "concepts",
            definition: "The idea that the morality of an action can be influenced by factors beyond the agent’s control.",
            keyThinkers: ["Thomas Nagel", "Bernard Williams"],
            relatedConcepts: ["Responsibility", "Intention", "Consequentialism"]
        },
        {
            name: "Double Effect Principle",
            category: "concepts",
            definition: "An ethical principle which states that performing a good action may be permissible even if it has bad side effects.",
            keyThinkers: ["Thomas Aquinas"],
            relatedConcepts: ["Intent vs. Outcome", "Just War Theory", "Moral Dilemma"]
        },
        {
            name: "Moral Realism",
            category: "concepts",
            definition: "The view that there are objective moral facts and values that exist independently of human beliefs or feelings.",
            keyThinkers: ["David Brink", "Peter Railton"],
            relatedConcepts: ["Objectivism", "Moral Facts", "Metaethics"]
        },
        {
            name: "Natural Law",
            category: "concepts",
            definition: "A moral theory asserting that ethical principles are grounded in human nature and can be discovered through reason.",
            keyThinkers: ["Saint Thomas Aquinas", "Cicero", "John Locke"],
            relatedConcepts: ["Moral Order", "Human Reason", "Divine Law"]
        },
        {
            name: "Doctrine of Double Effect",
            category: "concepts",
            definition: "A principle which states that performing a good action may be permissible even if it causes a harmful side effect, as long as the harm is not intended.",
            keyThinkers: ["Saint Thomas Aquinas"],
            relatedConcepts: ["Intent vs Consequence", "Moral Permissibility", "Natural Law"]
        },
        {
            name: "Ethics",
            category: "concepts",
            definition: "Ethics is the study of right and wrong, guiding how people should act and treat others. It explores moral principles, values, and what it means to live a good life.",
            keyThinkers: ["Socrates", "Aristotle", "Immanuel Kant", "John Stuart Mill"],
            relatedConcepts: ["Morality", "Moral Philosophy", "Value Theory"]
        }
        
                
        
    ],
    theories: [
        {
            name: "Deontological Ethics",
            category: "theories",
            definition: "An ethical framework that judges the morality of actions based on their adherence to rules or duties.",
            keyPrinciples: ["Moral Duty", "Universal Laws", "Categorical Imperative"],
            mainProponents: ["Immanuel Kant", "W.D. Ross"]
        },
        {
            name: "Consequentialism",
            category: "theories",
            definition: "The view that the morality of an action should be judged solely by its consequences.",
            keyPrinciples: ["Results-based Ethics", "Outcome Assessment", "Greater Good"],
            mainProponents: ["Jeremy Bentham", "Peter Singer"]
        },
        {
            name: "Care Ethics",
            category: "theories",
            definition: "An ethical framework that emphasizes the importance of context, interdependence, and responsibility in moral decision-making.",
            keyPrinciples: ["Relationships", "Empathy", "Context-Sensitivity"],
            mainProponents: ["Nel Noddings", "Carol Gilligan"]
        },
        {
            name: "Social Contract Theory",
            category: "theories",
            definition: "The view that moral and political obligations are derived from a contract between individuals to form a society.",
            keyPrinciples: ["Consent", "Mutual Benefit", "Political Obligation"],
            mainProponents: ["Thomas Hobbes", "John Rawls"]
        },
        {
            name: "Virtue Theory",
            category: "theories",
            definition: "A framework focusing on the moral character of the agent rather than the consequences of actions or adherence to rules.",
            keyPrinciples: ["Character Development", "Practical Wisdom", "Excellence"],
            mainProponents: ["Aristotle", "Rosalind Hursthouse"]
        },
        {
            name: "Ethical Intuitionism",
            category: "theories",
            definition: "The theory that moral truths are known by intuition or immediate insight.",
            keyPrinciples: ["Moral Intuition", "Self-evidence", "Non-naturalism"],
            mainProponents: ["G.E. Moore", "W.D. Ross"]
        },
        {
            name: "Constructivist Ethics",
            category: "theories",
            definition: "An approach to ethics which holds that moral principles are constructed through practical reasoning rather than discovered as objective truths.",
            keyPrinciples: ["Practical Reason", "Moral Autonomy", "Justification"],
            mainProponents: ["John Rawls", "Christine Korsgaard"]
        },
        {
            name: "Natural Law Theory",
            category: "theories",
            definition: "An ethical theory asserting that moral standards are derived from the nature and purpose of human beings, discoverable through reason and aligned with divine order.",
            keyPrinciples: ["Moral Order", "Purpose-Driven Ethics", "Rationality"],
            mainProponents: ["Saint Thomas Aquinas", "John Finnis"]
        }        
        
    ],
    schools: [
        {
            name: "Stoicism",
            category: "schools",
            period: "Ancient Greece and Rome",
            mainIdeas: ["Self-control", "Fortitude", "Natural Law"],
            keyThinkers: ["Epictetus", "Marcus Aurelius", "Seneca"],
            description: "Ancient Greek and Roman school of philosophy emphasizing ethics, logic, and living in harmony with nature."
        },
        {
            name: "Existentialism",
            category: "schools",
            period: "19th-20th Century",
            mainIdeas: ["Authenticity", "Individual Responsibility", "Freedom of Choice"],
            keyThinkers: ["Jean-Paul Sartre", "Simone de Beauvoir"],
            description: "Philosophical movement emphasizing individual existence, freedom, and choice."
        },
        {
            name: "Pragmatism",
            category: "schools",
            period: "19th-20th Century",
            mainIdeas: ["Practical Consequences", "Experimentation", "Social Reform"],
            keyThinkers: ["William James", "John Dewey"],
            description: "American philosophical movement focusing on practical consequences as the main criterion of truth and moral values."
        },
        {
            name: "Critical Theory",
            category: "schools",
            period: "20th Century",
            mainIdeas: ["Social Critique", "Emancipation", "Power Relations"],
            keyThinkers: ["Max Horkheimer", "Jürgen Habermas"],
            description: "School of thought that combines philosophy and social science to critique and change society."
        },
        {
            name: "Confucianism",
            category: "schools",
            period: "Ancient China",
            mainIdeas: ["Moral Cultivation", "Social Harmony", "Filial Piety"],
            keyThinkers: ["Confucius", "Mencius"],
            description: "Chinese philosophical tradition emphasizing personal and governmental morality, correctness of social relationships, and justice."
        },
        {
            name: "Buddhist Ethics",
            category: "schools",
            period: "Ancient India",
            mainIdeas: ["Compassion", "Non-violence", "Mindfulness"],
            keyThinkers: ["Buddha", "Thich Nhat Hanh"],
            description: "Ethical system based on the teachings of Buddhism, emphasizing compassion, mindfulness, and the elimination of suffering."
        },
        {
            name: "Feminist Ethics",
            category: "schools",
            period: "20th-21st Century",
            mainIdeas: ["Gendered Morality", "Ethics of Care", "Oppression and Power"],
            keyThinkers: ["Carol Gilligan", "Judith Butler", "Simone de Beauvoir"],
            description: "A philosophical movement challenging traditional ethics by incorporating feminist insights into moral reasoning."
        },
        {
            name: "Environmental Ethics",
            category: "schools",
            period: "Contemporary",
            mainIdeas: ["Ecocentrism", "Moral Standing of Nature", "Sustainability"],
            keyThinkers: ["Aldo Leopold", "Arne Naess"],
            description: "School of thought that considers the ethical relationship between human beings and the natural environment."
        }
        
    ]
}; 
