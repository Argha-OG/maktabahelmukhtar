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

## 🔐 Admin Login

| Field | Value |
|-------|-------|
| **URL** | https://maktabahelmukhtar.vercel.app/en/admin/login |
| **Username** | `admin` |
| **Password** | `admin123` |

---

## 🖥️ Frontend Pages & Functions

### Public Pages

#### `/` — Homepage
- Displays animated Hero Slider (banners managed from admin)
- **Top Selling Books** section — highlights best-seller books
- **Latest Collection** — newest books added
- **Top Authors / Scholars** — profiles pulled from the Authors module
- **About & Stats** — institution description with animated counters
- **Organisation Structure** — visual hierarchy chart

#### `/books` — Book Catalog
- Fetches all books from the backend API
- **Filter by category** (Fiqh, Hadith, History, Theology, General)
- **Search bar** — filters books by title or author
- **Pagination** — loads books page by page
- Each book card shows cover, title, author, price, category badge

#### `/books/[id]` — Book Detail
- Shows full book info: cover image, title, author, category, price
- **Synopsis** — full description
- **Author Profile** — name, photo, bio
- **Add to Cart** button — adds book to the cart context
- **Ask on WhatsApp** button — opens WhatsApp with pre-filled book title
- **Share** button
- **Related Books** — books from the same category
- **Sticky mobile action bar** — appears when scrolled down
- Dynamic SEO metadata per book (title, description, cover OG image)

#### `/feed` — Daily Islamic Feed
- Lists all active feed posts sorted by date
- Filter by type: **Hadith**, **Article**, **Announcement**, **Quote**
- Pagination support
- Each post card shows type badge, title, date preview

#### `/feed/[id]` — Feed Post Detail
- Full post content with source attribution
- Share button
- Dynamic SEO metadata per post

#### `/gallery` — Photo Gallery
- Grid display of all gallery images uploaded from admin
- Lightbox view on click

#### `/contact` — Contact Page
- **Contact form** with fields: Name, Email, Subject, Message
  - On submit → sends data to `/api/leads` → saves in MongoDB
  - Shows success/error toast notifications
- **Contact info panel** — email, WhatsApp link, address
- **Embedded Google Map** — institution location

#### `/payment` — Payment Options
- **Bank Transfer** details — bank name, account name, account number, branch
- **QR Code** section for mobile payments
- Islamic dedication note

---

### Admin Panel Pages (requires login)

#### `/admin` — Dashboard
- Live count of all 6 data modules: Books, Feed Posts, Authors, Gallery, Hero Banners, Leads
- **Command Shortcuts** grid — quick links to create new entries
- **Tech Support** button — opens WhatsApp

#### `/admin/books` — Books Management
| Function | Description |
|----------|-------------|
| **List all books** | Table of all books with cover thumbnail |
| **Add book** | Form: title, author, editor, authorBio, authorImage, description, coverImage (upload or URL), price, category, whatsappLink, isBestSeller toggle |
| **Edit book** | Pre-fills form with existing data, saves changes |
| **Delete book** | Removes book from DB with confirmation |
| **Image upload** | Local file → Cloudinary → stores secure URL |

#### `/admin/feed` — Feed Management
| Function | Description |
|----------|-------------|
| **List all posts** | Table of all feed items with type badge |
| **Add post** | Form: title, content, description, type (Hadith/Article/Announcement/Quote), source, image, date, active toggle |
| **Edit post** | Pre-fills form, saves changes |
| **Delete post** | Removes post from DB |

#### `/admin/authors` — Scholars Management
| Function | Description |
|----------|-------------|
| **List all scholars** | Grid of author cards with photo |
| **Add scholar** | Form: name, role, bio, image (upload or URL) |
| **Edit scholar** | Update existing scholar details |
| **Delete scholar** | Remove from DB |

#### `/admin/ads` — Hero Banners Management
| Function | Description |
|----------|-------------|
| **List all banners** | List of hero slides with image preview |
| **Add banner** | Form: image, title, subtitle, link, order number |
| **Edit banner** | Update slide content |
| **Delete banner** | Remove slide from carousel |

