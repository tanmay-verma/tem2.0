# mc-file-upload

The File Upload allows users to upload files to a specific location in the application e.g. to a form or adding data to a table.

**Url:** https://designsystem.maersk.com/components/file-upload/
**Alternative names:** File Upload, File Picker
**Keywords:** component, form, field, input, drag-and-drop, attachment, download
**✅ When to use:** When you need to allow users to upload files.
**❌ When not to use:** When you don't need file uploads.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use the file upload when the user needs to upload one or more files.
- The drag-and-drop variant also allows the user to choose file(s) like the default.
- Use the Legend to commuicate the purpose of the file upload.
- Use the Hint to communicate more details e.g. file size and format requirements.
- Avoid placing the file upload inside a modal since files are stacked vertically.
- Use each file’s hint text to communicate additional information about the file.

### Default vs. Drag-and-drop
- In most cases, the drag-and-drop variant is the File Upload you need, since it allows for both drag-and-drop and selection of files.
- If you want to keep it simple you can also choose to use the default variant, which only allows the user to select one or more files – not drag-and-drop.

### Specify file requirements
- Use the hint text to communicate the file requirements, so it is clear which maximum file size and formats the file upload accepts. This way we avoid users wasting time trying to upload files that will not be accepted.
- Example: File upload using the hint text to communicate the file requirements

### Loading states
- Each selected file has a loading spinner icon while it is being uploaded. When the file is successfully uploaded the icon will change to a close icon.
- Example: The file is uploading.
- Example: The file is uploaded.

### Validation
- When a file cannot be uploaded successfully the system will return an error and the file will changed to the invalid state and an error message will be shown. The error message should communicate what went wrong and how to resolve the issue.
- Example: Example file upload error message communicating what went wrong and how to resolve the issue

### File hint text
- Each file has a hint text that can be used to provide additional information about the file e.g. uploading progress or file metadata.
- Example: Using the hint text to communicate upload progress.
- Example: Using the hint text to communicate file size.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-file-upload
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-file-upload
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-file-upload';
// minimal example usage
<mc-file-upload></mc-file-upload>
// basic example usage
<mc-file-upload variant="default" accept="*" dropareaselector="body" label="" legend="" hint="" fit="medium" buttonvariant="filled" icon="" trailingicon="" errormessage="" name="files"></mc-file-upload>
```

### Advanced Examples

#### CustomisedAppearance

```html
<mc-file-upload class="mc-file-upload_default" label="Custom Label"></mc-file-upload>
<br />
<mc-file-upload class="mc-file-upload_drag-drop" variant="drag-drop" label="Custom Drag Drop Label"></mc-file-upload>
  
```

#### PrepopulateFiles

```html
<mc-file-upload></mc-file-upload>
  
```

#### FilesStatuses

```html
<mc-file-upload multiple="true">
  <span slot="file-url-1">
    <a href="https://maersk.com" target="_blank">file2.txt</a>
  </span>
</mc-file-upload>
  
```

#### CustomFileList

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-file-upload hiddenfilelist multiple></mc-file-upload>
  <mc-table hidden id="file-upload"></mc-table>
</div>
  
```

#### IconAsASlot

```html
<div style="min-width: 300px">
  <mc-file-upload>
    <span slot="icon">
      <mc-icon icon="star"></mc-icon>
    </span>
    <span slot="trailingicon">
      <mc-icon icon="apple"></mc-icon>
    </span>
  </mc-file-upload>
</div>
```

#### IntermediateAsASlot

```html
<div style="min-width: 300px">
  <mc-file-upload variant="drag-drop" label="Choose a file">
    <span slot="intermediate">
      <mc-notification
        appearance="info"
        heading="Testing the banner"
        body="test">
      </mc-notification>
    </span>
  </mc-file-upload>
</div>
```

#### InvalidFileHandling

```html
<mc-file-upload variant="drag-drop" accept="image/*" multiple></mc-file-upload>
  
```

#### CustomLabels

```html
<mc-file-upload
  id="withLang"
  variant="drag-drop"
  accept=".svg"
  multiple
></mc-file-upload>
```

## API

### Properties and attributes

#### variant

- **Type:** default | drag-drop | combo
- **Typescript Type:** FileUploadVariant | undefined
- **Default:** default
- **Description:** Specifies how users can upload files: `default` provides a standard file picker, while `drag-drop` enables uploading by dragging files into the upload area.

#### accept

- **Type:** string
- **Default:** *
- **Description:** The accept attribute takes as its value a comma-separated list of one or more <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers">unique file type specifiers</a>, describing which file types to allow.

#### multiple

- **Type:** boolean
- **Default:** false
- **Description:** Specifies if multiple files can be chosen at once.

#### files

- **Type:** array
- **Typescript Type:** FileList | undefined
- **Description:** Files property can be used to prepopulate the file upload component. Please look at the `Prepopulate files` example for more details.

#### filesstatus

