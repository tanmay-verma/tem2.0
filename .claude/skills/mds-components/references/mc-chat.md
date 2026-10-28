# mc-chat

A chat widget that opens a conversation panel. Can be in 3 variants: floating, opens in drawer, or full-page.
Provides a trigger button anchored to the bottom-right corner of the viewport. When opened, shows a panel with a
message thread, suggestion chips, and a message input with toolbar slots.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Chat widget, Chatbot launcher, Conversational UI
**Keywords:** 
**✅ When to use:** For AI chat assistants, customer support bots, or contextual help widgets
embedded in web applications.
**❌ When not to use:** For general messaging interfaces, group chats, or when a persistent chat interface is needed without a trigger button.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

No specific best practices documented.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-chat
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-chat
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-chat';
// minimal example usage
<mc-chat></mc-chat>
// basic example usage
<mc-chat welcomemessage="" historymessages="[]" suggestions="[]" feedbackreasons="[]" maxlength="-1" heading="Chat with us" variant="popup" customstyles="" fileuploadaccept="*"></mc-chat>
```

### Advanced Examples

#### FrameworkIntegration

```html
<!-- ChatWidget.vue -->
<template>
  <mc-chat
    heading="AI Assistant"
    welcomemessage="Hello! How can I help you today?"
    :open="true"
    :response="response"
    :responseerror="responseError"
    @messagesend="onMessageSend"
    @messagestop="onMessageStop"
    @newconversation="onNewConversation"
  ></mc-chat>
</template>

<script setup lang="ts">
import { ref, onUnmounted, ne } from 'vue';
import '@maersk-global/mds-components-core/mc-chat';

