import { privacySections } from '@/constants/privacySections';

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
      {privacySections.map((section, idx) => (
        <section key={idx} className="mb-8">
          <h1 className={`text-2xl sm:text-3xl font-semibold mb-4`}>
            {section.title}
          </h1>
          <div className="space-y-3 text-base sm:text-lg leading-relaxed text-gray-700">
            {section.content.map((item, i) => {
              if (item.type === "paragraph") {
                return <p key={i}>{item.text}</p>;
              } else if (item.type === "list") {
                return (
                  <ul key={i} className="list-disc list-inside space-y-1">
                    {item.items.map((li, liIdx) => (
                      <li key={liIdx}>{li}</li>
                    ))}
                  </ul>
                );
              }
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