- **Type:** [{ fileName: string; hint?: string; status: success | error | loading; errorMessage?: string; }]
- **Typescript Type:** FileStatus[] | undefined
- **Description:** An array list containing file status details, that can be used to show the status, hint message or error message of each file uploaded. `example: [{fileName: "example.txt",status: "success", hint: "File uploaded successfully",errorMessage: "" }]` Check under slots tab to see how HTML content is passed in the hint and error message. Please look at the `Files statuses` under examples for more details.

#### hiddenfilelist

- **Type:** boolean
- **Typescript Type:** boolean | undefined
- **Default:** false
- **Description:** Hide the uploaded file list. It can be used when you want to show the file list in a custom way.

#### dropareaselector

- **Type:** string
- **Typescript Type:** string | undefined
- **Default:** body
- **Description:** Used in combo variant only. The drop area selector is used to specify the area where files can be dropped for upload. By default, it is set to `body`, but you can change it to any valid CSS selector to restrict the drop area to a specific element.

#### labels

- **Type:** IMcFileUploadLabels
- **Typescript Type:** Partial<IMcFileUploadLabels> | undefined
- **Description:** Custom labels for mc-file-upload component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-file-upload/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> and the <a href="?path=/story/components-file-upload-examples--custom-labels">Custom Labels story example</a> to see how to use custom labels property.

#### label

- **Type:** string
- **Description:** Label can be passed as a simple argument like: `label="Label"`. Label is a required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### legend

- **Type:** string | slot
- **Typescript Type:** string | null | undefined
- **Description:** Fieldset legend can be passed as a property or slot.

#### hiddenlegend

- **Type:** boolean
- **Default:** false
- **Description:** Hides the group legend. The legend text will still be used as aria-label

#### loading

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, it'll set the file-upload state to loading and a loading spinner will be shown. This state also prevents the user from clicking and activating or submitting something more than one time.

#### hint

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-file-upload><span slot="hint">hint text as HTML</span></mc-file-upload>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### buttonvariant

- **Type:** filled | outlined | plain
- **Typescript Type:** ButtonVariants
- **Default:** filled
- **Description:** Defines the visual style of the button.

#### icon

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the error message is shown if provided.

#### errormessage

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-file-upload><span slot="errormessage">error message as HTML</span></mc-file-upload>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

#### name

- **Type:** string
- **Default:** files
- **Description:** Name is required if the component is used inside a `form` element

#### allowduplicatefilenames

- **Type:** boolean
- **Typescript Type:** boolean | undefined
- **Default:** false
- **Description:** If set to `true`, allows duplicate file names by replacing the old file with the new one and emitting the event again.

### Events

#### input

- **Type:** CustomEvent<McFileUploadInputDetail>
- **Description:** Fired when single/multiple files are selected, or removed.

#### change

- **Type:** CustomEvent<McFileUploadInputDetail>
- **Description:** Fired when single/multiple files are selected.

#### invalidfile

- **Type:** CustomEvent<McFileUploadInvalidDetail>
- **Description:** Fired when user attempts to upload files with invalid types. Provides details about rejected files.

### Types

- FileStatus: interface
- FileUploadState: type
- FileUploadVariant: type
- IMcFileUpload: interface
- IMcFileUploadLabels: interface
- InvalidFileDetail: interface
- McFileUploadInputDetail: type
- McFileUploadInvalidDetail: interface

### Slots

#### legend

- **Description:** Use the legend named slot, when you want to pass the legend as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="legend">
    Legend as HTML
  </span>
</mc-file-upload>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-file-upload>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="trailingicon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-file-upload>
```

#### intermediate

- **Description:** Use the intermediate named slot, for content that gives a summary or status e.g. loading or a notification etc.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="intermediate">
    Custom intermediate content
  </span>
</mc-file-upload>
```

#### file-url-${index}

- **Description:** Use the file-url-${index} named slot, for providing a hyperlink to the uploaded file, used for creating a preview. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="file-url-${index}">
    Custom file URL slot
  </span>
</mc-file-upload>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-file-upload>
```

#### hint-${fileName}

- **Description:** Use the hint-${fileName} named slot, when you want to pass the hint as HTML under a specific file name. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="hint-${fileName}">
    Hint as HTML
  </span>
</mc-file-upload>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-file-upload>
```

#### error-${fileName}

- **Description:** Use the error-${fileName} named slot, when you want to pass the error as HTML under a specific file name. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-file-upload>
  <span slot="error-${fileName}">
    Error as HTML
  </span>
</mc-file-upload>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-file-upload component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-file-upload::part(button) {
  color: #40AB35;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-file-upload component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-file-upload::part(icon) {
  fill: #000000
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the container element inside the mc-file-upload component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-file-upload::part(text-and-icon) {
  gap: 24px;
}
```

#### drag-drop-area

- **Description:** Using this CSS part you can change the look of the drag-drop-area element inside the mc-file-upload component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-file-upload::part(drag-drop-area) {
  color: #40AB35;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

