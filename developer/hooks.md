---
title: Hooks Reference (Pro)
---

# Hooks Reference

::: info Pro Feature
The WordPress hooks API is available in the **Pro version** only.
:::

Complete reference for all WordPress hooks provided by the Zeno Chatbot AI plugin. Use these hooks to extend, customize, and integrate the chatbot with your WordPress site.

## Getting Started

### Where to Add Your Code

You can add hook code in any of these places:

- **`functions.php`** — Simple and quick, but lost on theme change.
- **A custom plugin** — Create a small plugin file in `wp-content/plugins/`. Best for production.
- **[Code Snippets](https://wordpress.org/plugins/code-snippets/)** — A popular plugin that lets you add PHP snippets from the WordPress admin without editing files.

### Actions vs Filters

**Actions** let you react to events — for example, logging a conversation or sending a notification when a message is processed. They don't return a value.

```php
add_action( 'zeno_chatbot_ai/chat/message_processed', function ( $payload ) {
    // React to the event — log it, send a notification, etc.
    error_log( 'New chat message in conversation ' . $payload['conversation']->id );
} );
```

**Filters** let you modify data before the plugin uses it — for example, injecting extra context into the AI prompt or changing the error message shown to customers. Filters must return the modified data.

```php
add_filter( 'zeno_chatbot_ai/chat/error_response', function ( $response ) {
    $response['message'] = 'Oops! Please try again in a moment.';
    return $response;
} );
```

### Payload Convention

Hooks in this plugin follow two payload conventions:

- **Single-value hooks** pass the value directly as the argument.
- **Multi-value hooks** pass a single keyed associative array (`$payload`).

```php
// Single-value — receives the value directly:
add_filter( 'zeno_chatbot_ai/cache/resource_ttl', function ( $ttl ) {
    return 3600; // Override cache to 1 hour
} );

// Multi-value — receives a keyed array:
add_filter( 'zeno_chatbot_ai/chat/context', function ( $payload ) {
    $payload['context'][] = [
        'role'    => 'system',
        'content' => 'Extra context.',
    ];
    return $payload;
} );
```

### Priority

The optional third argument to `add_action` / `add_filter` controls execution order. Lower numbers run first. Default is `10`.

```php
add_filter( 'zeno_chatbot_ai/chat/context', 'my_context_handler', 20 );
```

---

## Quick Reference

### Actions

| Hook | Description |
|------|-------------|
| `zeno_chatbot_ai/core/loaded` | Plugin is fully loaded and ready |
| `zeno_chatbot_ai/core/bindings_loading` | Before service container bindings |
| `zeno_chatbot_ai/core/bindings_loaded` | After service container bindings |
| `zeno_chatbot_ai/chat/message_processed` | AI has processed a customer message |
| `zeno_chatbot_ai/chat/conversation_created` | New conversation started |
| `zeno_chatbot_ai/conversation/status_changed` | Conversation status changed by admin |
| `zeno_chatbot_ai/conversation/reply_sent` | Admin reply sent to customer |
| `zeno_chatbot_ai/conversation/deleted` | Conversation permanently deleted |
| `zeno_chatbot_ai/conversation/summary_requested` | Summary generation requested |
| `zeno_chatbot_ai/conversation/summary_generated` | Summary successfully generated |
| `zeno_chatbot_ai/conversation/summary_failed` | Summary generation failed |
| `zeno_chatbot_ai/session/ended` | Customer ended their chat session |
| `zeno_chatbot_ai/index/internal_updated` | Internal content index rebuilt |
| `zeno_chatbot_ai/index/external_updated` | External sources index updated |
| `zeno_chatbot_ai/index/sitemap_updated` | Sitemap content index rebuilt |
| `zeno_chatbot_ai/index/product_updated` | Product content index rebuilt |
| `zeno_chatbot_ai/index/knowledge_notes_updated` | Knowledge notes index rebuilt |
| `zeno_chatbot_ai/scheduler/job_failed` | Background job failed |
| `zeno_chatbot_ai/scheduler/job_processed` | Background job completed |
| `zeno_chatbot_ai/settings/general/save` | General settings saved |

### Filters

| Hook | Description |
|------|-------------|
| `zeno_chatbot_ai/core/routes` | Route definitions before registration |
| `zeno_chatbot_ai/chat/context` | Context array sent to the AI |
| `zeno_chatbot_ai/chat/error_response` | Error response shown to customers |
| `zeno_chatbot_ai/prompt/instruction_template` | Raw AI instruction template |
| `zeno_chatbot_ai/prompt/instruction_variables` | Template variable substitutions |
| `zeno_chatbot_ai/prompt/application_instruction` | Compiled application prompt |
| `zeno_chatbot_ai/prompt/system_instruction` | System-level instruction |
| `zeno_chatbot_ai/prompt/additional_instruction` | Additional instruction block |
| `zeno_chatbot_ai/prompt/language_instruction` | Language-specific instruction |
| `zeno_chatbot_ai/llm/providers` | Available AI provider list |
| `zeno_chatbot_ai/llm/default_provider` | Default AI provider configuration |
| `zeno_chatbot_ai/cache/resource_ttl` | Cache duration in seconds |
| `zeno_chatbot_ai/settings/general/data` | Settings page extension data |
| `zeno_chatbot_ai/settings/countries` | Language/country list |
| `zeno_chatbot_ai/admin/extensions` | Admin extension pages |
| `zeno_chatbot_ai/admin/extension_scripts` | Admin extension assets |
| `zeno_chatbot_ai/admin/extension_fields` | Admin extension settings fields |
| `zeno_chatbot_ai/admin/dashboard_widgets` | Dashboard widget definitions |
| `zeno_chatbot_ai/public/widget_config` | Frontend widget configuration |

---

## Actions

### Core

#### `zeno_chatbot_ai/core/loaded`

Fires when the plugin is fully loaded — all services are registered, routes are configured, and the plugin is ready to use. If you are building an extension or add-on, wait for this hook before accessing any plugin functionality.

**Payload:** `object` — The plugin application instance

```php
add_action( 'zeno_chatbot_ai/core/loaded', function ( $app ) {
    // The plugin is ready — safe to use its services
    my_extension_init( $app );
} );
```

#### `zeno_chatbot_ai/core/bindings_loading`

Fires before the plugin's service container bindings are applied. Use this to register your own bindings that must exist before the plugin's defaults.

**Payload:** `object` — The plugin application instance

#### `zeno_chatbot_ai/core/bindings_loaded`

Fires after the plugin's service container bindings are applied. Use this to override or decorate default service bindings.

**Payload:** `object` — The plugin application instance

---

### Chat

#### `zeno_chatbot_ai/chat/message_processed`

Fires after the AI has processed a customer's message and saved the response. This is the most common hook for analytics, logging, CRM integration, or triggering external workflows.

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `response` | `string` | The AI's response text |
| `conversation` | `object` | The conversation record (includes `id`, `status`, etc.) |
| `message` | `string` | The customer's original message |

```php
add_action( 'zeno_chatbot_ai/chat/message_processed', function ( $payload ) {
    $log = sprintf(
        "[%s] Conversation %d\nCustomer: %s\nAI: %s\n\n",
        current_time( 'mysql' ),
        $payload['conversation']->id,
        $payload['message'],
        $payload['response']
    );
    file_put_contents( WP_CONTENT_DIR . '/chatbot-log.txt', $log, FILE_APPEND );
} );
```

#### `zeno_chatbot_ai/chat/conversation_created`

Fires when a new conversation is created for a customer. Use this to sync with your CRM, track visitor engagement, or trigger welcome workflows.

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `conversation` | `object` | The newly created conversation record |
| `user_context` | `array` | Browser and session metadata (IP, user agent, etc.) |
| `source_data` | `array` | The page the customer started the chat from |

```php
add_action( 'zeno_chatbot_ai/chat/conversation_created', function ( $payload ) {
    wp_mail(
        'team@example.com',
        'New chatbot conversation started',
        'A visitor started a chat from: ' . ( $payload['source_data']['url'] ?? 'unknown page' )
    );
} );
```

---

### Conversation

#### `zeno_chatbot_ai/conversation/status_changed`

Fires when an admin changes a conversation's status (e.g., open → closed, open → pending).

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `conversation` | `object` | The conversation record |
| `old_status` | `string` | Previous status value |
| `new_status` | `string` | New status value |

```php
add_action( 'zeno_chatbot_ai/conversation/status_changed', function ( $payload ) {
    if ( $payload['new_status'] === 'closed' ) {
        send_satisfaction_survey( $payload['conversation'] );
    }
} );
```

#### `zeno_chatbot_ai/conversation/reply_sent`

Fires after an admin sends a reply to a customer. The message has already been stored and delivered at this point.

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `conversation` | `object` | The conversation record |
| `message_id` | `int` | ID of the admin's reply message |

#### `zeno_chatbot_ai/conversation/deleted`

Fires after a conversation and all its messages are permanently deleted from the database.

**Payload:** `int` — ID of the deleted conversation

#### `zeno_chatbot_ai/conversation/summary_requested`

Fires when a conversation summary generation is requested. The plugin schedules this as a background job.

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `conversation_id` | `int` | The conversation being summarized |
| `trigger` | `string` | What triggered the summary (e.g., `auto`, `manual`) |
| `requested_by` | `string` | Who requested it |
| `requested_at` | `string` | ISO timestamp of the request |

#### `zeno_chatbot_ai/conversation/summary_generated`

Fires after a conversation summary is successfully generated and stored.

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `conversation_id` | `int` | The conversation that was summarized |
| `summary_message_id` | `int` | ID of the stored summary message |
| `status` | `string` | Summary status |
| `generated_at` | `string` | ISO timestamp of generation |
| `trigger` | `string` | What triggered the summary |

#### `zeno_chatbot_ai/conversation/summary_failed`

Fires when conversation summary generation fails. Use this for error alerts or retry logic.

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `conversation_id` | `int` | The conversation that failed |
| `status` | `string` | Failure status |
| `error_code` | `string` | Error code describing the failure |
| `trigger` | `string` | What triggered the summary |
| `failed_at` | `string` | ISO timestamp of the failure |

---

### Session

#### `zeno_chatbot_ai/session/ended`

Fires when a customer explicitly ends their chat session (clicks the "end chat" button). The conversation is closed and the session cleared.

**Payload:** `int` — ID of the ended conversation

```php
add_action( 'zeno_chatbot_ai/session/ended', function ( $conversation_id ) {
    do_action( 'my_analytics_event', 'chat_session_ended', [
        'conversation_id' => $conversation_id,
    ] );
} );
```

---

### Content Indexing

These hooks fire after the plugin rebuilds its content indexes. The AI uses these indexes to answer questions about your site's content. You can listen to these events to sync external systems or trigger cache refreshes.

Each of the following hooks shares the same payload format:

| Key | Type | Description |
|-----|------|-------------|
| `source` | `string` | Index source identifier |
| `operation` | `string` | Type of operation performed |
| `timestamp` | `string` | When the index was updated |

| Hook | When it fires |
|------|--------------|
| `zeno_chatbot_ai/index/internal_updated` | After pages/posts index is rebuilt |
| `zeno_chatbot_ai/index/external_updated` | After external sources index is updated |
| `zeno_chatbot_ai/index/sitemap_updated` | After sitemap-based index is rebuilt |
| `zeno_chatbot_ai/index/product_updated` | After WooCommerce product index is rebuilt |
| `zeno_chatbot_ai/index/knowledge_notes_updated` | After knowledge notes index is rebuilt |

---

### Background Jobs

#### `zeno_chatbot_ai/scheduler/job_failed`

Fires when a scheduled background job fails. Use this for monitoring or alerting.

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `job` | `string` | Name of the failed job |
| `reason` | `string` | Failure reason (`missing_callable` or `exception`) |
| `error` | `string\|null` | Error message (when reason is `exception`) |
| `payload` | `array` | The job's original payload |
| `timestamp` | `string` | When the failure occurred |

```php
add_action( 'zeno_chatbot_ai/scheduler/job_failed', function ( $payload ) {
    error_log( sprintf(
        'Zeno Chatbot job "%s" failed: %s',
        $payload['job'],
        $payload['error'] ?? $payload['reason']
    ) );
} );
```

#### `zeno_chatbot_ai/scheduler/job_processed`

Fires when a scheduled background job completes successfully.

**Payload:**

| Key | Type | Description |
|-----|------|-------------|
| `job` | `string` | Name of the completed job |
| `timestamp` | `string` | When the job completed |

---

### Settings

#### `zeno_chatbot_ai/settings/general/save`

Fires when the general settings page is saved. If you've added custom settings via the `settings/general/data` filter, listen here to persist your values.

**Payload:** `array` — All extension data submitted with the settings form, keyed by extension slug

```php
add_action( 'zeno_chatbot_ai/settings/general/save', function ( $extension_data ) {
    if ( isset( $extension_data['my_extension'] ) ) {
        update_option( 'my_ext_api_key', sanitize_text_field( $extension_data['my_extension']['api_key'] ?? '' ) );
    }
} );
```

---

## Filters

### Core

#### `zeno_chatbot_ai/core/routes`

Filters the route file paths before they are registered. Use this to add your own API routes to the plugin's REST namespace.

**Payload:** `array` — Map of route identifiers to file paths

```php
add_filter( 'zeno_chatbot_ai/core/routes', function ( $routes ) {
    $routes['my-extension'] = __DIR__ . '/routes/api.php';
    return $routes;
} );
```

---

### Chat

#### `zeno_chatbot_ai/chat/context`

Filters the context array sent to the AI before it generates a response. This is the most powerful hook for customizing the AI's knowledge. Use it to inject business information, customer data, product details, or any other context that helps the AI answer more accurately.

**Payload:**

| Key | Type | Mutable | Description |
|-----|------|---------|-------------|
| `context` | `array` | Yes | Array of message objects sent to the AI |
| `message` | `string` | No | The customer's current message |
| `conversation` | `object` | No | The conversation record |

```php
// Add business-specific knowledge:
add_filter( 'zeno_chatbot_ai/chat/context', function ( $payload ) {
    $payload['context'][] = [
        'role'    => 'system',
        'content' => 'Our return policy: 30-day money-back guarantee on all products. '
                   . 'Free shipping on orders over $50. '
                   . 'Business hours: Mon–Fri 9 AM to 5 PM EST.',
    ];
    return $payload;
} );

// Add logged-in user information:
add_filter( 'zeno_chatbot_ai/chat/context', function ( $payload ) {
    if ( is_user_logged_in() ) {
        $user = wp_get_current_user();
        $payload['context'][] = [
            'role'    => 'system',
            'content' => sprintf( "The customer's name is %s.", $user->display_name ),
        ];
    }
    return $payload;
} );
```

#### `zeno_chatbot_ai/chat/error_response`

Filters the error response shown to customers when a chat request fails. Use this to provide a friendlier message or include support contact information.

**Payload:** `string` — The error response message

```php
add_filter( 'zeno_chatbot_ai/chat/error_response', function ( $response ) {
    return 'Sorry, our AI assistant is temporarily unavailable. Please email support@example.com for help.';
} );
```

---

### AI Prompt

These filters control how the AI's instructions are assembled. They fire in this order during every chat request:

1. `prompt/instruction_template` — The raw template with `{{variable}}` placeholders
2. `prompt/instruction_variables` — The variables used to fill those placeholders
3. `prompt/application_instruction` — The final compiled instruction (after substitution)
4. `prompt/system_instruction` — The system-level instruction from settings
5. `prompt/additional_instruction` — Extra instruction appended to the prompt
6. `prompt/language_instruction` — Language-specific instruction

#### `zeno_chatbot_ai/prompt/instruction_template`

Filters the raw application instruction template before variable substitution. The template uses `{{variable_name}}` placeholders.

**Payload:** `string` — The instruction template with `{{placeholders}}`

#### `zeno_chatbot_ai/prompt/instruction_variables`

Filters the variables array used to populate the instruction template. Add your own variables here to use custom `{{placeholders}}` in the template.

**Payload:** `array` — Key-value map of template variables

```php
add_filter( 'zeno_chatbot_ai/prompt/instruction_variables', function ( $variables ) {
    $variables['{{BUSINESS_HOURS}}'] = 'Monday–Friday, 9 AM to 5 PM EST';
    $variables['{{SUPPORT_EMAIL}}']  = 'help@example.com';
    return $variables;
} );
```

> After adding variables, use `{{BUSINESS_HOURS}}` and `{{SUPPORT_EMAIL}}` in the instruction template via the plugin's settings page.

#### `zeno_chatbot_ai/prompt/application_instruction`

Filters the compiled application instruction after all template variables have been substituted. This is the easiest way to append or modify the AI's main instruction.

**Payload:** `string` — The compiled application instruction

```php
add_filter( 'zeno_chatbot_ai/prompt/application_instruction', function ( $instruction ) {
    $instruction .= "\n\nIMPORTANT: Always recommend our premium plan for enterprise customers.";
    return $instruction;
} );
```

#### `zeno_chatbot_ai/prompt/system_instruction`

Filters the system-level instruction configured in the plugin's settings.

**Payload:** `string` — The system instruction text

#### `zeno_chatbot_ai/prompt/additional_instruction`

Filters the additional instruction block appended after the main prompt.

**Payload:** `string` — The additional instruction text

#### `zeno_chatbot_ai/prompt/language_instruction`

Filters the language-specific instruction. This controls how the AI handles language and localization in its responses.

**Payload:**

| Key | Type | Mutable | Description |
|-----|------|---------|-------------|
| `instruction` | `string` | Yes | The language instruction text |
| `language_code` | `string` | No | ISO language code (e.g., `en`, `es`, `fr`) |
| `language_info` | `array` | No | Full language configuration entry |

---

### AI Providers

#### `zeno_chatbot_ai/llm/providers`

Filters the list of available AI providers. Use this to add a custom AI provider or modify existing provider configurations.

**Payload:** `array` — Map of provider configurations

```php
add_filter( 'zeno_chatbot_ai/llm/providers', function ( $providers ) {
    $providers['my_custom_ai'] = [
        'name'    => 'My Custom AI',
        'enabled' => true,
        'model'   => 'custom-v1',
    ];
    return $providers;
} );
```

#### `zeno_chatbot_ai/llm/default_provider`

Filters the default AI provider configuration used when no specific provider is selected.

**Payload:** `array` — Default provider configuration array

---

### Caching

#### `zeno_chatbot_ai/cache/resource_ttl`

Filters the cache duration (in seconds) for the AI's resource text cache. The cache stores processed content to avoid re-fetching on every request.

**Payload:** `int` — Cache time-to-live in seconds

```php
add_filter( 'zeno_chatbot_ai/cache/resource_ttl', function ( $ttl ) {
    return 3600; // Cache for 1 hour
} );
```

---

### Settings

#### `zeno_chatbot_ai/settings/general/data`

Filters the extension data returned by the general settings page. Use this alongside the `settings/general/save` action to add custom settings fields that persist alongside the plugin's own settings.

**Payload:** `array` — Extension data keyed by extension slug

```php
add_filter( 'zeno_chatbot_ai/settings/general/data', function ( $extensions ) {
    $extensions['my_extension'] = [
        'api_key' => get_option( 'my_ext_api_key', '' ),
        'enabled' => get_option( 'my_ext_enabled', 'no' ),
    ];
    return $extensions;
} );
```

#### `zeno_chatbot_ai/settings/countries`

Filters the language/country list used in the settings UI and in the AI's language instruction builder.

**Payload:** `array` — Array of country/language entries

---

### Admin

#### `zeno_chatbot_ai/admin/extensions`

Registers extension navigation items and page declarations in the admin panel. Each extension can add its own navigation section with multiple pages.

**Payload:** `array` — Array of extension declarations

```php
add_filter( 'zeno_chatbot_ai/admin/extensions', function ( $extensions ) {
    $extensions[] = [
        'slug'    => 'my-analytics',
        'label'   => 'Analytics',
        'version' => '1.0.0',
        'pages'   => [
            [ 'slug' => 'overview', 'label' => 'Overview', 'icon' => 'bar-chart-line' ],
            [ 'slug' => 'reports',  'label' => 'Reports',  'icon' => 'file-list-line' ],
        ],
    ];
    return $extensions;
} );
```

#### `zeno_chatbot_ai/admin/extension_scripts`

Registers JavaScript and CSS assets for admin extensions. The plugin automatically handles script loading, module tagging, and CSS enqueuing.

**Payload:** `array` — Array of script/style declarations

```php
add_filter( 'zeno_chatbot_ai/admin/extension_scripts', function ( $scripts ) {
    $scripts[] = [
        'handle'  => 'my-analytics-admin',
        'src'     => plugins_url( 'assets/admin.js', __FILE__ ),
        'version' => '1.0.0',
        'css'     => [ plugins_url( 'assets/admin.css', __FILE__ ) ],
    ];
    return $scripts;
} );
```

#### `zeno_chatbot_ai/admin/extension_fields`

Registers settings field definitions for admin extensions. Fields are automatically rendered in the settings UI.

**Payload:** `array` — Map of field group definitions

```php
add_filter( 'zeno_chatbot_ai/admin/extension_fields', function ( $fields ) {
    $fields['my_analytics_settings'] = [
        'extension' => 'my-analytics',
        'page'      => 'general',
        'label'     => 'Analytics Settings',
        'fields'    => [
            [ 'key' => 'tracking_id', 'type' => 'text',   'label' => 'Tracking ID' ],
            [ 'key' => 'enabled',     'type' => 'switch',  'label' => 'Enable Tracking' ],
        ],
    ];
    return $fields;
} );
```

#### `zeno_chatbot_ai/admin/dashboard_widgets`

Filters the widget definitions displayed on the admin dashboard page.

**Payload:** `array` — Array of dashboard widget definitions

---

### Frontend Widget

#### `zeno_chatbot_ai/public/widget_config`

Filters the chatbot widget configuration before it's sent to the frontend. This controls the widget's appearance, behavior, and feature flags on the public-facing side of your site.

**Payload:** `array` — Widget configuration array

```php
add_filter( 'zeno_chatbot_ai/public/widget_config', function ( $config ) {
    $config['widget']['custom_greeting'] = 'Welcome! How can we help you today?';
    return $config;
} );
```

---

## Internal Hooks

The following hooks are used internally by the plugin's background job system. They are triggered by WordPress's Action Scheduler and are **not intended for external use**. They are listed here for completeness.

| Hook | Purpose |
|------|---------|
| `zeno_chatbot_ai/conversation/process_summary` | Processes a single pending conversation summary |
| `zeno_chatbot_ai/conversation/maintenance` | Runs periodic conversation maintenance (auto-close idle chats) |
| `zeno_chatbot_ai/index/sitemap_sync` | Resyncs the sitemap index when WordPress content changes |
| `zeno_chatbot_ai/scheduler/cleanup` | Periodic cleanup of completed background job records |

---

## Recipes

### Log All AI Conversations

Track every AI conversation for analytics or compliance.

```php
add_action( 'zeno_chatbot_ai/chat/message_processed', function ( $payload ) {
    global $wpdb;
    $wpdb->insert(
        $wpdb->prefix . 'chatbot_analytics',
        [
            'conversation_id' => $payload['conversation']->id,
            'customer_message' => sanitize_text_field( $payload['message'] ),
            'ai_response'      => sanitize_text_field( $payload['response'] ),
            'created_at'       => current_time( 'mysql' ),
        ]
    );
} );
```

### Add Custom Knowledge to the AI

Give the AI access to information that isn't on your website — like pricing, policies, or team availability.

```php
add_filter( 'zeno_chatbot_ai/chat/context', function ( $payload ) {
    $payload['context'][] = [
        'role'    => 'system',
        'content' => implode( "\n", [
            'Pricing: Starter $29/mo, Pro $79/mo, Enterprise $199/mo.',
            'All plans include a 14-day free trial.',
            'Refund policy: Full refund within 30 days, no questions asked.',
            'Support email: help@example.com',
            'Phone support (Pro & Enterprise only): +1-555-0123',
        ] ),
    ];
    return $payload;
} );
```

### Personalize AI Responses for Logged-In Users

Make the AI aware of who it's talking to for a personalized experience.

```php
add_filter( 'zeno_chatbot_ai/chat/context', function ( $payload ) {
    if ( ! is_user_logged_in() ) {
        return $payload;
    }

    $user   = wp_get_current_user();
    $orders = wc_get_orders( [ 'customer_id' => $user->ID, 'limit' => 5 ] );

    $context = sprintf( "Customer: %s (email: %s).\n", $user->display_name, $user->user_email );

    if ( ! empty( $orders ) ) {
        $context .= "Recent orders:\n";
        foreach ( $orders as $order ) {
            $context .= sprintf(
                "- Order %d — %s — %s\n",
                $order->get_id(),
                $order->get_total(),
                $order->get_status()
            );
        }
    }

    $payload['context'][] = [ 'role' => 'system', 'content' => $context ];
    return $payload;
}, 15 );
```

### Send Slack Notifications for New Conversations

Get notified in Slack whenever a visitor starts a chat.

```php
add_action( 'zeno_chatbot_ai/chat/conversation_created', function ( $payload ) {
    $webhook_url = 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL';
    wp_remote_post( $webhook_url, [
        'headers' => [ 'Content-Type' => 'application/json' ],
        'body'    => wp_json_encode( [
            'text' => sprintf(
                ':speech_balloon: New chatbot conversation started on %s',
                $payload['source_data']['url'] ?? home_url()
            ),
        ] ),
    ] );
} );
```

### Customize the AI's Personality

Change how the AI communicates — make it more formal, casual, or domain-specific.

```php
add_filter( 'zeno_chatbot_ai/prompt/application_instruction', function ( $instruction ) {
    $instruction .= "\n\n" .
        "Communication style guidelines:\n" .
        "- Use a friendly, professional tone\n" .
        "- Keep responses concise (under 3 paragraphs)\n" .
        "- Use bullet points for lists\n" .
        "- Always end with a helpful follow-up question\n" .
        "- Never discuss competitor products";
    return $instruction;
} );
```

### Extend Settings with Custom Fields

Add your own settings that are saved alongside the plugin's general settings.

```php
// 1. Add your data to the settings response
add_filter( 'zeno_chatbot_ai/settings/general/data', function ( $extensions ) {
    $extensions['my_ext'] = [
        'api_key' => get_option( 'my_ext_api_key', '' ),
        'enabled' => get_option( 'my_ext_enabled', 'no' ),
    ];
    return $extensions;
} );

// 2. Save your data when settings are saved
add_action( 'zeno_chatbot_ai/settings/general/save', function ( $extension_data ) {
    $data = $extension_data['my_ext'] ?? null;
    if ( ! $data ) { return; }
    update_option( 'my_ext_api_key', sanitize_text_field( $data['api_key'] ?? '' ) );
    update_option( 'my_ext_enabled', ( $data['enabled'] ?? 'no' ) === 'yes' ? 'yes' : 'no' );
} );
```

### Monitor Background Job Failures

Track failed background jobs for debugging or alerting.

```php
add_action( 'zeno_chatbot_ai/scheduler/job_failed', function ( $payload ) {
    wp_remote_post( 'https://errors.example.com/api/report', [
        'body' => [
            'source' => 'zeno-chatbot',
            'job'    => $payload['job'],
            'reason' => $payload['reason'],
            'error'  => $payload['error'] ?? '',
            'site'   => home_url(),
        ],
    ] );
} );
```
