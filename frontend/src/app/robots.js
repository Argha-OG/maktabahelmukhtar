export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin/", "/api/"],
        },
        sitemap: "https://maktabahelmukhtar.vercel.app/sitemap.xml",
    };
}
