# LLM Settings

The **LLM Settings** section is where you connect Zeno Chatbot to an AI language model provider. This is what powers every response your chatbot generates. Zeno supports multiple providers, each with its own strengths, so you can pick the one that best fits your needs and budget.

## Accessing LLM Settings

Click the **Settings** tab in the top-right corner of your Zeno Chatbot page. From the left-hand settings menu, click **LLM Settings**. This is the second tab in the list.

## Choosing Your AI Provider

![AI Provider cards - OpenAI, Gemini, and Claude](/images/page15_1.png)

At the top of the LLM Settings page, you'll see the **AI Provider** section with three provider cards to choose from. A small note reminds you: *"You can change this anytime."*

| Provider | Description |
|----------|-------------|
| **OpenAI** | Industry-leading GPT models with exceptional natural language understanding and generation capabilities. |
| **Google Gemini** | Gemini models with cutting-edge multimodal capabilities, handling text, images, and complex reasoning tasks. |
| **Anthropic Claude** | Claude models with constitutional AI training, offering thoughtful responses and strong ethical reasoning. |

To select a provider, click on its card. A **blue checkmark** will appear in the top-right corner of the selected provider, and additional configuration fields will appear below.

![Selected provider with blue checkmark](/images/page16_1.png)

---

## Configuring OpenAI

### OpenAI API Key

![OpenAI API Key field](/images/page17_1.png)
![OpenAI API Key input detail](/images/page18_1.png)

Paste the API key from your OpenAI account. The key typically starts with `sk-`. Your API key will be encrypted and stored securely. Click the **eye icon** on the right to show or hide the key while you are pasting it.

### Model

Choose the OpenAI model for generating responses from the dropdown menu. Each model is designed for different use cases and has different costs.

![OpenAI model dropdown and summary card](/images/page19_1.png)
![OpenAI model summary card details](/images/page20_1.png)

Once you select a model, a summary card appears below showing:

- Model **name** and **provider badge** (e.g., *"GPT-4o Mini" – OpenAI*)
- A short description of what the model is best for
- **Context tokens** — the maximum number of tokens the model can process at once
- **Max output** — the maximum number of tokens in a single response
- **Pricing** — the input/output cost per 1,000 tokens

### Temperature

![Temperature slider for OpenAI](/images/page20_1.png)

This slider controls the randomness of your chatbot's responses. The slider ranges from **0 to 2**:

| Value | Zone | Behavior |
|-------|------|----------|
| 0 | Focused | Predictable, consistent, fact-based answers |
| 1 | Balanced | A mix of accuracy and creativity *(default)* |
| 2 | Creative | Highly varied, imaginative responses |

The default value is **0.7**, which works well for most customer support use cases.

### Max Tokens

The maximum number of tokens allowed in a single response (1 token ≈ 4 characters). Higher values allow longer replies but consume more of your API budget. The default is **1000**.

![Max Tokens field and Test Connection button for OpenAI](/images/page21_1.png)

### Test Connection

After you have configured all the LLM settings, click **Test Connection** to verify that your API key and model selection work correctly with your website.

![Test Connection button for OpenAI](/images/page22_1.png)

---

## Configuring Google Gemini

![Google Gemini provider card](/images/page23_1.png)

### Google API Key

![Google API Key field](/images/page24_1.png)

Paste the API key from your Google AI Studio or Google Cloud account. Your key will be encrypted and stored securely. Click the **eye icon** on the right to show or hide the key while pasting.

### Model

![Google Gemini model dropdown and summary card](/images/page25_1.png)

Choose the Google Gemini model from the dropdown menu. Once you select a model, a summary card appears showing:

- Model **name** and **provider badge** (e.g., *"Gemini 2.5 Flash" – Google Gemini*)
- A short description (e.g., *"Hybrid reasoning model with 1M-token context window and 'thinking budgets'; multimodal inputs."*)
- **Context tokens** (e.g., 1,048,576)
- **Max output** (e.g., 65,535)
- **Pricing** — input/output cost per 1,000 tokens

