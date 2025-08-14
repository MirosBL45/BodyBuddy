type ContentItem =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

interface Section {
    title: string;
    content: ContentItem[];
}

export const privacySections: Section[] = [
    {
        title: "Privacy Policy",
        content: [
            { type: "paragraph", text: "Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information." }
        ],
    },
    {
        title: "Information We Collect",
        content: [
            {
                type: "list", items: [
                    "Personal details you provide directly, such as name, email address, and fitness goals.",
                    "Usage data, like pages visited, time spent, and interaction with our platform."
                ]
            }
        ],
    },
    {
        title: "How We Use Your Information",
        content: [
            {
                type: "list", items: [
                    "To personalize your fitness and diet plans.",
                    "To improve our services and provide a better user experience.",
                    "To communicate important updates or offers."
                ]
            }
        ],
    },
    {
        title: "Data Protection",
        content: [
            { type: "paragraph", text: "We use industry-standard security measures to safeguard your personal data." },
            { type: "paragraph", text: "Access to your data is limited to authorized personnel only." }
        ],
    },
    {
        title: "Your Rights",
        content: [
            {
                type: "list", items: [
                    "You can request access to, correction of, or deletion of your personal data.",
                    "You may opt-out of receiving marketing communications at any time."
                ]
            }
        ],
    },
    {
        title: "Contact Us",
        content: [
            { type: "paragraph", text: "If you have questions about this Privacy Policy, please reach out to our support team." }
        ],
    },
];