#### `/admin/gallery` — Gallery Management
| Function | Description |
|----------|-------------|
| **View gallery** | Grid of all uploaded images |
| **Upload image** | Local file → Cloudinary → adds to gallery |
| **Add with URL** | Paste an image URL directly |
| **Delete image** | Remove from gallery and DB |

#### `/admin/leads` — Inbound Leads (Contact Submissions)
| Function | Description |
|----------|-------------|
| **View all leads** | Table with name, email, subject, date, status |
| **Update status** | Mark lead as: `new` → `read` → `contacted` → `archived` |
| **Delete lead** | Remove a lead from DB |

---

## ⚙️ Backend API Functions

Base URL: `https://maktabahelmukhtar-66zs.vercel.app`

### Books — `/api/books`
| Method | Endpoint | Function |
|--------|----------|----------|
| `GET` | `/api/books` | Get all books, sorted newest first |
| `GET` | `/api/books/:id` | Get single book by MongoDB `_id` |
| `POST` | `/api/books` | Create new book (full schema) |
| `PUT` | `/api/books/:id` | Update existing book by ID |
| `DELETE` | `/api/books/:id` | Delete book by ID |

### Daily Feed — `/api/feed`
| Method | Endpoint | Function |
|--------|----------|----------|
| `GET` | `/api/feed` | Get all **active** feed items, sorted by date desc |
| `GET` | `/api/feed?id=:id` | Get single feed item by ID |
| `POST` | `/api/feed` | Create new feed post |
| `PUT` | `/api/feed` | Update feed post (`{ id, ...fields }` in body) |
| `DELETE` | `/api/feed?id=:id` | Delete feed item by ID |

### Authors — `/api/admin/authors`
| Method | Endpoint | Function |
|--------|----------|----------|
| `GET` | `/api/admin/authors` | Get all scholars |
| `POST` | `/api/admin/authors` | Create new scholar |
| `PUT` | `/api/admin/authors` | Update scholar (`{ id, ...fields }` in body) |
| `DELETE` | `/api/admin/authors?id=:id` | Delete scholar by ID |

### Hero Banners (Ads) — `/api/admin/ads`
| Method | Endpoint | Function |
|--------|----------|----------|
| `GET` | `/api/admin/ads` | Get all banners, sorted by `order` field |
| `POST` | `/api/admin/ads` | Create new banner |
| `PUT` | `/api/admin/ads` | Update banner (`{ id, ...fields }` in body) |
| `DELETE` | `/api/admin/ads?id=:id` | Delete banner by ID |

### Gallery — `/api/admin/gallery`
| Method | Endpoint | Function |
|--------|----------|----------|
| `GET` | `/api/admin/gallery` | Get all gallery items, sorted by date |
| `POST` | `/api/admin/gallery` | Add new gallery item |
| `PUT` | `/api/admin/gallery` | Update gallery item |
| `DELETE` | `/api/admin/gallery?id=:id` | Delete gallery item |

### Leads — `/api/admin/leads`
| Method | Endpoint | Function |
|--------|----------|----------|
| `GET` | `/api/admin/leads` | Get all leads, newest first |
| `POST` | `/api/admin/leads` | Submit contact form (public) — requires name, email, subject, message |
| `PUT` | `/api/admin/leads` | Update lead status (`new`/`read`/`contacted`/`archived`) |
| `DELETE` | `/api/admin/leads?id=:id` | Delete lead |

### Utility
| Method | Endpoint | Function |
|--------|----------|----------|
| `GET` | `/api/health` | Health check — returns `{ status: "ok" }` |

---

## 🗄️ Frontend API Routes (Next.js — `/src/app/api/`)

| Route | Method | Function |
|-------|--------|----------|
| `/api/auth/[...nextauth]` | `GET/POST` | NextAuth.js — handles login, session, JWT |
| `/api/admin/upload` | `POST` | Upload image file → Cloudinary → returns `secure_url` |
| `/api/books` | `GET/POST/PUT/DELETE` | Proxy to backend `/api/books` |
| `/api/books/[id]` | `GET/PUT/DELETE` | Proxy to backend `/api/books/:id` |
| `/api/feed` | `GET/POST/PUT/DELETE` | Proxy to backend `/api/feed` |
| `/api/gallery` | `GET` | Proxy to backend `/api/admin/gallery` |
| `/api/leads` | `POST` | Submit contact form → backend |

