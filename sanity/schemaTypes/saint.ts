import { defineType } from "sanity";

export const saint = defineType( {
        name: 'saint',
        title: 'Saint Bio',
        type: 'document',
        fields: [
                {
                        name: 'saintName',
                        title: 'Select Saint',
                        type: 'string',
                        description: 'Choose the saint to add/edit their bio',
                        options: {
                                list: [
                                        "Vyasar", "Adi Sankara", "Mahaperiyava", "Sringeri Periyava", "Ramanujar",
                                        "Madhvacharya", "Raghavendrar", "Buddha", "Bhagwan Ramana Maharishi",
                                        "Seshadri Swamigal", "Sadasiva Bhahmendra", "Jnaneshwar", "Shri Chaitanya Mahaprabhu",
                                        "Meerabai", "Purandaradasar", "Sant Thukaram", "Ramakrishna Paramahamsar",
                                        "Swami Vivekananda", "Sri Guru Babaji", "Guru Nanak", "Narayana Guru",
                                        "Arunagirinathar", "Shridi Sai Baba", "Sant Kabirdas", "Avvaiyar",
                                        "Thiruvalluvar", "Vallalar", "Pamban Swamigal", "Nalvar", "Surdas",
                                        "Sant Namdev", "Samarth Ramdas", "Agasthiyar", "Avudai Akkal with Guru Sreedhara Ayyaval",
                                        "Vallabacharya Mahaprabhu", "Andal", "Badrachala Ramadas", "Thulasidas",
                                        "Yogini Lalleshwari of Kashmir", "Akka Mahadevi", "Pattinathar", "Sarada Devi",
                                        "Saint Thyagaraja", "Sekkizhar", "Bhagavan Nama Bhodendral Sridhara Ayyaval Marudanallur Sadguru Swamigal",
                                        "Vedanta Desikar", "Manavala Mamunigal", "Eknath", "Aurobindo", "Thirumoolar",
                                        "Nimbarkar", "Srimanta Sankardev", "Mahavir", "Chinmayananda", "Patanjali", "Basavanna"
                                ],
                        },
                        validation: (Rule) => Rule.required(),
                },
                {
                        name: 'bio',
                        title: 'Biography',
                        type: 'text',
                        description: 'The spiritual bio for this saint',
                        validation: (Rule) => Rule.required(),
                },
        ],
});