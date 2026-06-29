# Internal Content

The **Internal Content** tab is where you turn your own WordPress posts, pages, sitemap, and (optionally) WooCommerce products into a knowledge base your chatbot can search. This is the fastest way to get your chatbot answering questions using content that already exists on your site.

## Accessing Internal Content

Go to **Settings > Data Source** and click the **Internal Content** tab. This is the first tab in the Data Source section and is selected by default.

---

## Index Management

![Internal Content tab selected with Index Management section](/images/page61_1.png)

The **Index Management** section is where you build or clear the internal content index — the searchable collection of your posts and pages that the chatbot uses to answer questions.

| Button | Description |
|--------|-------------|
| **Build Index** | Start indexing your content. When no content has been indexed yet, you'll see a yellow notice: *"No content indexed yet. Click 'Build Index' to get started."* |
| **Clear Index** | Remove all indexed content and start over. |

### Selecting Content Types to Include

![Index Management with Build Index and Clear Index buttons](/images/page62_1.png)

When you click **Build Index**, a *Build Internal Content Index* dialog opens. Inside this dialog, you'll see all available content types on your site, each shown as a card you can check or uncheck:

- **Posts** — your WordPress blog posts. The number next to each type shows how many items are available (e.g., *"Posts (1)"*).
- **Pages** — your WordPress pages.

![Build Internal Content Index dialog with content type selection](/images/page63_1.png)

Check the content types you want to include, then click the **Build Index** button inside the dialog to start indexing. Click **Cancel** to close the dialog without building.

### After the Index Is Built

![Index Management after build - Active status with Rebuild and Clear buttons](/images/page64_1.png)

Once the index has been built, the Index Management section updates to show:

- The status badge **Active** on the right.
- The last updated time (e.g., *"Updated: a few seconds ago"*).
- **Rebuild Index** — click to rebuild the index from scratch after you've made changes to your content.
- **Clear Index** — click to remove all indexed content.

---

## Sitemap

![Sitemap section with Build and Clear buttons and dialog](/images/page65_1.png)

The **Sitemap** section lets Zeno Chatbot auto-detect and index your site's XML sitemap so the chatbot can pull from every URL it finds — not just the post types you select in Index Management.

| Button | Description |
|--------|-------------|
| **Build Sitemap** | Start indexing your sitemap. When no sitemap has been indexed yet, you'll see a yellow notice: *"No sitemap content indexed yet. Click 'Build Sitemap' to get started."* |
| **Clear Sitemap** | Remove all sitemap content and start over. |

### Choosing a Detection Mode

When you click **Build Sitemap**, a *Build Sitemap Index* dialog opens with two mode cards:

**Auto Detect** *(Recommended)*
: Detect the sitemap from your site automatically. This is the recommended option for most users and is selected by default.

**Manual**
: Provide a sitemap path after the main domain. Use this option if your sitemap isn't at the standard location.

### Manual Mode — Sitemap Path

![Manual sitemap path field](/images/page66_1.png)

When you select **Manual**, an additional **Sitemap Path** field appears below the mode cards.

Enter the path to your sitemap after the main domain. The main domain is shown as a read-only prefix (e.g., `http://cookieshop.local`), and you provide the path portion in the input field.

::: tip
Use path only, for example `/sitemap.xml` or `/post-sitemap.xml`.
:::

Once you've chosen a mode (and filled in the path if using Manual), click **Build Index** inside the dialog to start indexing.

---

## Product Index

![Product Index section](/images/page67_1.png)

The **Product Index** section is for WooCommerce store owners. It lets you index your WooCommerce product data so the chatbot can answer product-related questions.

::: warning
If WooCommerce is not installed and active on your site, you'll see the notice *"WooCommerce is not active. Product indexing is unavailable."* and both buttons will be disabled. Install and activate WooCommerce to enable product indexing.
:::

| Button | Description |
|--------|-------------|
| **Build Product Index** | Start indexing your products. |
| **Clear Product Index** | Remove all indexed products. |

---

## Automatic Update Index

The **Automatic Update Index** option keeps your knowledge base fresh without any manual work.

Use this toggle to automatically update the content index whenever posts are modified. When enabled, any edits you make to your posts or pages will be reflected in the chatbot's knowledge base without you needing to rebuild the index by hand.

### Auto Update Schedule

![Auto Update Schedule dropdown](/images/page68_1.png)

The **Auto Update Schedule** setting works alongside Automatic Update Index.

Use this dropdown to set how frequently the content index should be automatically updated. The default option is **Every 15 minutes**. Choose a shorter interval for fast-changing sites or a longer interval to reduce server load.

---

Once your index is built, your chatbot will start answering questions using your own site's content.
