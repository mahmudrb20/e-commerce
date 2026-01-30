# DINA COSMETIC - Luxury Storefront

This is the high-performance, minimalist storefront for DINA COSMETIC.

## 🚀 Launch Instructions

### 1. GitHub Repository
1.  **Initialize Git**:
    ```bash
    git init
    git add .
    git commit -m "Initial launch of DINA COSMETIC"
    ```
2.  **Create Repo**: Go to GitHub and create a new repository named `dina-cosmetic`.
3.  **Push Code**:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/dina-cosmetic.git
    git branch -M main
    git push -u origin main
    ```

### 2. Vercel Hosting
1.  **Sign in to Vercel**: Connect your GitHub account.
2.  **Import Project**: Click "Add New" -> "Project" and select the `dina-cosmetic` repository.
3.  **Configuration**:
    - **Framework Preset**: Other (Static site)
    - **Build Settings**: Default (Vercel will automatically serve `index.html`)
4.  **Deploy**: Click "Deploy".
5.  **Custom Domain**: 
    - Go to "Settings" -> "Domains" in Vercel.
    - Add your custom domain and follow the DNS instructions (similar to what we discussed).

### 3. Connect Supabase
Open `src/js/app.js` and replace the placeholder values:
- `SUPABASE_URL`: Found in Supabase Settings -> API.
- `SUPABASE_ANON_KEY`: Found in Supabase Settings -> API.

## 🎨 Design Notes
- **Fonts**: Playfair Display (Headings), Inter (Body).
- **Aesthetic**: Modern Luxury Editorial.
- **Performance**: Static HTML/CSS for sub-second load times.
