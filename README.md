# Maktabah El Mukhtar — Official Website

> An Islamic book writing, editing, and publishing institution based in Malaysia.

**Live Site:** https://maktabahelmukhtar.vercel.app  
**Backend API:** https://maktabahelmukhtar-66zs.vercel.app  
**GitHub:** https://github.com/Argha-OG/maktabahelmukhtar

---

## 🗂️ Project Structure

```
maktabahelmukhtar/
├── frontend/         # Next.js 14 App Router (deployed on Vercel)
└── backend/          # Express.js REST API (deployed on Vercel)
```

---

## 🖥️ Frontend (Next.js 14)

**Stack:** Next.js 14 · Tailwind CSS · Framer Motion · next-intl · NextAuth.js · Mongoose

### Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero slider, top-selling books, latest collection, scholars, about, org structure |
| `/books` | Full book catalog with search, filter by category, and pagination |
| `/books/[id]` | Book detail — cover image, description, author bio, related books, add to cart, WhatsApp inquiry |
| `/feed` | Daily Islamic feed — Hadith, Articles, Announcements, Quotes |
| `/feed/[id]` | Feed post detail — full content, source attribution |
| `/gallery` | Photo gallery of events and publications |
| `/contact` | Contact form (sends lead to DB) + embedded Google Map |
| `/payment` | Bank transfer & QR code payment instructions |
| `/admin/*` | Admin panel (requires login) |

### Admin Panel Pages

| Route | Function |
|-------|----------|
| `/admin` | Dashboard — counts of all data modules + quick shortcuts |
| `/admin/books` | Add / Edit / Delete books (title, author, description, cover image, price, category) |
| `/admin/feed` | Add / Edit / Delete feed posts (Hadith, Article, Announcement, Quote) |
| `/admin/authors` | Add / Edit / Delete scholar profiles (name, image, role) |
| `/admin/ads` | Manage hero banner slides (image, title, subtitle, link) |
| `/admin/gallery` | Upload / Delete gallery images |
| `/admin/leads` | View all contact form submissions with name, email, subject, message |
| `/admin/login` | Admin login page |

### 🔐 Admin Login Credentials

| Field | Value |
|-------|-------|
| **Username** | `admin` |
| **Password** | `admin123` |

> Login at: https://maktabahelmukhtar.vercel.app/en/admin/login

### Key Features
- **Bilingual (i18n):** English (`/en`) and Arabic (`/ar`) via `next-intl`
- **Cart system:** Add books to cart, view cart sidebar, checkout via WhatsApp or payment page
- **SEO:** Per-page metadata + dynamic `generateMetadata` for book/feed detail pages
- **Dynamic sitemap:** Auto-generated at `/sitemap.xml` with all book and feed URLs
- **Image upload:** Via Cloudinary (admin panels)
- **Authentication:** NextAuth.js with credentials provider (JWT sessions)

---

## ⚙️ Backend (Express.js)

**Stack:** Express.js 5 · Mongoose · MongoDB Atlas · Cloudinary · CORS

### API Endpoints

#### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/books` | Get all books |
| `GET` | `/api/books/:id` | Get single book |
| `GET` | `/api/feed` | Get all feed posts |
| `GET` | `/api/feed?id=:id` | Get single feed post |
| `POST` | `/api/leads` | Submit contact form |
| `GET` | `/api/health` | Health check |

#### Admin (authenticated via NextAuth session in frontend proxy)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET/POST/PUT/DELETE` | `/api/admin/books` | Manage books |
| `GET/POST/PUT/DELETE` | `/api/admin/feed` | Manage feed posts |
| `GET/POST/PUT/DELETE` | `/api/admin/authors` | Manage scholars |
| `GET/POST/PUT/DELETE` | `/api/admin/ads` | Manage hero banners |
| `GET/POST/PUT/DELETE` | `/api/admin/gallery` | Manage gallery images |
| `GET/DELETE` | `/api/admin/leads` | View/delete contact leads |

### Database Models
- **Book** — title, author, authorBio, authorImage, description, coverImage, price, category
- **Feed** — title, content, description, type (Hadith/Article/Announcement/Quote), source, image, date
- **Author** — name, image, role, bio
- **Ad** — image, title, subtitle, link, order
- **Gallery** — image, caption, date
- **Lead** — name, email, subject, message, date

---

## 🌐 Environment Variables

### Frontend (`frontend/.env.local`)
```env
MONGODB_URI=mongodb+srv://...
BACKEND_URL=https://maktabahelmukhtar-66zs.vercel.app
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=https://maktabahelmukhtar.vercel.app
```

### Backend (`backend/.env`)
```env
MONGODB_URI=mongodb+srv://...
CLOUDINARY_URL=cloudinary://...
```

---

## 🛠️ Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev         # http://localhost:3000
```

### Backend
```bash
cd backend
npm install
npm run dev         # http://localhost:5000
```

---

## 📞 Contact

- **Email:** maktabahelmukhtar@gmail.com
- **WhatsApp:** [+60 11-3678 7525](https://wa.me/601136787525)
- **Facebook:** [Maktabah El Mukhtar](https://www.facebook.com/share/17DXcPKvT4/)
- **Instagram:** [@maktabah_el.mukhtar](https://www.instagram.com/maktabah_el.mukhtar)
- **TikTok:** [@maktabah.em](https://www.tiktok.com/@maktabah.em)
- **Address:** Block C2, Savanna Executive Suites, Putrajaya, Malaysia

---

© 2025 Maktabah El Mukhtar. All rights reserved.
