# Saved Replies

The **Saved Replies** section is where you manage predefined responses for common questions your visitors ask. Instead of using the LLM to generate an answer every time, Zeno Chatbot can instantly return a saved reply — which saves tokens, speeds up response time, and ensures consistent answers to frequently asked questions.

## Accessing Saved Replies

Click the **Settings** tab in the top-right corner of your Zeno Chatbot page. From the left-hand settings menu, click **Saved Replies**. This is the sixth tab in the list.

## Tabs Overview

![Saved Replies page with tabs overview](/images/page53_1.png)

At the top of the Saved Replies page, you'll find three tabs:

| Tab | Description |
|-----|-------------|
| **Replies** | The main tab where you add, view, and manage all your saved replies. |
| **Semantic Matching** | Enable AI-powered matching to catch questions worded differently from your saved ones. |
| **Analytics** | Track how your saved replies are performing with key metrics and charts. |

---

## Replies Tab

The **Replies** tab is the default view when you open Saved Replies. This is where every predefined response is listed and managed.

### Adding a New Reply

![Add Reply button](/images/page54_1.png)

Click the **+ Add Reply** button at the top right to create a new saved reply that your chatbot can use to answer a common question instantly.

### Searching and Filtering Replies

![Search bar, status filters, and replies table](/images/page55_1.png)

- **Search Bar** — use the search bar on the left to quickly find a saved reply by typing a question or keyword.
- **Status Filters** — filter replies by their status:
  - **All** — shows every saved reply in your library
  - **Active** — shows only replies that are currently enabled
  - **Inactive** — shows replies that have been disabled

### Replies Table

The main table lists every saved reply with these columns:

| Column | Description |
|--------|-------------|
| **Question** | The trigger question or phrase that the reply is tied to. |
| **Match Type** | How the reply is matched against a user's question (e.g., exact match, keyword match, or semantic match). |
| **Language** | The language the reply is written in. |
| **Hits** | The number of times this reply has been returned to a user. |
| **Status** | The current status of the reply (*Active* or *Inactive*). |
| **Actions** | Quick action buttons to edit or delete each reply. |

If no replies have been created yet, you'll see a *"No saved replies found."* message.

![No saved replies message](/images/page56_1.png)

---

## Semantic Matching Tab

The **Semantic Matching** tab enables an AI-powered feature that helps your chatbot match a user's question to a saved reply based on **meaning**, not just exact wording. This means one saved reply can handle many variations of the same question.

::: info Example
If your saved reply is tied to *"What are your business hours?"*, Semantic Matching will also catch variations like *"When are you open?"* or *"Your opening time?"* — without needing to add each variation manually.
:::

### Enabling Semantic Matching

![Semantic Matching tab with toggle](/images/page57_1.png)

In the center of the Semantic Matching panel, you'll see the feature card labeled **Semantic Matching** with an *AI-Powered* badge.

Use the toggle on the right to enable or disable the feature. The current status is shown on the right (*Enabled* or *Disabled*). By default, this option is set to **Disabled**.

When enabled, Zeno uses AI embeddings to find semantically similar questions, even when the wording differs between what the visitor types and what you've saved.

---

## Analytics Tab

The **Analytics** tab gives you a quick visual overview of how your saved replies are performing. This helps you understand which responses are most useful and where you can improve.

### Key Performance Metrics

![Analytics tab with performance metrics](/images/page58_1.png)

| Metric | Description |
|--------|-------------|
| **Total Replies** | The total number of saved replies you've created. |
| **Active** | The number of saved replies currently enabled and being used by the chatbot. |
| **Total Hits** | The total number of times a saved reply has been returned across all conversations. |
| **Avg. Hits** | The average number of hits per saved reply (e.g., `0.0`). |

### Top Performing Replies

![Top Performing Replies and Match Type Distribution charts](/images/page59_1.png)

The **Top Performing Replies** card lists your saved replies that have been matched to user questions most often. This helps you see which replies are carrying the most weight in your support flow.

If you haven't recorded any hits yet, you'll see a *"No data available yet"* message.

### Match Type Distribution

The **Match Type Distribution** card shows a breakdown of how your saved replies are being matched — for example, how many hits came from exact matches versus semantic matches. This helps you understand whether visitors are finding your replies through direct wording or through Semantic Matching.

If you haven't recorded any hits yet, you'll see a *"No data available yet"* message.