// ── Mock streaming response — replace with your real LLM stream ──────────
const MOCK_REPLY = [
  'Thanks ', 'for ', 'your ', 'message! ',
  'mc-chat ', 'works ', 'with ', 'any ', 'AI ', 'backend — ',
  'OpenAI, ', 'Azure ', 'AI ', 'Foundry, ', 'AWS ', 'Bedrock, ',
  'or ', 'a ', 'custom ', 'agent. ', 'Just ', 'update ',
  'the ', '\
```

#### ChatHistory

```html
<!-- Sidebar lists past conversations -->
<ul class="conversation-list" id="conv-list">
  <li data-id="conv-1">Track container MSKU1234567</li>
  <li data-id="conv-2">Shanghai to Rotterdam rates</li>
  <li data-id="conv-3">Australia import requirements</li>
</ul>

<!-- Chat panel — historymessages drives the displayed conversation -->
<mc-chat id="chat" heading="MDS Chat" open></mc-chat>
```

#### ErrorMessage

```html
<mc-chat
  id="errorChat"
  heading="MDS Chat"
  open
  welcomemessage="Hi there 👋 Send a message to see the error state."
></mc-chat>
```

#### CustomHeader

```html
<mc-chat open>
  <div slot="header-toolbar-start">
    <mc-icon icon="sparkle"></mc-icon> <span class="chat-name">MDS Chat</span>
  </div>
  <mc-menu fit="small" slot="header-toolbar-end">
    <mc-button
      slot="trigger"
      label="Settings"
      hiddenlabel
      icon="ellipsis-horizontal"
      appearance="neutral"
      variant="plain"
      fit="small"
    ></mc-button>
    <mc-list fit="small">
      <mc-list-item fit="small" label="Prompts"></mc-list-item>
      <mc-list-item fit="small" label="Instructions"></mc-list-item>
      <mc-list-item fit="small" label="Skills"></mc-list-item>
      <mc-list-item fit="small" label="Agents"></mc-list-item>
    </mc-list>
  </mc-menu>
</mc-chat>
```

#### CustomFooter

```html
<mc-chat heading="MDS Chat" open>
  <div slot="footer-toolbar-start">
    <mc-menu fit="small">
      <mc-button
        slot="trigger"
        label="Add"
        fit="small"
        icon="plus"
        appearance="neutral"
        variant="plain"
        hiddenlabel
      ></mc-button>
      <mc-list>
        <mc-list-item label="Upload files" icon="paperclip"></mc-list-item>
        <mc-list-item label="Add photos" icon="image"></mc-list-item>
      </mc-list>
    </mc-menu>
    <mc-button
      label="Settings"
      icon="sliders-horizontal"
      appearance="neutral"
      fit="small"
      variant="plain"
      hiddenlabel
    ></mc-button>
  </div>
  <div slot="footer-toolbar-end">
    <mc-menu fit="small">
      <mc-button
        slot="trigger"
        id="model-trigger"
        fit="small"
        label="GPT-5"
        appearance="neutral"
        variant="plain"
        trailingicon="chevron-down"
      ></mc-button>
      <mc-list id="model-list" value="GPT-5">
        <mc-list-item label="GPT-5" value="GPT-5" icon="check"></mc-list-item>
        <mc-list-item label="GPT-4" value="GPT-4" icon="empty"></mc-list-item>
      </mc-list>
    </mc-menu>
    <mc-button
      label="Record"
      icon="microphone"
      appearance="neutral"
      fit="small"
      variant="plain"
      hiddenlabel
    ></mc-button>
  </div>
  <a
    slot="footer"
    class="mds-link--external mds-link--no-underline mds-neutral--weak__text-color mds-text--small-normal"
    href="https://designsystem.maersk.com/ai/guidelines/transparency-notices/index.html"
    target="_blank"
  >AI-generated responses may be inaccurate.</a>
</mc-chat>
```

#### WelcomeMessageAsHtml

```html
<mc-chat heading="MDS Chat">
  <div slot="welcomemessage" class="mds-content-compact">
    Use MDS Chat to quickly find answers and navigate to relevant components, guidance, and best practices.
    <details>
      <summary>More about MDS Chat</summary>
      <p>
        <b>Developers</b> MDS Chat does not provide code examples or API details by design. For AI-assisted coding
        support, use the [Agent / MCP Server](/ai/agent/) in your development environment.
      </p>
      <p>
        <b>Models</b> The MDS Chat uses GPT-4 (default) or GPT-5. GPT-4.1 is generally faster, while GPT-5 may
        provide more detailed reasoning.
      </p>
    </details>
  </div>
</mc-chat>
```

#### CustomLabels

```html
<mc-chat
  id="customLabelsChat"
  heading="MDS Chat"
  welcomemessage="Hej 👋 Hvordan kan jeg hjælpe dig i dag?"
></mc-chat>
```

#### CustomFeedbackActions

```html
<mc-chat
  id="CustomFeedbackActionsChat"
  heading="MDS Chat"
  welcomemessage="Hi there 👋 You are speaking to MDS Chat, how can I help?">
  <div slot="message-actions">
    <mc-button label="custom button"></mc-button>
  </div>
  <div slot="feedback-dialog">Test</div>
</mc-chat>
```

## API

### Properties and attributes

#### welcomemessage

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Initial bot greeting shown above the message thread as plain text. Not added to the conversation history. Hidden when `historymessages` is also provided. For rich HTML content use the `welcomemessage` named slot instead.

#### response

- **Type:** string
- **Typescript Type:** string | null
- **Default:** null
- **Description:** Streams the bot response into the chat. Set to the accumulated text on each chunk received from your LLM. Set to `null` to finalize the message and stop the loading indicator.

#### responseerror

- **Type:** string
- **Typescript Type:** string | null
- **Default:** null
- **Description:** Signals a failed bot response. Set to the error message text (or an empty string to use the default label). The component replaces the in-progress bot message with the error text and stops the loading indicator.

#### historymessages

- **Type:** IMcChatHistoryMessage[]
- **Typescript Type:** IMcChatMessage[] | undefined
- **Default:** 
- **Description:** Pre-populate the chat with an existing conversation history (e.g. to restore a previous session). Each entry needs only `role` and `content` — `id` and `timestamp` are optional. Takes precedence over `welcomemessage` when both are set.

#### suggestions

- **Type:** string[]
- **Default:** 
- **Description:** Array of suggestion chip labels shown below the messages.

#### hideresponseactions

- **Type:** boolean
- **Default:** false
- **Description:** Whether to hide extra response action buttons below the bot response, like copy, thumbs up or down, retry. If `true`, the buttons are hidden; otherwise, they are displayed.

#### feedbackreasons

- **Type:** string[]
- **Default:** 
- **Description:** Array of reason labels to be shown when user clicks thumbs down. If empty, the component will show a textarea field, where user can provide feedback.

#### maxlength

- **Type:** number
- **Default:** -1
- **Description:** Maximum number of characters allowed in the chat input textarea. When set, a character counter is displayed below the input. Set to -1 for unlimited characters.

#### heading

- **Type:** string
- **Default:** Chat with us
- **Description:** The heading text displayed in the chat header.

#### hidenewchatpopup

- **Type:** boolean
- **Default:** false
- **Description:** If the attribute is set, then the new chat confirmation pop-up will be hidden.

#### hideresizechat

- **Type:** boolean
- **Default:** false
- **Description:** If the attribute is set, then the chat resize handle will be hidden.

#### variant

- **Type:** popup | drawer | inline
- **Typescript Type:** IMcChatVariant
- **Default:** popup
- **Description:** Defines the visual style of the chat component.

#### customstyles

- **Type:** string
- **Typescript Type:** string | undefined
- **Description:** Applies custom styles to the chat component.

#### labels

- **Type:** IMcChatLabels
- **Typescript Type:** Partial<IMcChatLabels> | undefined
- **Description:** Custom labels for mc-chat component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-chat/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> and the <a href="?path=/story/components-chat-examples--custom-labels">Custom Labels story example</a> to see how to use custom labels property.

#### showfileupload

- **Type:** boolean
- **Default:** false
- **Description:** Whether to show the file upload button in the chat input area.

#### fileuploadaccept

- **Type:** string
- **Default:** *
- **Description:** The accept attribute takes as its value a comma-separated list of one or more <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers">unique file type specifiers</a>, describing which file types to allow.

#### fileuploadmultiple

- **Type:** boolean
- **Default:** false
- **Description:** Specifies if multiple files can be chosen at once.

#### open

- **Type:** boolean
- **Default:** false
- **Description:** Whether the chat panel is open.

### Events

#### messagesend

- **Type:** CustomEvent<IMcChatMessageSendDetail>
- **Description:** Fired when the user sends a message. Detail includes `message` (string) and `messages` (full history snapshot). Drive the bot response by updating the `response` prop with each streamed chunk, then setting it to `null` when done.

#### messagestop

- **Type:** CustomEvent<IMcChatMessageStopDetail>
- **Description:** Fired when the user clicks the stop button. Abort your in-flight request; the component has already cleared the loading state.

#### messagefeedback

- **Type:** CustomEvent<IMcChatMessageFeedback>
- **Description:** Fired when the user clicks the thumbs up or down button on a bot response. Detail includes the bot message, the action (`like`/`dislike`), and whether that reaction is now active (`true`) or pulled back (`false`). Switching reactions dispatches a pullback event for the previous reaction before the new active event.

#### messagedislike

- **Type:** CustomEvent<IMcChatMessageDislikeDetail>
- **Description:** Fired when the user clicks the submit button after clicking the thumbs down button on a bot response. Detail includes the bot message that was disliked, and optionally the reason label or free-text feedback provided by the user.

#### newconversation

- **Type:** CustomEvent<IMcChatNewConversationDetail>
- **Description:** Fired when the user confirms starting a new chat. Reset your LLM session / conversation ID.

### Types

- IMcChat: interface
- IMcChatLabels: interface
- IMcChatMessage: interface
- IMcChatMessageDislikeDetail: interface
- IMcChatMessageFeedback: interface
- IMcChatMessageSendDetail: interface
- IMcChatMessageStopDetail: type
- IMcChatNewConversationDetail: type
- IMcChatVariant: type
- McMessageRole: type

### Slots

#### welcomemessage

- **Description:** Use the welcomemessage named slot, to replace the plain-text `welcomemessage` property with rich HTML content. Hidden when `historymessages` is provided.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-chat>
  <span slot="welcomemessage">
    Custom greeting card, logo + text, branded HTML
  </span>
</mc-chat>
```

#### header-toolbar-start

- **Description:** Use the header-toolbar-start named slot, to add action buttons in the header toolbar, in the left section.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-chat>
  <span slot="header-toolbar-start">
    Chat logo, custom buttons
  </span>
</mc-chat>
```

#### header-toolbar-end

- **Description:** Use the header-toolbar-end named slot, to add action buttons in the header toolbar, in the right section.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-chat>
  <span slot="header-toolbar-end">
    Custom buttons
  </span>
</mc-chat>
```

#### footer-toolbar-start

- **Description:** Use the footer-toolbar-start named slot, to add action buttons in the footer toolbar, in the left section.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-chat>
  <span slot="footer-toolbar-start">
    Custom buttons
  </span>
</mc-chat>
```

#### footer-toolbar-end

- **Description:** Use the footer-toolbar-end named slot, to add action buttons in the footer toolbar, in the right section.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-chat>
  <span slot="footer-toolbar-end">
    Custom buttons
  </span>
</mc-chat>
```

#### footer

- **Description:** Use the footer named slot, to add content in the footer section, such as disclaimers or copyright information.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-chat>
  <span slot="footer">
    Disclaimer, copyright, etc.
  </span>
</mc-chat>
```

#### message-actions

- **Description:** Use the message-actions named slot, to create action buttons below each bot response, in place of the default copy, retry, like, and dislike buttons.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-chat>
  <span slot="message-actions">
    <mc-button label="Custom button"></mc-button>
  </span>
</mc-chat>
```

#### feedback-dialog

- **Description:** Use the feedback-dialog named slot, to replace the default feedback dialog that appears when the user clicks thumbs down. You can wire it to your own feedback handling logic by calling the `handleDislikeMessage()` public method on the chat component when user clicks your custom button passed into the `message-actions` slot.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-chat>
  <span slot="feedback-dialog">
    Custom feedback form
  </span>
</mc-chat>
```

## Related


