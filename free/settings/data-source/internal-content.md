---
title: Internal Content (Free)
---

# Internal Content

::: info Free Version
This page covers the Free Version. [View Pro docs →](/settings/data-source/internal-content)
:::

The **Internal Content** tab is where you turn your own WordPress posts, pages, sitemap, and (optionally) WooCommerce products into a knowledge base your chatbot can search. This is the fastest way to get your chatbot answering questions using content that already exists on your site.

## Accessing Internal Content

![Internal content tab](/images/free/page62_1.png)

Go to **Settings > Data Source** and click the **Internal Content** tab. This is the first tab in the Data Source section and is selected by default.

## Index Management

![Index management section](/images/free/page62_2.png)

The **Index Management** section is where you build or clear the internal content index — the searchable collection of your posts and pages that the chatbot uses to answer questions.

- **Build Index** — Click this button to start indexing your content. When no content has been indexed yet, you'll see a yellow notice: *"No content indexed yet. Click 'Build Index' to get started."*
- **Clear Index** — Click this button to remove all indexed content and start over.

### Selecting Content Types to Include

![Build index dialog](/images/free/page63_1.png)

When you click **Build Index**, a **Build Internal Content Index** dialog opens with the description *"Select content types to include, then build index."*

Inside this dialog, you'll see all available content types on your site, each shown as a card you can check or uncheck:

![Content type cards](/images/free/page63_2.png)

- **Posts** — Your WordPress blog posts. The number next to each type shows how many items are available (e.g., *"Posts (1)"*)
- **Pages** — Your WordPress pages

Check the content types you want to include, then click the **Build Index** button inside the dialog. Click **Cancel** to close without building.

### After the Index Is Built

![Index status after build](/images/free/page64_1.png)

Once the index has been built, the Index Management section updates to show:

- The status badge **Active** on the right
- The last updated time (e.g., *"Updated: a few seconds ago"*)
- **Rebuild Index** — Click to rebuild the index from scratch after you've made changes to your content
- **Clear Index** — Click to remove all indexed content

![Rebuilt index options](/images/free/page64_2.png)

---

## Sitemap

The **Sitemap** section lets Zeno Chatbot auto-detect and index your site's XML sitemap so the chatbot can pull from every URL it finds — not just the post types you select in Index Management.

- **Build Sitemap** — Click to start indexing your sitemap. When no sitemap has been indexed yet, you'll see: *"No sitemap content indexed yet. Click 'Build Sitemap' to get started."*
- **Clear Sitemap** — Click to remove all sitemap content and start over.

### Choosing a Detection Mode

![Build sitemap dialog](/images/free/page65_1.png)

When you click **Build Sitemap**, a dialog opens. You'll see two mode cards:

![Detection mode cards](/images/free/page65_2.png)

- **Auto Detect** — Detect the sitemap from your site automatically. This is the recommended option for most users and is selected by default.
- **Manual** — Provide a sitemap path after the main domain. Use this option if your sitemap isn't at the standard location.

### Manual Mode — Sitemap Path

![Manual sitemap path field](/images/free/page66_1.png)

When you select **Manual**, an additional **Sitemap Path** field appears below the mode cards.

- **Sitemap Path** — Enter the path to your sitemap after the main domain. The main domain is shown as a read-only prefix (e.g., `http://cookieshop.local`), and you provide the path portion in the input field.
- The helper text reminds you: *"Use path only, for example /sitemap.xml or /post-sitemap.xml"*

Once you've chosen a mode, click the **Build Index** button inside the dialog. Click **Cancel** to close without building.

---

## Product Index

![Product index section](/images/free/page67_1.png)

The **Product Index** section is for WooCommerce store owners. It lets you index your WooCommerce product data so the chatbot can answer product-related questions.

- **Build Product Index** — Click to start indexing your products
- **Clear Product Index** — Click to remove all indexed products

::: warning
If WooCommerce is not installed and active on your site, you'll see the notice *"WooCommerce is not active. Product indexing is unavailable."* and both buttons will be disabled. Install and activate WooCommerce to enable product indexing.
:::

---

## Automatic Update Index

::: info
Coming soon.
:::

That's a complete walkthrough of the Internal Content tab. Once your index is built, your chatbot will start answering questions using your own site's content.
