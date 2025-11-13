export default async function sitemap() {
  const baseUrl = "https://cuapcuap.vercel.app";

  // Contoh statis (nanti bisa kamu ganti dengan data dari DB)
  const routes = ["", "/about", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
