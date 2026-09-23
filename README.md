# 🤖 Discord Bot + Dashboard — Render Ready

This version runs the **Discord bot + API + Next.js dashboard in one Render Web Service**.

✅ One Render service  
✅ One public URL  
✅ No `API_PORT`  
✅ No `NEXT_PUBLIC_API_URL`  
✅ Dashboard UI/features are kept unchanged

## 🚀 Setup

### 1️⃣ Upload to GitHub

Create a new GitHub repository and upload the files from this project.

The repository root should contain files like:

```text
package.json
render.yaml
.env.example
pages/
src/
components/
styles/
```

Do not put another `Personal-Discord-Bot-Dashboard-main` folder inside the repository.

### 2️⃣ Create Render Web Service

Open Render and choose:

**New → Web Service → Connect your GitHub repository**

Use:

```text
Runtime: Node
Build Command: npm install && npm run build
Start Command: npm start
```

If Render detects `render.yaml`, it may fill these automatically.

### 3️⃣ Add Environment Variables

In Render → **Environment** add:

```text
DISCORD_BOT_TOKEN = your Discord bot token
GUILD_ID = your Discord server ID
DASHBOARD_USERNAME = admin
DASHBOARD_PASSWORD = your own strong password
```

⚠️ Never upload your real bot token to GitHub.

You do NOT need:

```text
API_PORT
NEXT_PUBLIC_API_URL
PORT
```

Render manages `PORT` automatically.

### 4️⃣ Deploy

Press **Create Web Service / Deploy**.

After deployment Render gives you a URL such as:

```text
https://your-bot-name.onrender.com
```

Open that URL. The dashboard and bot/API are running from the same service.

## 🔐 Discord Bot Setup

In Discord Developer Portal:

1. Create/select your application.
2. Open **Bot**.
3. Copy the bot token and put it in Render as `DISCORD_BOT_TOKEN`.
4. Enable these Privileged Gateway Intents:
   - Server Members Intent
   - Message Content Intent
5. Invite the bot to your server with the permissions needed for the dashboard actions.
6. Enable Developer Mode in Discord and copy your server ID for `GUILD_ID`.

## ⚠️ Render Free Plan

The bot's 24/7 behavior depends on Render's current plan/limits. An external uptime monitor cannot guarantee that a free service will stay continuously running or bypass provider limits.

## 🛠️ If deployment fails

Open Render → **Logs** and check the first red error.

Common causes:

- Wrong Discord token
- Wrong Guild ID
- Required Discord intents not enabled
- Bot was not invited to the server
- Missing Render environment variable

Enjoy! 💙