### Temperature

Same as OpenAI, this slider controls response randomness. The slider ranges from **0 to 1** for Gemini models, with the default set to **0.7**.

### Max Tokens

The maximum number of tokens in a single response. The default is **1000**, and Gemini models support up to **2048 tokens** per response.

![Gemini Temperature, Max Tokens, and Test Connection](/images/page26_1.png)

### Test Connection

After configuring all settings, click **Test Connection** to verify your setup.

![Test Connection button for Gemini](/images/page27_1.png)

---

## Configuring Anthropic Claude

![Anthropic Claude provider card](/images/page28_1.png)

### Anthropic API Key

![Anthropic API Key field](/images/page29_1.png)

Paste the API key from your Anthropic account. The key starts with `sk-ant-`. Your key will be encrypted and stored securely. Click the **eye icon** on the right to show or hide the key while pasting.

### Model

![Claude model selection dropdown](/images/page30_1.png)

Choose the Claude model from the dropdown menu. Zeno supports three Claude models:

![Claude model cards - Sonnet, Opus, and Haiku](/images/page31_1.png)

#### Claude Sonnet 4.6 *(Recommended)*

The default and recommended model for most use cases.

| Detail | Value |
|--------|-------|
| Description | Best combination of speed and intelligence for most production workloads; 1M context. |
| Context tokens | 1,000,000 |
| Max output | 128,000 |
| Pricing | $0.003 / $0.015 per 1K tokens |

#### Claude Opus 4.8

The most powerful Claude model, designed for complex and long-running tasks.

| Detail | Value |
|--------|-------|
| Description | Frontier intelligence for long-running agents, agentic coding, and high-autonomy work; 1M context. |
| Context tokens | 1,000,000 |
| Max output | 128,000 |
| Pricing | $0.005 / $0.025 per 1K tokens |

::: warning
Temperature is not configurable for Claude Opus 4.8. When you select this model, the Temperature slider will be hidden and a notice will appear: *"Temperature is not configurable for this model."*
:::

#### Claude Haiku 4.5

The fastest and most cost-effective Claude model, ideal for high-volume simple tasks.

| Detail | Value |
|--------|-------|
| Description | Fastest and most cost-effective model for high-volume, simple tasks; 200K context. |
| Context tokens | 200,000 |
| Max output | 8,192 |
| Pricing | $0.001 / $0.005 per 1K tokens |

### Temperature

![Temperature slider for Claude](/images/page32_1.png)

This slider controls the randomness of your chatbot's responses. The slider ranges from **0 to 1** for Claude models, with the default set to **0.7**:

| Value | Behavior |
|-------|----------|
| 0 | Precise, consistent, fact-based answers |
| 0.5 | A healthy mix of accuracy and creativity |
| 1 | More varied and imaginative responses |

::: info
Temperature is not available for **Claude Opus 4.8**. If you need full temperature control, use Claude Sonnet 4.6 or Claude Haiku 4.5 instead.
:::

### Max Tokens

The maximum number of tokens allowed in a single response (1 token ≈ 4 characters). The default is **1000**. Keep in mind each model has a different maximum output ceiling:

- Sonnet 4.6 and Opus 4.8: up to 128,000 tokens per response
- Haiku 4.5: up to 8,192 tokens per response

---

## Saving Your Settings

![Save Settings button with note about grayed-out state](/images/page33_1.png)

Once you have selected your provider, entered your API key, picked a model, and adjusted Temperature and Max Tokens, click the **Save Settings** button at the bottom-right of the page.

::: warning
The Save Settings button will remain grayed out until you have entered a valid API key. It becomes active only when all required fields are filled in.
:::

Your LLM Settings are now configured, and your chatbot is ready to generate responses using your selected provider.
