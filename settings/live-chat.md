---
title: Live Chat (Pro)
---

# Live Chat

::: info Pro Feature
Live Chat is available in the **Pro version** only. [View Free docs →](/free/getting-started)
:::

The **Live Chat** section allows you to enable a human agent support panel that works alongside your AI chatbot. When Live Chat is enabled, designated team members can log in and handle conversations directly — giving your visitors the option of real human support when the AI isn't enough.

## Accessing Live Chat

Click the **Settings** tab in the top-right corner of your Zeno Chatbot page. From the left-hand settings menu, click **Live Chat**.

## Configuring Live Chat

![Live Chat settings page](/images/pro2/page15_1.png)

### Enabled

![Live Chat enabled toggle](/images/pro2/page16_1.png)

Toggle this on to activate the Live Chat agent panel. When enabled, users with the selected roles can access the support panel via the shortcode you place on a page. By default, this is set to **Disabled**.

![Live Chat enable switch](/images/pro2/page16_2.png)

### Agent Roles

![Agent roles dropdown](/images/pro2/page17_1.png)

Select which WordPress user roles are allowed to access the Live Chat agent panel. Click the dropdown to see the available roles and select one or more:

- Editor
- Author
- Contributor
- Subscriber

![Agent roles selection](/images/pro2/page17_2.png)

::: info
**Administrators always have access** to the agent panel regardless of what is selected here — you do not need to add the Administrator role manually.
:::

### Agent Panel Shortcode

![Shortcode and save button](/images/pro2/page18_1.png)

This is the shortcode you paste into any WordPress page to display the Live Chat agent support panel:

```
[zeno_chatbot_ai_pro_agent]
```

Click the **Copy** button on the right to copy it to your clipboard. Then paste it into any page using the WordPress editor. Only users with the selected roles (plus Administrators) will be able to see and use the panel on that page.

## Saving Your Settings

Once you have toggled Live Chat on, selected your agent roles, and placed the shortcode on a page, click the **Save Settings** button to apply your changes.

::: tip
Create a dedicated private page (e.g. `/agent-panel`) and paste the shortcode there. Set the page to **Password Protected** or restrict access via your theme/plugin to ensure only your support team can reach it.
:::
