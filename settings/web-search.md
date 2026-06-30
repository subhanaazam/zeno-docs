---
title: Web Search (Pro)
---

# Web Search

::: info Pro Feature
Web Search is available in the **Pro version** only. [View Free docs →](/free/getting-started)
:::

The **Web Search** section allows Zeno Chatbot to perform real-time web searches to enhance its responses with up-to-date information that may not exist in your knowledge base. This is powered by **Tavily** — a search API built specifically for AI applications.

## Accessing Web Search

Click the **Settings** tab in the top-right corner of your Zeno Chatbot page. From the left-hand settings menu, click **Web Search**.

## Configuring Web Search

![Web Search settings page](/images/pro2/page8_1.png)

### Enabled

![Enabled toggle](/images/pro2/page9_1.png)

Toggle this on to activate real-time web search. When enabled, Zeno can enhance AI responses with current information pulled from the web. By default, this is set to **Disabled**.

### API Key

Enter your Tavily API key to connect Zeno to the Tavily search service. Your key starts with `tvly-`. You can get your API key at [tavily.com](https://tavily.com). This field is required for web search to function.

![API key and depth fields](/images/pro2/page9_2.png)

### Search Depth

![Search depth dropdown](/images/pro2/page9_3.png)

Choose how deeply Tavily should search the web when retrieving results. The dropdown offers two options:

- **Basic** — A faster, lighter search suitable for most common questions. This is the default.
- **Advanced** — A deeper, more thorough search that retrieves more detailed results. Best for complex or research-heavy questions, though it may use more API credits.

### Max Results

![Max results control](/images/pro2/page10_1.png)

Set the maximum number of web search results Tavily returns per query. Use the **–** and **+** buttons to adjust the number. The allowed range is **1 to 10**, and the default is **5**. Higher values give the AI more sources to work with but may increase response time.

### Auto Search

![Auto search toggle](/images/pro2/page10_2.png)

Toggle this on to automatically perform a web search for every incoming chat message. When enabled, Zeno will search the web on every user query without needing to be explicitly asked to. By default, this is set to **Disabled** — this is intentional to control API costs. Enable it only if you want web search to run on every single message.

### Test Search

![Test search button](/images/pro2/page10_3.png)

Click the **Test Search** button to run a test query and verify that your API key and configuration are working correctly before going live. Use this after entering your API key to confirm the connection is active.

## Saving Your Settings

![Save settings](/images/pro2/page11_1.png)

Once you have configured your API key, search depth, max results, and auto search preference, click the **Save Settings** button at the bottom-right of the page to apply your changes.

::: tip
Start with **Auto Search** disabled and **Basic** search depth to keep API costs low. Enable **Advanced** depth only for support bots that need to handle complex or research-heavy questions.
:::
