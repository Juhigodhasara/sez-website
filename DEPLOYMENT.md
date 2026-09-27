# 🚀 Deployment Guide: Sahjanand Educational Zone (SEZ)

This project consists of two separate applications that need to be deployed:
1. **Sanity Studio (CMS):** The admin panel where the client manages data.
2. **React Website (Frontend):** The public-facing website built with Vite.

---

## 1️⃣ Deploy the Admin Panel (Sanity Studio)

Sanity provides free, instant hosting for the studio.

1. Open your terminal and navigate to the studio folder:
   ```bash
   cd sez-studio
   ```
2. Run the deploy command:
   ```bash
   npx sanity deploy
   ```
3. You will be prompted to enter a **hostname**. Type a name like `sez-admin` or `sahjanand`.
4. **Result:** Your CMS is now live at `https://<your-hostname>.sanity.studio`. Share this link with your client.

---

## 2️⃣ Deploy the Live Website (Frontend) via Vercel

Vercel is highly recommended for React/Vite applications. It links directly to your GitHub repository and updates automatically whenever you push new code.

1. Go to **[Vercel.com](https://vercel.com/)** and log in with your GitHub account.
2. Click **Add New...** and select **Project**.
3. Locate your `Juhigodhasara/sez-website` repository and click **Import**.
4. **Configure the Project (CRITICAL STEP):**
   * **Framework Preset:** Vercel should automatically select `Vite`.
   * **Root Directory:** Click "Edit", select the `sez-website` folder, and save. (Because the React code isn't in the root of the repo).
   * **Environment Variables:** Open the drop-down and add these two variables:
     * Name: `VITE_SANITY_PROJECT_ID` | Value: `hcgkbm9a`
     * Name: `VITE_SANITY_DATASET` | Value: `production`
5. Click **Deploy**.
6. Wait 1-2 minutes. Vercel will provide a live URL (e.g., `https://sez-website.vercel.app`).

---

## 3️⃣ Whitelist the Live Website in Sanity (CORS)

For security reasons, your live website will be blocked from fetching data until you authorize its URL in Sanity.

1. Go to your Sanity Dashboard: **[sanity.io/manage](https://sanity.io/manage)**
2. Select your project (`hcgkbm9a`).
3. Navigate to the **API** tab.
4. Scroll to **CORS Origins** and click **Add CORS origin**.
5. Paste your exact Vercel URL (e.g., `https://sez-website.vercel.app`).
6. **Check the box** for **Allow credentials**.
7. Click **Save**.

---

## 4️⃣ Testing Your Live Setup

1. Open your new Vercel website URL. Ensure the content (Courses, Faculty, Blogs) is loading.
2. Open your Sanity Studio URL (`https://<hostname>.sanity.studio`).
3. Make a text change to a Course or Blog Post and click **Publish**.
4. Refresh the Vercel website — your change should appear instantly!

*(Note: If you ever want to connect a custom domain like `sez.edu.in`, you can do so in the Vercel Project Settings under "Domains").*

