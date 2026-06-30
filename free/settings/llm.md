---
title: LLM Settings (Free)
---

# LLM Settings

::: info Free Version
This page covers the Free Version. [View Pro docs →](/settings/llm)
:::

The **LLM Settings** section is where you connect Zeno Chatbot to an AI language model provider. This is what powers every response your chatbot generates. Zeno supports multiple providers, each with its own strengths, so you can pick the one that best fits your needs and budget.

## Accessing LLM Settings

![LLM settings page](/images/free/page14_1.png)

Click the **Settings** tab in the top-right corner of your Zeno Chatbot page. From the left-hand settings menu, click **LLM Settings**. This is the second tab in the list.

## Choosing Your AI Provider

![AI provider cards](/images/free/page15_1.png)

At the top of the LLM Settings page, you'll see the **AI Provider** section with three provider cards to choose from. A small note on the right reminds you: *"You can change this anytime."*

![Provider selection](/images/free/page15_2.png)

- **OpenAI** — Industry-leading GPT models with exceptional natural language understanding and generation capabilities
- **Google Gemini** — Gemini models with cutting-edge multimodal capabilities, handling text, images, and complex reasoning tasks
- **Anthropic Claude** — Claude models with constitutional AI training, offering thoughtful responses and strong ethical reasoning

![Provider checkmark](/images/free/page16_1.png)

To select a provider, simply click on its card. A **blue checkmark** will appear in the top-right corner of the selected provider, and additional configuration fields will appear below.

---

## Configuring OpenAI

If you selected **OpenAI** as your provider, the following fields will appear:

### OpenAI API Key

![OpenAI API key field](/images/free/page17_1.png)

![API key input](/images/free/page18_1.png)

Paste the API key you received from your OpenAI account. The key typically starts with `sk-`. Your API key will be encrypted and stored securely. Click the **eye icon** on the right to show or hide the key while you are pasting it.

### Model

![OpenAI model dropdown](/images/free/page19_1.png)

Choose the OpenAI model for generating responses from the dropdown menu. Each model is designed for different use cases and has different costs.

Once you select a model, a summary card appears showing the model's key details:

![Model summary card](/images/free/page19_2.png)

![Model details](/images/free/page20_1.png)

- The model **name** and **provider badge** (e.g., *"GPT-4o Mini" – OpenAI*)
- A short description (e.g., *"Cost-efficient 4o family model; 128K context, up to ~16K output tokens."*)
- **Context tokens** — the maximum number of tokens the model can process at once
- **Max output** — the maximum number of tokens in a single response
- **Pricing** — input/output cost per 1,000 tokens

### Temperature

![Temperature slider](/images/free/page21_1.png)

This slider controls the randomness of your chatbot's responses. The slider ranges from **0 to 2** with three labeled zones:

- **0 (Focused)** — Predictable, consistent, fact-based answers
- **1 (Balanced)** — A mix of accuracy and creativity. This is the default
- **2 (Creative)** — Highly varied, imaginative responses

The default value is **0.7**, which works well for most customer support use cases.

### Max Tokens

The maximum number of tokens allowed in a single response (1 token ≈ 4 characters). Higher values allow longer replies but consume more of your API budget. The default is **1000**.

### Test Connection

![Test connection button](/images/free/page22_1.png)

After you have configured all the LLM settings, you can test the connection with your website.

---

## Configuring Google Gemini

If you selected **Google Gemini** as your provider:

### Google API Key

![Gemini provider fields](/images/free/page23_1.png)

![Google API key](/images/free/page24_1.png)

Paste the API key you received from your Google AI Studio or Google Cloud account. Your Google AI API key will be encrypted and stored securely. Click the **eye icon** to show or hide the key.

### Model

![Gemini model dropdown](/images/free/page25_1.png)

Choose the Google Gemini model from the dropdown menu. Once you select a model, a summary card appears:

![Gemini model card](/images/free/page25_2.png)

![Gemini model details](/images/free/page26_1.png)

- Model **name** and **provider badge** (e.g., *"Gemini 2.5 Flash" – Google Gemini*)
- A short description (e.g., *"Hybrid reasoning model with 1M-token context window and 'thinking budgets'; multimodal inputs."*)
- **Context tokens**, **Max output**, **Pricing**

### Temperature

![Gemini temperature](/images/free/page26_2.png)

Same as OpenAI, this slider controls response randomness. The slider ranges from **0 to 1** for Gemini models, with the default set to **0.7**.

### Max Tokens

The maximum number of tokens in a single response. The default is **1000**, and Gemini models support up to **2048 tokens** per response.

### Test Connection

![Test connection Gemini](/images/free/page27_1.png)

After configuring all LLM settings, test the connection with your website.

---

## Configuring Anthropic Claude

If you selected **Anthropic Claude** as your provider:

### Anthropic API Key

![Claude provider fields](/images/free/page28_1.png)

![Claude API key](/images/free/page29_1.png)

Paste the API key you received from your Anthropic account. The key starts with `sk-ant-`. Your Anthropic API key will be encrypted and stored securely. Click the **eye icon** to show or hide the key.

### Model

![Claude model selection](/images/free/page30_1.png)

Choose the Claude model from the dropdown menu. Zeno supports three Claude models:

![Claude Sonnet details](/images/free/page31_1.png)

**Claude Sonnet 4.6** — The default and recommended model for most use cases.
- Description: Best combination of speed and intelligence for most production workloads; 1M context
- Context tokens: 1,000,000 | Max output: 128,000
- Pricing: $0.003 / $0.015 per 1K tokens

**Claude Opus 4.8** — The most powerful Claude model, designed for complex and long-running tasks.
- Description: Frontier intelligence for long-running agents, agentic coding, and high-autonomy work; 1M context
- Context tokens: 1,000,000 | Max output: 128,000
- Pricing: $0.005 / $0.025 per 1K tokens

::: warning
Temperature is **not configurable** for Claude Opus 4.8. When you select this model, the Temperature slider will be hidden and a notice will appear: *"Temperature is not configurable for this model."*
:::

**Claude Haiku 4.5** — The fastest and most cost-effective Claude model, ideal for high-volume simple tasks.
- Description: Fastest and most cost-effective model for high-volume, simple tasks; 200K context
- Context tokens: 200,000 | Max output: 8,192
- Pricing: $0.001 / $0.005 per 1K tokens

### Temperature

![Claude temperature](/images/free/page32_1.png)

This slider controls the randomness of your chatbot's responses. The slider ranges from **0 to 1** for Claude models, with the default set to **0.7**:

- **0 (Focused)** — Precise, consistent, fact-based answers
- **0.5 (Balanced)** — A healthy mix of accuracy and creativity
- **1 (Creative)** — More varied and imaginative responses

### Max Tokens

![Save settings](/images/free/page33_1.png)

The maximum number of tokens allowed in a single response (1 token ≈ 4 characters). The default is **1000**.

- Claude Sonnet 4.6 and Opus 4.8 support up to **128,000 tokens** per response
- Claude Haiku 4.5 supports up to **8,192 tokens**

## Saving Your Settings

![Save note](/images/free/page33_2.png)

Once you have selected your provider, entered your API key, picked a model, and adjusted the Temperature and Max Tokens, click the **Save Settings** button at the bottom-right.

::: warning
The Save Settings button will remain grayed out until you have entered a valid API key. It becomes active only when all required fields are filled in.
:::

Your LLM Settings are now configured, and your chatbot is ready to generate responses using your selected provider.
