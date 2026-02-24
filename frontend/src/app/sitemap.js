const BACKEND_URL = process.env.BACKEND_URL || "https://maktabahelmukhtar-66zs.vercel.app";
const SITE_URL = "https://maktabahelmukhtar.vercel.app";

export default async function sitemap() {
    const staticRoutes = [
        { url: `${SITE_URL}/en`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: `${SITE_URL}/ar`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: `${SITE_URL}/en/books`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
        { url: `${SITE_URL}/ar/books`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
        { url: `${SITE_URL}/en/feed`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
        { url: `${SITE_URL}/ar/feed`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
        { url: `${SITE_URL}/en/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
        { url: `${SITE_URL}/en/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/en/payment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ];

    let bookRoutes = [];
    let feedRoutes = [];

    try {
        const booksRes = await fetch(`${BACKEND_URL}/api/books`, { next: { revalidate: 3600 } });
        const booksData = await booksRes.json();
        if (booksData.success && booksData.data) {
            bookRoutes = booksData.data.flatMap((book) => [
                { url: `${SITE_URL}/en/books/${book._id}`, lastModified: new Date(book.updatedAt || Date.now()), changeFrequency: "weekly", priority: 0.8 },
                { url: `${SITE_URL}/ar/books/${book._id}`, lastModified: new Date(book.updatedAt || Date.now()), changeFrequency: "weekly", priority: 0.8 },
            ]);
        }
    } catch (e) { }

    try {
        const feedRes = await fetch(`${BACKEND_URL}/api/feed`, { next: { revalidate: 3600 } });
        const feedData = await feedRes.json();
        if (feedData.success && feedData.data) {
            feedRoutes = feedData.data.flatMap((item) => [
                { url: `${SITE_URL}/en/feed/${item._id}`, lastModified: new Date(item.date || Date.now()), changeFrequency: "monthly", priority: 0.7 },
                { url: `${SITE_URL}/ar/feed/${item._id}`, lastModified: new Date(item.date || Date.now()), changeFrequency: "monthly", priority: 0.7 },
            ]);
        }
    } catch (e) { }

    return [...staticRoutes, ...bookRoutes, ...feedRoutes];
}
