type ContentItem =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

interface Section {
    title: string;
    content: ContentItem[];
}

export const termsSections: Section[] = [
    {
        title: "Terms & Conditions",
        content: [
            { type: "paragraph", text: "Welcome to our platform. By using our services, you agree to comply with these Terms & Conditions." }
        ],
    },
    {
        title: "1. Use of Services",
        content: [
            {
                type: "list", items: [
                    "You must be at least 18 years old to use our services.",
                    "You agree to provide accurate and up-to-date information.",
                    "You will not use the platform for any illegal or unauthorized purpose."
                ]
            }
        ],
    },
    {
        title: "2. Account Responsibilities",
        content: [
            {
                type: "list", items: [
                    "You are responsible for maintaining the confidentiality of your account and password.",
                    "You agree to notify us immediately of any unauthorized use of your account.",
                    "We are not responsible for any loss or damage resulting from your failure to comply."
                ]
            }
        ],
    },
    {
        title: "3. Intellectual Property",
        content: [
            { type: "paragraph", text: "All content, features, and functionality on this platform are owned by us or our licensors and are protected by copyright and other intellectual property laws." }
        ],
    },
    {
        title: "4. Limitation of Liability",
        content: [
            { type: "paragraph", text: "To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of our platform." }
        ],
    },
    {
        title: "5. Changes to Terms",
        content: [
            { type: "paragraph", text: "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with the updated date." }
        ],
    },
    {
        title: "6. Contact Us",
        content: [
            { type: "paragraph", text: "For questions regarding these Terms & Conditions, please contact us at our contact page." }
        ],
    },
];