---

## 🗃️ Database Models (MongoDB Atlas)

### Book
| Field | Type | Notes |
|-------|------|-------|
| `title` | String | Required, max 100 chars |
| `author` | String | Required |
| `editor` | String | Optional |
| `description` | String | Required |
| `coverImage` | String | Required — Cloudinary URL |
| `authorImage` | String | Optional |
| `authorBio` | String | Optional |
| `price` | Number | Default 0 (RM) |
| `isBestSeller` | Boolean | Default false |
| `whatsappLink` | String | Required — wa.me order link |
| `category` | Enum | Fiqh, Hadith, History, Theology, General |

### DailyFeed
| Field | Type | Notes |
|-------|------|-------|
| `title` | String | Required |
| `content` | String | Main body text |
| `description` | String | Optional extra detail |
| `type` | Enum | Hadith, Article, Announcement, Quote |
| `source` | String | Attribution (e.g. "Sahih Bukhari") |
| `image` | String | Optional image URL |
| `date` | Date | Publication date |
| `active` | Boolean | Only active items appear on public feed |

### Author
| Field | Type | Notes |
|-------|------|-------|
| `name` | String | Required |
| `image` | String | Photo URL |
| `role` | String | e.g. "Senior Scholar" |
| `bio` | String | Short biography |

### Ads (Hero Banners)
| Field | Type | Notes |
|-------|------|-------|
| `image` | String | Banner image URL |
| `title` | String | Slide heading |
| `subtitle` | String | Slide subheading |
| `link` | String | CTA link |
| `order` | Number | Sort position in carousel |

### Gallery
| Field | Type | Notes |
|-------|------|-------|
| `image` | String | Cloudinary URL |
| `caption` | String | Optional description |
| `date` | Date | Upload date |

### Lead (Contact Submissions)
| Field | Type | Notes |
|-------|------|-------|
| `name` | String | Required, max 100 |
| `email` | String | Required, validated format |
| `subject` | String | Required, max 200 |
| `message` | String | Required, max 2000 |
| `status` | Enum | new → read → contacted → archived |

---

## 🌐 Environment Variables

### Frontend (`frontend/.env.local`)
```env
MONGODB_URI=mongodb+srv://...
BACKEND_URL=https://maktabahelmukhtar-66zs.vercel.app
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=https://maktabahelmukhtar.vercel.app
CLOUDINARY_CLOUD_NAME=djzkej5iu
CLOUDINARY_API_KEY=884238968632158
CLOUDINARY_API_SECRET=ojBc5IdEt1kcmlIpbWGP-dWStN8
```

### Backend (`backend/.env`)
```env
MONGODB_URI=mongodb+srv://...
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

> **Vercel:** Add all the above as Environment Variables in each project's Vercel dashboard before deploying.

---

## 🛠️ Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev         # runs on http://localhost:3000
```

### Backend
```bash
cd backend
npm install
npm run dev         # runs on http://localhost:5000
```

---

## 🚀 Deployment

Both frontend and backend are deployed as separate Vercel projects.

| Project | Vercel URL |
|---------|-----------|
| Frontend | https://maktabahelmukhtar.vercel.app |
| Backend | https://maktabahelmukhtar-66zs.vercel.app |

The backend includes a `vercel.json` that wraps `server.js` as a serverless function and routes all `/*` traffic to it.

---

## 📞 Contact

| Channel | Details |
|---------|---------|
| **Email** | maktabahelmukhtar@gmail.com |
| **WhatsApp** | [+60 11-3678 7525](https://wa.me/601136787525) |
| **Facebook** | [Maktabah El Mukhtar](https://www.facebook.com/share/17DXcPKvT4/) |
| **Instagram** | [@maktabah_el.mukhtar](https://www.instagram.com/maktabah_el.mukhtar) |
| **TikTok** | [@maktabah.em](https://www.tiktok.com/@maktabah.em) |
| **Address** | Block C2, Savanna Executive Suites, Putrajaya, Malaysia |

---

© 2025 Maktabah El Mukhtar. All rights reserved.
