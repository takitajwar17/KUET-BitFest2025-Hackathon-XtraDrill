# Hackathon Landing Page Template

A modern, responsive landing page template built with Next.js and Tailwind CSS, perfect for hackathons based on Inherit.


## 🛠️ Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/takitajwar17/inherit-hackathon-template.git
   ```

2. Install dependencies:
   ```bash
   cd inherit-hackathon-template
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the following variables with your own values:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here

   # Clerk Authentication URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Clerk Webhook
   WEBHOOK_SECRET=your_webhook_secret_here

   # MongoDB
   MONGODB_URI=your_mongodb_uri_here

   # Next.js
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```
   Note: Replace all values that start with `your_` with your actual credentials.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

1. **Landing Page (`app/components/LandingPage.jsx`)**
   - Update hero section text and images
   - Modify statistics values and labels
   - Customize feature cards and impact areas
   - Edit footer links and company information

2. **Sidebar (`app/components/Sidebar.jsx`)**
   - Customize navigation menu items
   - Update icons and links
   - Modify styling and colors

## 🎨 Tech Stack

- Next.js 13+
- Tailwind CSS
- React Icons
- Clerk Authentication

Thank you!#   K U E T - B i t F e s t 2 0 2 5 - H a c k a t h o n - X t r a D r i l l  
 