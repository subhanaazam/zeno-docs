---
title: Channels (Pro)
---

# Channels

::: info Pro Feature
Channels is available in the **Pro version** only. [View Free docs →](/free/getting-started)
:::

The **Channels** section is where you connect Zeno Chatbot to external messaging platforms so your visitors can reach your chatbot beyond your website. Every incoming message from a connected channel is processed by the same AI engine that powers your website chat widget — so your chatbot stays consistent across every platform.

Zeno currently supports four messaging channels: **Telegram**, **WhatsApp**, **Messenger**, and **Instagram**.

## Accessing Channels

Click the **Settings** tab in the top-right corner of your Zeno Chatbot page. From the left-hand settings menu, click **Channels**.

## Channel Integrations Overview

![Channels overview](/images/pro2/page1_1.png)

On the Channels page, you'll see four integration cards — one for each supported platform. Each card shows:

- The **platform name and icon**
- A **short description** of how it connects (for example, *"Connect via Telegram Bot API"*)
- A **status badge** on the top-right of the card showing whether the integration is **Active** or **Inactive**
- A **Configure** button to open the setup dialog for that platform

All four channels are set to **Inactive** by default. Click **Configure** on any card to begin setting it up.

---

## Configuring Telegram

![Channels list with Telegram card](/images/pro2/page2_1.png)

Click **Configure** on the Telegram card to open the Telegram Configuration dialog.

![Telegram configuration dialog](/images/pro2/page2_2.png)

Fill in the following fields:

- **Enabled** — Toggle this on to activate the Telegram integration. Leave it off while you are still setting up your credentials.
- **Bot Token** — Enter the Bot Token provided by Telegram's BotFather when you created your Telegram bot. The token follows a format similar to `123456:ABC-DEF...`. This is required to connect Zeno to your Telegram bot.
- **Webhook Secret** *(optional)* — Enter a secret token to verify that incoming webhook requests are genuinely coming from Telegram. Recommended for added security.
- **Webhook URL** — This is a read-only field that Zeno generates automatically. Copy this URL and paste it into your Telegram bot's webhook settings in BotFather or the Telegram Bot API dashboard. Click the **Copy** button on the right to copy it quickly.

![Telegram configuration fields](/images/pro2/page3_1.png)

Once all fields are filled in, click **Save** to apply your settings. Click **Cancel** to close the dialog without saving.

---

## Configuring WhatsApp

Click **Configure** on the WhatsApp card to open the WhatsApp Configuration dialog. WhatsApp connects via the **Meta Business API**.

![WhatsApp configuration dialog](/images/pro2/page4_1.png)

Fill in the following fields:

- **Enabled** — Toggle this on to activate the WhatsApp integration once your credentials are ready.
- **Phone Number ID** — Enter the Phone Number ID from your Meta Business account. This identifies the WhatsApp phone number associated with your business.
- **Access Token** — Enter the Access Token from your Meta Business app. This authorizes Zeno to send and receive messages on behalf of your WhatsApp number.
- **App Secret** — Enter the App Secret from your Meta Business app. This is used to verify the authenticity of incoming webhook requests.
- **Verify Token** — Enter a custom string that Meta will use to verify your webhook endpoint during setup.
- **Webhook URL** — A read-only field generated automatically by Zeno. Copy this URL and paste it into your Meta Business app's webhook configuration. Click the **Copy** button to copy it.

Once all fields are filled in, click **Save** to apply your settings. Click **Cancel** to close without saving.

---

## Configuring Messenger

![Messenger configure card](/images/pro2/page5_1.png)

Click **Configure** on the Messenger card to open the Messenger Configuration dialog. Messenger connects via a **Facebook Page**.

![Messenger configuration dialog](/images/pro2/page5_2.png)

Fill in the following fields:

- **Enabled** — Toggle this on to activate the Messenger integration once your credentials are ready.
- **Page Access Token** — Enter the Page Access Token from your Facebook Developer app. This allows Zeno to send and receive messages through your Facebook Page.
- **App Secret** — Enter the App Secret from your Facebook Developer app to verify incoming webhook requests.
- **Verify Token** — Enter a custom string that Facebook will use to verify your webhook endpoint during setup.
- **Webhook URL** — A read-only field generated automatically by Zeno. Copy this URL and paste it into your Facebook app's webhook configuration.

![Messenger settings saved](/images/pro2/page6_1.png)

Once all fields are filled in, click **Save** to apply your settings. Click **Cancel** to close without saving.

---

## Configuring Instagram

Click **Configure** on the Instagram card to open the Instagram Configuration dialog. Instagram connects via an **Instagram Business account**.

![Instagram configuration dialog](/images/pro2/page7_1.png)

Fill in the following fields:

- **Enabled** — Toggle this on to activate the Instagram integration once your credentials are ready.
- **Access Token** — Enter the Access Token from your Meta Business app connected to your Instagram Business account. This allows Zeno to send and receive messages through your Instagram DMs.
- **App Secret** — Enter the App Secret from your Meta Business app to verify incoming webhook requests.
- **Verify Token** — Enter a custom string that Meta will use to verify your webhook endpoint during setup.
- **Webhook URL** — A read-only field generated automatically by Zeno. Copy this URL and paste it into your Meta app's webhook configuration for Instagram.

Once all fields are filled in, click **Save** to apply your settings. Click **Cancel** to close without saving.

::: tip
Keep your tokens and secrets secure — treat them like passwords. Never share them publicly or commit them to version control.
:::
